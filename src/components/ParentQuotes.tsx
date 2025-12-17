"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const quotes = [
  {
    id: 1,
    name: "Dipti & Mayuresh Jejurkar",
    text:
      "Our daughter, Manva, loves her school and we love the progress she has made. The Book Bag Program at GENESIS helped her learn to read from the age of 4 years and 6 months. The teachers are caring and the environment is very encouraging.",
    photo: "/placeholder-avatar1.png",
  },
  {
    id: 2,
    name: "Hima Kanumuru",
    text:
      "Our older child Siddharth has been part of GENESIS for the last 7 years, and our younger child Abhinav joined 5 years ago. The school focuses not only on academics but also on values and confidence building.",
    photo: "/placeholder-avatar2.png",
  },
  {
    id: 3,
    name: "Archana Anoor",
    text:
      "GENESIS introduced our child to logic and language at an early age. The teachers put in tremendous effort and keep parents well informed about progress.",
    photo: "/placeholder-avatar3.png",
  },
];

export default function ParentQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((i) => (i + 1) % quotes.length);
  const prev = () =>
    setIndex((i) => (i - 1 + quotes.length) % quotes.length);

  return (
    <section className="py-28 bg-gradient-to-b from-white to-[#f6f8fb] relative">
      {/* BACKGROUND MAP */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <Image src="/bg-map.png" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-20 text-center">
          Parent Reviews
        </h2>

        {/* MAIN ROW */}
        <div className="flex items-center justify-center gap-8">
          {/* LEFT ARROW (SMALL) */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="text-lg text-gray-500 hover:text-[#c9a227] transition"
          >
            ←
          </button>

          {/* IMAGE */}
          <div className="w-36 h-36 rounded-full shadow overflow-hidden bg-gray-200 flex-shrink-0">
            <Image
              src={quotes[index].photo}
              alt={quotes[index].name}
              width={144}
              height={144}
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-2xl">
            <p className="text-gray-700 text-xl leading-relaxed">
              {quotes[index].text}
            </p>

            <p className="mt-6 font-semibold text-[#e07b3a] text-lg">
              {quotes[index].name}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Parent at GENESIS School
            </p>
          </div>

          {/* RIGHT ARROW (SMALL) */}
          <button
            onClick={next}
            aria-label="Next review"
            className="text-lg text-gray-500 hover:text-[#c9a227] transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
