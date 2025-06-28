"use client";
import { useState } from "react";
import Link from "next/link";
import { navItems, navItems2 } from "@/config/site";
import ThemeToggle from "./themeTogle";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600">
              <img
                src="https://mdabdulkaiyum.in/assets/logo_fav/main_logo_fav.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="bangla hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item.title}
              </Link>
            ))}
            {navItems2.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white bg-blue-700 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out hover:scale-105"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/shop"
              className="dark:text-white flex items-center gap-1 text-gray-700 hover:text-blue-600"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              <span>Shop Now</span>
            </Link>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle className="lg:hidden block" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 focus:outline-none focus:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className=" bangla md:hidden bg-white px-4 pb-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600"
            >
              {item.title}
            </Link>
          ))}
          {navItems2.map((item) => (
            <Link key={item.href} href={item.href} className="my-2">
              <span className="text-white bg-blue-700 px-3 py-2 my-4 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out hover:scale-105">
                {item.title}
              </span>
            </Link>
          ))}

          <Link
            href="/shop"
            className=" dark:text-white flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <ShoppingBagIcon className="h-5 w-5" />
            <span>Shop Now</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
