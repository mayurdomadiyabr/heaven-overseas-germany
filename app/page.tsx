import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "./_components/LeadForm";

export const metadata: Metadata = {
  title: "Coming Soon — Global Heaven Overseas | Study in Germany",
  description:
    "Global Heaven Overseas — your gateway to studying in Germany. Free counseling, zero tuition universities, end-to-end visa support. Site launching soon. Get on the early list.",
};

const features = [
  { icon: "💶", label: "Zero / Low Tuition" },
  { icon: "🎓", label: "Top Public Universities" },
  { icon: "🗣️", label: "English-Taught Programs" },
  { icon: "🛂", label: "18-Month Post-Study Visa" },
  { icon: "💼", label: "Strong Job Market" },
  { icon: "🏙️", label: "Affordable Living" },
];

export default function UnderConstructionPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0F1547] via-[#1E2A78] to-[#2435A0] text-white">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_15%_15%,#E63223_0,transparent_35%),radial-gradient(circle_at_85%_85%,#FBBF24_0,transparent_40%)]" />
      <div className="pointer-events-none absolute -right-32 top-20 hidden h-96 w-96 rounded-full bg-[#E63223]/20 blur-3xl md:block" />
      <div className="pointer-events-none absolute -left-32 bottom-20 hidden h-96 w-96 rounded-full bg-[#FBBF24]/15 blur-3xl md:block" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10">
        {/* ---------- TOP BAR ---------- */}
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Global Heaven Overseas"
              width={220}
              height={110}
              priority
              className="h-14 w-auto rounded-lg bg-white/95 p-1.5 md:h-16"
            />
          </Link>
          <a
            href="tel:+4917647625653"
            className="hidden items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1E2A78] sm:inline-flex"
          >
            📞 +49 176 47625653
          </a>
        </header>

        {/* ---------- HERO ---------- */}
        <main className="flex flex-1 flex-col items-center justify-center text-center">
          {/* Construction badge */}
          <div className="mt-12 inline-flex animate-pulse items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
            </span>
            Site under construction
          </div>

          <h1 className="mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Your Gateway to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FF8B7B] via-[#FBBF24] to-[#FF6B5C] bg-clip-text text-transparent">
                Studying in Germany
              </span>
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#E63223]/60" />
            </span>{" "}
            🇩🇪
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-100/90 md:text-xl">
            We&apos;re polishing the final details on the new <strong className="text-white">Global Heaven Overseas</strong> site.
            In the meantime, we&apos;re still actively counseling students for the
            upcoming intake — drop your details and we&apos;ll reach out within 24 hours.
          </p>

          {/* ---------- FEATURE CHIPS ---------- */}
          <ul className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 text-sm md:grid-cols-3 md:text-base">
            {features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
              >
                <span className="text-xl">{f.icon}</span>
                <span className="font-semibold text-white/90">{f.label}</span>
              </li>
            ))}
          </ul>

          {/* ---------- LEAD FORM ---------- */}
          <div className="relative mt-12 w-full max-w-2xl">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#E63223]/30 via-[#FBBF24]/20 to-[#E63223]/30 blur-2xl" />
            <LeadForm />
          </div>

          {/* ---------- CONTACT ---------- */}
          <div className="mt-12 flex flex-col items-center gap-3 text-sm text-blue-100/80 md:flex-row md:gap-8">
            <a href="tel:+4917647625653" className="flex items-center gap-2 hover:text-white">
              📞 +49 176 47625653 (Mihir, Germany)
            </a>
            <a
              href="mailto:info@heaven-overseas.com"
              className="flex items-center gap-2 hover:text-white"
            >
              ✉️ info@heaven-overseas.com
            </a>
          </div>
        </main>

        {/* ---------- FOOTER ---------- */}
        <footer className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-blue-100/70 md:flex-row">
            <p>
              © {new Date().getFullYear()} Global Heaven Overseas®. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/cookies" className="hover:text-white">Cookies</Link>
              <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
