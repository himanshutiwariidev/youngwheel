"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about-us" },
    { name: "PRODUCT", href: "/products" },
    { name: "NEW ARRIVAL", href: "/new-arrival" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT US", href: "/contact-us" },
  ];

  return (
    <header className="w-full">
      {/* =================== TOPBAR =================== */}
      <div className="bg-[#f8d9a3] border-b border-[#edd39e]">
        <div className="max-w-[1700px] mx-auto px-4 md:px-8 h-10 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-8 text-[15px] font-medium text-black">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 8383047505</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Mail size={16} />
              <span>india.youngwheels@gmail.com</span>
            </div>
          </div>

          {/* Right */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="https://www.facebook.com/people/Young-Wheels/61577800809594/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#6c6870] hover:bg-black duration-300 flex items-center justify-center text-white"
            >
              <FaFacebookF size={14} />
            </Link>

            <Link
              href="https://www.instagram.com/youngwheelsindia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#6c6870] hover:bg-black duration-300 flex items-center justify-center text-white"
            >
              <FaInstagram size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* =================== NAVBAR =================== */}
      <div className="bg-[#faf4ea]">
        <div className="max-w-[1700px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-[110px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Young Wheels"
                width={180}
                height={80}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12 ml-auto">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[15px] font-semibold tracking-wide transition-all duration-300 ${
                    item.name === "HOME"
                      ? "text-[#ff5f68]"
                      : "text-[#66656d] hover:text-[#ff5f68]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Button */}
            <Link
              href="/contact-us"
              className="hidden lg:flex ml-4 items-center justify-center px-7 h-11 rounded-full bg-[#ff7158] hover:bg-[#ff6247] text-white text-md font-semibold transition-all duration-300"
            >
              ENQUIRY NOW
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* =================== MOBILE MENU =================== */}
        {isOpen && (
          <div className="lg:hidden bg-[#faf4ea] border-t">
            <div className="flex flex-col py-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-[#66656d] font-semibold hover:text-[#ff5f68]"
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-6 pt-4">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center h-12 rounded-full bg-[#ff7158] text-white font-semibold"
                >
                  ENQUIRY NOW
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}