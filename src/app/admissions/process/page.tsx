"use client";

import React, { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb";

export default function AdmissionProcessPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    campus: "",
    grade: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/admission-form/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Admission form submitted successfully");
        setForm({
          name: "",
          email: "",
          mobile: "",
          campus: "",
          grade: "",
        });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="relative bg-[#202a22] text-white min-h-[80vh] py-16 px-6 md:px-16">
        <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>

        <Header />

        <div className="max-w-6xl mx-auto mt-36">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Admissions
          </h1>
          <Breadcrumb />
        </div>
      </section>

      {/* BEGIN OUR JOURNEY */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">
          Begin Our Journey
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* LEFT IMAGE */}
          <div className="md:w-1/2">
            <img
              src="/genesis.jpg"
              alt="Begin Journey"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email ID"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <select
                name="campus"
                value={form.campus}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Campus</option>
                <option>Main Campus</option>
                <option>City Campus</option>
                
              </select>

              <select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Grade</option>
                <option>Pre-Primary</option>
                <option>Primary</option>
                <option>Middle</option>
                <option>High</option>
              </select>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md mt-2"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* HERO ANIMATION */}
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

        .ball-1 { top: 20%; left: 15%; }
        .ball-2 { top: 60%; left: 30%; animation-delay: 2s; }
        .ball-3 { top: 35%; right: 20%; animation-delay: 4s; }
        .ball-4 { bottom: 20%; right: 35%; animation-delay: 6s; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
