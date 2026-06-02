import Image from "next/image";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/betarmedia",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@betarmedia",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/betarmedia",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#242424]">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-cropped.png"
              alt="Betar Media"
              width={374}
              height={152}
              className="h-10 w-auto"
            />
            <p className="text-[#F5F0E8]/50 text-sm leading-relaxed max-w-xs">
              Western Sydney&apos;s mobile podcast and video production studio. We come to you.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-[#2E2E2E] bg-[#161616] flex items-center justify-center text-[#F5F0E8]/50 hover:text-[#D4A853] hover:border-[#D4A853]/50 hover:bg-[#D4A853]/5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[#F5F0E8]/50 hover:text-[#F5F0E8] text-sm transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact / CTA */}
          <div>
            <p className="text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-5">
              Get In Touch
            </p>
            <p className="text-[#F5F0E8]/50 text-sm leading-relaxed mb-5">
              Ready to turn your expertise into content that works? Book a free strategy call with Nick.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A0A0A] px-6 py-3 rounded-full text-sm font-bold hover:bg-[#E8C478] transition-colors duration-200"
            >
              Book a Strategy Call
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#F5F0E8]/30">
            &copy; {year} Betar Media. All rights reserved. Based in Western Sydney, NSW.
          </p>
          <p className="text-xs text-[#F5F0E8]/30">
            Website by{" "}
            <a
              href="https://itechelp.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F0E8]/50 hover:text-[#D4A853] transition-colors duration-200"
            >
              iTech Help
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
