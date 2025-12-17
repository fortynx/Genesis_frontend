"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const differentiators = [
  {
    id: "01",
    title: "Dynamic Educational Pathways",
    desc:
      "We provide a structured yet flexible learning journey, seamlessly integrating Cambridge and CBSE frameworks.",
    color: "bg-teal-300",
    numColor: "text-teal-400",
  },
  {
    id: "02",
    title: "Personalized Learning",
    desc:
      "Our Montessori-based approach emphasizes individualized learning, accommodating each child’s unique needs.",
    color: "bg-yellow-300",
    numColor: "text-yellow-400",
  },
  {
    id: "03",
    title: "Unique Pedagogy",
    desc:
      "Our innovative teaching model fosters curiosity and critical thinking through active exploration.",
    color: "bg-slate-500",
    numColor: "text-slate-500",
  },
  {
    id: "04",
    title: "Transformative Growth",
    desc:
      "We emphasize academic excellence alongside socio-emotional learning and leadership skills.",
    color: "bg-cyan-300",
    numColor: "text-cyan-400",
  },
  {
    id: "05",
    title: "Literacy Excellence",
    desc:
      "From early phonics to advanced literacy programs, we build a strong foundation in reading and writing.",
    color: "bg-red-500",
    numColor: "text-red-500",
  },
  {
    id: "06",
    title: "Celebrating Uniqueness",
    desc:
      "Our enrichment programs nurture diverse talents and encourage creative exploration.",
    color: "bg-yellow-400",
    numColor: "text-yellow-500",
  },
  {
    id: "07",
    title: "Diverse Extracurriculars",
    desc:
      "A wide range of clubs and activities support holistic development beyond academics.",
    color: "bg-blue-600",
    numColor: "text-blue-600",
  },
  {
    id: "08",
    title: "State-of-the-Art Facilities",
    desc:
      "Modern classrooms and advanced resources enhance the learning experience.",
    color: "bg-cyan-200",
    numColor: "text-cyan-400",
  },
];

export default function InitiativesDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9f8]">
      <Header />

      {/* ✅ HERO SECTION WITH ANIMATION */}
      <section className="relative bg-[#0b1f2a] text-white py-32 md:py-40 overflow-hidden">
        
        {/* Floating balls */}
        <span className="ball ball-1" />
        <span className="ball ball-2" />
        <span className="ball ball-3" />
        <span className="ball ball-4" />
        <span className="ball ball-5" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Why Us
          </h1>
          <p className="mt-4 opacity-80 text-lg">
            Admissions › Why Us
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold mb-12 text-center">
            Our Differentiators
          </h2>

          <div className="space-y-6">
            {differentiators.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-full shadow-md flex items-center gap-5 px-6 py-6"
              >
                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color}`}
                >
                  <span className="text-white text-xl font-bold">★</span>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>

                {/* Number */}
                <div className={`text-xl font-bold ${item.numColor}`}>
                  {item.id}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* ✅ HERO BALL ANIMATION STYLES */}
      <style jsx>{`
        .ball {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #c9a227;
          border-radius: 50%;
          opacity: 0.8;
          animation: float 10s infinite ease-in-out;
        }

        .ball-1 { top: 20%; left: 15%; }
        .ball-2 { top: 60%; left: 25%; animation-delay: 2s; }
        .ball-3 { top: 35%; right: 20%; animation-delay: 4s; }
        .ball-4 { bottom: 25%; right: 30%; animation-delay: 6s; }
        .ball-5 { top: 45%; left: 50%; animation-delay: 8s; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-22px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
