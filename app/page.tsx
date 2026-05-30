import Link from "next/link";

// =====================================================
//  Brand: Global Heaven Overseas (GHO)
//  Primary navy: #1E2A78  |  Accent red: #E63223
// =====================================================

const navLinks = [
  { href: "#why-germany", label: "Why Germany" },
  { href: "#services", label: "Services" },
  { href: "#universities", label: "Universities" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "5,000+", label: "Students Placed" },
  { value: "120+", label: "Partner Universities" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "12+", label: "Years of Experience" },
];

const reasons = [
  { icon: "💶", title: "Zero / Low Tuition",      desc: "Most public universities in Germany charge no tuition fees — pay only a small semester contribution (~€150–€350)." },
  { icon: "🎓", title: "World-Class Education",  desc: "Home to 50+ globally ranked universities including TU Munich, RWTH Aachen, Heidelberg and LMU." },
  { icon: "🗣️", title: "English-Taught Programs",desc: "1,800+ master's and bachelor's programs delivered entirely in English — no German required to start." },
  { icon: "🛂", title: "18-Month Post-Study Visa",desc: "Stay back for 18 months after graduation to find a job — one of the most generous policies in Europe." },
  { icon: "💼", title: "Strong Job Market",      desc: "Germany is Europe's largest economy with high demand in engineering, IT, data science, and healthcare." },
  { icon: "🏙️", title: "Affordable Living",       desc: "Live comfortably on €850–€1,100/month. Students can legally work 120 full / 240 half days per year." },
];

const services = [
  { title: "Free Profile Evaluation",      desc: "Personalized assessment of your academic and financial profile to match the right programs." },
  { title: "University Shortlisting",      desc: "Hand-picked university and program recommendations based on your goals and budget." },
  { title: "Application & SOP Support",    desc: "End-to-end help with uni-assist, APS, SOPs, LORs, and CV tailored for German admissions." },
  { title: "Blocked Account & Insurance",  desc: "Assistance opening blocked accounts (Expatrio, Fintiba) and securing health insurance." },
  { title: "Student Visa Guidance",        desc: "Mock interviews, document checklist, and embassy appointment booking support." },
  { title: "Pre-Departure & Accommodation",desc: "Flight, forex, accommodation, and city briefings — so you land in Germany fully prepared." },
];

const universities = [
  "TU Munich", "RWTH Aachen", "LMU Munich", "Heidelberg University",
  "Humboldt University Berlin", "TU Berlin", "University of Freiburg",
  "KIT Karlsruhe", "University of Stuttgart", "TU Darmstadt",
  "University of Bonn", "University of Cologne",
];

const steps = [
  { n: "01", title: "Free Counseling",     desc: "Book a 1:1 session with our Germany expert to discuss goals, budget and timeline." },
  { n: "02", title: "Shortlisting & APS",  desc: "We pick the best universities and help you complete the APS certificate (mandatory for Indian students)." },
  { n: "03", title: "Applications",        desc: "We prepare and submit applications via uni-assist or directly to universities." },
  { n: "04", title: "Admission & Visa",    desc: "Once you receive your offer, we help with blocked account, insurance and visa interview." },
  { n: "05", title: "Fly to Germany",      desc: "Pre-departure briefing, accommodation, SIM, forex — we set you up for a smooth landing." },
];

const testimonials = [
  { name: "Rohan Sharma",  program: "MS in Data Science, TU Munich",          quote: "Global Heaven Overseas guided me through APS, SOP and visa interview. I got admission with zero tuition — couldn't have done it alone!" },
  { name: "Priya Verma",   program: "MS in Mechanical, RWTH Aachen",          quote: "From shortlisting to blocked account, the team was responsive and honest. My visa was approved in the first attempt." },
  { name: "Aman Gupta",    program: "Bachelor's in CS, University of Stuttgart", quote: "I had no idea where to start. Their counselor mapped out the entire journey and even helped me find accommodation in Stuttgart." },
];

const faqs = [
  { q: "Is education in Germany really free?",
    a: "Yes — most public universities in Germany charge no tuition fees for international students at bachelor's and master's level. You only pay a small semester contribution of around €150–€350." },
  { q: "Do I need to know German?",
    a: "No. There are 1,800+ programs taught entirely in English. Learning basic German (A1/A2) helps with daily life and part-time work but is not required for admission to English programs." },
  { q: "What is the APS certificate?",
    a: "APS (Akademische Prüfstelle) is a mandatory document verification certificate for Indian students applying to German universities. We help you complete the APS process end-to-end." },
  { q: "How much money do I need in a blocked account?",
    a: "As of 2026, students need approximately €11,904 in a blocked account to prove financial sufficiency for the student visa." },
  { q: "Can I work while studying in Germany?",
    a: "Yes. International students can work 120 full days or 240 half days per year, alongside their studies." },
  { q: "What is the intake season in Germany?",
    a: "Germany has two intakes — Winter (Sep/Oct) and Summer (Mar/Apr). The Winter intake is the larger one with more programs available." },
];

// Brand logo — uses /logo.png if present, otherwise stylish monogram
function GHOLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* Replace with your real logo by saving file as /public/logo.png */}
      <picture>
        <source srcSet="/logo.png" type="image/png" />
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E2A78] font-extrabold leading-none text-white shadow-md">
          <span className="text-[#E63223]">G</span>
          <span>H</span>
          <span className="text-[#E63223]">O</span>
        </span>
      </picture>
      <div className="leading-tight">
        <p className={`text-base font-extrabold tracking-tight md:text-lg ${light ? "text-white" : "text-[#1E2A78]"}`}>
          <span className="text-[#E63223]">G</span>LOBAL <span className="text-[#E63223]">H</span>EAVEN <span className="text-[#E63223]">O</span>VERSEAS
        </p>
        <p className={`text-[10px] uppercase tracking-[0.2em] ${light ? "text-white/70" : "text-slate-500"}`}>
          Study Abroad Consultants
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      {/* ---------- HEADER ---------- */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <GHOLogo />
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-[#E63223]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-[#E63223] px-5 py-2 text-sm font-bold text-white shadow-md shadow-red-500/20 transition hover:bg-[#c92418]"
          >
            Free Counseling
          </a>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F1547] via-[#1E2A78] to-[#2435A0] text-white">
        <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_15%_15%,#E63223_0,transparent_35%),radial-gradient(circle_at_85%_85%,#FBBF24_0,transparent_40%)]" />
        <div className="absolute -right-32 top-10 hidden h-96 w-96 rounded-full bg-[#E63223]/20 blur-3xl md:block" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E63223]/50 bg-[#E63223]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-200">
              🇩🇪 Germany Specialists Since 2014
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Your Gateway to{" "}
              <span className="relative inline-block">
                <span className="relative bg-gradient-to-r from-[#FF6B5C] via-[#E63223] to-[#FBBF24] bg-clip-text text-transparent">
                  Studying in Germany
                </span>
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#E63223]/60" />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-blue-100/90">
              Get into Germany's top public universities with{" "}
              <strong className="text-white">zero tuition fees</strong>. Global Heaven Overseas
              handles your admission, visa, blocked account and accommodation — end-to-end.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#E63223] px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-red-600/40 transition hover:bg-[#c92418] hover:shadow-red-600/60"
              >
                Book Free Counseling →
              </a>
              <a
                href="#why-germany"
                className="rounded-full border-2 border-white/40 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white hover:text-[#1E2A78]"
              >
                Why Germany?
              </a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-sm text-blue-100/90">
              <div className="flex -space-x-2.5">
                {["bg-red-400", "bg-blue-400", "bg-yellow-300", "bg-orange-400"].map((c, i) => (
                  <div key={i} className={`h-10 w-10 rounded-full ring-2 ring-[#1E2A78] ${c}`} />
                ))}
              </div>
              <p>
                <span className="font-bold text-white">5,000+ students</span> already studying in Germany 🎓
              </p>
            </div>
          </div>

          {/* Inline lead form */}
          <div id="lead-form" className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#E63223]/30 via-[#FBBF24]/20 to-[#E63223]/30 blur-2xl" />
            <form
              className="relative rounded-3xl border border-white/10 bg-white p-8 text-slate-900 shadow-2xl"
              action="https://formspree.io/f/your-id"
              method="POST"
            >
              <div className="absolute -top-3 left-8 rounded-full bg-[#E63223] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                100% Free
              </div>
              <h3 className="text-xl font-extrabold text-[#1E2A78]">Get a Free Profile Evaluation</h3>
              <p className="mt-1 text-sm text-slate-500">Our Germany expert will reach out within 24 hours.</p>
              <div className="mt-6 space-y-4">
                <input name="name"  required type="text"  placeholder="Full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20" />
                <input name="email" required type="email" placeholder="Email address"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20" />
                <input name="phone" required type="tel"   placeholder="Phone (with country code)"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20" />
                <select name="level"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20">
                  <option>I want to study…</option>
                  <option>Bachelor&apos;s in Germany</option>
                  <option>Master&apos;s in Germany</option>
                  <option>PhD in Germany</option>
                  <option>Public Ausbildung / Vocational</option>
                </select>
                <button type="submit"
                  className="w-full rounded-xl bg-[#E63223] px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-red-500/30 transition hover:bg-[#c92418]">
                  Request Free Consultation
                </button>
                <p className="text-center text-xs text-slate-400">
                  No obligations · Reply within 24 hrs · Confidential
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="border-y border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-[#1E2A78] md:text-4xl">{s.value}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- WHY GERMANY ---------- */}
      <section id="why-germany" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E63223]">Why Germany</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1E2A78] md:text-4xl">
            The smartest study-abroad choice in 2026
          </h2>
          <p className="mt-4 text-slate-600">
            Germany combines world-class education, zero tuition, and a thriving economy —
            the ideal destination for ambitious students.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#1E2A78] hover:shadow-xl"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#1E2A78]/5 transition group-hover:bg-[#E63223]/10" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E2A78]/10 text-2xl">
                {r.icon}
              </div>
              <h3 className="relative mt-4 text-lg font-bold text-[#1E2A78]">{r.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section id="services" className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E63223]">Our Services</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1E2A78] md:text-4xl">
              Everything you need — under one roof
            </h2>
            <p className="mt-4 text-slate-600">
              From your first counseling session to your first day in Germany, we&apos;ve got you covered.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition hover:shadow-2xl"
              >
                <div className="absolute -right-6 -top-6 text-7xl font-extrabold text-slate-100 transition group-hover:text-[#E63223]/10">
                  0{i + 1}
                </div>
                <h3 className="relative text-lg font-bold text-[#1E2A78]">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                <div className="relative mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#E63223] opacity-0 transition group-hover:opacity-100">
                  Learn more →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- UNIVERSITIES ---------- */}
      <section id="universities" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E63223]">Partner Universities</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1E2A78] md:text-4xl">
            Apply to Germany&apos;s best public universities
          </h2>
          <p className="mt-4 text-slate-600">
            We work directly and via uni-assist with leading public universities across Germany.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {universities.map((u) => (
            <div
              key={u}
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-6 text-center text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-[#1E2A78] hover:bg-[#1E2A78] hover:text-white"
            >
              {u}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section id="process" className="relative overflow-hidden bg-[#0F1547] py-24 text-white">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_70%_30%,#E63223_0,transparent_40%),radial-gradient(circle_at_30%_80%,#FBBF24_0,transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">How It Works</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Your 5-step journey to Germany
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              >
                <p className="text-3xl font-extrabold text-[#E63223] transition group-hover:scale-110">{s.n}</p>
                <h3 className="mt-3 font-bold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-blue-100/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E63223]">Success Stories</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1E2A78] md:text-4xl">
            What our students say
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="absolute -top-4 left-6 rounded-full bg-[#1E2A78] px-3 py-1 text-xs font-bold text-white">
                Verified
              </div>
              <div className="mt-2 text-amber-500">★★★★★</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-bold text-[#1E2A78]">{t.name}</p>
                <p className="text-xs text-slate-500">{t.program}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E63223]">FAQs</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1E2A78] md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#1E2A78]/40"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-[#1E2A78]">
                  {f.q}
                  <span className="text-2xl text-[#E63223] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA / CONTACT ---------- */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A78] via-[#0F1547] to-[#E63223]" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_10%_10%,#FBBF24_0,transparent_50%),radial-gradient(circle_at_90%_90%,#000_0,transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div className="text-white">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Ready to study in <span className="text-yellow-300">Germany?</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-blue-100">
              Get on a free 30-min call with our Germany expert. We&apos;ll map out
              your eligibility, timeline, and best-fit universities.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <p>📞 <a href="tel:+919999999999" className="underline hover:no-underline">+91 99999 99999</a></p>
              <p>✉️ <a href="mailto:info@heaven-overseas.com" className="underline hover:no-underline">info@heaven-overseas.com</a></p>
              <p>📍 New Delhi · Hyderabad · Bengaluru</p>
            </div>
          </div>
          <form
            className="rounded-3xl bg-white p-8 shadow-2xl"
            action="https://formspree.io/f/your-id"
            method="POST"
          >
            <h3 className="text-xl font-extrabold text-[#1E2A78]">Book Free Counseling</h3>
            <p className="mt-1 text-sm text-slate-500">Limited slots available this week.</p>
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input required name="firstName" placeholder="First name"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20" />
                <input required name="lastName"  placeholder="Last name"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20" />
              </div>
              <input required type="email" name="email" placeholder="Email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20" />
              <input required type="tel"   name="phone" placeholder="Phone (with country code)"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20" />
              <textarea name="message" rows={3} placeholder="Briefly tell us about your goals…"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1E2A78] focus:ring-2 focus:ring-[#1E2A78]/20" />
              <button type="submit"
                className="w-full rounded-xl bg-[#E63223] px-5 py-3.5 text-base font-bold text-white transition hover:bg-[#c92418]">
                Talk to a Germany Expert
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-slate-800 bg-[#0A0F35] py-14 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
          <div>
            <GHOLogo light />
            <p className="mt-4 text-sm leading-relaxed">
              India&apos;s trusted education consultant for studying in Germany.
              Free counseling, transparent pricing, end-to-end support.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>📞 +91 99999 99999</li>
              <li>✉️ info@heaven-overseas.com</li>
              <li>📍 New Delhi · Hyderabad · Bengaluru</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 px-6 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Global Heaven Overseas®. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
