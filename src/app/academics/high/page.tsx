"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

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
    { title: "Our People", href: "/about/people", key: "people" },
  ];

  const academicsDropdown = [
    { title: "Primary", href: "/academics/primary", key: "primary" },
    { title: "Middle", href: "/academics/middle", key: "middle" },
    { title: "High", href: "/academics/high", key: "high" },
  ];

  const lifeDropdown = [
    { title: "Co-Curricular", href: "/life/cocurricular" },
    { title: "Sports", href: "/life/sports" },
    { title: "Clubs", href: "/life/clubs" },
  ];

  const admissionsDropdown = [
    { title: "Admission Process", href: "/admissions/process" },
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

      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-8">High School Programs</h2>
        <p className="text-gray-700">
          Our High School curriculum prepares students for college and beyond with advanced coursework, leadership opportunities, and holistic development.
        </p>
      </section>
    </div>
  );
}

