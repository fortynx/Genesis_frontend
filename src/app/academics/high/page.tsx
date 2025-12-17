"use client";

import React, { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb";


export default function HighPage() {
  

 

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="relative bg-[#202a22] text-white min-h-[40vh] py-16 px-6 md:px-16">
        <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>
        {/* HEADER */}
        <Header/>
        <div className="max-w-6xl mx-auto mt-36">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">High School</h1>
          {/* Breadcrumb (RIGHT AFTER HEADING) */}
                    <Breadcrumb />
          <p className="text-lg md:text-xl"></p>
        </div>
      </section>

      {/* HIGH SCHOOL SECTION */}
<section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
  <h2 className="text-3xl font-bold text-green-900 mb-12">High School</h2>

  <div className="flex flex-col gap-16">

    {/* Introduction (Image Left) */}
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
       <img
          src="/presentation1.jpg"
          alt="Grade 11 & 12 Subjects"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <p className="text-gray-700 mb-4">
          Genesis supports both IGCSE and CBSE curriculums for High School, giving students the flexibility to choose their preferred curriculum starting from Grade 8. The choice is guided by students’ higher education goals and career aspirations. Our curriculum emphasizes practical application of concepts, bridging classroom learning with real-world skills.
        </p>
        <p className="text-gray-700">
          The academic program prepares students for a wide range of college courses in STEM, Humanities, Commerce, or Arts. Critical thinking, problem-solving, and practical skills are integrated to ensure students are well-prepared for higher education in India or abroad.
        </p>
      </div>
    </div>

    {/* Grade 9 & 10 Subjects (Image Right) */}
    <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/highschool1.jpg"
          alt="Grade 9 & 10 Subjects"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Grade 9 & 10</h3>
        <p className="text-gray-700 mb-4">
          Students can choose between CBSE and Cambridge (IGCSE) streams, based on their interests and future goals.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>CBSE:</strong> English Language and Literature, Mathematics, Science, Social Science, Hindi/French/Telugu, Computer Technology
          </li>
          <li>
            <strong>Cambridge Stream 1:</strong> English, Mathematics, Physics, Chemistry, Economics, Second Language (Hindi/French), choice of Biology/Global Perspectives/Computer Science
          </li>
          <li>
            <strong>Cambridge Stream 2:</strong> English, Mathematics, Science Combined, Geography, Economics, Second Language (Hindi/French), choice of History/Global Perspectives/Computer Science
          </li>
        </ul>
      </div>
    </div>

    {/* Grade 11 & 12 Subjects (Image Left) */}
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="md:w-1/3">
        <img
          src="/highschool2.jpg"
          alt="Grade 11 & 12 Subjects"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Grade 11 & 12</h3>
        <p className="text-gray-700 mb-4">
          Advanced academic options continue with both CBSE and Cambridge streams, offering specialized subject combinations to suit students' higher education and career aspirations.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>CBSE STEM 1:</strong> Mathematics, Physics, Chemistry, English + Any 1 of Economics / Computer Science / Physical Education / Psychology
          </li>
          <li>
            <strong>CBSE STEM 2:</strong> Biology, Physics, Chemistry, English + Any 1 of Mathematics / Psychology / Physical Education / Computer Science
          </li>
          <li>
            <strong>Cambridge Stream 1:</strong> English, Mathematics, Physics, Chemistry, Economics, Second Language (Hindi/French), choice between Biology/Global Perspectives/Computer Science
          </li>
          <li>
            <strong>Cambridge Stream 2:</strong> English, Mathematics, Science Combined, Geography, Economics, Second Language (Hindi/French), choice between History/Global Perspectives/Computer Science
          </li>
        </ul>
      </div>
    </div>

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

