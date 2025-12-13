"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { headerMenu } from "./MenuData";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="School Logo"
            width={150}
            height={70}
            className={`${sticky ? "" : "brightness-200"}`}
          />
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-[17px] font-medium">
          {headerMenu.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col"
              onMouseEnter={() => setOpenMenu(index)}  // ⭐ Open dropdown on hover
              onMouseLeave={() => setOpenMenu(null)}   // ⭐ Close when moving cursor
            >
              {/* Parent Menu Item */}
              <span className="cursor-pointer flex items-center gap-1 hover:text-orange-500 transition">
                {item.children ? (
                  <>
                    {item.title}
                    <FiChevronDown
                      size={18}
                      className={`transition ${
                        openMenu === index ? "rotate-180 text-orange-500" : ""
                      }`}
                    />
                  </>
                ) : (
                  <Link href={item.href}>{item.title}</Link>
                )}
              </span>

              {/* DROPDOWN */}
              {item.children && openMenu === index && (
                <div
                  className="
                    absolute left-0 top-8
                    bg-[#436873] text-white
                    rounded-md shadow-xl
                    w-[260px] z-50
                    border border-white/20
                  "
                >
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href}
                      className="
                        block px-5 py-4
                        border-t border-white/25 first:border-t-0
                        hover:bg-[#517c89]
                        text-[16px]
                        transition
                      "
                      onClick={() => setOpenMenu(null)}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <Link
          href="/visit-us"
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            sticky ? "bg-orange-500 text-white" : "bg-white text-orange-500"
          }`}
        >
          Visit Us
        </Link>
      </div>
    </header>
  );
}
