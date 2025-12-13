"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const quotes = [
  {
    id: 1,
    name: "Dipti & Mayuresh Jejurkar",
    text:
      "Our daughter, Manva, loves her school and we love the progress she has made. Book bag program helped her learn to read from the age of 4 and 6 months...",
    photo: "/testimonial1.svg",
  },
  {
    id: 2,
    name: "Hima Kanumuru",
    text:
      "Our older kid Siddharth has been going to ABODE for the last 7 years and our younger kid Abhinav joined 5 years ago...",
    photo: "/testimonial2.svg",
  },
  {
    id: 3,
    name: "Archana Anoor",
    text:
      "ABODE introduced our child to logic and language, and teachers have been taking tremendous effort...",
    photo: "/testimonial3.svg",
  },
];

export default function ParentQuotes() {
  const [index, setIndex] = useState(0);

  // AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((i) => (i + 1) % quotes.length);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f6f8fb] relative">

      {/* BACKGROUND MAP */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <Image src="/bg-map.png" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Parent Quote
        </h2>

        <div className="relative flex flex-col items-center">

          {/* Avatar */}
          <div className="w-36 h-36 rounded-full shadow overflow-hidden mb-6">
            <Image
              src={quotes[index].photo}
              alt={quotes[index].name}
              width={144}
              height={144}
              className="object-cover"
            />
          </div>

          {/* Quote text */}
          <p className="text-gray-700 leading-relaxed text-lg max-w-2xl">
            {quotes[index].text}
          </p>

          {/* Name */}
          <p className="mt-4 font-semibold text-[#e07b3a] text-lg">
            {quotes[index].name}
          </p>

          {/* RIGHT ARROW ONLY */}
          <button
            onClick={next}
            aria-label="Next quote"
            className="mt-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-2xl hover:bg-gray-100 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
