"use client";

import React, { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";


export default function GalleryPage() {
  

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#202a22] text-white min-h-[80vh] py-16 px-6 md:px-16">
        <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>

        

        {/* ================= HEADER ================= */}
        <Header/>

        {/* HERO TEXT */}
        <div className="max-w-6xl mx-auto mt-36">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-lg md:text-xl mt-2">Life at Genesis School</p>
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
      {/* ✅ HERO ANIMATION STYLES */}
      <style jsx>{`
        .ball {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #c9a227;
          border-radius: 50%;
          opacity: 0.8;
          animation: float 10s infinite ease-in-out;
        }

        .ball-1 {
          top: 20%;
          left: 15%;
        }

        .ball-2 {
          top: 60%;
          left: 30%;
          animation-delay: 2s;
        }

        .ball-3 {
          top: 35%;
          right: 20%;
          animation-delay: 4s;
        }

        .ball-4 {
          bottom: 20%;
          right: 35%;
          animation-delay: 6s;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .text-gradient {
          background: linear-gradient(135deg, #c9a227, #2ecc71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
