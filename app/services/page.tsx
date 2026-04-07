import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Ori Company / WGL Consulting",
  description: "Full service medical cannabis consulting — agriculture, indoor horticulture, government compliance, operations, and digital products.",
};

const consultingServices = [
  {
    icon: "/icons/ORI Icon18.png",
    title: "Medical Cannabis",
    desc: "Deep expertise in medical cannabis operations, patient access programs, strain selection, and medical market positioning. We help operators build compliant, patient-focused programs.",
    points: [
      "Medical program development and structuring",
      "Patient access frameworks",
      "Strain selection for medical outcomes",
      "Medical cannabis market positioning",
    ],
    accent: "#7BC49A",
  },
  {
    icon: "/icons/ORI Icon15.png",
    title: "Agriculture & Indoor Horticulture",
    desc: "Decades of hands-on cultivation expertise. We design, optimize, and troubleshoot grow operations of all scales — from small personal grows to large commercial facilities.",
    points: [
      "Grow room design and buildout consultation",
      "Environmental control and HVAC strategy",
      "Crop cycle optimization and SOPs",
      "Yield improvement and quality dialing",
    ],
    accent: "#7BC49A",
  },
  {
    icon: "/icons/ORI Icon16.png",
    title: "Government Compliance & Licensing",
    desc: "Navigate the complex regulatory landscape with confidence. We specialize in ABCA licensing for DC cannabis operators and multi-state compliance frameworks.",
    points: [
      "ABCA licensing application support",
      "DC cannabis regulatory navigation",
      "Compliance program development",
      "Record-keeping and audit preparation",
    ],
    accent: "#B088CC",
  },
  {
    icon: "/icons/ORI Icon14.png",
    title: "Operations Consulting",
    desc: "Build efficient, scalable cannabis operations. From standard operating procedures to team training and supply chain strategy, we help operators run leaner and smarter.",
    points: [
      "SOP development and documentation",
      "Team structure and training programs",
      "Supply chain and vendor management",
      "Operational audits and efficiency reviews",
    ],
    accent: "#D4925A",
  },
];

const drPesosProducts = [
  {
    title: "Dr. Pesos Grow Coach AI",
    status: "Live",
    statusColor: "#7BC49A",
    desc: "An intelligent AI-powered cultivation assistant built for cannabis growers. Get real-time grow advice, diagnose plant health issues, troubleshoot environmental problems, and optimize your entire grow cycle — from clone to harvest.",
    features: [
      "AI-powered plant diagnosis and recommendations",
      "Grow cycle tracking and optimization",
      "Environmental parameter guidance",
      "Nutrient scheduling and deficiency identification",
    ],
    cta: "Launch Grow Coach",
    href: "https://drpesos-growcoach-ai.vercel.app",
    accent: "#7BC49A",
  },
  {
    title: "Dr. Pesos Indoor Cultivation Guidebook",
    status: "Coming Soon",
    statusColor: "#D4925A",
    desc: "A comprehensive, practitioner-written reference guide covering every stage of the indoor cannabis grow cycle. Written by industry professionals, designed for both new and experienced cultivators.",
    features: [
      "Full grow cycle coverage — genetics to harvest",
      "Environmental setup and equipment guides",
      "Pest, pathogen, and deficiency identification",
      "Harvest, cure, and post-processing protocols",
    ],
    cta: "Notify Me",
    href: null,
    accent: "#D4925A",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "#fff" }}>
      {/* Page Header */}
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(123,196,154,0.08) 0%, transparent 70%)",
        }}
      >
        <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#7BC49A" }}>
          WHAT WE OFFER
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#111" }}>Services</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666" }}>
          WGL Consulting delivers full spectrum consulting for cannabis operators, cultivators, and entrepreneurs — from compliance and cultivation to digital tools.
        </p>
      </section>

      {/* Consulting Services */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center" style={{ color: "#111" }}>Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultingServices.map((s) => (
              <div
                key={s.title}
                className="p-8 rounded-2xl"
                style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: "#eaf5ef" }}
                  >
                    <Image src={s.icon} alt={s.title} width={32} height={32} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: "#111" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#777" }}>{s.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm" style={{ color: "#888" }}>
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: s.accent }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Pesos Products */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest mb-6" style={{ color: "#D4925A" }}>
              PRODUCT LINE
            </p>
            {/* Page is white — no invert filter needed */}
            <div className="flex justify-center mb-4">
              <Image
                src="/logos/Dr. Pesos Text.png"
                alt="Dr. Pesos"
                width={280}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#666" }}>
              Tools and resources built by cultivators, for cultivators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drPesosProducts.map((p) => (
              <div
                key={p.title}
                className="flex flex-col p-8 rounded-2xl"
                style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
              >
                <span
                  className="self-start px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-5"
                  style={{
                    background: `${p.statusColor}18`,
                    color: p.statusColor,
                    border: `1px solid ${p.statusColor}33`,
                  }}
                >
                  {p.status}
                </span>

                <h3 className="text-xl font-bold mb-3" style={{ color: "#111" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#777" }}>{p.desc}</p>

                <ul className="space-y-2 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#888" }}>
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 mt-auto">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sage self-start px-6 py-2.5 rounded-full text-sm font-semibold"
                      style={{ background: p.accent, color: "#000" }}
                    >
                      {p.cta} ↗
                    </a>
                  ) : (
                    <span
                      className="self-start px-6 py-2.5 rounded-full text-sm font-semibold"
                      style={{
                        background: "#eee",
                        color: "#999",
                        border: "1px solid #ddd",
                      }}
                    >
                      {p.cta}
                    </span>
                  )}
                  <a
                    href="https://www.johnccreations.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium"
                    style={{ color: "#D4925A" }}
                  >
                    {p.href ? "Available at" : "Shop at"} johnccreations.design ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Platforms */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#B088CC" }}>
              ECOSYSTEM
            </p>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#111" }}>Connected Platforms</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Ori App */}
            <div
              className="flex flex-col p-7 rounded-2xl"
              style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src="/icons/ORI Icon14.png" alt="Ori App" width={28} height={28} className="object-contain" />
                <span
                  className="text-xs font-semibold tracking-widest px-2 py-0.5 rounded"
                  style={{ background: "#7BC49A18", color: "#7BC49A" }}
                >
                  Beta
                </span>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: "#111" }}>Ori App (Beta)</h3>
              <p className="text-sm mb-4" style={{ color: "#666" }}>The Ori Company platform — connecting cultivators, operators, and the cannabis community.</p>
              <a
                href="https://ori-company-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium mt-auto"
                style={{ color: "#7BC49A" }}
              >
                Visit ↗
              </a>
            </div>

            {/* Ori Corp */}
            <div
              className="flex flex-col p-7 rounded-2xl"
              style={{ background: "#f7f7f7", border: "1px solid #e5e5e5" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logos/ORI Logo-08.png" alt="Ori Corp" width={48} height={28} className="object-contain" />
                <span
                  className="text-xs font-semibold tracking-widest px-2 py-0.5 rounded"
                  style={{ background: "#B088CC18", color: "#B088CC" }}
                >
                  Coming Soon
                </span>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: "#111" }}>Ori Corp</h3>
              <p className="text-sm mb-4" style={{ color: "#666" }}>Enterprise arm of the Ori ecosystem. Corporate partnerships, development, and investment.</p>
              {/* Live link per Revision 02 item 8 */}
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ borderTop: "1px solid #e5e5e5" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#111" }}>
            Let&apos;s Talk About Your <span style={{ color: "#7BC49A" }}>Operation</span>
          </h2>
          <p className="text-base mb-8" style={{ color: "#666" }}>
            Every grow, every compliance challenge, every business model is unique. Reach out and let&apos;s find the right consulting approach for your needs.
          </p>
          <Link
            href="/contact"
            className="btn-sage inline-block px-10 py-4 rounded-full font-semibold text-base"
            style={{ background: "#7BC49A", color: "#000" }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
