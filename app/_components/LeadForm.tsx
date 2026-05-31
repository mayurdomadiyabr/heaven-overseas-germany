"use client";
import { useState } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if ((form.elements.namedItem("hp") as HTMLInputElement)?.value) return;

    const data = new FormData(form);
    const params = new URLSearchParams(window.location.search);
    setStatus("submitting");
    setError(null);
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          level: data.get("level"),
          source: "coming-soon-landing",
          page: window.location.pathname,
          referrer: document.referrer || undefined,
          utm_source: params.get("utm_source") || undefined,
          utm_medium: params.get("utm_medium") || undefined,
          utm_campaign: params.get("utm_campaign") || undefined,
        }),
      });
      const json = await r.json();
      if (!r.ok || !json.ok) throw new Error(json.error || "Request failed");
      setStatus("ok");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "ok") {
    return (
      <div className="relative rounded-3xl border border-white/10 bg-white p-10 text-center text-slate-900 shadow-2xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <h3 className="mt-4 text-2xl font-extrabold text-[#1E2A78]">
          You&apos;re on the list 🎉
        </h3>
        <p className="mt-2 text-slate-600">
          Mihir or someone from the team will reach out within 24 hours.
          Meanwhile, you can save our number{" "}
          <a href="tel:+4917647625653" className="font-bold text-[#E63223]">
            +49 176 47625653
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-3xl border border-white/10 bg-white p-8 text-slate-900 shadow-2xl"
    >
      <div className="absolute -top-3 left-8 rounded-full bg-[#E63223] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
        100% Free Counseling
      </div>
      <h3 className="text-xl font-extrabold text-[#1E2A78]">
        Get on the early list
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Tell us about you. We&apos;ll reach out within 24 hours.
      </p>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          name="hp"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <input
          name="name"
          required
          type="text"
          placeholder="Full name"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20"
        />
        <input
          name="email"
          required
          type="email"
          placeholder="Email address"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20"
        />
        <input
          name="phone"
          required
          type="tel"
          placeholder="Phone (with country code)"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20"
        />
        <select
          name="level"
          required
          defaultValue=""
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20"
        >
          <option value="" disabled>
            I want to study…
          </option>
          <option>Bachelor&apos;s in Germany</option>
          <option>Master&apos;s in Germany</option>
          <option>PhD in Germany</option>
          <option>Public Ausbildung / Vocational</option>
        </select>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-xl bg-[#E63223] px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-red-500/30 transition hover:bg-[#c92418] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request Free Consultation"}
        </button>

        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-center text-sm text-red-700">
            {error ||
              "Something went wrong. Please email info@heaven-overseas.com directly."}
          </p>
        )}

        <p className="text-center text-xs text-slate-400">
          No obligations · Reply within 24 hrs · Confidential
        </p>
      </div>
    </form>
  );
}
