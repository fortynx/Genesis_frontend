"use client";

import React from "react";
import Header from "@/components/Header/Header"; // ✅ Import updated Header
import Footer from "@/components/Footer";

export default function OurPeoplePage() {
  const teamMembers = [
    {
      title: "Management",
      description: "Leaders who guide the institution with experience and vision.",
    },
    {
      title: "Faculty",
      description: "Highly trained educators dedicated to student growth.",
    },
    {
      title: "Support Staff",
      description: "The backbone ensuring smooth everyday functioning.",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* HEADER */}
        <Header/> {/* ✅ Pass activePage to highlight menu */}

        {/* HERO SECTION */}
        <section className="relative bg-[#313e3b] text-white min-h-[80vh] py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto mt-36">
            <h1 className="text-4xl md:text-5xl font-bold">Our People</h1>
            <p className="text-lg md:text-xl mt-2">
              About us: Our People
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
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

        <Footer />
      </div>
    </>
  );
}
