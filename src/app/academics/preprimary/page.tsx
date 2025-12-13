"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function PrePrimaryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  const activePage = "preprimary";

  const aboutDropdown = [
    { title: "Vision & Values", href: "/about/vision" },
    { title: "Our Philosophy", href: "/about/philosophy" },
    { title: "Our Campuses", href: "/about/campuses" },
    
  ];

  const academicsDropdown = [
    { title: "Pre-Primary", href: "/academics/preprimary", key: "preprimary" },
    { title: "Primary", href: "/academics/primary", key: "primary" },
    { title: "Middle", href: "/academics/middle", key: "middle" },
    { title: "High", href: "/academics/high", key: "high" },
  ];

  const lifeDropdown = [
    { title: "Beyond Academics", href: "/life/beyondacademics" },
    
  ];

  const admissionsDropdown = [
    { title: "Admissions", href: "/admissions/process" },
    { title: "Fee Structure", href: "/admissions/fees" },
    { title: "Apply Now", href: "/admissions/apply" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="relative bg-[#313e3b] text-white py-16 px-6 md:px-16">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">

          {/* LOGO */}
          <Link href="/">
            <Image src="/logo.jpg" width={150} height={60} alt="School Logo" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-lg font-medium items-center">

            {/* ABOUT */}
            <li
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                About Us <FiChevronDown />
              </span>
              {aboutOpen && (
                <ul className="absolute mt-2 w-56 bg-white text-black rounded shadow-lg py-2">
                  {aboutDropdown.map((i) => (
                    <li key={i.title}>
                      <Link href={i.href} className="block px-4 py-2 hover:bg-gray-200">
                        {i.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ACADEMICS */}
            <li
              className="relative"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
            >
              <span className="flex items-center gap-1 text-orange-400">
                Academics <FiChevronDown />
              </span>
              {academicsOpen && (
                <ul className="absolute mt-2 w-52 bg-white text-black rounded shadow-lg py-2">
                  {academicsDropdown.map((i) => (
                    <li key={i.key}>
                      <Link
                        href={i.href}
                        className={`block px-4 py-2 hover:bg-gray-200 ${
                          activePage === i.key ? "text-orange-500 font-semibold" : ""
                        }`}
                      >
                        {i.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* LIFE */}
            <li
              className="relative"
              onMouseEnter={() => setLifeOpen(true)}
              onMouseLeave={() => setLifeOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                ABODE Life <FiChevronDown />
              </span>
              {lifeOpen && (
                <ul className="absolute mt-2 w-44 bg-white text-black rounded shadow-lg py-2">
                  {lifeDropdown.map((i) => (
                    <li key={i.title}>
                      <Link href={i.href} className="block px-4 py-2 hover:bg-gray-200">
                        {i.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ADMISSIONS */}
            <li
              className="relative"
              onMouseEnter={() => setAdmissionsOpen(true)}
              onMouseLeave={() => setAdmissionsOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                Admissions <FiChevronDown />
              </span>
              {admissionsOpen && (
                <ul className="absolute mt-2 w-56 bg-white text-black rounded shadow-lg py-2">
                  {admissionsDropdown.map((i) => (
                    <li key={i.title}>
                      <Link href={i.href} className="block px-4 py-2 hover:bg-gray-200">
                        {i.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link href="/gallery" className="hover:text-orange-400">Gallery</Link></li>
          </ul>

          {/* VISIT US */}
          <Link href="/visit-us" className="hidden md:block bg-orange-500 px-6 py-2 rounded-full text-white">
            Visit Us
          </Link>

          {/* MOBILE ICON */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <ul className="md:hidden bg-[#313e3b] p-6 rounded-lg space-y-4">

            <Link href="/" className="text-white font-semibold">Home</Link>

            {/* ABOUT MOBILE */}
            <li>
              <button onClick={() => setAboutOpen(!aboutOpen)} className="flex items-center gap-2 text-white">
                About Us <FiChevronDown />
              </button>
              {aboutOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {aboutDropdown.map((i) => (
                    <Link key={i.title} href={i.href} className="block text-white hover:text-orange-400">
                      {i.title}
                    </Link>
                  ))}
                </ul>
              )}
            </li>

            {/* ACADEMICS MOBILE */}
            <li>
              <button onClick={() => setAcademicsOpen(!academicsOpen)} className="flex items-center gap-2 text-orange-400 font-semibold">
                Academics <FiChevronDown />
              </button>
              {academicsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {academicsDropdown.map((i) => (
                    <Link
                      key={i.key}
                      href={i.href}
                      className={activePage === i.key ? "text-orange-400 font-semibold" : "text-white hover:text-orange-400"}
                    >
                      {i.title}
                    </Link>
                  ))}
                </ul>
              )}
            </li>

            {/* LIFE MOBILE */}
            <li>
              <button onClick={() => setLifeOpen(!lifeOpen)} className="flex items-center gap-2 text-white">
                ABODE Life <FiChevronDown />
              </button>
              {lifeOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {lifeDropdown.map((i) => (
                    <Link key={i.title} href={i.href} className="block text-white hover:text-orange-400">
                      {i.title}
                    </Link>
                  ))}
                </ul>
              )}
            </li>

            {/* ADMISSIONS MOBILE */}
            <li>
              <button onClick={() => setAdmissionsOpen(!admissionsOpen)} className="flex items-center gap-2 text-white">
                Admissions <FiChevronDown />
              </button>
              {admissionsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {admissionsDropdown.map((i) => (
                    <Link key={i.title} href={i.href} className="block text-white hover:text-orange-400">
                      {i.title}
                    </Link>
                  ))}
                </ul>
              )}
            </li>

            <Link href="/gallery" className="text-white hover:text-orange-400">Gallery</Link>

            <Link href="/visit-us" className="block bg-orange-500 text-white py-2 rounded-full text-center">
              Visit Us
            </Link>
          </ul>
        )}

        {/* HERO TEXT */}
        <div className="mt-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">Pre-Primary</h1>
          
        </div>
      </section>

      {/* PREPRIMARY SECTION */}
<section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
  <h2 className="text-3xl font-bold text-green-900 mb-12">Key Features</h2>

  <div className="flex flex-col gap-12">

    {/* Practical Life Activities (Image Left) */}
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/practical.jpg"
          alt="Practical Life Activities"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Practical Life Activities</h3>
        <p className="text-gray-700">
          Practical Life Activities are foundational to our Preschool Program, offering children opportunities to develop essential life skills and autonomy. These activities are categorized into three main areas:
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Care of Self:</strong> Activities aimed at helping children develop independence and self-confidence through daily routines.</li>
          <li><strong>Care of Indoor:</strong> Fosters responsibility and respect for the immediate environment.</li>
          <li><strong>Care of Outdoor:</strong> Engages children in tasks that teach them to care for the broader environment, instilling connection to nature.</li>
        </ul>
      </div>
    </div>

    {/* Sensorial (Image Right) */}
    <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/sensorial.jpg"
          alt="Sensorial"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Sensorial</h3>
        <p className="text-gray-700">
          The Sensorial area caters to enhancing children’s sensory perception and cognitive abilities.
        </p>
        <p className="text-gray-700 mt-2"><strong>Sensory Activities:</strong> These activities encourage children to explore and interact with different senses, helping them develop awareness of color, weight, shape, texture, size, sound, smell, and taste.</p>
      </div>
    </div>

    {/* Language Enrichment (Image Left) */}
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/language.jpg"
          alt="Language Enrichment"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Language Enrichment</h3>
        <p className="text-gray-700">
          Language development is a key focus in our Preschool program, fostering early literacy and communication skills.
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
          <li>Writing Skills</li>
          <li>Reading and Comprehension</li>
          <li>Grammar</li>
          <li>Rhyming Words</li>
        </ul>
        <p className="text-gray-700 mt-2">
          The ABODE Book Bag Program helps build a strong foundation for reading, comprehension, and vocabulary enrichment.
        </p>
      </div>
    </div>

    {/* Logic (Image Right) */}
    <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/logic.jpg"
          alt="Logic"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Logic</h3>
        <p className="text-gray-700">
          The Logic area introduces pre-math concepts that lay the groundwork for future mathematical understanding using concrete materials.
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
          <li>Pre-Math Concepts</li>
          <li>Arithmetic</li>
          <li>Place Value</li>
          <li>Four Operations</li>
        </ul>
      </div>
    </div>

    {/* Culture (Image Left) */}
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/culture.jpg"
          alt="Culture"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Culture</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Art:</strong> Creative activities encouraging self-expression.</li>
          <li><strong>History:</strong> Simple concepts of past and present.</li>
          <li><strong>Botany:</strong> Introduction to plant life.</li>
          <li><strong>Zoology:</strong> Study of animals and habitats.</li>
          <li><strong>Geography:</strong> Basic maps and geographical concepts.</li>
          <li><strong>Culture:</strong> Exploration of various cultures.</li>
        </ul>
      </div>
    </div>

    {/* Enrichment (Image Right) */}
    <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/enrichment.jpg"
          alt="Enrichment"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Enrichment</h3>
        <p className="text-gray-700">
          Our Enrichment Program in Preschool gives students experience in a variety of activities, supporting personal growth.
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Music:</strong> Rhythm, melody, and Carnatic vocal exercises.</li>
          <li><strong>Dance:</strong> Creative movement, coordination, and rhythm.</li>
          <li><strong>Gymnastics:</strong> Strength, flexibility, and gross motor skills.</li>
          <li><strong>Art:</strong> Integrated with culture topic exploration.</li>
          <li><strong>Sports:</strong> Basics of various sports promoting fitness and teamwork.</li>
        </ul>
      </div>
    </div>

    {/* Montessori Differentiators (Image Left) */}
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/montessor.jpg"
          alt="Montessori Differentiators"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Montessori Differentiators</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
          <li>Mixed-Age Classrooms</li>
          <li>Personalized Lessons</li>
          <li>Multisensory Learning</li>
          <li>Prepared Environment</li>
          <li>Montessori Materials</li>
        </ul>
      </div>
    </div>

    {/* Abode Differentiators (Image Right) */}
    <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/montesory.jpg"
          alt="Abode Differentiators"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Abode Differentiators</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
          <li>1.Early Readers Program - Our unique phonetic-based reading program helps children master various phonograms and overcome reading challenges step by step. With a series of 120 books, it is designed to guide them toward becoming proficient readers by the age of 6.</li>
          <li>2.Student Led Presentations - Independent demonstration of Montessori learning in Preschool</li>
<li>3.Enrichment Program - Our Enrichment Program in Preschool is designed to give experience to students in a variety of activities, helping them identify their interests and support their personal growth.</li>
<li>4.Learning Spaces - A spacious, thoughtfully designed campus with bright classrooms and an outdoor area that encourages exploration and active learning.</li>
        </ul>
      </div>
    </div>

  </div>
</section>

    </div>
  );
}
