"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  Star,
  Shirt,
  Baby,
  Gift,
  Heart,
  Sparkles,
  Circle,
} from "lucide-react";

// Deterministic pseudo-random generator so server and client render the same
// decorative positions (Math.random() here would cause hydration mismatches).
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const starRand = seededRandom(42);
const starPositions = Array.from({ length: 120 }, () => ({
  left: `${starRand() * 100}%`,
  top: `${starRand() * 100}%`,
  size: starRand() * 8 + 6,
}));

const dotRand = seededRandom(7);
const dotPositions = Array.from({ length: 150 }, () => ({
  left: `${dotRand() * 100}%`,
  top: `${dotRand() * 100}%`,
  size: dotRand() * 4 + 2,
}));

export default function Breadcrumb({ current }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFE37A] via-[#FFD95E] to-[#FFD34D] py-20 md:py-28">

      {/* ================= BACKGROUND ================= */}

      {/* Dots */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(#C7A328 1.6px, transparent 1.6px),
            radial-gradient(#C7A328 1.6px, transparent 1.6px)
          `,
          backgroundSize: "26px 26px",
          backgroundPosition: "0 0,13px 13px",
        }}
      />

      {/* Small Stars */}
      <div className="absolute inset-0">
        {starPositions.map((pos, i) => (
          <span
            key={i}
            className="absolute text-yellow-700/25"
            style={{ left: pos.left, top: pos.top }}
          >
            <Star size={pos.size} fill="currentColor" strokeWidth={0} />
          </span>
        ))}
      </div>

      {/* Decorative Icons */}

      <Baby className="absolute left-10 top-12 w-14 h-14 text-yellow-700/15 rotate-12 hidden lg:block" />

      <Shirt className="absolute left-36 top-8 w-14 h-14 text-yellow-700/15 -rotate-12 hidden lg:block" />

      <Gift className="absolute left-20 bottom-16 w-14 h-14 text-yellow-700/15 rotate-12 hidden lg:block" />

      <Heart className="absolute left-64 bottom-10 w-10 h-10 text-yellow-700/15 hidden lg:block" />

      <Sparkles className="absolute left-72 top-32 w-10 h-10 text-yellow-700/15 hidden lg:block" />

      <Baby className="absolute right-10 top-12 w-14 h-14 text-yellow-700/15 -rotate-12 hidden lg:block" />

      <Shirt className="absolute right-36 top-10 w-14 h-14 text-yellow-700/15 rotate-12 hidden lg:block" />

      <Gift className="absolute right-24 bottom-20 w-14 h-14 text-yellow-700/15 hidden lg:block" />

      <Heart className="absolute right-72 bottom-12 w-10 h-10 text-yellow-700/15 hidden lg:block" />

      <Sparkles className="absolute right-64 top-28 w-10 h-10 text-yellow-700/15 hidden lg:block" />

      {/* Tiny Random Dots */}

      <div className="absolute inset-0 overflow-hidden">
        {dotPositions.map((pos, i) => (
          <Circle
            key={i}
            fill="currentColor"
            strokeWidth={0}
            className="absolute text-yellow-700/20"
            style={{
              width: `${pos.size}px`,
              height: `${pos.size}px`,
              left: pos.left,
              top: pos.top,
            }}
          />
        ))}
      </div>

      {/* ================= LEFT KID ================= */}

      <div className="absolute bottom-0 left-4 hidden lg:block">
        <Image
          src="/boy.png"
          alt="Kid"
          width={250}
          height={250}
          priority
        />
      </div>

      {/* ================= RIGHT KID ================= */}

      <div className="absolute bottom-0 right-4 hidden lg:block">
        <Image
          src="/girl.png"
          alt="Kid"
          width={220}
          height={220}
          priority
        />
      </div>

      {/* ================= BEES ================= */}

      <div
        className="absolute left-[18%] top-24 hidden lg:block"
        style={{
          animation: "float 4s ease-in-out infinite",
        }}
      >
        <Image
          src="/bee.png"
          alt="Bee"
          width={70}
          height={70}
        />
      </div>

      <div
        className="absolute right-[22%] top-12 hidden lg:block"
        style={{
          animation: "float 4s ease-in-out infinite",
        }}
      >
        <Image
          src="/bee.png"
          alt="Bee"
          width={75}
          height={75}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-20 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">

          <p className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-black">
            {current}
          </p>

          <div className="mt-5 flex items-center gap-2 text-base md:text-lg font-medium text-gray-900">

            <Link
              href="/"
              className="flex items-center gap-2 hover:text-orange-600 transition"
            >
              <Home size={18} />
              Home
            </Link>

            <ChevronRight size={18} />

            <span>{current}</span>

          </div>

        </div>
      </div>

      {/* ================= FLOAT ANIMATION ================= */}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>

    </section>
  );
}
