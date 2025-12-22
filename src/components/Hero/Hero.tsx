"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { id: 1, title: "Expand Horizons", subtitle: "Where learning meets creativity", image: "/hero1st.jpg" },
  { id: 2, title: "Redefine Possibility", subtitle: "A campus built for the future", image: "/hero2nd.jpg" },
  { id: 3, title: "Imagine Beyond Limits", subtitle: "Discover talent • Build confidence", image: "/hero3rd.jpg" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(t);
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
          {/* FULL WIDTH & HEIGHT IMAGE */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-white text-base sm:text-lg md:text-2xl mt-4 drop-shadow-lg">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
