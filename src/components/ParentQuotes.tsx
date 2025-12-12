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

  const next = () => setIndex((i) => (i + 1) % quotes.length);
  const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f6f8fb] relative">

      {/* BACKGROUND WORLD MAP */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <Image src="/bg-map.png" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">Parent Quote</h2>

        <div className="relative flex flex-col md:flex-row items-center gap-12">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 
                       w-10 h-10 bg-white shadow rounded-full justify-center items-center"
          >
            ‹
          </button>

          {/* Avatar */}
          <div className="w-40 h-40 rounded-full shadow overflow-hidden">
            <Image
              src={quotes[index].photo}
              alt={quotes[index].name}
              width={160}
              height={160}
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed text-lg">
              {quotes[index].text}
            </p>
            <p className="mt-4 font-semibold text-[#e07b3a] text-lg">
              {quotes[index].name}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 
                     w-10 h-10 bg-white shadow rounded-full justify-center items-center"
          >
            ›
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-[#436873]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
