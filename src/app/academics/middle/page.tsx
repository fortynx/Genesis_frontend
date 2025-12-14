"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import Footer from "@/components/Footer";

export default function MiddlePage() {
  // Mobile menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  const activePage = "middle"; // CURRENT PAGE

  // Dropdown data
  const aboutDropdown = [
    { title: "Vision & Values", href: "/about/vision", key: "vision-values" },
    { title: "Our Philosophy", href: "/about/philosophy", key: "philosophy" },
    
    { title: "Our People", href: "/about/people", key: "people" },
  ];

  const academicsDropdown = [
    {title:"PrePrimary",href:"/academics/preprimary",key:"preprimary"},
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
      <section className="relative bg-[#313e3b] text-white min-h-[80vh] py-16 px-6 md:px-16">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <Link href="/">
          <Image
            src="/logo.jpg"
            width={150}
            height={60}
            alt="School Logo"
            className="cursor-pointer"
          />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-lg font-medium items-center">

            {/* ABOUT */}
            <li
              className="relative group"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                About Us <FiChevronDown />
              </span>
              {aboutOpen && (
                <ul className="absolute mt-2 w-56 bg-white text-black rounded shadow-lg py-2">
                  {aboutDropdown.map((dd) => (
                    <li key={dd.key}>
                      <Link
                        href={dd.href}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ACADEMICS */}
            <li
              className="relative group"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
            >
              <span className="flex items-center gap-1 text-orange-400">
                Academics <FiChevronDown />
              </span>
              {academicsOpen && (
                <ul className="absolute mt-2 w-44 bg-white text-black rounded shadow-lg py-2">
                  {academicsDropdown.map((dd) => (
                    <li key={dd.key}>
                      <Link
                        href={dd.href}
                        className={`block px-4 py-2 hover:bg-gray-200 ${
                          activePage === dd.key ? "text-orange-500 font-semibold" : ""
                        }`}
                      >
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* LIFE */}
            <li
              className="relative group"
              onMouseEnter={() => setLifeOpen(true)}
              onMouseLeave={() => setLifeOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                ABODE Life <FiChevronDown />
              </span>
              {lifeOpen && (
                <ul className="absolute mt-2 w-44 bg-white text-black rounded shadow-lg py-2">
                  {lifeDropdown.map((dd) => (
                    <li key={dd.title}>
                      <Link href={dd.href} className="block px-4 py-2 hover:bg-gray-200">
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ADMISSIONS */}
            <li
              className="relative group"
              onMouseEnter={() => setAdmissionsOpen(true)}
              onMouseLeave={() => setAdmissionsOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                Admissions <FiChevronDown />
              </span>
              {admissionsOpen && (
                <ul className="absolute mt-2 w-56 bg-white text-black rounded shadow-lg py-2">
                  {admissionsDropdown.map((dd) => (
                    <li key={dd.title}>
                      <Link href={dd.href} className="block px-4 py-2 hover:bg-gray-200">
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link href="/gallery" className="hover:text-orange-400">Gallery</Link></li>
          </ul>

          <Link
            href="/visit-us"
            className="hidden md:block bg-orange-500 px-6 py-2 rounded-full text-white"
          >
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
            {/* HOME LINK */}
    <li>
      <Link
        href="/"
        className="block px-4 py-2 text-white hover:text-orange-400 font-semibold"
      >
        Home
      </Link>
    </li>
            {/* ABOUT */}
            <li>
              <button onClick={() => setAboutOpen(!aboutOpen)} className="flex items-center gap-2 text-white">
                About Us <FiChevronDown className="text-orange-400" />
              </button>
              {aboutOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {aboutDropdown.map((dd) => (
                    <li key={dd.key}>
                      <Link href={dd.href} className="block px-4 py-2 text-white hover:text-orange-400">
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ACADEMICS */}
            <li>
              <button onClick={() => setAcademicsOpen(!academicsOpen)} className="flex items-center gap-2 text-orange-400 font-semibold">
                Academics <FiChevronDown />
              </button>
              {academicsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {academicsDropdown.map((dd) => (
                    <li key={dd.key}>
                      <Link
                        href={dd.href}
                        className={`block px-4 py-2 ${
                          activePage === dd.key ? "text-orange-400 font-semibold" : "text-white hover:text-orange-400"
                        }`}
                      >
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* LIFE */}
            <li>
              <button onClick={() => setLifeOpen(!lifeOpen)} className="flex items-center gap-2 text-white">
                ABODE Life <FiChevronDown className="text-orange-400" />
              </button>
              {lifeOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {lifeDropdown.map((dd) => (
                    <li key={dd.title}>
                      <Link href={dd.href} className="block px-4 py-2 text-white hover:text-orange-400">
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ADMISSIONS */}
            <li>
              <button onClick={() => setAdmissionsOpen(!admissionsOpen)} className="flex items-center gap-2 text-white">
                Admissions <FiChevronDown className="text-orange-400" />
              </button>
              {admissionsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {admissionsDropdown.map((dd) => (
                    <li key={dd.title}>
                      <Link href={dd.href} className="block px-4 py-2 text-white hover:text-orange-400">
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/*Gallery*/}
            <Link href="/gallery" className="block hover:text-orange-400">
            Gallery
          </Link>

            <li>
              <Link href="/visit-us" className="block text-center bg-orange-500 py-2 rounded-full text-white">
                Visit Us
              </Link>
            </li>
          </ul>
        )}

        {/* HERO TEXT */}
        <div className="mt-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">Middle School</h1>
          <p className="text-lg md:text-xl mt-2">Academics: Middle School Programs</p>
        </div>
      </section>

      {/* MIDDLE SCHOOL SECTION */}
<section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
  <h2 className="text-3xl font-bold text-green-900 mb-12">Middle School</h2>

  <div className="flex flex-col gap-16">

    {/* Introduction (Image Left) */}
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
         <img
          src="/clubs,sports.jpg"
          alt="Middle School Skills & Enrichment"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <p className="text-gray-700 mb-4">
          Creating thoughtful, intentional, self-directed learners. Middle School is often considered a transformational and challenging time. Physical, intellectual, social, and emotional changes are rapid and intense. Students benefit from rigorous academics, social-emotional support, and enrichment & clubs, which build confidence and prepare them for greater agency in high school.
        </p>
        <p className="text-gray-700">
          We offer an integrated curriculum up to Grade 8. Starting in Grade 8, students can choose between the Cambridge and CBSE curriculum, allowing them to pursue the educational path that best suits their goals. The curriculum emphasizes critical thinking, problem-solving, and interdisciplinary learning, ensuring students are prepared for success in either academic stream.
        </p>
      </div>
    </div>

    {/* Core and Additional Subjects (Image Right) */}
    <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Core and Additional Subjects</h3>
        <p className="text-gray-700 mb-4">
          Both curricula emphasize core subjects including Mathematics, Science, and English. Additional subjects and electives support diverse interests and career paths.
        </p>
        <ul className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Math</li>
          <li>English</li>
          <li>Science</li>
          <li>Global Perspectives/Social</li>
          <li>Second language: Hindi/Telugu</li>
          <li>Third language: French</li>
          <li>Compulsory Telugu (Grade 1-8)</li>
          <li>ICT / Python / AI Program</li>
        </ul>
      </div>
    </div>

    {/* Essential Skills & Enrichment (Image Left) */}
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/essntialskills.jpg"
          alt="Middle School Skills & Enrichment"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Essential Skills & Enrichment</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>Critical Thinking & Problem Solving:</strong> Encouraging analytical skills and innovative thinking.
          </li>
          <li>
            <strong>Research & Inquiry:</strong> Independent research and project work through mastery projects and global perspectives.
          </li>
          <li>
            <strong>Leadership & Collaboration:</strong> Fostering teamwork and leadership abilities via group projects and extracurricular activities.
          </li>
          <li>
            <strong>Clubs, Sports & Enrichment Program:</strong> Diverse sports including cricket, basketball, football, athletics; clubs like debate, drama, robotics, environmental initiatives; enrichment programs continuing HI program into high school.
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>
<Footer/>
    </div>
  );
}
