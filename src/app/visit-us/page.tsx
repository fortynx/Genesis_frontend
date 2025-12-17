"use client";

import React, { useState } from "react";


import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";


export default function VisitUsPage() {
  

 

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO + HEADER */}
      <section className="relative bg-[#202a22] text-white min-h-[40vh] py-16 px-6 md:px-16">
        <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>
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
