"use client";

import React, { useState } from "react";


import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";


export default function VisitUsPage() {
  

 

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO + HEADER */}
      <section className="relative bg-[#313e3b] text-white min-h-[80vh] py-16 px-6 md:px-16">

        {/* HEADER */}
        <Header/>

         

        {/* HERO TEXT */}
        <div className="max-w-6xl mx-auto mt-36">
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
      <Footer/>
    </div>
  );
}
