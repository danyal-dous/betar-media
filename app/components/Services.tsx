import { Camera, Mic2, Scissors, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Mic2,
    title: "On-Site Podcast Production",
    description:
      "We bring the full studio to you — on your construction site, in your office, your warehouse. No travel, no tech headaches. Just show up and talk.",
    features: ["Full production setup", "Any location", "Multiple mics & cameras", "Sound-treated setup"],
  },
  {
    icon: Camera,
    title: "Videography & Short-Form Content",
    description:
      "Scroll-stopping videos and clips engineered to convert attention into inquiries. Built natively for LinkedIn, Instagram, and YouTube.",
    features: ["4K cinematic capture", "Short-form clips", "Long-form interviews", "Platform-native edits"],
  },
  {
    icon: Scissors,
    title: "Post-Production & Repurposing",
    description:
      "Full editing, colour grading, captions, and social media repurposing. One recording session becomes a month of content.",
    features: ["Professional editing", "Captions & subtitles", "Content library", "Social repurposing"],
  },
  {
    icon: Lightbulb,
    title: "Strategy & Education",
    description:
      "We guide your messaging, platform selection, and content-to-client conversion so every piece of content does real business work.",
    features: ["Messaging strategy", "Platform selection", "Content calendars", "Lead generation focus"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-[#D4A853] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            What We Do
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5F0E8] leading-tight max-w-xl">
              Stop Wasting Your Best Hours On The Wrong Job
            </h2>
            <p className="text-[#F5F0E8]/50 max-w-sm text-base lg:text-right">
              Content production is a craft. Let us handle it so you can focus on what you actually do best.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#1A1A1A]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-[#0A0A0A] hover:bg-[#111111] transition-colors duration-300 p-8 lg:p-10 flex flex-col gap-6"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 border border-[#D4A853]/20 flex items-center justify-center group-hover:bg-[#D4A853]/20 transition-colors duration-300">
                    <Icon size={22} className="text-[#D4A853]" />
                  </div>
                  <span className="text-[#F5F0E8]/20 text-4xl font-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#F5F0E8] mb-3">{service.title}</h3>
                  <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">{service.description}</p>
                </div>

                <ul className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs text-[#F5F0E8]/40 border border-[#242424] rounded-full px-3 py-1"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#D4A853] font-semibold hover:gap-4 transition-all duration-200 text-sm uppercase tracking-wider"
          >
            Get started with a strategy call
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
