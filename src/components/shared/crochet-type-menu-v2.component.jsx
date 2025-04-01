"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CrochetDropdownV2 = ({ crochetTypes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const isDropdownActive = pathname.startsWith("/crochet_designs/");

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-2 font-playfair rounded-md transition ${isDropdownActive ? "active" : ""}`}
      >
        Crochet Designs
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-[#fdf3f3] rounded-md overflow-hidden z-50">
          <ul>
            {crochetTypes.length > 0 ? (
              crochetTypes.map((type) => {
                const isActive = pathname === `/crochet_designs/${type.slug}`;
                return (
                  <li key={type.id}>
                    <Link
                      href={`/crochet_designs/${type.slug}`}
                      className={`block px-4 py-2 nav-link font-playfair transition ${
                        isActive ? "active" : ""
                      }`}
                      onClick={() => setIsOpen(false)} // Close on select
                    >
                      {type.name}
                    </Link>
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-2 text-gray-500">No types available</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CrochetDropdownV2;
