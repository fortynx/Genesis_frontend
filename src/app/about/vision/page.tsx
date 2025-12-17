"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function VisionPage() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-[#202a22] text-white min-h-[40vh] py-16 px-6 md:px-16">
        <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>
        <div className="max-w-6xl mx-auto mt-36">

  <h1 className="text-4xl md:text-3xl font-bold">
    Our Vision & Values
  </h1>
   {/* Breadcrumb (RIGHT AFTER HEADING) */}
        <Breadcrumb />
  <p className="text-lg md:text-xl mt-4 max-w-3xl">
  </p>
</div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/genesis.jpg"   
              alt="Our Vision"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Genesis School, our vision is to nurture confident, compassionate,
              and curious learners who are prepared to thrive in a rapidly
              evolving global society.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We aim to create an inclusive learning environment that encourages
              critical thinking, creativity, and lifelong learning, while
              upholding strong moral and ethical values.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES FLOWCHART SECTION */}
<section className="bg-gray-50 py-20 px-6 md:px-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-16">
      Our Core Values
    </h2>

    <div className="relative max-w-4xl mx-auto">

      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>

      {[
        {
          title: "Integrity",
          desc: "Upholding honesty, transparency, and ethical conduct in all actions.",
        },
        {
          title: "Excellence",
          desc: "Striving for the highest standards in academics and personal growth.",
        },
        {
          title: "Innovation",
          desc: "Encouraging creative thinking and adaptability in a changing world.",
        },
        {
          title: "Collaboration",
          desc: "Building strong relationships through teamwork and respect.",
        },
        {
          title: "Leadership",
          desc: "Empowering students to lead with confidence and responsibility.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row items-center mb-16 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* VALUE BOX */}
          <div className="bg-white shadow-md rounded-xl p-6 w-full md:w-[45%]">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* CONNECTOR DOT */}
          <div className="hidden md:flex w-[10%] justify-center">
            <span className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow"></span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* FOOTER */}
      <Footer />
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
    </>
  );
}
