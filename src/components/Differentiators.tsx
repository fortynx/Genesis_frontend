// components/Differentiators.tsx
import Image from "next/image";

const items = [
  { id: 1, title: "Dynamic Educational Pathways", icon: "learning" },
  { id: 2, title: "Personalized Learning", icon: "user-group" },
  { id: 3, title: "Unique Pedagogy", icon: "book" },
  { id: 4, title: "Transformative Growth", icon: "arrow-up" },
  { id: 5, title: "Literacy Excellence", icon: "library" },
  { id: 6, title: "Celebrating Uniqueness", icon: "sparkles" },
  { id: 7, title: "Diverse Extracurriculars", icon: "star" },
  { id: 8, title: "State-of-the-Art Facilities", icon: "building" },
];

function Icon({ name }: { name: string }) {
  // small collection of simple SVG icons (keeps bundle small)
  const common = "w-8 h-8";
  switch (name) {
    case "learning":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 7l9-4 9 4-9 4L3 7z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 14v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "user-group":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="9" cy="7" r="3" stroke="white" strokeWidth="1.2" />
          <path d="M2 20c1.5-4 7-4 9-4s7.5 0 9 4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    case "book":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 19.5A2.5 2.5 0 0 1 5.5 17H20" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M21 6.5V17a2.5 2.5 0 0 0-2.5 2.5H7" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    case "arrow-up":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 19V5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M5 12l7-7 7 7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "library":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 19V5h4v14" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M10 19V5h4v14" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M16 19V5h4v14" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3l1.6 3.2L17 8l-3.4 1.8L12 13l-1.6-3.2L7 8l3.4-1.8L12 3z" stroke="white" strokeWidth="1.1" />
        </svg>
      );
    case "star":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 17.3L6.2 20l1-5.8L3 10.5l5.9-.9L12 4l3.1 5.6 5.9.9-4.2 3.7L17.8 20 12 17.3z" stroke="white" strokeWidth="1" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.2" />
        </svg>
      );
  }
}

export default function Differentiators() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* short summary */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-6">
          Welcome to GENESIS School, where a legacy of learning meets a new chapter of excellence. Guided by the philosophy of "Strong Minds & Happy Souls", GENESIS celebrates each child's uniqueness and fosters creative freedom while equipping them with essential life skills to become global citizens.
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">Our differentiators</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <div key={it.id} className="flex flex-col items-center">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center shadow-md ${
                  // alternate pastel colors
                  i % 4 === 0 ? "bg-amber-400" :
                  i % 4 === 1 ? "bg-sky-600" :
                  i % 4 === 2 ? "bg-teal-300" : "bg-red-400"
                }`}
                aria-hidden
              >
                <Icon name={it.icon} />
              </div>

              <div className="mt-4 text-center text-sm text-gray-700 max-w-[150px]">
                {it.title}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-[#436873] text-white rounded-full shadow hover:bg-[#36555d]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
