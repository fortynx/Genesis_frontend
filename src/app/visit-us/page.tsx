"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function VisitUsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  /* Dropdown data */
  const aboutDropdown = [
    { title: "Vision & Values", href: "/about/vision" },
    { title: "Our Philosophy", href: "/about/philosophy" },
    { title: "Our Campuses", href: "/about/campuses" },
    { title: "Our People", href: "/about/people" },
  ];

  const academicsDropdown = [
    { title: "Primary", href: "/academics/primary" },
    { title: "Middle", href: "/academics/middle" },
    { title: "High", href: "/academics/high" },
  ];

  const lifeDropdown = [
    { title: "Co-Curricular", href: "/life/cocurricular" },
    { title: "Clubs", href: "/life/clubs" },
    { title: "Sports", href: "/life/sports" },
  ];

  const admissionsDropdown = [
    { title: "Admission Process", href: "/admissions/process" },
    { title: "Fee Structure", href: "/admissions/fees" },
    { title: "Apply Now", href: "/admissions/apply" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO + HEADER */}
      <section className="relative bg-[#313e3b] text-white py-16 px-6 md:px-16">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">

          {/* LOGO */}
          <Link href="/">
          <Image
            src="/logo.jpg"
            alt="School Logo"
            width={150}
            height={60}
            className="cursor-pointer"
          />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-lg font-medium items-center">

            {/* ABOUT */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                About Us <FiChevronDown />
              </span>
              {aboutOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg py-2">
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
              className="relative cursor-pointer"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                Academics <FiChevronDown />
              </span>
              {academicsOpen && (
                <ul className="absolute left-0 mt-2 w-52 bg-white text-black rounded-md shadow-lg py-2">
                  {academicsDropdown.map((i) => (
                    <li key={i.title}>
                      <Link href={i.href} className="block px-4 py-2 hover:bg-gray-200">
                        {i.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ABODE LIFE */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setLifeOpen(true)}
              onMouseLeave={() => setLifeOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                ABODE Life <FiChevronDown />
              </span>
              {lifeOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2">
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
              className="relative cursor-pointer"
              onMouseEnter={() => setAdmissionsOpen(true)}
              onMouseLeave={() => setAdmissionsOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                Admissions <FiChevronDown />
              </span>
              {admissionsOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg py-2">
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

            {/* GALLERY */}
            <li>
              <Link href="/gallery" className="hover:text-orange-400">
                Gallery
              </Link>
            </li>
          </ul>

          {/* VISIT US BTN */}
          <Link
            href="/visit-us"
            className="hidden md:block bg-orange-500 px-6 py-2 rounded-full"
          >
            Visit Us
          </Link>

          {/* MOBILE ICON */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white" />
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

            <li><Link href="/about/vision">About Us</Link></li>
            <li><Link href="/academics/primary">Academics</Link></li>
            <li><Link href="/life/cocurricular">ABODE Life</Link></li>
            <li><Link href="/admissions/process">Admissions</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>

            <li>
              <Link
                href="/visit-us"
                className="block bg-orange-500 py-2 rounded-full text-center"
              >
                Visit Us
              </Link>
            </li>
          </ul>
        )}

        {/* HERO TEXT */}
        <div className="mt-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">Visit Us</h1>
          <p className="text-lg mt-2">
            We’d love to welcome you to our campus
          </p>
        </div>
      </section>

      {/* PAGE CONTENT */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">
          Plan Your Visit
        </h2>
        <p className="text-gray-700 text-lg">
          Come experience our learning environment in person.
        </p>
      </section>

    </div>
  );
}
