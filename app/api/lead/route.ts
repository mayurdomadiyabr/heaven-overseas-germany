// Lead capture API for Global Heaven Overseas
// -----------------------------------------------------------------------
// Sends the lead two ways for redundancy:
//   1) Creates a `crm.lead` in Odoo CRM (tagged "Germany" by default)
//   2) Sends an email notification via Resend
// If either is unavailable, the other still fires. As long as ONE works
// the request returns 200 OK and the lead is captured somewhere.
//
// Required env vars (set ANY of these):
//   ODOO_URL, ODOO_DB, ODOO_USERNAME, ODOO_API_KEY  → enables Odoo write
//   ODOO_TAG_NAME (optional, default "Germany")
//   RESEND_API_KEY, LEAD_NOTIFY_TO, LEAD_NOTIFY_FROM → enables email
// At least one of (Odoo) or (Resend) must be configured.
// -----------------------------------------------------------------------

import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_TAG = "Germany";
const DEFAULT_SOURCE = "heaven-overseas.com";

// -------------- ODOO ---------------------------------------------------

async function odooRpc(url: string, params: unknown) {
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", method: "call", params, id: Date.now() }),
  });
  const text = await r.text();
  if (!r.ok) throw new Error(`Odoo HTTP ${r.status}: ${text.slice(0, 200)}`);
  const data = JSON.parse(text);
  if (data.error) {
    const msg = data.error.data?.message || data.error.message || JSON.stringify(data.error);
    throw new Error(`Odoo error: ${msg}`);
  }
  return data.result;
}

async function odooAuthenticate(cfg: OdooCfg) {
  // Fast path: use provided UID directly (skip authenticate call)
  if (cfg.uid) return cfg.uid;
  const uid = await odooRpc(`${cfg.url}/jsonrpc`, {
    service: "common",
    method: "authenticate",
    args: [cfg.db, cfg.username, cfg.apiKey, {}],
  });
  if (!uid) throw new Error("Odoo authentication failed");
  return uid as number;
}

async function odooExec(cfg: OdooCfg, uid: number, model: string, method: string, args: unknown[], kwargs: Record<string, unknown> = {}) {
  return odooRpc(`${cfg.url}/jsonrpc`, {
    service: "object",
    method: "execute_kw",
    args: [cfg.db, uid, cfg.apiKey, model, method, args, kwargs],
  });
}

async function odooEnsureTag(cfg: OdooCfg, uid: number, name: string) {
  const existing = (await odooExec(cfg, uid, "crm.tag", "search_read",
    [[["name", "=", name]]],
    { fields: ["id"], limit: 1 })) as Array<{ id: number }>;
  if (existing?.length) return existing[0].id;
  return (await odooExec(cfg, uid, "crm.tag", "create", [{ name }])) as number;
}

interface OdooCfg {
  url: string;
  db: string;
  username: string;
  uid?: number;
  apiKey: string;
  tagName: string;
}

function odooCfg(): OdooCfg | null {
  const url = (process.env.ODOO_URL || "").replace(/\/+$/, "");
  const db = process.env.ODOO_DB || "";
  const username = process.env.ODOO_USERNAME || "";
  const uidStr = process.env.ODOO_UID || "";
  const uid = uidStr ? Number(uidStr) : undefined;
  const apiKey = process.env.ODOO_API_KEY || "";
  if (!url || !db || !apiKey || !(username || uid)) return null;
  return { url, db, username, uid, apiKey, tagName: process.env.ODOO_TAG_NAME || DEFAULT_TAG };
}

async function createOdooLead(body: LeadInput): Promise<number> {
  const cfg = odooCfg();
  if (!cfg) throw new Error("Odoo not configured");
  const uid = await odooAuthenticate(cfg);
  const tagId = await odooEnsureTag(cfg, uid, cfg.tagName);

  const meta = [
    body.level ? `Interested in: ${body.level}` : "",
    body.source ? `Form source: ${body.source}` : "",
    body.page ? `Page: ${body.page}` : "",
    body.referrer ? `Referrer: ${body.referrer}` : "",
    body.utm_source ? `utm_source: ${body.utm_source}` : "",
    body.utm_medium ? `utm_medium: ${body.utm_medium}` : "",
    body.utm_campaign ? `utm_campaign: ${body.utm_campaign}` : "",
  ].filter(Boolean).join("\n");

  const description = [body.message || "", meta].filter(Boolean).join("\n\n---\n");

  const values: Record<string, unknown> = {
    name: body.level ? `${body.level} — ${body.name || body.email}` : `Lead from ${DEFAULT_SOURCE}`,
    contact_name: body.name || body.email || "Website lead",
    email_from: body.email || false,
    phone: body.phone || false,
    description,
    type: "lead",
    tag_ids: [[6, 0, [tagId]]],
  };

  return (await odooExec(cfg, uid, "crm.lead", "create", [values])) as number;
}

// -------------- EMAIL (Resend) -----------------------------------------

async function sendNotificationEmail(body: LeadInput): Promise<string | null> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_TO;
  const from = process.env.LEAD_NOTIFY_FROM || "Global Heaven Overseas <onboarding@resend.dev>";
  if (!key || !to) return null;

  const subject = body.level
    ? `[GHO Lead] ${body.level} — ${body.name || body.email}`
    : `[GHO Lead] ${body.name || body.email}`;

  const lines = [
    body.name ? `<p><strong>Name:</strong> ${escapeHtml(body.name)}</p>` : "",
    body.email ? `<p><strong>Email:</strong> <a href="mailto:${escapeAttr(body.email)}">${escapeHtml(body.email)}</a></p>` : "",
    body.phone ? `<p><strong>Phone:</strong> <a href="tel:${escapeAttr(body.phone)}">${escapeHtml(body.phone)}</a></p>` : "",
    body.level ? `<p><strong>Interested in:</strong> ${escapeHtml(body.level)}</p>` : "",
    body.message ? `<p><strong>Message:</strong><br>${escapeHtml(body.message).replace(/\n/g, "<br>")}</p>` : "",
    `<hr>`,
    body.source ? `<p style="color:#888;font-size:12px"><strong>Source:</strong> ${escapeHtml(body.source)}</p>` : "",
    body.page ? `<p style="color:#888;font-size:12px"><strong>Page:</strong> ${escapeHtml(body.page)}</p>` : "",
    body.referrer ? `<p style="color:#888;font-size:12px"><strong>Referrer:</strong> ${escapeHtml(body.referrer)}</p>` : "",
    body.utm_source ? `<p style="color:#888;font-size:12px"><strong>UTM:</strong> ${escapeHtml(body.utm_source)} / ${escapeHtml(body.utm_medium || "")} / ${escapeHtml(body.utm_campaign || "")}</p>` : "",
  ].filter(Boolean).join("");

  const html = `<!doctype html><html><body style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:auto;padding:24px"><h2 style="color:#1E2A78;margin-top:0">New lead from heaven-overseas.com</h2>${lines}</body></html>`;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      subject,
      html,
      reply_to: body.email || undefined,
    }),
  });
  if (!r.ok) {
    const t = await r.text();
    throw new Error(`Resend error ${r.status}: ${t.slice(0, 200)}`);
  }
  const data = await r.json();
  return data?.id || null;
}

function escapeHtml(s: string | undefined | null) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function escapeAttr(s: string | undefined | null) {
  return escapeHtml(s).replaceAll("'", "&#39;");
}

// -------------- HANDLER -----------------------------------------------

interface LeadInput {
  name?: string;
  email?: string;
  phone?: string;
  level?: string;
  message?: string;
  source?: string;
  page?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  website?: string; // honeypot
  hp?: string;      // honeypot
}

export async function POST(req: Request) {
  let body: LeadInput;
  try {
    body = (await req.json()) as LeadInput;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — drop silently with OK
  if (body.website || body.hp) {
    return NextResponse.json({ ok: true, dropped: true });
  }

  // Validation
  if (!body.email && !body.phone) {
    return NextResponse.json({ ok: false, error: "Email or phone is required." }, { status: 400 });
  }
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
  }

  body.source = body.source || DEFAULT_SOURCE;

  const results: { odoo?: number | string; email?: string | null; errors: string[] } = {
    errors: [],
  };

  // Fire both in parallel; either is enough
  const [odooRes, mailRes] = await Promise.allSettled([
    createOdooLead(body),
    sendNotificationEmail(body),
  ]);

  if (odooRes.status === "fulfilled") {
    results.odoo = odooRes.value;
  } else {
    results.errors.push(`odoo: ${odooRes.reason?.message || odooRes.reason}`);
  }
  if (mailRes.status === "fulfilled") {
    results.email = mailRes.value;
  } else {
    results.errors.push(`email: ${mailRes.reason?.message || mailRes.reason}`);
  }

  const anySucceeded = results.odoo != null || results.email != null;
  if (!anySucceeded) {
    console.error("lead capture failed:", results.errors);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Lead capture is not yet configured. Set ODOO_* env vars OR RESEND_API_KEY + LEAD_NOTIFY_TO in Vercel.",
        details: results.errors,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    odoo_lead_id: results.odoo ?? null,
    email_id: results.email ?? null,
    partial_errors: results.errors.length ? results.errors : undefined,
  }, { status: 201 });
}

export function GET() {
  return NextResponse.json({
    ok: true,
    info: "POST a lead here. See app/api/lead/route.ts for the schema.",
    requiredFields: ["email or phone"],
    optionalFields: ["name", "level", "message", "source", "page", "referrer", "utm_*"],
  });
}
