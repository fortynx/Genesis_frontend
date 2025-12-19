"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Expand Horizons",
    subtitle: "Where learning meets creativity",
    image: "/hero1st.jpg",
  },
  {
    id: 2,
    title: "Redefine Possibility",
    subtitle: "A campus built for the future",
    image: "/hero2nd.jpg",
  },
  {
    id: 3,
    title: "Imagine Beyond Limits",
    subtitle: "Discover talent • Build confidence",
    image: "/hero3rd.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden" id="home">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Animated Text */}
          {i === current && (
            <div
              key={current} // IMPORTANT: restart animation on slide change
              className="absolute bottom-20 inset-x-0 text-center px-6"
            >
              {/* HEADING LETTER BY LETTER */}
              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
                {slide.title.split("").map((char, idx) => (
                  <span
                    key={idx}
                    className="char"
                    style={{ animationDelay: `${idx * 0.07}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>

              {/* SUBTITLE LETTER BY LETTER (slower) */}
              <p className="text-white text-base sm:text-lg md:text-2xl mt-4 drop-shadow-lg">
                {slide.subtitle.split("").map((char, idx) => (
                  <span
                    key={idx}
                    className="char"
                    style={{ animationDelay: `${idx * 0.04 + 0.8}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
