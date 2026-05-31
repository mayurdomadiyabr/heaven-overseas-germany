import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Under Construction — Global Heaven Overseas",
  description:
    "Global Heaven Overseas is launching a new website soon.",
};

export default function UnderConstructionPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      {/* Soft brand-tinted background */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_15%_15%,#E63223_0,transparent_45%),radial-gradient(circle_at_85%_85%,#1E2A78_0,transparent_45%)] opacity-10" />

      <div className="relative flex flex-col items-center text-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Global Heaven Overseas"
          width={420}
          height={210}
          priority
          className="h-auto w-72 md:w-96"
        />

        {/* Under construction badge */}
        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#E63223]/30 bg-[#E63223]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E63223]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E63223] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E63223]" />
          </span>
          Under Construction
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-[#1E2A78] md:text-5xl">
          We&apos;re building something{" "}
          <span className="text-[#E63223]">great</span>.
        </h1>

        <p className="mt-4 max-w-md text-base text-slate-600 md:text-lg">
          The new <strong className="text-[#1E2A78]">Global Heaven Overseas</strong>{" "}
          website is on its way. Please check back soon.
        </p>

        {/* Footer */}
        <p className="mt-16 text-xs text-slate-400">
          © {new Date().getFullYear()} Global Heaven Overseas®. All rights reserved.
        </p>
      </div>
    </main>
  );
}
