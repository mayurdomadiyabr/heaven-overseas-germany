import Link from "next/link";

const navLinks = [
  { href: "#why-germany", label: "Why Germany" },
  { href: "#services", label: "Services" },
  { href: "#universities", label: "Universities" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "5,000+", label: "Students Placed" },
  { value: "120+", label: "Partner Universities" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "12+", label: "Years of Experience" },
];

const reasons = [
  {
    title: "Zero / Low Tuition",
    desc: "Most public universities in Germany charge no tuition fees — pay only a small semester contribution (~€150–€350).",
    icon: "💶",
  },
  {
    title: "World-Class Education",
    desc: "Home to 50+ globally ranked universities like TU Munich, RWTH Aachen, Heidelberg and LMU.",
    icon: "🎓",
  },
  {
    title: "English-Taught Programs",
    desc: "1,800+ master's and bachelor's programs delivered entirely in English — no German required to start.",
    icon: "🗣️",
  },
  {
    title: "18-Month Post-Study Visa",
    desc: "Stay back for 18 months after graduation to find a job — one of the most generous policies in Europe.",
    icon: "🛂",
  },
  {
    title: "Strong Job Market",
    desc: "Germany is Europe's largest economy with high demand in engineering, IT, data science, and healthcare.",
    icon: "💼",
  },
  {
    title: "Affordable Living",
    desc: "Live comfortably on €850–€1,100/month. Students can legally work 120 full / 240 half days per year.",
    icon: "🏙️",
  },
];

const services = [
  {
    title: "Free Profile Evaluation",
    desc: "Personalized assessment of your academic and financial profile to match the right programs.",
  },
  {
    title: "University Shortlisting",
    desc: "Hand-picked university and program recommendations based on your goals and budget.",
  },
  {
    title: "Application & SOP Support",
    desc: "End-to-end help with uni-assist, APS, SOPs, LORs, and CV tailored for German admissions.",
  },
  {
    title: "Blocked Account & Insurance",
    desc: "Assistance opening blocked accounts (Expatrio, Fintiba) and securing health insurance.",
  },
  {
    title: "Student Visa Guidance",
    desc: "Mock interviews, document checklist, and embassy appointment booking support.",
  },
  {
    title: "Pre-Departure & Accommodation",
    desc: "Flight, forex, accommodation, and city briefings — so you land in Germany fully prepared.",
  },
];

const universities = [
  "TU Munich",
  "RWTH Aachen",
  "LMU Munich",
  "Heidelberg University",
  "Humboldt University Berlin",
  "TU Berlin",
  "University of Freiburg",
  "KIT Karlsruhe",
  "University of Stuttgart",
  "TU Darmstadt",
  "University of Bonn",
  "University of Cologne",
];

const steps = [
  {
    n: "01",
    title: "Free Counseling",
    desc: "Book a 1:1 session with our Germany expert to discuss goals, budget and timeline.",
  },
  {
    n: "02",
    title: "Shortlisting & APS",
    desc: "We pick the best universities and help you complete the APS certificate (mandatory for Indian students).",
  },
  {
    n: "03",
    title: "Applications",
    desc: "We prepare and submit applications via uni-assist or directly to universities.",
  },
  {
    n: "04",
    title: "Admission & Visa",
    desc: "Once you receive your offer, we help with blocked account, insurance and visa interview.",
  },
  {
    n: "05",
    title: "Fly to Germany",
    desc: "Pre-departure briefing, accommodation, SIM, forex — we set you up for a smooth landing.",
  },
];

const testimonials = [
  {
    name: "Rohan Sharma",
    program: "MS in Data Science, TU Munich",
    quote:
      "Heaven Overseas guided me through APS, SOP and visa interview. I got admission with zero tuition — couldn't have done it alone!",
  },
  {
    name: "Priya Verma",
    program: "MS in Mechanical, RWTH Aachen",
    quote:
      "From shortlisting to blocked account, the team was responsive and honest. My visa was approved in the first attempt.",
  },
  {
    name: "Aman Gupta",
    program: "Bachelor's in CS, University of Stuttgart",
    quote:
      "I had no idea where to start. Their counselor mapped out the entire journey and even helped me find accommodation in Stuttgart.",
  },
];

const faqs = [
  {
    q: "Is education in Germany really free?",
    a: "Yes — most public universities in Germany charge no tuition fees for international students at bachelor's and master's level. You only pay a small semester contribution of around €150–€350.",
  },
  {
    q: "Do I need to know German?",
    a: "No. There are 1,800+ programs taught entirely in English. Learning basic German (A1/A2) helps with daily life and part-time work but is not required for admission to English programs.",
  },
  {
    q: "What is the APS certificate?",
    a: "APS (Akademische Prüfstelle) is a mandatory document verification certificate for Indian students applying to German universities. We help you complete the APS process end-to-end.",
  },
  {
    q: "How much money do I need in a blocked account?",
    a: "As of 2026, students need approximately €11,904 in a blocked account to prove financial sufficiency for the student visa.",
  },
  {
    q: "Can I work while studying in Germany?",
    a: "Yes. International students can work 120 full days or 240 half days per year, alongside their studies.",
  },
  {
    q: "What is the intake season in Germany?",
    a: "Germany has two intakes — Winter (Sep/Oct) and Summer (Mar/Apr). The Winter intake is the larger one with more programs available.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      {/* ---------- HEADER ---------- */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 via-red-500 to-yellow-500 font-bold text-white">
              H
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold tracking-tight">
                Heaven <span className="text-red-600">Overseas</span>
              </p>
              <p className="text-[11px] uppercase tracking-widest text-slate-500">
                Study in Germany
              </p>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 transition hover:text-red-600"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
          >
            Free Counseling
          </a>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_20%_20%,#fbbf24_0,transparent_40%),radial-gradient(circle_at_80%_60%,#ef4444_0,transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300">
              🇩🇪 Germany Specialists
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-amber-300 via-red-400 to-yellow-300 bg-clip-text text-transparent">
                Studying in Germany
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Get into top German public universities with zero tuition fees.
              Heaven Overseas handles your admission, visa, blocked account &
              accommodation — end-to-end.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-red-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700"
              >
                Book Free Counseling →
              </a>
              <a
                href="#why-germany"
                className="rounded-full border border-white/30 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Why Germany?
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-300">
              <div className="flex -space-x-2">
                {["bg-amber-400", "bg-red-400", "bg-yellow-300", "bg-orange-400"].map(
                  (c, i) => (
                    <div
                      key={i}
                      className={`h-9 w-9 rounded-full ring-2 ring-slate-900 ${c}`}
                    />
                  )
                )}
              </div>
              <p>
                <span className="font-bold text-white">5,000+ students</span>{" "}
                already studying in Germany 🎓
              </p>
            </div>
          </div>

          {/* Inline lead form */}
          <div id="lead-form" className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-amber-400/20 via-red-500/20 to-yellow-400/20 blur-2xl" />
            <form
              className="relative rounded-3xl border border-white/10 bg-white p-8 text-slate-900 shadow-2xl"
              action="https://formspree.io/f/your-id"
              method="POST"
            >
              <h3 className="text-xl font-bold">Get a Free Profile Evaluation</h3>
              <p className="mt-1 text-sm text-slate-500">
                Our Germany expert will reach out within 24 hours.
              </p>
              <div className="mt-6 space-y-4">
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                />
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Phone (with country code)"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                />
                <select
                  name="level"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                >
                  <option>I want to study…</option>
                  <option>Bachelor&apos;s in Germany</option>
                  <option>Master&apos;s in Germany</option>
                  <option>PhD in Germany</option>
                  <option>Public Ausbildung / Vocational</option>
                </select>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-700"
                >
                  Request Free Consultation
                </button>
                <p className="text-center text-xs text-slate-400">
                  100% free • No obligations • Reply within 24 hrs
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-red-600 md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm uppercase tracking-wider text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- WHY GERMANY ---------- */}
      <section id="why-germany" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Why Germany
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            The smartest study-abroad choice in 2026
          </h2>
          <p className="mt-4 text-slate-600">
            Germany combines world-class education, zero tuition, and a thriving
            economy — the ideal destination for ambitious students.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-red-500 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl">
                {r.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Everything you need — under one roof
            </h2>
            <p className="mt-4 text-slate-600">
              From your first counseling session to your first day in Germany,
              we&apos;ve got you covered.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-xl"
              >
                <div className="absolute -right-6 -top-6 text-7xl font-bold text-slate-100 transition group-hover:text-red-50">
                  0{i + 1}
                </div>
                <h3 className="relative text-lg font-semibold">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- UNIVERSITIES ---------- */}
      <section id="universities" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Partner Universities
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Apply to Germany&apos;s best public universities
          </h2>
          <p className="mt-4 text-slate-600">
            We work directly and via uni-assist with leading public universities
            across Germany.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {universities.map((u) => (
            <div
              key={u}
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-6 text-center text-sm font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-600"
            >
              {u}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section
        id="process"
        className="relative overflow-hidden bg-slate-900 py-20 text-white"
      >
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_70%_30%,#fbbf24_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Your 5-step journey to Germany
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-2xl font-bold text-amber-400">{s.n}</p>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Success Stories
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What our students say
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-amber-500">★★★★★</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-slate-500">{t.program}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-red-300"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold">
                  {f.q}
                  <span className="text-red-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA / CONTACT ---------- */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-amber-700" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_10%_10%,#fbbf24_0,transparent_50%),radial-gradient(circle_at_90%_90%,#000_0,transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Ready to study in Germany?
            </h2>
            <p className="mt-4 max-w-md text-lg text-red-50">
              Get on a free 30-min call with our Germany expert. We&apos;ll map
              out your eligibility, timeline, and best-fit universities.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <p>
                📞 <a href="tel:+919999999999" className="underline">+91 99999 99999</a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:info@heaven-overseas.com" className="underline">
                  info@heaven-overseas.com
                </a>
              </p>
              <p>📍 New Delhi · Hyderabad · Bengaluru</p>
            </div>
          </div>
          <form
            className="rounded-3xl bg-white p-8 shadow-2xl"
            action="https://formspree.io/f/your-id"
            method="POST"
          >
            <h3 className="text-xl font-bold">Book Free Counseling</h3>
            <p className="mt-1 text-sm text-slate-500">
              Limited slots available this week.
            </p>
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  name="firstName"
                  placeholder="First name"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-red-500"
                />
                <input
                  required
                  name="lastName"
                  placeholder="Last name"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-red-500"
                />
              </div>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-red-500"
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone (with country code)"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-red-500"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Briefly tell us about your goals…"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-red-700"
              >
                Talk to a Germany Expert
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-slate-200 bg-slate-950 py-12 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 via-red-500 to-yellow-500 font-bold text-white">
                H
              </div>
              <p className="text-lg font-bold text-white">Heaven Overseas</p>
            </div>
            <p className="mt-4 text-sm">
              India&apos;s trusted education consultant for studying in
              Germany. Free counseling, transparent pricing, end-to-end support.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>📞 +91 99999 99999</li>
              <li>✉️ info@heaven-overseas.com</li>
              <li>📍 New Delhi · Hyderabad · Bengaluru</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 px-6 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Heaven Overseas. All rights reserved. ·
          Built with Next.js
        </div>
      </footer>
    </div>
  );
}
