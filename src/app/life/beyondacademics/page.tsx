"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import Footer from "@/components/Footer";

export default function BeyondAcademicsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  const activePage = "beyondacademics"; // CURRENT PAGE

  const aboutDropdown = [
    { title: "Vision & Values", href: "/about/vision", key: "vision-values" },
    { title: "Our Campuses", href: "/about/campuses", key: "campuses" },
    { title: "Our People", href: "/about/people", key: "people" },
  ];

  const academicsDropdown = [
    {title:"PrePrimary",href:"/academics/preprimary",key:"preprimary"},
    { title: "Primary", href: "/academics/primary", key: "primary" },
    { title: "Middle", href: "/academics/middle", key: "middle" },
    { title: "High", href: "/academics/high", key: "high" },
  ];

  const lifeDropdown = [
    { title: "Beyond Academics", href: "/life/beyondacademics", key: "beyondacademics" },
    
  ];

  const admissionsDropdown = [
    { title: "Admissions", href: "/admissions/process", key: "process" },
    { title: "Fee Structure", href: "/admissions/fees", key: "fees" },
    { title: "Apply Now", href: "/admissions/apply", key: "apply" },
  ];

  const contentSubjects = ["Art & Music", "Drama", "Debate", "Community Service"];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-[#313e3b] text-white min-h-[80vh] py-16 px-6 md:px-16">
        <div className="flex justify-between items-center mb-12">
          <Link href="/">
          <Image src="/logo.jpg" width={150} height={60} alt="School Logo" className="cursor-pointer" />
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
                      <Link href={dd.href} className="block px-4 py-2 hover:bg-gray-200">
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
              <span className="flex items-center gap-1 hover:text-orange-400">
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

            {/* ABODE LIFE */}
            <li
              className="relative group"
              onMouseEnter={() => setLifeOpen(true)}
              onMouseLeave={() => setLifeOpen(false)}
            >
              <span className="flex items-center gap-1 text-orange-400">
                ABODE Life <FiChevronDown />
              </span>
              {lifeOpen && (
                <ul className="absolute mt-2 w-44 bg-white text-black rounded shadow-lg py-2">
                  {lifeDropdown.map((dd) => (
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
                    <li key={dd.key}>
                      <Link href={dd.href} className="block px-4 py-2 hover:bg-gray-200">
                        {dd.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link href="/gallery" className="hover:text-orange-400">
                Gallery
              </Link>
            </li>
          </ul>

          {/* VISIT US BUTTON */}
          <Link href="/visit-us" className="hidden md:block bg-orange-500 px-6 py-2 rounded-full text-white">
            Visit Us
          </Link>

          {/* MOBILE MENU ICON */}
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
            {/* Repeat dropdown logic for mobile same as desktop */}
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
                      <Link href={dd.href} className="block px-4 py-2 text-white hover:text-orange-400">
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
                className="flex items-center gap-2 text-white"
              >
                Academics <FiChevronDown className="text-orange-400" />
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

            {/* LIFE MOBILE */}
            <li>
              <button
                onClick={() => setLifeOpen(!lifeOpen)}
                className="flex items-center gap-2 text-orange-400 font-semibold"
              >
                ABODE Life <FiChevronDown />
              </button>
              {lifeOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {lifeDropdown.map((dd) => (
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
                    <li key={dd.key}>
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
          <h1 className="text-4xl md:text-5xl font-bold">ABODE Life</h1>
          <p className="text-lg md:text-xl mt-2">Co-Curricular Activities</p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16 space-y-16">

        {/* Multiple Intelligences */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
          <div className="md:w-1/3">
            <img
              src="/beyondacademics1.jpg"
              alt="Multiple Intelligences"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Theory of Multiple Intelligences</h2>
            <p className="text-gray-700">
              ABODE believes in the theory of multiple intelligences, which suggests that each child has different strengths and learning preferences. We expose students to a wide array of activities to help identify their dominant intelligence and support their personal growth. No single teaching strategy works best for all students, as each child may excel in different areas.
            </p>
          </div>
        </div>

        {/* Preschool to Grade 3 */}
        <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
          <div className="md:w-1/3">
            
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Preschool to Grade 3</h2>
            <p className="text-gray-700 mb-2">
              Students are introduced to various activities that cater to different intelligences, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Music</li>
              <li>Dance</li>
              <li>Gymnastics</li>
              <li>Art</li>
              <li>Sports – general introduction to physical activities, promoting overall fitness and development</li>
            </ul>
          </div>
        </div>

        {/* Grades 4-7 */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
          <div className="md:w-1/3">
            
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Grades 4-7</h2>
            <p className="text-gray-700 mb-2">
              Students are identified based on their dominant intelligence and given the opportunity to develop skills according to their interests:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Music Vocal (Carnatic)</li>
              <li>Music Instrumental (Keyboard)</li>
              <li>Classical Dance (Bharatanatyam)</li>
              <li>Gymnastics</li>
              <li>Art</li>
              <li>Sports – includes athletics and organized team sports like basketball, football, cricket</li>
            </ul>
            <p className="text-gray-700">
              Clubs provide opportunities to explore passions, develop skills, and collaborate with peers in a supportive environment.
            </p>
          </div>
        </div>

        {/* Clubs Section */}
        <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
          <div className="md:w-1/3">
            
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Clubs & Enrichment Programs</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Literary Club – debates, creative writing, poetry readings, literary discussions</li>
              <li>Performance Arts – drama, music, dance</li>
              <li>Creative Arts – drawing, painting, sculpture</li>
              <li>STEM & Robotics – science, technology, engineering, mathematics, robotics</li>
              <li>Earth Club – environmental awareness and sustainability projects</li>
              <li>Sports – athletic activities and team sports</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Student interests are continually assessed and new clubs introduced based on evolving passions.
            </p>
          </div>
        </div>

      </section>
      <Footer/>
    </div>
  );
}
