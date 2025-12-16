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

      {/* HERO (matches screenshot) */}
      <section className="bg-[#0b1f2a] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold">Why Us</h1>
          <p className="mt-2 opacity-80">
            Admissions › Why Us
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Our Differentiators
          </h2>

          <div className="space-y-6">
            {differentiators.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-full shadow-md flex items-center gap-5 px-6 py-5"
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
    </div>
  );
}
