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

const drPesosProducts = [
  {
    name: "Dr. Pesos Grow Coach AI",
    desc: "An intelligent cultivation assistant powered by AI. Get real-time grow advice, diagnose plant issues, and optimize your yields — built specifically for cannabis cultivators.",
    cta: "Launch Grow Coach",
    href: "https://drpesos-growcoach-ai.vercel.app",
    badge: "Live",
    badgeColor: "#7BC49A",
    accent: "#7BC49A",
  },
  {
    name: "Indoor Cultivation Guidebook",
    desc: "A comprehensive reference guide covering every stage of the indoor cannabis grow cycle. From genetics selection to harvest, written by industry practitioners.",
    cta: "Coming Soon",
    href: null,
    badge: "Coming Soon",
    badgeColor: "#D4925A",
    accent: "#D4925A",
  },
];

export default function Home() {
  return (
    <div style={{ background: "#000" }}>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(123,196,154,0.08) 0%, transparent 70%)",
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
          style={{ color: "#fff" }}
        >
          We Grow{" "}
          <span style={{ color: "#7BC49A" }}>Life.</span>
        </h1>

        <p
          className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-3 leading-relaxed"
          style={{ color: "#aaa" }}
        >
          Ori Company / WGL Consulting LLC is a full service medical cannabis
          consulting firm specializing in cultivation, compliance, and community
          development through education.
        </p>
        <p className="text-sm font-semibold tracking-widest mb-10" style={{ color: "#7BC49A" }}>
          WASHINGTON, D.C. &nbsp;·&nbsp; FULL SERVICE CONSULTING
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="/services"
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200"
            style={{ background: "#7BC49A", color: "#000" }}
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide border transition-all duration-200"
            style={{ borderColor: "#2a2a2a", color: "#ccc" }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Hero Illustration */}
        <div className="relative w-full max-w-lg mx-auto">
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, rgba(123,196,154,0.15) 0%, transparent 60%)",
            }}
          />
          <Image
            src="/illustrations/We Grow Life (artwork).png"
            alt="We Grow Life — Ori Company illustration"
            width={500}
            height={500}
            className="object-contain mx-auto relative z-10"
            priority
          />
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#7BC49A" }}>
              WHAT WE DO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Full Spectrum Consulting
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#888" }}>
              From seed to compliance, we cover every aspect of the cannabis
              industry lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 group cursor-default"
                style={{ background: "#0d0d0d", border: "1px solid #1a1a1a" }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "#0f1f15" }}
                >
                  <Image
                    src={s.icon}
                    alt={s.label}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 tracking-wide">
                  {s.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#666" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: "#7BC49A" }}
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DR. PESOS FEATURED ───────────────────────────────────── */}
      <section className="py-24 px-6" style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#D4925A" }}>
              PRODUCT LINE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Dr. Pesos
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#888" }}>
              Tools, guides, and AI-powered resources for cannabis cultivators and operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drPesosProducts.map((product) => (
              <div
                key={product.name}
                className="relative flex flex-col p-8 rounded-2xl"
                style={{ background: "#0d0d0d", border: "1px solid #1a1a1a" }}
              >
                {/* Badge */}
                <span
                  className="self-start px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-5"
                  style={{
                    background: `${product.badgeColor}18`,
                    color: product.badgeColor,
                    border: `1px solid ${product.badgeColor}33`,
                  }}
                >
                  {product.badge}
                </span>

                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#777" }}>
                  {product.desc}
                </p>

                {product.href ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                    style={{ background: product.accent, color: "#000" }}
                  >
                    {product.cta} ↗
                  </a>
                ) : (
                  <span
                    className="self-start px-6 py-2.5 rounded-full text-sm font-semibold"
                    style={{
                      background: "#1a1a1a",
                      color: "#555",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    {product.cta}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS / ECOSYSTEM ──────────────────────────────── */}
      <section className="py-24 px-6" style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#B088CC" }}>
              THE ECOSYSTEM
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Beyond Consulting
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#888" }}>
              WGL Consulting is part of a growing ecosystem of tools and platforms built for the cannabis industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ori App */}
            <a
              href="https://ori-company-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-8 rounded-2xl transition-all duration-300"
              style={{ background: "#0d0d0d", border: "1px solid #1a1a1a" }}
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
              <h3 className="text-lg font-bold text-white mb-2">Ori App</h3>
              <p className="text-sm mb-4" style={{ color: "#666" }}>
                The Ori Company platform — connecting cultivators, operators, and the cannabis community.
              </p>
              <span style={{ color: "#7BC49A" }} className="text-sm font-medium mt-auto">
                Launch App ↗
              </span>
            </a>

            {/* Ori Corp */}
            <div
              className="flex flex-col p-8 rounded-2xl"
              style={{ background: "#0d0d0d", border: "1px solid #1a1a1a" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logos/Ori-Badge02.png"
                  alt="Ori Corp"
                  width={32}
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
              <h3 className="text-lg font-bold text-white mb-2">Ori Corp</h3>
              <p className="text-sm mb-4" style={{ color: "#666" }}>
                The corporate arm of the Ori Company ecosystem — enterprise partnerships, investment, and development.
              </p>
              <span className="text-sm font-medium mt-auto" style={{ color: "#444" }}>
                oricorpdc.com — Launching soon
              </span>
            </div>

            {/* WGL Consulting */}
            <div
              className="flex flex-col p-8 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #0d150f 0%, #0d0d0d 100%)",
                border: "1px solid #1f3025",
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
              <h3 className="text-lg font-bold text-white mb-2">WGL Consulting</h3>
              <p className="text-sm mb-4" style={{ color: "#666" }}>
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
      <section className="py-24 px-6" style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/logos/Ori-Badge04.png"
            alt="Ori Company"
            width={64}
            height={64}
            className="object-contain mx-auto mb-8"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to grow{" "}
            <span style={{ color: "#7BC49A" }}>with us?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#888" }}>
            Whether you&apos;re launching a cannabis operation, navigating compliance, or scaling your
            grow — Ori Company is ready to consult.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-200"
            style={{ background: "#7BC49A", color: "#000" }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
