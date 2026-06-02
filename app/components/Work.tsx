import { Play } from "lucide-react";

const projects = [
  {
    title: "Build Better Podcast",
    category: "Construction & Trades",
    description: "A podcast for builders and contractors sharing industry insights and business growth strategies.",
    episodes: "12+ Episodes",
    color: "#1A1A1A",
    accent: "#D4A853",
  },
  {
    title: "Laminar Pro",
    category: "Safety & Compliance",
    description: "Professional podcast for the OHS industry featuring Benchmark's Ben Chinwah, building authority in workplace safety.",
    episodes: "8+ Episodes",
    color: "#1A1A1A",
    accent: "#D4A853",
  },
  {
    title: "Rare Energy Podcast",
    category: "Lifestyle & Business",
    description: "High-energy conversations about entrepreneurship, mindset, and building a life by design.",
    episodes: "20+ Episodes",
    color: "#1A1A1A",
    accent: "#D4A853",
  },
  {
    title: "Blades & Bloodlines",
    category: "Culture & Heritage",
    description: "Unique podcast hosted by Aidan Biasi exploring tradition, craft, and cultural identity.",
    episodes: "15+ Episodes",
    color: "#1A1A1A",
    accent: "#D4A853",
  },
  {
    title: "Bridges Of Belief",
    category: "Faith & Community",
    description: "Thoughtful conversations about faith, community, and personal transformation.",
    episodes: "10+ Episodes",
    color: "#1A1A1A",
    accent: "#D4A853",
  },
  {
    title: "The Betar Project",
    category: "Personal Growth",
    description: "Nick's own show on high performance, fatherhood, and living with intention.",
    episodes: "30+ Episodes",
    color: "#1A1A1A",
    accent: "#D4A853",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 lg:py-36 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#D4A853] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Featured Work
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5F0E8] leading-tight">
              Shows We&apos;ve Built
            </h2>
            <p className="text-[#F5F0E8]/40 text-sm max-w-xs">
              From construction sites to corporate boardrooms — we&apos;ve produced podcasts that actually move the needle.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-[#111111] border border-[#1A1A1A] hover:border-[#D4A853]/30 rounded-2xl p-6 transition-all duration-300 hover:bg-[#141414] cursor-pointer overflow-hidden"
            >
              {/* Play button overlay */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 flex items-center justify-center group-hover:bg-[#D4A853]/20 transition-colors duration-300">
                <Play size={14} className="text-[#D4A853] ml-0.5" />
              </div>

              {/* Number */}
              <p className="text-[#F5F0E8]/10 text-6xl font-black absolute bottom-4 right-5 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </p>

              {/* Category */}
              <span className="inline-block text-xs text-[#D4A853] font-semibold uppercase tracking-widest mb-4 bg-[#D4A853]/10 px-3 py-1 rounded-full">
                {project.category}
              </span>

              <h3 className="text-lg font-bold text-[#F5F0E8] mb-2 pr-8">{project.title}</h3>
              <p className="text-[#F5F0E8]/40 text-sm leading-relaxed mb-5 pr-4">{project.description}</p>

              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
                <span className="text-[#F5F0E8]/30 text-xs font-medium">{project.episodes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
