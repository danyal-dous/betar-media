"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#242424]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo-cropped.png"
            alt="Betar Media"
            width={374}
            height={152}
            className="h-10 w-auto"
            style={{ width: "auto" }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#F5F0E8]/60 hover:text-[#D4A853] transition-colors duration-200 tracking-wide uppercase font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#D4A853] text-[#0A0A0A] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#E8C478] transition-colors duration-200"
        >
          Book a Strategy Call
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#F5F0E8] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111111] border-t border-[#242424] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#F5F0E8]/70 hover:text-[#D4A853] text-base font-medium tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-[#D4A853] text-[#0A0A0A] px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#E8C478] transition-colors"
          >
            Book a Strategy Call
          </a>
        </div>
      )}
    </header>
  );
}
