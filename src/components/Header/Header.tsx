"use client";

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

  // show header only at top
  useEffect(() => {
    const handleScroll = () => setShowHeader(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (item: any) => {
    if (item.href && pathname === item.href) return true;
    if (item.children)
      return item.children.some((c: any) =>
        pathname.startsWith(c.href)
      );
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
      ${showHeader ? "translate-y-0" : "-translate-y-full"}
      bg-transparent text-white`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Genesis School"
            width={150}
            height={70}
            className="brightness-200"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-[17px] font-medium">
          {headerMenu.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
                setOpenMenu(index);
              }}
              onMouseLeave={() => {
                closeTimer.current = setTimeout(
                  () => setOpenMenu(null),
                  300
                );
              }}
            >
              {/* ✅ CLICKABLE PARENT */}
              <Link
                href={item.href ?? "#"}
                className={`flex items-center gap-1 cursor-pointer transition
                  ${
                    isActive(item)
                      ? "text-orange-500 font-semibold"
                      : "hover:text-orange-500"
                  }`}
              >
                {item.title}
                {item.children && (
                  <FiChevronDown
                    className={`transition ${
                      openMenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* DROPDOWN */}
              {item.children && openMenu === index && (
                <div className="absolute left-0 top-8 bg-[#436873] w-[260px] rounded-md shadow-xl">
                  {item.children.map((child: any, i: number) => (
                    <Link
                      key={i}
                      href={child.href}
                      className={`block px-5 py-4 border-t border-white/20 first:border-t-0
                        ${
                          pathname === child.href
                            ? "bg-orange-500 font-semibold"
                            : "hover:bg-[#517c89]"
                        }`}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* VISIT US */}
        <Link
          href="/visit-us"
          className="hidden md:block px-6 py-2 rounded-full bg-white text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition"
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
          {headerMenu.map((item, i) => (
            <div key={i}>
              <Link
                href={item.href ?? "#"}
                onClick={() => setMobileOpen(false)}
                className={`block font-semibold ${
                  isActive(item)
                    ? "text-orange-400"
                    : "hover:text-orange-400"
                }`}
              >
                {item.title}
              </Link>

              {item.children && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.children.map((child: any, j: number) => (
                    <Link
                      key={j}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block ${
                        pathname === child.href
                          ? "text-orange-400 font-semibold"
                          : "hover:text-orange-400"
                      }`}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
