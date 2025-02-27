"use client";
import { Image } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const AppNavigation = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-white py-1 px-10 md:px-30 lg:px-50 shadow-md">
      <div className="flex justify-between items-center">
        <div className="aspect-w-16 aspect-h-9 text-2xl font-bold text-gray-900">
          <Link href="/">
            <Image
              src="/logo.jpg"
              preview={false}
              width={130}
              height={75}
              alt="logo"
              className="w-full h-auto object-cover"
            />
          </Link>
        </div>

        {/* desktop menus */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`nav-link  ${pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`nav-link  ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`nav-link  ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            className="py-1 px-1 bg-gray-100 rounded-lg cursor-pointer"
          >
            <BiMenu size={35} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md py-5 px-10 md:px-30 lg:px-50">
            <div className="flex flex-col space-y-6">
              <Link
                href="/"
                className={`nav-link  ${pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>

              <Link
                href="/services"
                className={`nav-link  ${
                  pathname === "/services" ? "active" : ""
                }`}
              >
                Our Services
              </Link>

              <Link
                href="/about"
                className={`nav-link  ${pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`nav-link  ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppNavigation;
