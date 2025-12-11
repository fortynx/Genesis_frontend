"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { headerMenu } from "./MenuData";

export default function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
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
              className="relative group cursor-pointer flex items-center gap-1"
            >
              <span className="hover:text-orange-500 transition">
                {item.title}
              </span>

              {/* DROPDOWN ARROW */}
              {item.children && (
                <svg
                  className={`
                    w-3 h-3 transition-transform duration-300 mt-[3px]
                    ${sticky ? "text-black" : "text-white"}
                    group-hover:rotate-180
                  `}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}

              {/* DROPDOWN MENU BOX */}
              {item.children && (
                <div
                  className="
                    absolute left-0 top-8 hidden group-hover:block 
                    bg-[#436873]
                    text-white 
                    rounded-md shadow-xl 
                    w-[260px]
                    overflow-hidden
                    border border-white/20
                  "
                >
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href}
                      className="
                        block px-5 py-4
                        border-t border-white/25
                        first:border-t-0
                        hover:bg-[#517c89]
                        text-[16px]
                      "
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
          href="#"
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            sticky
              ? "bg-orange-500 text-white"
              : "bg-white text-orange-500"
          }`}
        >
          Visit Us
        </Link>
      </div>
    </header>
  );
}
