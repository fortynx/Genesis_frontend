"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  const activePage = "gallery";

  /* DROPDOWNS */
  const aboutDropdown = [
    { title: "Vision & Values", href: "/about/vision" },
    { title: "Our Philosophy", href: "/about/philosophy" },
    { title: "Our Campuses", href: "/about/campuses" },
    { title: "Our People", href: "/about/people" },
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

      {/* ================= HERO ================= */}
      <section className="relative bg-[#313e3b] text-white py-16 px-6 md:px-16">

        {/* ================= HEADER ================= */}
        <div className="flex justify-between items-center mb-12">

          {/* LOGO */}
          <Link href="/">
            <Image src="/logo.jpg" width={150} height={60} alt="School Logo" />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden md:flex gap-8 text-lg font-medium items-center">

            {/* ABOUT */}
            <li
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
                About Us <FiChevronDown />
              </span>

              {aboutOpen && (
                <ul className="absolute mt-2 w-56 bg-white text-black rounded shadow-lg py-2">
                  {aboutDropdown.map((d) => (
                    <li key={d.title}>
                      <Link href={d.href} className="block px-4 py-2 hover:bg-gray-200">
                        {d.title}
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
              <span className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
                Academics <FiChevronDown />
              </span>

              {academicsOpen && (
                <ul className="absolute mt-2 w-44 bg-white text-black rounded shadow-lg py-2">
                  {academicsDropdown.map((d) => (
                    <li key={d.key}>
                      <Link href={d.href} className="block px-4 py-2 hover:bg-gray-200">
                        {d.title}
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
              <span className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
                ABODE Life <FiChevronDown />
              </span>

              {lifeOpen && (
                <ul className="absolute mt-2 w-44 bg-white text-black rounded shadow-lg py-2">
                  {lifeDropdown.map((d) => (
                    <li key={d.title}>
                      <Link href={d.href} className="block px-4 py-2 hover:bg-gray-200">
                        {d.title}
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
              <span className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
                Admissions <FiChevronDown />
              </span>

              {admissionsOpen && (
                <ul className="absolute mt-2 w-56 bg-white text-black rounded shadow-lg py-2">
                  {admissionsDropdown.map((d) => (
                    <li key={d.title}>
                      <Link href={d.href} className="block px-4 py-2 hover:bg-gray-200">
                        {d.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* GALLERY (ACTIVE) */}
            <li className="text-orange-400 font-semibold">Gallery</li>
          </ul>

          {/* VISIT US */}
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

        {/* ================= MOBILE MENU ================= */}
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

            {[{
              title: "About Us",
              open: aboutOpen,
              setOpen: setAboutOpen,
              data: aboutDropdown,
            },{
              title: "Academics",
              open: academicsOpen,
              setOpen: setAcademicsOpen,
              data: academicsDropdown,
            },{
              title: "ABODE Life",
              open: lifeOpen,
              setOpen: setLifeOpen,
              data: lifeDropdown,
            },{
              title: "Admissions",
              open: admissionsOpen,
              setOpen: setAdmissionsOpen,
              data: admissionsDropdown,
            }].map((menu) => (
              <li key={menu.title}>
                <button
                  onClick={() => menu.setOpen(!menu.open)}
                  className="flex items-center gap-2 text-white"
                >
                  {menu.title} <FiChevronDown className="text-orange-400" />
                </button>

                {menu.open && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {menu.data.map((d: any) => (
                      <li key={d.title}>
                        <Link href={d.href} className="block px-4 py-2 text-white hover:text-orange-400">
                          {d.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="text-orange-400 font-semibold px-4">Gallery</li>

            <li>
              <Link href="/visit-us" className="block text-center bg-orange-500 py-2 rounded-full text-white">
                Visit Us
              </Link>
            </li>
          </ul>
        )}

        {/* HERO TEXT */}
        <div className="mt-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-lg md:text-xl mt-2">Life at ABODE School</p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-6">Our School Moments</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="h-56 bg-gray-200 rounded-xl shadow"></div>
          ))}
        </div>
      </section>
    </div>
  );
}
