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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const shownIndex = previewIndex ?? activeIndex;
  const shown = tabs[shownIndex];

  return (
    <section id="about" className="py-12 bg-white" >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">At a Glance</h2>

      <div className="max-w-4xl mx-auto px-4">
        {/* container: on mobile stack image above menu; on md show side-by-side */}
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg md:h-72">
          {/* RIGHT IMAGE (order-1 on mobile so image is on top) */}
          <div className="relative md:w-2/3 w-full md:order-2 order-1 md:h-full h-64">
            <Image src={shown.image} alt={shown.title} fill className="object-cover" priority />

            <div className="absolute inset-0 bg-black/55 flex items-center">
              <div className="px-6 text-white max-w-xl">
                <h3 className="text-xl md:text-2xl font-bold">{shown.title}</h3>
                <p className="mt-2 text-sm md:text-base">{shown.desc}</p>

                <Link
                  href={shown.slug}
                  className="inline-block mt-4 px-5 py-2 bg-white/20 border border-white rounded-full hover:bg-white/30"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* LEFT MENU (order-2 on mobile so it stacks below image) */}
          <div className="md:w-1/3 w-full flex flex-col md:order-1 order-2">
            {tabs.map((tab, i) => {
              const isActive = i === activeIndex;
              return (
                <Link
                  key={tab.id}
                  href={tab.slug}
                  onMouseEnter={() => setPreviewIndex(i)}
                  onMouseLeave={() => setPreviewIndex(null)}
                  onClick={() => setActiveIndex(i)}
                  className={`${tab.color} text-white px-6 py-4 flex items-center justify-between font-semibold group transition-all flex-1 min-h-[64px]
                    ${isActive ? "scale-[1.01] ring-4 ring-white/30" : "opacity-95 hover:opacity-100"}`}
                >
                  <span className="text-sm md:text-base">{tab.label}</span>
                  <span className="text-2xl transition-opacity duration-150 opacity-0 group-hover:opacity-100">→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
