import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nick and the Betar Media team made the whole process so easy. The production quality was outstanding — I went from dreading content creation to actually enjoying it. Our podcast has become one of our best lead generation tools.",
    author: "Chris Van Dijk",
    role: "Owner, CVD Glass & Windows",
    initials: "CV",
  },
  {
    quote:
      "Working with Betar Media was seamless from the very first session. Nick has a real talent for bringing out the best in people on camera. Blades & Bloodlines has grown an audience we never expected, and it all started with one conversation.",
    author: "Aidan Biasi",
    role: "Host, Blades & Bloodlines Podcast",
    initials: "AB",
  },
  {
    quote:
      "I was sceptical about podcasting for a B2B safety company, but Nick convinced me otherwise. The professionalism was incredible and the content Betar Media produced has genuinely elevated our brand in the OHS space.",
    author: "Ben Chinwah",
    role: "Director, Benchmark OHS / Laminar Pro",
    initials: "BC",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 lg:py-36 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A853]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D4A853] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Client Results
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5F0E8] leading-tight">
            Don&apos;t Take Our Word For It
          </h2>
        </div>

        {/* Stars */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="text-[#D4A853] fill-[#D4A853]" />
            ))}
            <span className="ml-3 text-[#F5F0E8]/40 text-sm font-medium">5.0 from all clients</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-[#1A1A1A] rounded-2xl p-8 flex flex-col gap-6 hover:border-[#D4A853]/20 transition-colors duration-300"
            >
              <Quote size={28} className="text-[#D4A853]/30" />
              <p className="text-[#F5F0E8]/70 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-4 pt-4 border-t border-[#1A1A1A]">
                <div className="w-10 h-10 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D4A853] font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="text-[#F5F0E8] font-semibold text-sm">{t.author}</p>
                  <p className="text-[#F5F0E8]/40 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
