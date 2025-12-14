"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function OurCampusesPage() {
  // Mobile Menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dropdown states
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  const activePage = "people";
  const teamMembers = [
    {
      title: "Management",
      description:
        "Leaders who guide the institution with experience and vision.",
    },
    {
      title: "Faculty",
      description:
        "Highly trained educators dedicated to student growth.",
    },
    {
      title: "Support Staff",
      description:
        "The backbone ensuring smooth everyday functioning.",
    },
  ];
  
  // Dropdown Items
  const aboutDropdownItems = [
    { title: "Vision & Values", href: "/about/vision", key: "vision-values" },
    { title: "Our Philosophy", href: "/about/philosophy", key: "philosophy" },
    { title: "Our People", href: "/about/people", key: "people" },
  ];

  const academicsDropdown = [
    {title:"PrePrimary",href:"/academics/preprimary"},
    { title: "Primary", href: "/academics/primary" },
    { title: "Middle", href: "/academics/middle" },
    { title: "High", href: "/academics/high" },
  ];

  const lifeDropdown = [
    { title: "BeyondAcademics", href: "/life/beyondacademics" },
   
  ];

  const admissionsDropdown = [
    { title: "Admissions", href: "/admissions/process" },
    { title: "Fee Structure", href: "/admissions/fees" },
    { title: "Apply Now", href: "/admissions/apply" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative bg-[#313e3b] text-white py-16 px-6 md:px-16">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12 relative">

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

            {/* ABOUT US */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span className="flex items-center gap-1 text-orange-500">
                About Us <FiChevronDown />
              </span>

              {aboutOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg py-2 z-50">
                  {aboutDropdownItems.map((dd) => (
                    <li key={dd.key}>
                      {activePage === dd.key ? (
                        <span className="block px-4 py-2 bg-orange-50 text-orange-500 font-semibold cursor-default">
                          {dd.title}
                        </span>
                      ) : (
                        <Link href={dd.href} className="block px-4 py-2 hover:bg-gray-200">
                          {dd.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ACADEMICS */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                Academics <FiChevronDown />
              </span>

              {academicsOpen && (
                <ul className="absolute left-0 mt-2 w-52 bg-white text-black rounded-md shadow-lg py-2 z-50">
                  {academicsDropdown.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="block px-4 py-2 hover:bg-gray-200">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ABODE LIFE */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setLifeOpen(true)}
              onMouseLeave={() => setLifeOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                ABODE Life <FiChevronDown />
              </span>

              {lifeOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50">
                  {lifeDropdown.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="block px-4 py-2 hover:bg-gray-200">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ADMISSIONS */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setAdmissionsOpen(true)}
              onMouseLeave={() => setAdmissionsOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400">
                Admissions <FiChevronDown />
              </span>

              {admissionsOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg py-2 z-50">
                  {admissionsDropdown.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="block px-4 py-2 hover:bg-gray-200">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link href="/gallery" className="hover:text-orange-400">Gallery</Link></li>
          </ul>

          {/* VISIT US BTN */}
          <Link
            href="/visit-us"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
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

            {/* ABOUT US MOBILE */}
<li>
  <button
    onClick={() => setAboutOpen(!aboutOpen)}
    className="flex items-center gap-1 text-orange-400 font-semibold"
  >
    About Us <FiChevronDown />
  </button>

  {aboutOpen && (
    <ul className="ml-4 mt-2 space-y-2">
      {aboutDropdownItems.map((dd) => (
        <li key={dd.key}>

          {activePage === dd.key ? (
            <span className="block px-4 py-2 text-orange-400 font-semibold">
              {dd.title}
            </span>
          ) : (
            <Link
              href={dd.href}
              className="block px-4 py-2 text-white hover:text-orange-400"
            >
              {dd.title}
            </Link>
          )}

        </li>
      ))}
    </ul>
  )}
</li>


            {/* ACADEMICS MOBILE */}
            <li>
              <button
                onClick={() => setAcademicsOpen(!academicsOpen)}
                className="flex items-center gap-1 text-white"
              >
                Academics <FiChevronDown />
              </button>

              {academicsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {academicsDropdown.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="text-white block hover:text-orange-400">
                        {item.title}
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
                className="flex items-center gap-1 text-white"
              >
                ABODE Life <FiChevronDown />
              </button>

              {lifeOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {lifeDropdown.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="text-white block hover:text-orange-400">
                        {item.title}
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
                className="flex items-center gap-1 text-white"
              >
                Admissions <FiChevronDown />
              </button>

              {admissionsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {admissionsDropdown.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="text-white block hover:text-orange-400">
                        {item.title}
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

            {/* MOBILE VISIT US */}
            <li>
              <Link
                href="/visit-us"
                className="block bg-orange-500 text-white py-2 rounded-full text-center"
              >
                Visit Us
              </Link>
            </li>
          </ul>
        )}

        {/* HERO TEXT */}
        <div className="mt-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">Our People</h1>
          <p className="text-lg md:text-xl mt-2">
            About us: About Us: Our People
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-8">
          The People Who Make Us Strong
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

