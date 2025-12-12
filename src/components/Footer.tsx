export default function Footer() {
  return (
    <footer className="bg-[#436873] text-white py-12" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6">
        
        <div>
          <h3 className="text-2xl font-bold">Let’s build something great together.</h3>
          <p className="mt-4 text-lg">Call us: +91 90 1018 5000</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-[17px]">
            <li>Home</li>
            <li>About</li>
            <li>Academics</li>
            <li>Admissions</li>
            <li>Gallery</li>
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
