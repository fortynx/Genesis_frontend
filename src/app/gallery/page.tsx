"use client";

import React, { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";


export default function GalleryPage() {
  

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#313e3b] text-white min-h-[80vh] py-16 px-6 md:px-16">

        {/* ================= HEADER ================= */}
        <Header/>

        {/* HERO TEXT */}
        <div className="max-w-6xl mx-auto mt-36">
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
      <Footer/>
    </div>
  );
}
