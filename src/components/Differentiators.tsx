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

// simple icons
function Icon({ name }: { name: string }) {
  const common = "w-8 h-8";
  switch (name) {
    case "learning":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M3 7l9-4 9 4-9 4L3 7z" stroke="white" strokeWidth="1.3" />
          <path d="M21 14v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" stroke="white" strokeWidth="1.3" />
        </svg>
      );
    case "user-group":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <circle cx="9" cy="7" r="3" stroke="white" strokeWidth="1.3" />
          <path d="M2 20c1.5-4 7-4 9-4s7.5 0 9 4" stroke="white" strokeWidth="1.3" />
        </svg>
      );
    case "book":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path d="M3 19.5A2.5 2.5 0 0 1 5.5 17H20" stroke="white" strokeWidth="1.3" />
          <path d="M21 6.5V17a2.5 2.5 0 0 0-2.5 2.5H7" stroke="white" strokeWidth="1.3" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path d="M12 19V5" stroke="white" strokeWidth="1.5" />
          <path d="M5 12l7-7 7 7" stroke="white" strokeWidth="1.5" />
        </svg>
      );
    case "library":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path d="M4 19V5h4v14" stroke="white" strokeWidth="1.3" />
          <path d="M10 19V5h4v14" stroke="white" strokeWidth="1.3" />
          <path d="M16 19V5h4v14" stroke="white" strokeWidth="1.3" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path d="M12 3l1.6 3.2L17 8l-3.4 1.8L12 13l-1.6-3.2L7 8l3.4-1.8L12 3z" stroke="white" strokeWidth="1.1" />
        </svg>
      );
    case "star":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path d="M12 17.3L6.2 20l1-5.8L3 10.5l5.9-.9L12 4l3.1 5.6 5.9.9-4.2 3.7L17.8 20 12 17.3z" stroke="white" strokeWidth="1.1" />
        </svg>
      );
    default:
      return <div className={common} />;
  }
}

export default function Differentiators() {
  return (
    <section className="py-16 bg-white" id = "academics" >
      {/* CENTERED CONTENT EXACTLY LIKE SCREENSHOT */}
      <div className="max-w-3xl mx-auto px-6">

        {/* Top description */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
          Welcome to GENESIS School, where a legacy of learning meets a new chapter of excellence...
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Our differentiators
        </h2>

        {/* GRID + TIC TAC LINES */}
        <div className="relative">

          {/* Lines for desktop (4 columns, 2 rows) */}
          <div className="hidden sm:block absolute inset-0 pointer-events-none">
            {/* vertical lines */}
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gray-300" />
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300" />
            <div className="absolute top-0 bottom-0 left-3/4 w-px bg-gray-300" />

            {/* horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-300" />
          </div>

          {/* Lines for mobile (2 columns, 4 rows) */}
          <div className="block sm:hidden absolute inset-0 pointer-events-none">
            {/* vertical line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300" />

            {/* horizontal row lines */}
            <div className="absolute left-0 right-0 top-[25%] h-px bg-gray-300" />
            <div className="absolute left-0 right-0 top-[50%] h-px bg-gray-300" />
            <div className="absolute left-0 right-0 top-[75%] h-px bg-gray-300" />
          </div>

          {/* GRID ITEMS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 relative z-10">
            {items.map((it, i) => (
              <div key={it.id} className="flex flex-col items-center py-6 px-4">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center shadow ${
                    i % 4 === 0 ? "bg-amber-400" :
                    i % 4 === 1 ? "bg-sky-600" :
                    i % 4 === 2 ? "bg-teal-300" : "bg-red-400"
                  }`}
                >
                  <Icon name={it.icon} />
                </div>
                <p className="mt-4 text-center text-gray-700 text-sm max-w-[150px]">{it.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* learn more button */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-[#436873] text-white rounded-full shadow hover:bg-[#36555d]">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
