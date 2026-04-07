import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#000", borderTop: "1px solid #1a1a1a" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/Ori-Badge04.png"
                alt="Ori Company"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-white font-semibold tracking-wide">ORI COMPANY</span>
                <span style={{ color: "#7BC49A" }} className="text-xs font-light tracking-widest">WGL CONSULTING LLC</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
              Full service medical cannabis consulting firm. Community development through education.
            </p>
            <p className="text-xs font-semibold tracking-widest" style={{ color: "#7BC49A" }}>
              WE GROW LIFE
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-widest text-white uppercase mb-1">Navigation</h4>
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "#888" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* External Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-widest text-white uppercase mb-1">Ecosystem</h4>
            <a
              href="https://ori-company-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-200"
              style={{ color: "#888" }}
            >
              Ori App (Beta) ↗
            </a>
            <a
              href="https://drpesos-growcoach-ai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-200"
              style={{ color: "#888" }}
            >
              Dr. Pesos Grow Coach AI ↗
            </a>
            <span className="text-sm" style={{ color: "#444" }}>
              Ori Corp — Coming Soon
            </span>
            <div className="mt-4">
              <a
                href="mailto:wglconsultingdc@gmail.com"
                className="text-sm"
                style={{ color: "#7BC49A" }}
              >
                wglconsultingdc@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid #1a1a1a" }}
        >
          <p className="text-xs" style={{ color: "#444" }}>
            © {new Date().getFullYear()} WGL Consulting LLC. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#444" }}>
            Operating under trade name <span style={{ color: "#7BC49A" }}>Ori Company</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
