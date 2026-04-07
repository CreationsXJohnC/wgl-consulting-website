import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "/icons/ORI Icon18.png",
    label: "Medical Cannabis",
    desc: "Specialization in medical cannabis operations, cultivation, and patient access programs.",
  },
  {
    icon: "/icons/ORI Icon15.png",
    label: "Agriculture & Horticulture",
    desc: "Indoor and outdoor cultivation strategy, grow room design, and crop optimization.",
  },
  {
    icon: "/icons/ORI Icon16.png",
    label: "Government Compliance",
    desc: "ABCA licensing, regulatory navigation, and compliance frameworks for cannabis operators.",
  },
  {
    icon: "/icons/ORI Icon14.png",
    label: "Digital Products",
    desc: "AI-powered grow tools and technology platforms built for the cannabis industry.",
  },
];

export default function Home() {
  return (
    <div style={{ background: "#ffffff" }}>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      {/* pt-28 ensures logo clears the fixed 64px navbar with room to breathe */}
      <section className="relative min-h-screen flex flex-col items-center text-center px-6 pt-28 pb-16 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(123,196,154,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Primary Ori Badge */}
        <div className="relative mb-8">
          <Image
            src="/logos/Ori-Badge04.png"
            alt="Ori Company"
            width={120}
            height={120}
            className="object-contain"
            priority
          />
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-none"
          style={{ color: "#111" }}
        >
          We Grow{" "}
          <span style={{ color: "#7BC49A" }}>Life.</span>
        </h1>

        <p
          className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-3 leading-relaxed"
          style={{ color: "#555" }}
        >
          Ori Company / WGL Consulting LLC is a full service medical cannabis
          consulting firm specializing in cultivation, compliance, and community
          development through education.
        </p>
        <p className="text-sm font-semibold tracking-widest mb-8" style={{ color: "#7BC49A" }}>
          WASHINGTON, D.C. &nbsp;·&nbsp; FULL SERVICE CONSULTING
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/services"
            className="btn-sage px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide"
            style={{ background: "#7BC49A", color: "#000" }}
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="btn-outline px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide border"
            style={{ borderColor: "#ccc", color: "#333" }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Hero Illustration */}
        <div className="relative w-full max-w-lg mx-auto">
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, rgba(123,196,154,0.1) 0%, transparent 60%)",
            }}
          />
          <Image
            src="/illustrations/We Grow Life (artwork).png"
            alt="We Grow Life — Ori Company illustration"
            width={500}
            height={500}
            className="object-contain mx-auto relative z-10 rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#7BC49A" }}>
              WHAT WE DO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#111" }}>
              Full Spectrum Consulting
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#666" }}>
              From seed to compliance, we cover every aspect of the cannabis
              industry lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center p-8 rounded-2xl"
                style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "#eaf5ef" }}
                >
                  <Image
                    src={s.icon}
                    alt={s.label}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold mb-2 tracking-wide" style={{ color: "#111" }}>
                  {s.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#888" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "#7BC49A" }}
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DR. PESOS FEATURED ───────────────────────────────────── */}
      {/* White background per Revision 02 */}
      <section className="py-24 px-6" style={{ background: "#ffffff", borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest mb-6" style={{ color: "#D4925A" }}>
              PRODUCT LINE
            </p>
            {/* No invert filter — page is now white, image renders correctly */}
            <div className="flex justify-center mb-4">
              <Image
                src="/logos/Dr. Pesos Text.png"
                alt="Dr. Pesos"
                width={320}
                height={90}
                className="object-contain"
              />
            </div>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#666" }}>
              Tools, guides, and AI-powered resources for cannabis cultivators and operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Grow Coach AI */}
            <div
              className="relative flex flex-col p-8 rounded-2xl overflow-hidden"
              style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
            >
              <span
                className="self-start px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-5"
                style={{
                  background: "#7BC49A18",
                  color: "#7BC49A",
                  border: "1px solid #7BC49A33",
                }}
              >
                Live
              </span>

              <div className="flex gap-6 items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#111" }}>Dr. Pesos Grow Coach AI</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#777" }}>
                    An intelligent AI-powered cultivation assistant. Get real-time grow advice, diagnose plant issues, and optimize your yields — built for cannabis cultivators.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://drpesos-growcoach-ai.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sage self-start px-6 py-2.5 rounded-full text-sm font-semibold"
                      style={{ background: "#7BC49A", color: "#000" }}
                    >
                      Launch Grow Coach ↗
                    </a>
                    <a
                      href="https://www.johnccreations.design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium"
                      style={{ color: "#D4925A" }}
                    >
                      Available at johnccreations.design ↗
                    </a>
                  </div>
                </div>
                {/* Character image */}
                <div className="flex-shrink-0 hidden sm:block">
                  <Image
                    src="/logos/Dr. Pesos GreenTee notext.png"
                    alt="Dr. Pesos"
                    width={100}
                    height={180}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Cultivation Guidebook */}
            <div
              className="relative flex flex-col p-8 rounded-2xl overflow-hidden"
              style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
            >
              <span
                className="self-start px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-5"
                style={{
                  background: "#D4925A18",
                  color: "#D4925A",
                  border: "1px solid #D4925A33",
                }}
              >
                Coming Soon
              </span>

              <div className="flex gap-6 items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#111" }}>Indoor Cultivation Guidebook</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#777" }}>
                    A comprehensive reference guide covering every stage of the indoor cannabis grow cycle. Written by practitioners, designed for cultivators at every level.
                  </p>
                  <div className="flex flex-col gap-3">
                    <span
                      className="self-start px-6 py-2.5 rounded-full text-sm font-semibold"
                      style={{
                        background: "#eee",
                        color: "#999",
                        border: "1px solid #ddd",
                      }}
                    >
                      Coming Soon
                    </span>
                    <a
                      href="https://www.johnccreations.design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium"
                      style={{ color: "#D4925A" }}
                    >
                      Shop at johnccreations.design ↗
                    </a>
                  </div>
                </div>
                {/* Character image */}
                <div className="flex-shrink-0 hidden sm:block">
                  <Image
                    src="/logos/Dr. Pesos PeaceSign notext.png"
                    alt="Dr. Pesos"
                    width={100}
                    height={180}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS / ECOSYSTEM ──────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#ffffff", borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#B088CC" }}>
              THE ECOSYSTEM
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#111" }}>
              Beyond Consulting
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#666" }}>
              WGL Consulting is part of a growing ecosystem of tools and platforms built for the cannabis industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ori App */}
            <a
              href="https://ori-company-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-8 rounded-2xl transition-all duration-300"
              style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/icons/ORI Icon14.png"
                  alt="Ori App"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span
                  className="text-xs font-semibold tracking-widest px-2 py-0.5 rounded"
                  style={{ background: "#7BC49A18", color: "#7BC49A" }}
                >
                  BETA
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#111" }}>Ori App</h3>
              <p className="text-sm mb-4" style={{ color: "#888" }}>
                The Ori Company platform — connecting cultivators, operators, and the cannabis community.
              </p>
              <span style={{ color: "#7BC49A" }} className="text-sm font-medium mt-auto">
                Launch App ↗
              </span>
            </a>

            {/* Ori Corp */}
            <div
              className="flex flex-col p-8 rounded-2xl"
              style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logos/ORI Logo-08.png"
                  alt="Ori Corp"
                  width={48}
                  height={32}
                  className="object-contain"
                />
                <span
                  className="text-xs font-semibold tracking-widest px-2 py-0.5 rounded"
                  style={{ background: "#B088CC18", color: "#B088CC" }}
                >
                  COMING SOON
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#111" }}>Ori Corp</h3>
              <p className="text-sm mb-4" style={{ color: "#888" }}>
                The corporate arm of the Ori Company ecosystem — enterprise partnerships, investment, and development.
              </p>
              {/* Live link per Revision 02 item 5 */}
              <a
                href="https://oricompanydc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium mt-auto"
                style={{ color: "#B088CC" }}
              >
                Ori Project Website ↗
              </a>
            </div>

            {/* WGL Consulting */}
            <div
              className="flex flex-col p-8 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #eaf5ef 0%, #f7f7f7 100%)",
                border: "1px solid #c8e8d5",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logos/Ori-Badge04.png"
                  alt="WGL Consulting"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span
                  className="text-xs font-semibold tracking-widest px-2 py-0.5 rounded"
                  style={{ background: "#7BC49A18", color: "#7BC49A" }}
                >
                  ACTIVE
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#111" }}>WGL Consulting</h3>
              <p className="text-sm mb-4" style={{ color: "#888" }}>
                The consulting firm at the core. Medical cannabis, compliance, cultivation — serving operators and communities.
              </p>
              <Link href="/contact" className="text-sm font-medium mt-auto" style={{ color: "#7BC49A" }}>
                Work with us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#fff", borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/logos/Ori-Badge04.png"
            alt="Ori Company"
            width={64}
            height={64}
            className="object-contain mx-auto mb-8"
          />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#111" }}>
            Ready to grow{" "}
            <span style={{ color: "#7BC49A" }}>with us?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#666" }}>
            Whether you&apos;re launching a cannabis operation, navigating compliance, or scaling your
            grow — Ori Company is ready to consult.
          </p>
          <Link
            href="/contact"
            className="btn-sage inline-block px-10 py-4 rounded-full font-semibold text-base"
            style={{ background: "#7BC49A", color: "#000" }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
