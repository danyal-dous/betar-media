import { Share2, ExternalLink, Link } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#111111] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <Image
              src="/logo-cropped.png"
              alt="Betar Media"
              width={374}
              height={152}
              className="h-10 w-auto"
            />
            <p className="text-[#F5F0E8]/30 text-xs mt-2">Western Sydney&apos;s Podcast & Video Studio</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Services", href: "#services" },
              { label: "About", href: "#about" },
              { label: "Work", href: "#work" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-[#F5F0E8]/30 hover:text-[#D4A853] uppercase tracking-wider transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/betarmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[#F5F0E8]/40 hover:text-[#D4A853] hover:border-[#D4A853]/40 transition-colors"
            >
              <Share2 size={15} />
            </a>
            <a
              href="https://youtube.com/@betarmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[#F5F0E8]/40 hover:text-[#D4A853] hover:border-[#D4A853]/40 transition-colors"
            >
              <ExternalLink size={15} />
            </a>
            <a
              href="https://linkedin.com/company/betarmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[#F5F0E8]/40 hover:text-[#D4A853] hover:border-[#D4A853]/40 transition-colors"
            >
              <Link size={15} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#0F0F0F] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#F5F0E8]/20">
            &copy; {year} Betar Media. All rights reserved.
          </p>
          <p className="text-xs text-[#F5F0E8]/20">
            Based in Western Sydney, NSW, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
