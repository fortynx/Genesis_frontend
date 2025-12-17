"use client";

import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export default function CampusPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO */}
      <section className="relative bg-[#202a22] text-white py-28 md:py-36 overflow-hidden">
        {/* floating dots */}
        <span className="ball ball-1" />
        <span className="ball ball-2" />
        <span className="ball ball-3" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our Campuses
          </h1>
          <p className="mt-3 opacity-80">
            About Us › Our Campuses
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* INTRO */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-gray-700 max-w-4xl">
            GENESIS began as a Montessori preschool and has grown into a
            full-fledged K–12 institution. Our campuses are thoughtfully
            designed to provide safe, nurturing, and stimulating environments
            for holistic development.
          </p>
        </section>

        {/* MAIN CAMPUS */}
        <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10 items-start">
          
          {/* IMAGE */}
          <div className="md:col-span-2">
            <Image
              src="/campus-main.jpg"
              alt="Tellapur Campus"
              width={1200}
              height={700}
              className="rounded-xl object-cover w-full h-[420px]"
            />

            <h2 className="mt-6 text-2xl font-bold">
              Tellapur Campus (K–12)
            </h2>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Our K–12 Tellapur campus is designed to support collaborative
              learning, creativity, and academic excellence. The campus
              includes modern classrooms, activity zones, science labs,
              libraries, and outdoor play areas.
            </p>
          </div>

          {/* INFO CARD */}
          <div className="bg-[#355c6b] text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold text-lg mb-4">
              Tellapur Campus
            </h3>

            <p className="text-sm leading-relaxed opacity-90">
              Preschool – Grade 12 <br />
              Near Aliens Space Station <br />
              Tellapur, Hyderabad – 502032
            </p>

            <div className="mt-6">
              <p className="text-sm opacity-80">Phone Number</p>
              <p className="font-semibold mt-1">
                +91 72072 07342
              </p>
            </div>
          </div>
        </section>

        {/* OTHER CAMPUSES */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <h3 className="text-xl font-bold mb-6">
            Other Campuses
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6">
              <h4 className="font-semibold">
                Gachibowli Campus
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Preschool – Grade 3 <br />
                Gachibowli, Hyderabad – 500032
              </p>
              <p className="mt-3 text-sm">
                T: +91 91003 85000
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h4 className="font-semibold">
                Nallagandla Campus
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Preschool <br />
                Nallagandla, Hyderabad – 500019
              </p>
              <p className="mt-3 text-sm">
                T: +91 96664 48000
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* HERO DOT ANIMATION */}
      <style jsx>{`
        .ball {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #c9a227;
          border-radius: 50%;
          opacity: 0.8;
          animation: float 10s infinite ease-in-out;
        }

        .ball-1 {
          top: 30%;
          left: 20%;
        }
        .ball-2 {
          top: 55%;
          right: 25%;
          animation-delay: 3s;
        }
        .ball-3 {
          top: 40%;
          left: 50%;
          animation-delay: 6s;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
