import { useEffect, useRef, useState } from "react";

export default function VideoStrip() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full h-[75vh] relative overflow-hidden"
    >

      {/* VIDEO */}
      <video
        src="/sample.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover scale-105 animate-[slowZoom_12s_linear_infinite]"
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">

        <div
          className={`transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >

          <h2 className="text-white text-[clamp(1.8rem,4vw,3rem)] tracking-[0.3em] uppercase">
            Crafted to Stand Out
          </h2>

          <p className="text-white/70 text-xs tracking-[0.4em] uppercase mt-4">
            Designed for bold expression
          </p>

        </div>

      </div>

    </section>
  );
}