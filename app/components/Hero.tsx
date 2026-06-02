"use client";

import { ArrowRight, Mic, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#D4A853 1px, transparent 1px), linear-gradient(90deg, #D4A853 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#D4A853]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#D4A853]/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <Mic size={13} className="text-[#D4A853]" />
          <span className="text-[#D4A853] text-xs font-semibold tracking-widest uppercase">
            Western Sydney&apos;s Podcast & Video Studio
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95] text-[#F5F0E8] mb-6 animate-fade-up">
          Your Story.
          <br />
          <span className="text-[#D4A853]">Your Authority.</span>
          <br />
          On Camera.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#F5F0E8]/50 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          We turn your expertise into high-quality podcast and video content that builds trust,
          attracts clients, and grows your brand — without eating your week.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
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
        <div className="mt-20 grid grid-cols-3 gap-px bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#242424] max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
          {[
            { value: "300+", label: "Episodes Produced" },
            { value: "6+", label: "Podcast Shows" },
            { value: "5★", label: "Client Reviews" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111111] px-6 py-6 text-center">
              <div className="text-3xl font-black text-[#D4A853] mb-1">{stat.value}</div>
              <div className="text-xs text-[#F5F0E8]/40 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}
