import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const credentials = [
  "300+ podcast episodes produced",
  "Western Sydney's go-to podcast producer",
  "On-location specialist — any site, any setting",
  "Passionate about fatherhood, growth & high performance",
  "Trusted by founders, trades, consultants & coaches",
];

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4A853]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: visual block */}
          <div className="relative">
            <div className="aspect-[4/5] bg-[#111111] rounded-2xl border border-[#1A1A1A] overflow-hidden relative">
              <Image
                src="/nick.png"
                alt="Nick Betar — Founder, Betar Media"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle bottom gradient so name badge sits cleanly */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A]/70 to-transparent pointer-events-none" />
              {/* Gold corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#D4A853]/40 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#D4A853]/40 rounded-bl-2xl" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#D4A853] text-[#0A0A0A] rounded-2xl px-6 py-4 shadow-[0_20px_60px_rgba(212,168,83,0.3)]">
              <p className="text-3xl font-black">300+</p>
              <p className="text-xs font-bold uppercase tracking-wider mt-0.5">Episodes</p>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <p className="text-[#D4A853] text-xs font-bold uppercase tracking-[0.3em] mb-5">
              Meet the Founder
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F5F0E8] leading-tight mb-6">
              Hi, I&apos;m Nick.
              <br />
              <span className="text-[#D4A853]">Western Sydney&apos;s</span>
              <br />
              Podcast Guy.
            </h2>
            <p className="text-[#F5F0E8]/50 text-base leading-relaxed mb-6">
              I started Betar Media because I kept watching talented business owners stay invisible
              while their competitors grew online. They had the expertise, the stories, the
              credibility — they just didn&apos;t have the time or the team to capture it.
            </p>
            <p className="text-[#F5F0E8]/50 text-base leading-relaxed mb-10">
              So we built the solution: a mobile podcast and video studio that comes to you,
              handles everything, and turns your best thinking into content that actually works.
              No fluff. No wasted hours. Just results.
            </p>

            <ul className="space-y-3 mb-10">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#D4A853] flex-shrink-0" />
                  <span className="text-[#F5F0E8]/70 text-sm">{c}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A0A0A] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#E8C478] transition-colors duration-200"
            >
              Work with Nick
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
