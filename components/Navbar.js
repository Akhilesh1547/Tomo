"use client"; // Mark this as a client component
import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-teal-400">
              Tomo
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Home
            </Link>
            <Link href="/forums" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Forums
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              About
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Contact
            </Link>
          </div>

          {/* User Button */}
          <div className="hidden md:flex items-center space-x-4">
            <UserButton/>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <Link href="/" className="block px-4 py-2 text-sm text-white hover:bg-gray-600">
            Home
          </Link>
          <Link href="/forums" className="block px-4 py-2 text-sm text-white hover:bg-gray-600">
            Forums
          </Link>
          <Link href="/about" className="block px-4 py-2 text-sm text-white hover:bg-gray-600">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-sm text-white hover:bg-gray-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
