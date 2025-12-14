import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#436873] text-white py-12" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6">

        <div>
          <h3 className="text-2xl font-bold">
            Let’s build something great together.
          </h3>
          <p className="mt-4 text-lg">Call us: +91 90 1018 5000</p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-[17px]">
            <li>
              <a href="#home" className="hover:underline cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#academics" className="hover:underline cursor-pointer">
                Academics
              </a>
            </li>
            <li>
              <a href="#admissions" className="hover:underline cursor-pointer">
                Admissions
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline cursor-pointer">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">GENESIS SCHOOL</h3>
          <p className="mt-3 opacity-90">Shaping tomorrow’s leaders</p>
        </div>

      </div>

      <p className="text-center mt-10 opacity-75 text-sm">
        © {new Date().getFullYear()} Genesis School. All Rights Reserved.
      </p>
    </footer>
  );
}