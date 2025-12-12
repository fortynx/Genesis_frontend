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
    title: "Student–Led Presentations",
    content:
      "Students present projects and learning outcomes regularly to build confidence and communication skills. Our student-led model encourages ownership of learning.",
  },
  {
    id: "adhvan",
    title: "Adhvan",
    content: "Adhvan is our inter-house learning challenge that emphasises creativity and teamwork.",
  },
  {
    id: "curio",
    title: "Curio",
    content: "Curio is a maker/innovation club where students experiment with STEM activities and mini-projects.",
  },
  {
    id: "mathathon",
    title: "Math-a-Thon",
    content: "A school-wide math event to promote numeracy and problem solving through friendly competition.",
  },
  {
    id: "lekhan",
    title: "Lekhan",
    content: "Creative writing initiative to develop vocabulary, expression and storytelling.",
  },
  {
    id: "thinkblink",
    title: "Think Blink",
    content: "Short idea-challenges and quick-thinking games that build reasoning and agility.",
  },
  {
    id: "readathon",
    title: "Read-a-Thon",
    content: "A reading drive that motivates students to read widely and track progress.",
  },
  {
    id: "abodeed",
    title: "GENESIS-Ed",
    content: "An enrichment module with workshops, guest lectures and experiential learning.",
  },
  {
    id: "funfriday",
    title: "Fun Friday",
    content: "Weekly activities for social-emotional learning and relaxation: arts, games and team bonding.",
  },
];

export default function DifferencePage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <header className="bg-[#0a1f2c] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* UPDATED SCHOOL NAME */}
          <h1 className="text-4xl font-extrabold">GENESIS Initiatives</h1>
          <p className="mt-2 opacity-80">GENESIS Life › GENESIS Initiatives</p>
        </div>
      </header>

      <main className="flex-1">
        {/* Intro */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-gray-700 leading-relaxed">
            We are dedicated to providing our students with enriching and diverse experiences that extend beyond the
            traditional classroom. Our initiatives and programs are designed to foster curiosity, creativity, and
            critical thinking, ensuring holistic development for every child.
          </p>
        </section>

        {/* Image row */}
        <section className="max-w-6xl mx-auto px-6 py-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded overflow-hidden shadow">
              <Image
                src="/initiative-1.jpg"
                alt="initiative 1"
                width={1200}
                height={500}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="rounded overflow-hidden shadow">
              <Image
                src="/initiative-2.jpg"
                alt="initiative 2"
                width={1200}
                height={500}
                className="object-cover w-full h-64"
              />
            </div>
          </div>
        </section>

        {/* Description + Accordion */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Book Bag Program</h2>
            <p className="text-gray-700">
              Our Book Bag program supports early readers with a curated set of books and guided activities to foster a
              love of reading and fluent decoding skills.
            </p>
          </div>

          {/* Accordion List */}
          <div className="bg-white border rounded-md divide-y">
            {initiatives.map((it) => {
              const isOpen = openId === it.id;
              return (
                <div key={it.id} className="group">
                  <button
                    onClick={() => setOpenId(isOpen ? null : it.id)}
                    className="w-full text-left px-6 py-6 flex items-center justify-between hover:bg-gray-50"
                  >
                    <span className="text-gray-800 font-medium">{it.title}</span>
                    {/* + icon rotates */}
                    <span
                      className={`ml-4 text-gray-400 transform transition-transform duration-200 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M2 8H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`px-6 pb-6 transition-[max-height,opacity] duration-300 overflow-hidden ${
                      isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600">{it.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
