import { useRef, useEffect } from "react";

const media = [
  { type: "image", src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { type: "video", src: "/sample.mp4" },
  { type: "image", src: "https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { type: "image", src: "https://images.unsplash.com/photo-1599458349289-18f0ee82e6ed?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { type: "image", src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const looped = [...media, ...media];

const SPEED = 1.2; // px per frame — noticeable but still elegant

export default function Carousel() {
  const stripRef = useRef(null);
  const rafRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = stripRef.current;

    const tick = () => {
      if (el && !isPaused.current) {
        el.scrollLeft += SPEED;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="w-full py-20 overflow-hidden">
      {/* HEADER */}
      <div className="px-8 md:px-16 mb-10">
        <p className="text-xs tracking-[0.3em] uppercase opacity-60">
          Highlights
        </p>
        <h2 className="text-2xl md:text-3xl mt-2 tracking-wide">
          Featured Looks
        </h2>
      </div>

      {/* STRIP */}
      <div
        ref={stripRef}
        className="flex overflow-x-scroll no-scrollbar px-8 md:px-16 gap-[6px]"
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; }}
      >
        {looped.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[78vw] md:w-[420px] h-[520px] overflow-hidden group"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                draggable={false}
                className="w-full h-full object-cover transition duration-700
                  group-hover:scale-[1.04] group-hover:-translate-y-[4px]"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}