// components/AtAGlance.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    id: 0,
    slug: "/programs",
    label: "Our Programs",
    color: "bg-[#e45a4d]",
    image: "/programs.jpg",
    title: "Our Programs",
    desc: "From Montessori Preschool to Grade 12, offering an integrated Cambridge and CBSE curriculum with specialised pathways from Grade 8.",
  },
  {
    id: 1,
    slug: "/difference",
    label: "The GENESIS difference",
    color: "bg-[#a6d8d8]",
    image: "/difference.jpg",
    title: "The GENESIS difference",
    desc: "Personalised learning, strong foundation in literacy and STEM, and character education.",
  },
  {
    id: 2,
    slug: "/campus",
    label: "Our Campus",
    color: "bg-[#3b84a0]",
    image: "/campus.jpg",
    title: "Our Campus",
    desc: "A safe, modern, green campus built to foster academic and emotional growth.",
  },
  {
    id: 3,
    slug: "/admissions",
    label: "Admission Process",
    color: "bg-[#f2c94c]",
    image: "/admissions.jpg",
    title: "Admission Process",
    desc: "Simple & transparent admission with assistance and guidance for parents.",
  },
];

export default function AtAGlance() {
  // activeIndex = currently selected (clicked) tab
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // previewIndex = currently hovered preview (changes image only for preview)
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  // which image to show: preview (hover) overrides active
  const shownIndex = previewIndex ?? activeIndex;
  const shown = tabs[shownIndex];

  return (
    <section id="at-a-glance" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8">At a Glance</h2>

        <div className="grid md:grid-cols-12 gap-6 items-center">
          {/* left stacked menu */}
          <div className="md:col-span-4 space-y-4">
            {tabs.map((tab, i) => {
              const isActive = i === activeIndex;
              return (
                <Link
                  key={tab.id}
                  href={tab.slug}
                  onMouseEnter={() => setPreviewIndex(i)}
                  onMouseLeave={() => setPreviewIndex(null)}
                  // clicking navigates; we also update activeIndex so selected appearance changes immediately
                  onClick={() => setActiveIndex(i)}
                  className={`block ${tab.color} text-white px-6 py-8 w-full text-left flex justify-between items-center font-semibold transition-transform duration-150
                    ${isActive ? "ring-4 ring-white/30 transform scale-[1.01]" : "opacity-95 hover:opacity-100 hover:scale-[1.01]"}`}
                >
                  <span className="text-lg md:text-base">{tab.label}</span>
                  <span className="text-2xl opacity-80">→</span>
                </Link>
              );
            })}
          </div>

          {/* right image card */}
          <div className="md:col-span-8">
            <div className="relative rounded-lg overflow-hidden h-72 shadow-lg">
              <Image
                src={shown.image}
                alt={shown.title}
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-black/45 flex items-center">
                <div className="max-w-2xl ml-6 md:ml-12 text-white px-4">
                  <h3 className="text-3xl font-bold">{shown.title}</h3>
                  <p className="mt-3 text-sm md:text-base">{shown.desc}</p>

                  <div className="mt-6 flex items-center gap-4">
                    {/* Learn more opens the actual page */}
                    <Link
                      href={shown.slug}
                      className="px-5 py-2 bg-white/20 border border-white rounded-full hover:bg-white/30"
                    >
                      Learn More
                    </Link>

                    {/* quick small preview dots */}
                    <div className="hidden md:flex items-center gap-2 ml-4">
                      {tabs.map((_, j) => (
                        <button
                          key={j}
                          onClick={() => {
                            setActiveIndex(j);
                            setPreviewIndex(null);
                          }}
                          aria-label={`Show ${tabs[j].label}`}
                          className={`w-3 h-3 rounded-full ${j === shownIndex ? "bg-white" : "bg-white/40"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}
