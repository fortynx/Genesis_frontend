"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const initiatives = [
  {
    id: "bookbag",
    title: "Book Bag Program",
    content:
      "Our unique phonetic-based reading program in preschool helps children navigate the complexities of reading through various phonograms and orthogonal challenges. The Book Bag Program features a series of 120 books designed to guide children to become proficient readers by the age of 6 years. This program supports children in developing a deep understanding of language and a love for reading.",
  },
  {
    id: "student",
    title: "Student-Led Presentations",
    content:
      "Students present projects and learning outcomes regularly to build confidence, communication skills, and ownership of learning.",
  },
  {
    id: "adhvan",
    title: "Adhvan",
    content:
      "Adhvan is an inter-house learning challenge that promotes creativity, collaboration, and teamwork among students.",
  },
  {
    id: "curio",
    title: "Curio",
    content:
      "Curio is a maker and innovation club where students explore STEM concepts through hands-on activities and mini-projects.",
  },
  {
    id: "mathathon",
    title: "Math-a-Thon",
    content:
      "Math-a-Thon is a school-wide mathematics event that encourages problem-solving, logical thinking, and numeracy through engaging challenges and friendly competition.",
  },
  {
    id: "lekhan",
    title: "Lekhan",
    content:
      "Lekhan is a creative writing initiative designed to strengthen vocabulary, expression, and storytelling skills among students.",
  },
  {
    id: "thinkblink",
    title: "Think Blink",
    content:
      "Think Blink includes quick-thinking challenges and idea games that sharpen reasoning skills, speed, and mental agility.",
  },
  {
    id: "readathon",
    title: "Read-a-Thon",
    content:
      "Read-a-Thon is a reading drive that motivates students to read widely, track progress, and develop a lifelong reading habit.",
  },
  {
    id: "abode",
    title: "ABODE-Ed",
    content:
      "ABODE-Ed is an enrichment initiative that includes workshops, guest lectures, and experiential learning opportunities beyond the classroom.",
  },
  {
    id: "funfriday",
    title: "Fun Friday",
    content:
      "Fun Friday features weekly activities focused on social-emotional learning, relaxation, arts, games, and team bonding.",
  },
];

export default function DifferencePage() {
  const [openId, setOpenId] = useState<string | null>("bookbag");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO SECTION */}
      <header className="relative bg-[#202a22] text-white pt-32 pb-32 md:pt-40 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            GENESIS Initiatives
          </h1>
          <p className="mt-4 opacity-80">
            GENESIS Life › GENESIS Initiatives
          </p>
        </div>
      </header>

      <main className="flex-1">
        {/* INTRO */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-gray-700 leading-relaxed">
            At GENESIS, we believe learning goes beyond the classroom. Our
            initiatives are thoughtfully designed to nurture curiosity,
            creativity, confidence, and holistic development in every child.
          </p>
        </section>

        {/* IMAGE */}
        <section className="max-w-6xl mx-auto px-6 py-6">
          <Image
            src="/initiative-1.jpg"
            alt="Genesis Initiative"
            width={1800}
            height={500}
            className="rounded-lg object-cover w-full h-64"
          />
        </section>

        {/* ACCORDION */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          {initiatives.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="border-b border-gray-300 py-5">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <span className="text-2xl text-gray-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                )}
              </div>
            );
          })}
        </section>
      </main>

      <Footer />

      {/* HERO ANIMATION */}
      <style jsx>{`
        .ball {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #c9a227;
          border-radius: 50%;
          opacity: 0.75;
          animation: float 10s infinite ease-in-out;
        }
        .ball-1 { top: 20%; left: 15%; }
        .ball-2 { top: 60%; left: 30%; animation-delay: 2s; }
        .ball-3 { top: 35%; right: 20%; animation-delay: 4s; }
        .ball-4 { bottom: 25%; right: 35%; animation-delay: 6s; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
