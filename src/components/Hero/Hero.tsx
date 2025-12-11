import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/hero1.jpg"
        alt="School Building"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Title */}
      <div className="absolute inset-0 flex items-end justify-center pb-24">
        <h1 className="text-white text-6xl font-bold text-center drop-shadow-xl leading-tight">
          Redefine Possibility
        </h1>
      </div>

    </section>
  );
}
