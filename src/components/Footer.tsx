import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#436873] text-white py-14" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14 px-6">

        {/* LEFT */}
        <div>
          <h3 className="text-3xl font-bold leading-tight">
            Let’s build something great together.
          </h3>
          <p className="mt-5 text-xl">
            Call us: +91 90 1018 5000
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-lg">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#academics" className="hover:underline">Academics</a></li>
            <li><a href="#admissions" className="hover:underline">Admissions</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold">
            GENESIS SCHOOL
          </h3>

          <p className="mt-4 text-lg opacity-90">
            Shaping tomorrow’s leaders
          </p>

          {/* LOGO */}
          <div className="mt-5">
            <Image
              src="/logo.png"
              alt="Genesis School Logo"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

      </div>

      <p className="text-center mt-12 opacity-80 text-base">
        © {new Date().getFullYear()} Genesis School. All Rights Reserved.
      </p>
    </footer>
  );
}
