// app/admissions/page.tsx
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export default function AdmissionsPage() {
  const steps = [
    { title: "Submit Application", desc: "Complete the online form or visit our admissions office." },
    { title: "Meet with Counselor", desc: "Discuss your child's needs and our educational approach." },
    { title: "Child Observation", desc: "Assess your child's readiness for placement." },
    { title: "School Tour", desc: "Explore our facilities and learning environment." },
    { title: "Admission Decision", desc: "Receive notification, next steps and required documents." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <header className="bg-[#0a1f2c] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold">Admissions Process</h1>
          <p className="mt-2 opacity-80">Admissions › Admissions Process</p>
        </div>
      </header>

      {/* Intro */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-12 text-center"  id="admissions">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover how GENESIS SCHOOL’s vibrant community and learning programmes can meet your child’s educational
            needs and aspirations. Our admissions process gives you a clear step-by-step guide to joining our school.
          </p>
        </section>

        {/* Steps row */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid md:grid-cols-5 gap-6 items-stretch">
            {steps.map((s, i) => (
              <div key={i} className="bg-white border rounded-lg shadow-sm p-6 flex flex-col items-start">
                <div className="w-12 h-12 rounded-md bg-amber-500 flex items-center justify-center text-white font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-3">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-700 mb-6">For more detailed information or assistance, please contact our admissions office.</p>

            {/* BUTTON: navigates to schedule page */}
            <Link href="/admissions/schedule" className="inline-block bg-[#0a1f2c] text-white px-6 py-3 rounded-full hover:opacity-90">
              Schedule a Visit
            </Link>
          </div>
        </section>

        {/* Optional other content or image row (placeholder) */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">Why Choose GENESIS SCHOOL?</h3>
              <p className="text-gray-600">
                Thoughtful curriculum, experienced faculty and a nurturing environment. We focus on holistic
                development, inquiry-based learning and character building.
              </p>
            </div>

            <div className="rounded overflow-hidden">
              <Image src="/admissions-hero.jpg" alt="Admissions" width={800} height={450} className="object-cover w-full h-48 rounded" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
