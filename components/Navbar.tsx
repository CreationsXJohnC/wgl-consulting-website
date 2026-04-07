"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.95)" : "#000",
        borderBottom: "1px solid #1a1a1a",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logos/Ori-Badge04.png"
            alt="Ori Company"
            width={36}
            height={36}
            className="object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="text-white font-semibold text-sm tracking-wide">ORI COMPANY</span>
            <span style={{ color: "#7BC49A" }} className="text-xs font-light tracking-widest">WGL CONSULTING LLC</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors duration-200"
              style={{
                color: pathname === link.href ? "#7BC49A" : "#aaaaaa",
              }}
            >
              {link.label}
            </Link>
          ))}
          {/* Contact styled as a standout button */}
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border"
            style={{
              borderColor: pathname === "/contact" ? "#7BC49A" : "#7BC49A",
              color: pathname === "/contact" ? "#000" : "#7BC49A",
              background: pathname === "/contact" ? "#7BC49A" : "transparent",
            }}
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#fff",
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#fff",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#fff",
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(0,0,0,0.97)", borderTop: "1px solid #2a2a2a" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium py-1"
              style={{ color: pathname === link.href ? "#7BC49A" : "#cccccc" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-6 py-3 rounded-full text-sm font-semibold text-center border"
            style={{ borderColor: "#7BC49A", color: "#7BC49A" }}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
