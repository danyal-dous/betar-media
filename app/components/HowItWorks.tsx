const steps = [
  {
    step: "01",
    title: "Strategy Call",
    description:
      "We map your goals, your audience, and which content format will generate the best ROI for your business.",
  },
  {
    step: "02",
    title: "We Come to You",
    description:
      "Our crew arrives at your location with a full production setup. All you need to do is show up and be yourself.",
  },
  {
    step: "03",
    title: "Record & Capture",
    description:
      "We handle all the technical work — audio, video, lighting. You focus on sharing your expertise.",
  },
  {
    step: "04",
    title: "Content Delivered",
    description:
      "Edited episodes, clips, thumbnails and social assets delivered to your inbox. Ready to publish.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 lg:py-36 bg-[#0A0A0A] border-t border-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D4A853] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            The Process
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5F0E8] leading-tight">
            Dead Simple. Every Time.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center lg:items-center lg:text-center gap-5">
                {/* Circle */}
                <div className="w-16 h-16 rounded-full bg-[#111111] border border-[#D4A853]/30 flex items-center justify-center relative z-10">
                  <span className="text-[#D4A853] font-black text-sm">{step.step}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F5F0E8] mb-2">{step.title}</h3>
                  <p className="text-[#F5F0E8]/40 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#F5F0E8]/40 text-sm mb-6">Ready to start turning your expertise into content that works?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A0A0A] px-8 py-4 rounded-full text-base font-bold hover:bg-[#E8C478] transition-all duration-200 hover:scale-105 shadow-[0_0_40px_rgba(212,168,83,0.2)]"
          >
            Start with a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
