import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">

      {/* PARALLAX IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600"
        alt="Jewelry"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <h1 className="text-[clamp(2.5rem,6vw,5rem)] tracking-[0.2em] font-semibold animate-fadeUp">
          GEM JAM JEWELS
        </h1>

        <p className="mt-4 text-xs tracking-[0.4em] uppercase opacity-80 animate-fadeUp [animation-delay:0.2s]">
          Bold • Playful • Unapologetic
        </p>

        <a
          href="#shop"
          className="mt-8 border border-white px-8 py-3 text-xs tracking-[0.3em] uppercase transition hover:bg-white hover:text-black animate-fadeUp [animation-delay:0.4s]"
        >
          Shop Now
        </a>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 mb-2">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce opacity-80" />
      </div>

    </section>
  );
}