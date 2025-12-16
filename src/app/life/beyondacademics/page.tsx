"use client";

import React, { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb";


export default function BeyondAcademicsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-[#313e3b] text-white min-h-[80vh] py-16 px-6 md:px-16">
          {/* HEADER */}
                <Header/>
         
             

        {/* HERO TEXT */}
        <div className="max-w-6xl mx-auto mt-36">
          <h1 className="text-4xl md:text-5xl font-bold">Genesis Life</h1>
          {/* Breadcrumb (RIGHT AFTER HEADING) */}
                    <Breadcrumb />
          <p className="text-lg md:text-xl mt-2">Beyond-Academics</p>
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
              Genesis believes in the theory of multiple intelligences, which suggests that each child has different strengths and learning preferences. We expose students to a wide array of activities to help identify their dominant intelligence and support their personal growth. No single teaching strategy works best for all students, as each child may excel in different areas.
            </p>
          </div>
        </div>

        {/* Preschool to Grade 3 */}
        <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
          <div className="md:w-1/3">
            <img
              src="/academics1.jpg"
              alt="Multiple Intelligences"
              className="w-full h-full object-cover"
            />
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
            <img
              src="/academics2.jpg"
              alt="Multiple Intelligences"
              className="w-full h-full object-cover"
            />
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
            <img
              src="/academics3.jpg"
              alt="Multiple Intelligences"
              className="w-full h-full object-cover"
            />
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
