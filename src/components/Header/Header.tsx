"use client";

<<<<<<< HEAD
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { headerMenu } from "./MenuData";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
=======
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { headerMenu } from "./MenuData";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  // ✅ Show header ONLY when page is at top
  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY === 0);
    };

>>>>>>> sravanti-frontend
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< HEAD
  const handleMouseEnter = (index: number) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(index);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 400); // ⏱️ hover delay (increase/decrease here)
=======
  // ✅ Active menu logic (parent + child)
  const isActive = (item: any) => {
    if (item.href && pathname === item.href) return true;

    if (item.children) {
      return item.children.some((child: any) =>
        pathname.startsWith(child.href)
      );
    }

    return false;
>>>>>>> sravanti-frontend
  };

  return (
    <header
<<<<<<< HEAD
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
=======
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        bg-transparent text-white
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
>>>>>>> sravanti-frontend

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="School Logo"
            width={150}
            height={70}
<<<<<<< HEAD
            className={sticky ? "" : "brightness-200"}
          />
        </Link>

        {/* MENU */}
=======
            className="brightness-200"
          />
        </Link>

        {/* DESKTOP MENU */}
>>>>>>> sravanti-frontend
        <nav className="hidden md:flex items-center gap-8 text-[17px] font-medium">
          {headerMenu.map((item, index) => (
            <div
              key={index}
              className="relative"
<<<<<<< HEAD
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Parent Menu Item */}
              <span className="cursor-pointer flex items-center gap-1 hover:text-orange-500 transition">
                {item.children ? (
                  <>
                    {item.title}
                    <FiChevronDown
                      size={18}
                      className={`transition ${
                        openMenu === index
                          ? "rotate-180 text-orange-500"
                          : ""
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
                  onMouseEnter={() => {
                    if (closeTimeout.current)
                      clearTimeout(closeTimeout.current);
                  }}
                  onMouseLeave={handleMouseLeave}
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
=======
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
                setOpenMenu(index);
              }}
              onMouseLeave={() => {
                closeTimer.current = setTimeout(() => {
                  setOpenMenu(null);
                }, 400); // 👈 dropdown delay
              }}
            >
              {item.children ? (
                <span
                  className={`flex items-center gap-1 cursor-pointer
                    ${
                      isActive(item)
                        ? "text-orange-500 font-semibold"
                        : "hover:text-orange-500"
                    }
                  `}
                >
                  {item.title}
                  <FiChevronDown
                    className={`transition ${
                      openMenu === index ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition
                    ${
                      isActive(item)
                        ? "text-orange-500 font-semibold"
                        : "hover:text-orange-500"
                    }
                  `}
                >
                  {item.title}
                </Link>
              )}

              {/* DROPDOWN */}
              {item.children && openMenu === index && (
                <div className="absolute left-0 top-8 bg-[#436873] text-white w-[260px] rounded-md shadow-xl">
                  {item.children.map((child: any, i: number) => (
                    <Link
                      key={i}
                      href={child.href}
                      className={`block px-5 py-4 border-t border-white/20 first:border-t-0
                        ${
                          pathname === child.href
                            ? "bg-orange-500 font-semibold"
                            : "hover:bg-[#517c89]"
                        }
                      `}
>>>>>>> sravanti-frontend
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

<<<<<<< HEAD
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
=======
        {/* VISIT US */}
        <Link
          href="/visit-us"
          className="hidden md:block px-6 py-2 rounded-full font-semibold bg-white text-orange-500 hover:bg-orange-500 hover:text-white transition"
        >
          Visit Us
        </Link>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#313e3b] text-white px-6 py-6 space-y-4">
              {/* HOME LINK */}
    <Link
  href="/"
  onClick={() => setMobileOpen(false)}
  className="block px-4 py-2 text-white hover:text-orange-400 font-semibold"
>
  Home
</Link>

          {headerMenu.map((item, i) => (
            <div key={i}>
              {item.children ? (
                <>
                 <button
  className={`flex items-center gap-2 font-semibold transition
    ${
      openMenu === i || isActive(item)
        ? "text-orange-400"
        : "text-white hover:text-orange-400"
    }
  `}
  onClick={() => setOpenMenu(openMenu === i ? null : i)}
>
  {item.title}
  <FiChevronDown
    className={`transition-transform ${
      openMenu === i ? "rotate-180 text-orange-400" : ""
    }`}
  />
</button>


                  {openMenu === i && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child: any, j: number) => (
                        <Link
                          key={j}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block
                            ${
                              pathname === child.href
                                ? "text-orange-400 font-semibold"
                                : "hover:text-orange-400"
                            }
                          `}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block
                    ${
                      pathname === item.href
                        ? "text-orange-400 font-semibold"
                        : "hover:text-orange-400"
                    }
                  `}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
>>>>>>> sravanti-frontend
    </header>
  );
}
