"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

interface GalleryImage {
  id: number;
  image_url: string; // ✅ updated
  title: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/gallery/list/")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative bg-[#202a22] text-white min-h-[80vh] py-16 px-6 md:px-16">
        <Header />
        <div className="max-w-6xl mx-auto mt-36">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Gallery</h1>
          <p className="text-lg md:text-xl mt-2">Life at Genesis School</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-6">
          Our School Moments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="rounded-xl shadow overflow-hidden">
              <img
                src={img.image_url} // ✅ use image_url
                alt={img.title}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
