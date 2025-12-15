"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import Footer from "@/components/Footer";

export default function HighPage() {
  // Mobile menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  const activePage = "high"; // CURRENT PAGE

  // Dropdown data
  const aboutDropdown = [
    { title: "Vision & Values", href: "/about/vision", key: "vision-values" },
    { title: "Our Philosophy", href: "/about/philosophy", key: "philosophy" },
    { title: "Our Campuses", href: "/about/campuses", key: "campuses" },
   
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
    { title: "Admission Process", href: "/admissions/process" },
    { title: "Fee Structure", href: "/admissions/fees" },
    { title: "Apply Now", href: "/admissions/apply" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="relative bg-[#313e3b] text-white min-h-[80vh] py-16 px-6 md:px-16">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">

          {/* LOGO */}
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

          {/* VISIT US */}
          <Link
            href="/visit-us"
            className="hidden md:block bg-orange-500 px-6 py-2 rounded-full text-white"
          >
            Visit Us
          </Link>

          {/* MOBILE ICON */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
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

            {/* ABOUT MOBILE */}
            <li>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-2 text-white"
              >
                About Us <FiChevronDown className="text-orange-400" />
              </button>

              {aboutOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {aboutDropdown.map((dd) => (
                    <li key={dd.key}>
                      <Link
                        href={dd.href}
                        className="block px-4 py-2 text-white hover:text-orange-400"
                      >
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ACADEMICS MOBILE */}
            <li>
              <button
                onClick={() => setAcademicsOpen(!academicsOpen)}
                className="flex items-center gap-2 text-orange-400 font-semibold"
              >
                Academics <FiChevronDown />
              </button>

              {academicsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {academicsDropdown.map((dd) => (
                    <li key={dd.key}>
                      <Link
                        href={dd.href}
                        className={`block px-4 py-2 ${
                          activePage === dd.key
                            ? "text-orange-400 font-semibold"
                            : "text-white hover:text-orange-400"
                        }`}
                      >
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* LIFE MOBILE */}
            <li>
              <button
                onClick={() => setLifeOpen(!lifeOpen)}
                className="flex items-center gap-2 text-white"
              >
                ABODE Life <FiChevronDown className="text-orange-400" />
              </button>

              {lifeOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {lifeDropdown.map((dd) => (
                    <li key={dd.title}>
                      <Link
                        href={dd.href}
                        className="block px-4 py-2 text-white hover:text-orange-400"
                      >
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ADMISSIONS MOBILE */}
            <li>
              <button
                onClick={() => setAdmissionsOpen(!admissionsOpen)}
                className="flex items-center gap-2 text-white"
              >
                Admissions <FiChevronDown className="text-orange-400" />
              </button>

              {admissionsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {admissionsDropdown.map((dd) => (
                    <li key={dd.title}>
                      <Link
                        href={dd.href}
                        className="block px-4 py-2 text-white hover:text-orange-400"
                      >
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

            {/* VISIT US MOBILE */}
            <li>
              <Link
                href="/visit-us"
                className="block text-center bg-orange-500 py-2 rounded-full text-white"
              >
                Visit Us
              </Link>
            </li>
          </ul>
        )}

        <div className="text-left max-w-3xl mt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">High School</h1>
          <p className="text-lg md:text-xl">Preparing for higher education and life</p>
        </div>
      </section>

      {/* HIGH SCHOOL SECTION */}
<section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
  <h2 className="text-3xl font-bold text-green-900 mb-12">High School</h2>

  <div className="flex flex-col gap-16">

    {/* Introduction (Image Left) */}
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
       
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <p className="text-gray-700 mb-4">
          ABODE supports both IGCSE and CBSE curriculums for High School, giving students the flexibility to choose their preferred curriculum starting from Grade 8. The choice is guided by students’ higher education goals and career aspirations. Our curriculum emphasizes practical application of concepts, bridging classroom learning with real-world skills.
        </p>
        <p className="text-gray-700">
          The academic program prepares students for a wide range of college courses in STEM, Humanities, Commerce, or Arts. Critical thinking, problem-solving, and practical skills are integrated to ensure students are well-prepared for higher education in India or abroad.
        </p>
      </div>
    </div>

    {/* Grade 9 & 10 Subjects (Image Right) */}
    <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/presentation1.jpg"
          alt="Grade 9 & 10 Subjects"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Grade 9 & 10</h3>
        <p className="text-gray-700 mb-4">
          Students can choose between CBSE and Cambridge (IGCSE) streams, based on their interests and future goals.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>CBSE:</strong> English Language and Literature, Mathematics, Science, Social Science, Hindi/French/Telugu, Computer Technology
          </li>
          <li>
            <strong>Cambridge Stream 1:</strong> English, Mathematics, Physics, Chemistry, Economics, Second Language (Hindi/French), choice of Biology/Global Perspectives/Computer Science
          </li>
          <li>
            <strong>Cambridge Stream 2:</strong> English, Mathematics, Science Combined, Geography, Economics, Second Language (Hindi/French), choice of History/Global Perspectives/Computer Science
          </li>
        </ul>
      </div>
    </div>

    {/* Grade 11 & 12 Subjects (Image Left) */}
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/presentation2.jpg"
          alt="Grade 11 & 12 Subjects"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Grade 11 & 12</h3>
        <p className="text-gray-700 mb-4">
          Advanced academic options continue with both CBSE and Cambridge streams, offering specialized subject combinations to suit students' higher education and career aspirations.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>CBSE STEM 1:</strong> Mathematics, Physics, Chemistry, English + Any 1 of Economics / Computer Science / Physical Education / Psychology
          </li>
          <li>
            <strong>CBSE STEM 2:</strong> Biology, Physics, Chemistry, English + Any 1 of Mathematics / Psychology / Physical Education / Computer Science
          </li>
          <li>
            <strong>Cambridge Stream 1:</strong> English, Mathematics, Physics, Chemistry, Economics, Second Language (Hindi/French), choice between Biology/Global Perspectives/Computer Science
          </li>
          <li>
            <strong>Cambridge Stream 2:</strong> English, Mathematics, Science Combined, Geography, Economics, Second Language (Hindi/French), choice between History/Global Perspectives/Computer Science
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

