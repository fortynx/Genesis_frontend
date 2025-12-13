"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function DisclosurePage() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

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
    { title: "Sports", href: "/life/sports" },
    { title: "Clubs", href: "/life/clubs" },
  ];

  const admissionsDropdown = [
    { title: "Admission Process", href: "/admissions/process" },
    { title: "Fee Structure", href: "/admissions/fees" },
    { title: "Apply Now", href: "/admissions/apply" },
  ];

  return (
    <section className="relative bg-[#313e3b] text-white py-16 px-6 md:px-16">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-12">
        <Link href="/">
          <Image src="/logo.jpg" width={150} height={60} alt="School Logo" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">

          {/* ABOUT */}
          <Dropdown
            title="About Us"
            items={aboutDropdown}
            open={aboutOpen}
            setOpen={setAboutOpen}
            pathname={pathname}
          />

          {/* ACADEMICS */}
          <Dropdown
            title="Academics"
            items={academicsDropdown}
            open={academicsOpen}
            setOpen={setAcademicsOpen}
            pathname={pathname}
          />

          {/* ABODE LIFE */}
          <Dropdown
            title="ABODE Life"
            items={lifeDropdown}
            open={lifeOpen}
            setOpen={setLifeOpen}
            pathname={pathname}
          />

          {/* ADMISSIONS */}
          <Dropdown
            title="Admissions"
            items={admissionsDropdown}
            open={admissionsOpen}
            setOpen={setAdmissionsOpen}
            pathname={pathname}
          />

          {/* GALLERY – NO DROPDOWN */}
          <li>
            <Link
              href="/gallery"
              className={`hover:text-orange-400 ${
                pathname === "/gallery" ? "text-orange-400 font-semibold" : ""
              }`}
            >
              Gallery
            </Link>
          </li>
        </ul>

        {/* VISIT US */}
        <Link
          href="/visit-us"
          className="hidden md:block bg-orange-500 px-6 py-2 rounded-full"
        >
          Visit Us
        </Link>

        {/* MOBILE ICON */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#313e3b] rounded-lg p-6 space-y-4">
          {/* HOME LINK */}
    <li>
      <Link
        href="/"
        className="block px-4 py-2 text-white hover:text-orange-400 font-semibold"
      >
        Home
      </Link>
    </li>
          <MobileDropdown title="About Us" items={aboutDropdown} />
          <MobileDropdown title="Academics" items={academicsDropdown} />
          <MobileDropdown title="ABODE Life" items={lifeDropdown} />
          <MobileDropdown title="Admissions" items={admissionsDropdown} />

          <Link href="/gallery" className="block hover:text-orange-400">
            Gallery
          </Link>

          <Link
            href="/visit-us"
            className="block text-center bg-orange-500 py-2 rounded-full"
          >
            Visit Us
          </Link>
        </div>
      )}

      {/* HERO */}
      <div className="mt-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold">
          Mandatory Public Disclosure
        </h1>
        <p className="text-lg md:text-xl mt-2">
          Official information and compliance disclosures
        </p>
      </div>
    </section>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function Dropdown({ title, items, open, setOpen, pathname }: any) {
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="flex items-center gap-1 cursor-pointer hover:text-orange-400">
        {title} <FiChevronDown />
      </span>

      {open && (
        <ul className="absolute mt-2 w-56 bg-white text-black rounded shadow-lg py-2">
          {items.map((item: any) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-2 hover:bg-gray-200 ${
                  pathname.startsWith(item.href)
                    ? "text-orange-500 font-semibold"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileDropdown({ title, items }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        {title} <FiChevronDown className="text-orange-400" />
      </button>

      {open && (
        <ul className="ml-4 mt-2 space-y-2">
          {items.map((item: any) => (
            <li key={item.href}>
              <Link href={item.href} className="block hover:text-orange-400">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
