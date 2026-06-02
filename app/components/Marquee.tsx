export default function Marquee() {
  const items = [
    "Build Better Podcast",
    "Laminar Pro",
    "Rare Energy Podcast",
    "The Betar Project",
    "Blades & Bloodlines",
    "Bridges Of Belief",
    "CVD Glass & Windows",
    "Benchmark OHS",
    "Build Better Podcast",
    "Laminar Pro",
    "Rare Energy Podcast",
    "The Betar Project",
    "Blades & Bloodlines",
    "Bridges Of Belief",
    "CVD Glass & Windows",
    "Benchmark OHS",
  ];

  return (
    <div className="relative bg-[#111111] border-y border-[#1A1A1A] py-5 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#111111] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#111111] to-transparent z-10" />

      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853] inline-block" />
            <span className="text-[#F5F0E8]/40 text-sm font-medium uppercase tracking-widest">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
