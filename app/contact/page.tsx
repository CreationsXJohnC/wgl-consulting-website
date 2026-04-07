import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ori Company / WGL Consulting",
  description: "Get in touch with WGL Consulting LLC / Ori Company. Medical cannabis consulting, compliance, cultivation, and operations.",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#000" }}>
      {/* Header */}
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(123,196,154,0.06) 0%, transparent 70%)",
        }}
      >
        <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#7BC49A" }}>
          REACH OUT
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact</h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#888" }}>
          Tell us about your project, your operation, or your question. We&apos;ll get back to you directly.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/logos/Ori-Badge04.png"
                alt="Ori Company"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <div className="text-sm font-semibold text-white">ORI COMPANY</div>
                <div className="text-xs" style={{ color: "#7BC49A" }}>WGL CONSULTING LLC</div>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <div>
                <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: "#7BC49A" }}>
                  EMAIL
                </p>
                <a
                  href="mailto:wglconsultingdc@gmail.com"
                  className="text-base text-white transition-colors duration-200"
                >
                  wglconsultingdc@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: "#7BC49A" }}>
                  LOCATION
                </p>
                <p className="text-base text-white">Washington, D.C.</p>
              </div>
            </div>

            {/* What to expect */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: "#0d0d0d", border: "1px solid #1a1a1a" }}
            >
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                What happens when you reach out?
              </h3>
              <ul className="space-y-3">
                {[
                  "We review your inquiry and research your situation",
                  "We respond within 1–2 business days",
                  "If there's a fit, we schedule a discovery call",
                  "From there, we propose the right scope of work",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#888" }}>
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "#7BC49A18", color: "#7BC49A" }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subject options */}
            <div className="mt-8">
              <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#888" }}>
                COMMON SUBJECTS
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Compliance Consultation",
                  "Cultivation Consulting",
                  "Licensing Support",
                  "Operations Review",
                  "General Inquiry",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      background: "#1a1a1a",
                      color: "#888",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
