import Link from "next/link";
import { GHOLogo } from "../page";

export default function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <GHOLogo />
          <Link
            href="/"
            className="rounded-full bg-[#1E2A78] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#0F1547]"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F1547] via-[#1E2A78] to-[#2435A0] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-blue-100/80">Last updated: {updatedAt}</p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <article className="prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:text-[#1E2A78] prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-lg prose-a:text-[#E63223] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900">
          {children}
        </article>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-600">
            Questions about this policy? Contact us at{" "}
            <a
              href="mailto:info@heaven-overseas.com"
              className="font-bold text-[#E63223] hover:underline"
            >
              info@heaven-overseas.com
            </a>
          </p>
        </div>
      </main>

      {/* Footer (slim) */}
      <footer className="border-t border-slate-800 bg-[#0A0F35] py-10 text-slate-400">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs">
          <p>© {new Date().getFullYear()} Global Heaven Overseas®. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
            <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
