"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Share2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire to a form backend (e.g., Resend, Formspree)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-[#0A0A0A] border-t border-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-[#D4A853] text-xs font-bold uppercase tracking-[0.3em] mb-5">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5F0E8] leading-tight mb-6">
              Let&apos;s Build
              <br />
              <span className="text-[#D4A853]">Your Show.</span>
            </h2>
            <p className="text-[#F5F0E8]/50 text-base leading-relaxed mb-10 max-w-md">
              Book a free strategy call with Nick. We&apos;ll dig into your goals, your audience, and build
              a content plan that actually moves your business forward.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#D4A853]" />
                </div>
                <div>
                  <p className="text-[#F5F0E8] text-sm font-medium">Location</p>
                  <p className="text-[#F5F0E8]/40 text-sm">Western Sydney, NSW — We come to you</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#D4A853]" />
                </div>
                <div>
                  <p className="text-[#F5F0E8] text-sm font-medium">Email</p>
                  <a href="mailto:hello@betarmedia.com" className="text-[#F5F0E8]/40 text-sm hover:text-[#D4A853] transition-colors">
                    hello@betarmedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <Share2 size={16} className="text-[#D4A853]" />
                </div>
                <div>
                  <p className="text-[#F5F0E8] text-sm font-medium">Instagram</p>
                  <a href="https://instagram.com/betarmedia" target="_blank" rel="noopener noreferrer" className="text-[#F5F0E8]/40 text-sm hover:text-[#D4A853] transition-colors">
                    @betarmedia
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="bg-[#111111] border border-[#D4A853]/30 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center mb-5">
                  <Send size={24} className="text-[#D4A853]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F5F0E8] mb-3">Message Sent!</h3>
                <p className="text-[#F5F0E8]/50 text-sm">
                  Nick will be in touch within 24 hours to schedule your strategy call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111111] border border-[#1A1A1A] rounded-2xl p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#F5F0E8]/40 uppercase tracking-widest font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-[#0A0A0A] border border-[#242424] rounded-xl px-4 py-3 text-[#F5F0E8] text-sm placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#D4A853]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#F5F0E8]/40 uppercase tracking-widest font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-[#0A0A0A] border border-[#242424] rounded-xl px-4 py-3 text-[#F5F0E8] text-sm placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#D4A853]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#F5F0E8]/40 uppercase tracking-widest font-medium mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    placeholder="Your Business"
                    className="w-full bg-[#0A0A0A] border border-[#242424] rounded-xl px-4 py-3 text-[#F5F0E8] text-sm placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#D4A853]/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#F5F0E8]/40 uppercase tracking-widest font-medium mb-2">
                    Tell Us About Your Goals
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What do you want to achieve with your podcast or video content?"
                    className="w-full bg-[#0A0A0A] border border-[#242424] rounded-xl px-4 py-3 text-[#F5F0E8] text-sm placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#D4A853]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4A853] text-[#0A0A0A] py-4 rounded-xl font-bold text-sm hover:bg-[#E8C478] transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
                >
                  Book My Strategy Call
                  <Send size={16} />
                </button>

                <p className="text-center text-xs text-[#F5F0E8]/20">
                  No spam. No sales pressure. Just a real conversation about your business.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
