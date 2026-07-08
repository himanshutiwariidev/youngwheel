import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Cloud } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const usefulLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "New Arrival", href: "/new-arrival" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

// Large cloud puffs sitting on the baseline
const cloudPuffs = [
  { cx: 20, r: 55 },
  { cx: 120, r: 80 },
  { cx: 230, r: 50 },
  { cx: 330, r: 95 },
  { cx: 440, r: 60 },
  { cx: 530, r: 70 },
  { cx: 615, r: 45 },
  { cx: 705, r: 85 },
  { cx: 810, r: 65 },
  { cx: 900, r: 55 },
  { cx: 990, r: 75 },
  { cx: 1100, r: 90 },
  { cx: 1210, r: 50 },
  { cx: 1300, r: 70 },
  { cx: 1400, r: 60 },
  { cx: 1460, r: 55 },
];

// Smaller puffs layered on the shoulders of the big ones for an irregular, fluffy edge
const cloudNubs = [
  { cx: 75, r: 30 },
  { cx: 175, r: 35 },
  { cx: 275, r: 25 },
  { cx: 380, r: 40 },
  { cx: 475, r: 28 },
  { cx: 565, r: 32 },
  { cx: 655, r: 26 },
  { cx: 755, r: 38 },
  { cx: 855, r: 30 },
  { cx: 950, r: 26 },
  { cx: 1045, r: 34 },
  { cx: 1155, r: 30 },
  { cx: 1255, r: 26 },
  { cx: 1350, r: 32 },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#D44F63]">

      {/* Cloudy divider */}
      <div className="bg-[#fdf5e8]">
        <svg
          viewBox="0 0 1460 200"
          preserveAspectRatio="none"
          className="block w-full h-20 sm:h-32 lg:h-44"
        >
          <rect x="0" y="100" width="1460" height="100" fill="#D44F63" />
          {cloudPuffs.map((p, i) => (
            <circle key={`puff-${i}`} cx={p.cx} cy="140" r={p.r} fill="#D44F63" />
          ))}
          {cloudNubs.map((n, i) => (
            <circle key={`nub-${i}`} cx={n.cx} cy="108" r={n.r} fill="#D44F63" />
          ))}
        </svg>
      </div>

      {/* Sun doodle */}
      <svg
        className="hidden sm:block absolute right-16 lg:right-32 top-16 lg:top-24 w-12 lg:w-16"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="12" stroke="#FFC84A" strokeWidth="4" fill="none" />
        <g stroke="#FFC84A" strokeWidth="4">
          <line x1="50" y1="5" x2="50" y2="20" />
          <line x1="50" y1="80" x2="50" y2="95" />
          <line x1="5" y1="50" x2="20" y2="50" />
          <line x1="80" y1="50" x2="95" y2="50" />
          <line x1="18" y1="18" x2="28" y2="28" />
          <line x1="72" y1="72" x2="82" y2="82" />
          <line x1="72" y1="28" x2="82" y2="18" />
          <line x1="18" y1="82" x2="28" y2="72" />
        </g>
      </svg>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-10 pt-8 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-3 gap-14 lg:gap-10 text-white">

          {/* Column 1: Logo + Info */}
          <div>
            <Image
              src="/logo.png"
              alt="Young Wheels"
              width={190}
              height={100}
              className="mb-6"
            />

            <div className="flex items-start gap-3 mb-5">
              <MapPin size={20} className="shrink-0 mt-1" />
              <p className="text-white/90 leading-7">
                Plot No 182-183 Kh No 155, Lal Doora Village, Pooth khurd, New
                Delhi -110039 (India)
              </p>
            </div>

            <p className="text-white/90 leading-7 mb-5">
              MSME NO-UDYAM-DL-10-0029707 GSTIN/UIN: 07AACFY3852A1ZE State
              Name : Delhi, Code : 07
            </p>

            <div className="flex items-center gap-3 mb-3">
              <Mail size={18} className="shrink-0" />
              <span className="text-white/90">india.youngwheels@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Phone size={18} className="shrink-0" />
              <span className="text-white/90">+91 8383047505</span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/people/Young-Wheels/61577800809594/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white text-[#ff4d6d] flex items-center justify-center hover:bg-[#ffcb67] transition-colors"
              >
                <FaFacebookF size={16} />
              </Link>

              <Link
                href="https://www.instagram.com/youngwheelsindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white text-[#ff4d6d] flex items-center justify-center hover:bg-[#ffcb67] transition-colors"
              >
                <FaInstagram size={17} />
              </Link>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="relative">
            <h3 className="font-heading text-2xl font-bold mb-6">
              USEFUL LINKS
            </h3>

            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-[#ffcb67] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

           
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">
              NEWSLETTER SUBSCRIPTION
            </h3>

            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-md px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-300 py-3 rounded-md font-heading font-bold tracking-wide"
              >
                SUBMIT
              </button>
            </form>

            <p className="italic text-white/90 mt-6 leading-7">
              &quot;Join our newsletter to receive the latest updates, tips,
              and useful information straight to your inbox!&quot;
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#7c3040] text-center text-white/90 py-4 pb-24 sm:pb-4 px-6 text-sm">
        Copyright © 2025 YOUNG WHEELS All Right Reserved | Powered by{" "}
        <Link href="#" className="text-[#ffcb67] hover:underline">
          Bharat Bizmart
        </Link>
      </div>

      {/* Floating WhatsApp contact */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <span className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-md hidden sm:inline-block">
          Contact us
        </span>
        <Link
          href="https://wa.me/917011227049"
          target="_blank"
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"
        >
          <FaWhatsapp size={26} className="text-white" />
        </Link>
      </div>

    </footer>
  );
}
