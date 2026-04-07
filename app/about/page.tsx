import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ori Company / WGL Consulting",
  description: "Who is WGL Consulting / Ori Company — mission, vision, and the meaning behind We Grow Life.",
};

const credentials = [
  {
    label: "FAA Part 107 Certified",
    desc: "Licensed commercial drone pilot.",
    icon: "✈",
    color: "#7BC49A",
  },
  {
    label: "Advanced Indoor Horticulture",
    desc: "Oaksterdam University — cannabis industry education and cultivation training.",
    icon: "🌱",
    color: "#7BC49A",
  },
  {
    label: "Full Stack Developer",
    desc: "Building the digital tools that power the Ori ecosystem — Next.js, AI integrations, and beyond.",
    icon: "💻",
    color: "#B088CC",
  },
  {
    label: "DC Cannabis Ecosystem",
    desc: "Deep roots in the Washington, D.C. cannabis community — from cultivation to compliance.",
    icon: "🏛",
    color: "#D4925A",
  },
];

// Revision 02 item 12: Educate = orange, Build = green; Grow and Comply unchanged
const values = [
  {
    title: "Grow",
    desc: "Cannabis, communities, and businesses. Growth is the through-line of everything we do.",
    accent: "#7BC49A",
  },
  {
    title: "Educate",
    desc: "Community development through education is not a tagline — it's the methodology. Knowledge is the most durable asset.",
    accent: "#D4925A",
  },
  {
    title: "Comply",
    desc: "The legal cannabis industry lives and dies by compliance. We help operators stay clean, licensed, and protected.",
    accent: "#B088CC",
  },
  {
    title: "Build",
    desc: "From physical grow operations to digital platforms — we build infrastructure that lasts.",
    accent: "#7BC49A",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#fff" }}>
      {/* Header */}
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(123,196,154,0.08) 0%, transparent 70%)",
        }}
      >
        <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#7BC49A" }}>
          WHO WE ARE
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#111" }}>About</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666" }}>
          WGL Consulting LLC, operating under the trade name Ori Company. A full service consulting firm rooted in community, cultivation, and compliance.
        </p>
      </section>

      {/* "We Grow Life" Section */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Illustration */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 80%, rgba(123,196,154,0.12) 0%, transparent 60%)",
                  }}
                />
                <Image
                  src="/illustrations/We Grow Life (artwork).png"
                  alt="We Grow Life — Ori Company"
                  width={420}
                  height={420}
                  className="object-contain relative z-10 rounded-2xl"
                />
              </div>
            </div>

            {/* Text — Revision 02 item 10: two-line header split */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#111" }}>
                WGL Stands For:
                <br />
                <span
                  className="italic"
                  style={{ color: "#7BC49A", fontSize: "1.15em" }}
                >
                  &ldquo;We Grow Life&rdquo;
                </span>
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#555" }}>
                <p>
                  We Grow Life is not just a tagline — it&apos;s a philosophy. At WGL Consulting, we believe that
                  the cannabis plant, when properly cultivated and properly deployed, is a vehicle for healing,
                  community development, and economic empowerment.
                </p>
                {/* Revision 02 item 11: explicit space between Ori and ( */}
                <p>
                  Ori Company operates as the trade brand of WGL Consulting LLC — a name that reflects our
                  broader vision. <em style={{ color: "#333" }}>Ori</em>{" "}(from Yoruba and Hebrew traditions)
                  speaks to light, wisdom, and personal destiny. It&apos;s the identity we&apos;ve chosen for
                  a mission bigger than consulting.
                </p>
                <p>
                  We grow operations. We grow compliance. We grow communities. That&apos;s what
                  We Grow Life means in practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#B088CC" }}>
            OUR MISSION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#111" }}>
            Community Development Through Education
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-16 leading-relaxed" style={{ color: "#666" }}>
            The cannabis industry is young, complex, and full of barriers — especially for communities that have been most impacted by prohibition. WGL Consulting&apos;s mission is to lower those barriers through expertise, education, and access.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl text-left"
                style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
              >
                <div
                  className="text-xs font-bold tracking-widest mb-3"
                  style={{ color: v.accent }}
                >
                  {v.title.toUpperCase()}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#D4925A" }}>
                FOUNDER & PRINCIPAL
              </p>
              <h2 className="text-3xl font-bold mb-3" style={{ color: "#111" }}>John Che Larracuente</h2>
              <p className="text-base mb-8" style={{ color: "#7BC49A" }}>
                Founder — WGL Consulting LLC / Ori Company
              </p>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#555" }}>
                <p>
                  John Che Larracuente is the founder and principal of WGL Consulting LLC. Based in Washington, D.C., he brings a multidisciplinary background to the cannabis consulting space — combining formal horticulture training, regulatory expertise, and software development.
                </p>
                <p>
                  His work spans the full cannabis ecosystem: hands-on cultivation consulting, ABCA compliance navigation, community education programs, and the development of digital tools through the Ori Company platform.
                </p>
                <p>
                  The vision behind Ori Company is a long-term one — building infrastructure, tools, and expertise that serves cannabis operators and communities for decades.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#111" }}>
                Background & Credentials
              </h3>
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
                >
                  <span
                    className="text-xl flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{ background: `${c.color}18`, color: c.color }}
                  >
                    {c.icon}
                  </span>
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ color: "#111" }}>{c.label}</div>
                    <div className="text-xs leading-relaxed" style={{ color: "#777" }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ori Ecosystem Vision */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#B088CC" }}>
              BROADER VISION
            </p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#111" }}>The Ori Ecosystem</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#666" }}>
              WGL Consulting is one node in a larger ecosystem. Here&apos;s how the pieces connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                logo: "/logos/Ori-Badge04.png",
                name: "WGL Consulting",
                desc: "The consulting firm. Medical cannabis, compliance, cultivation, and operations.",
                color: "#7BC49A",
                status: "Active",
                logoWide: false,
              },
              {
                logo: "/logos/ORI Logo-08.png",
                name: "Ori Corp",
                desc: "The corporate entity. Enterprise partnerships, investment, and development.",
                color: "#B088CC",
                status: "Coming Soon",
                logoWide: true,
              },
              {
                logo: "/icons/ORI Icon14.png",
                name: "Ori App",
                desc: "The community platform. Connecting operators, growers, and the cannabis ecosystem.",
                color: "#7BC49A",
                status: "Beta",
                logoWide: false,
              },
            ].map((node) => (
              <div
                key={node.name}
                className="p-7 rounded-2xl flex flex-col"
                style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={node.logo}
                    alt={node.name}
                    width={node.logoWide ? 52 : 32}
                    height={32}
                    className="object-contain"
                  />
                  <span
                    className="text-xs font-semibold tracking-wide px-2 py-0.5 rounded"
                    style={{ background: `${node.color}18`, color: node.color }}
                  >
                    {node.status}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#111" }}>{node.name}</h3>
                <p className="text-sm" style={{ color: "#777" }}>{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ borderTop: "1px solid #e5e5e5" }}>
        <Image
          src="/logos/Ori-Badge04.png"
          alt="Ori Company"
          width={56}
          height={56}
          className="object-contain mx-auto mb-8"
        />
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#111" }}>
          Grow with <span style={{ color: "#7BC49A" }}>Ori Company</span>
        </h2>
        <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#666" }}>
          Ready to build something? Whether you&apos;re launching, scaling, or navigating compliance — let&apos;s connect.
        </p>
        <Link
          href="/contact"
          className="btn-sage inline-block px-10 py-4 rounded-full font-semibold text-base"
          style={{ background: "#7BC49A", color: "#000" }}
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
