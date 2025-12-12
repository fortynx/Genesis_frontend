// app/programs/page.tsx
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export default function ProgramsPage() {
  return (
    <div className="bg-white">

      {/* ✅ NAVBAR */}
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0a1f2c] text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Curriculum Overview</h1>
          <p className="mt-2 opacity-80">Academics › Curriculum Overview</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg font-semibold italic">
          “Curiosity is the foundation or the presence of the school”
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          At our school, we provide a diverse and enriching curriculum tailored to support 
          students at every stage of their educational journey. Our curriculum fosters 
          intellectual growth, creativity, and a deeper understanding of the world.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          We offer opportunities and platforms through enrichment programs that help students 
          discover their strengths and grow into confident leaders.
        </p>
      </section>

      {/* Program Cards */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 py-10">
        
        <div className="p-8 rounded-xl bg-[#e45a4d] text-white shadow">
          <h2 className="text-2xl font-bold">Preschool</h2>
          <p>18 months to 6 years</p>
          <p className="mt-2">Montessori Preschool</p>
        </div>

        <div className="p-8 rounded-xl bg-[#3fb2b2] text-white shadow">
          <h2 className="text-2xl font-bold">Middle School</h2>
          <p>Grade 6 - Grade 8</p>
          <p className="mt-2">Integrated Curriculum (Cambridge & CBSE)</p>
        </div>

        <div className="p-8 rounded-xl bg-[#2f6f88] text-white shadow">
          <h2 className="text-2xl font-bold">Primary School</h2>
          <p>Grade 1 - Grade 5</p>
          <p className="mt-2">Integrated Curriculum (Cambridge & CBSE)</p>
        </div>

        <div className="p-8 rounded-xl bg-[#f2c94c] text-white shadow">
          <h2 className="text-2xl font-bold">High School</h2>
          <p>Grade 9 and above</p>
          <p className="mt-2">Choice between IGCSE & CBSE</p>
        </div>
      </section>

      {/* Cambridge Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <Image
          src="/kid-books.jpg"
          alt="Cambridge Curriculum"
          width={500}
          height={400}
          className="rounded-xl object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">Cambridge</h2>
          <p className="text-gray-700 leading-relaxed">
            The Cambridge curriculum offers a global perspective on education, 
            focusing on inquiry-based learning, critical thinking, and real-world application.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            It prepares students with internationally recognized qualifications 
            and equips them with essential skills for higher studies and global careers.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• CBSE</li>
            <li>• Montessori</li>
          </ul>
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Extracurriculars</h2>
        <p className="text-gray-700 mb-6">
          Students have access to diverse activities that help develop leadership, discipline, 
          creativity, and physical fitness.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/sports.jpg"
            alt="Extracurricular Activities"
            width={500}
            height={400}
            className="rounded-xl object-cover"
          />

          <ul className="space-y-4 text-gray-700">
            <li>✔ Sports: Cricket, football, basketball, athletics</li>
            <li>✔ Clubs: Debate, drama, robotics, environment</li>
            <li>✔ Enrichment Programs continued through high school</li>
          </ul>
        </div>
      </section>

      {/* Footer Navigation Pills */}
      <section className="py-12 text-center">
        <div className="flex justify-center gap-4">
          <span className="px-6 py-3 bg-[#e45a4d] text-white rounded-full">Preschool</span>
          <span className="px-6 py-3 bg-[#3fb2b2] text-white rounded-full">Primary School</span>
          <span className="px-6 py-3 bg-[#2f6f88] text-white rounded-full">Middle School</span>
          <span className="px-6 py-3 bg-[#f2c94c] text-white rounded-full">High School</span>
        </div>
      </section>

      {/* ✅ FOOTER */}
      <Footer />
    </div>
  );
}
