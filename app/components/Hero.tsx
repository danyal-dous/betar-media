"use client";

import { ArrowRight, Mic, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#D4A853 1px, transparent 1px), linear-gradient(90deg, #D4A853 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left-side radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#D4A853]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#D4A853]/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
              <Mic size={13} className="text-[#D4A853]" />
              <span className="text-[#D4A853] text-xs font-semibold tracking-widest uppercase">
                Western Sydney&apos;s Podcast & Video Studio
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[#F5F0E8] mb-6 animate-fade-up">
              Your Story.
              <br />
              <span className="text-[#D4A853]">Your Authority.</span>
              <br />
              On Camera.
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg text-[#F5F0E8]/50 max-w-xl mb-10 animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              We turn your expertise into high-quality podcast and video content that builds trust,
              attracts clients, and grows your brand — without eating your week.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up mb-12"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A0A0A] px-8 py-4 rounded-full text-base font-bold hover:bg-[#E8C478] transition-all duration-200 hover:scale-105 shadow-[0_0_40px_rgba(212,168,83,0.3)]"
              >
                Book a Strategy Call
                <ArrowRight size={18} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 border border-[#F5F0E8]/20 text-[#F5F0E8]/70 px-8 py-4 rounded-full text-base font-medium hover:border-[#D4A853]/50 hover:text-[#F5F0E8] transition-all duration-200"
              >
                <Play size={16} className="text-[#D4A853]" />
                See Our Work
              </a>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-px bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#242424] w-full max-w-md animate-fade-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              {[
                { value: "300+", label: "Episodes" },
                { value: "6+", label: "Shows" },
                { value: "5★", label: "Reviews" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#111111] px-4 py-5 text-center">
                  <div className="text-2xl font-black text-[#D4A853] mb-0.5">{stat.value}</div>
                  <div className="text-xs text-[#F5F0E8]/40 uppercase tracking-widest font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Nick's photo ── */}
          <div
            className="relative hidden lg:block animate-fade-up"
            style={{ animationDelay: "0.15s", opacity: 0 }}
          >
            {/* Main photo card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#1A1A1A] aspect-[3/4] w-full max-w-md ml-auto shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              <Image
                src="/nick.png"
                alt="Nick Betar — Founder, Betar Media"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1280px) 50vw, 560px"
                priority
              />
              {/* Bottom gradient + name tag */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent p-6">
                <p className="text-[#F5F0E8] font-bold text-lg">Nick Betar</p>
                <p className="text-[#D4A853] text-sm font-medium">Founder, Betar Media</p>
              </div>
            </div>

            {/* Gold corner accents */}
            <div className="absolute top-3 right-3 w-16 h-16 border-t-2 border-r-2 border-[#D4A853]/50 rounded-tr-2xl pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-16 h-16 border-b-2 border-l-2 border-[#D4A853]/50 rounded-bl-2xl pointer-events-none" />

            {/* Floating mic badge */}
            <div className="absolute -left-6 top-1/3 bg-[#D4A853] text-[#0A0A0A] rounded-2xl px-5 py-3 shadow-[0_20px_50px_rgba(212,168,83,0.4)]">
              <p className="text-2xl font-black leading-none">300+</p>
              <p className="text-xs font-bold uppercase tracking-wider mt-0.5">Episodes</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}
