"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/hero/toyone.png",
  "/hero/toytwo.png",
  "/hero/toythree.png",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#92003f]">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 lg:px-10 py-16 lg:py-0">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center lg:min-h-[750px]">

          {/* LEFT */}

          <div className="contents lg:block min-w-0 text-white z-10 text-center lg:text-left lg:order-1">

            <div className="order-1 lg:order-none">
              <span className="font-heading uppercase tracking-[3px] text-sm sm:text-base text-[#ffcb67] font-semibold">
                Welcome To Young Wheels
              </span>

              <h1 className="font-heading font-bold md:font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] leading-tight mt-6">
                A Perfect Place To
                <br />
                Explore Your Kid's Talent
              </h1>
            </div>

            <p className="order-3 lg:order-none text-base sm:text-lg lg:text-xl text-white/90 leading-8 lg:leading-10 md:mt-8 max-w-xl mx-auto lg:mx-0">
              Young Wheels is the ultimate destination for toys that inspire
              learning, creativity and fun helping your child grow through play.
            </p>

            <div className="order-4 lg:order-none">
              <button className="font-heading md:mt-10 bg-gradient-to-r from-orange-500 to-pink-500 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg">
                EXPLORE NOW
              </button>
            </div>

          </div>

          {/* RIGHT */}

          <div className="min-w-0 relative flex justify-center order-2 lg:order-2">

            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 3000,
              }}
              loop
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              className="w-full min-w-0 max-w-[420px] sm:max-w-[560px] lg:max-w-[700px] xl:max-w-[860px]"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>

                  <div className="relative flex justify-center">

                    <Image
                      src={img}
                      alt="Young Wheels ride-on toy"
                      width={1982}
                      height={1459}
                      priority={i === 0}
                      sizes="(min-width: 1280px) 860px, (min-width: 1024px) 700px, (min-width: 640px) 560px, 420px"
                      className="w-full h-auto object-contain"
                    />

                  </div>

                </SwiperSlide>
              ))}
            </Swiper>

            {/* Buttons */}

            <button className="prev absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-[#92003f] shadow-lg flex items-center justify-center z-20 text-sm sm:text-base">
              <FaArrowLeft />
            </button>

            <button className="next absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-[#92003f] shadow-lg flex items-center justify-center z-20 text-sm sm:text-base">
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>

      {/* Decorative SVG */}

      <svg
        className="hidden sm:block absolute left-4 lg:left-10 top-8 lg:top-10 w-32 lg:w-52 opacity-70 animate-ping
"
        viewBox="0 0 220 80"
        fill="none"
      >
        <path
          d="M0 40
          C20 0 40 80 60 40
          S100 0 120 40
          S160 80 180 40
          S220 0 220 40"
          stroke="#FFD369"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {/* Sun */}

      <svg
        className="hidden sm:block absolute right-6 lg:right-20 top-6 lg:top-8 w-14 lg:w-20 animate-spin"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="12" stroke="#FFC84A" strokeWidth="4"/>
        <g stroke="#FFC84A" strokeWidth="4">
          <line x1="50" y1="5" x2="50" y2="20"/>
          <line x1="50" y1="80" x2="50" y2="95"/>
          <line x1="5" y1="50" x2="20" y2="50"/>
          <line x1="80" y1="50" x2="95" y2="50"/>
          <line x1="18" y1="18" x2="28" y2="28"/>
          <line x1="72" y1="72" x2="82" y2="82"/>
          <line x1="72" y1="28" x2="82" y2="18"/>
          <line x1="18" y1="82" x2="28" y2="72"/>
        </g>
      </svg>

      {/* Bottom Decoration */}

      <svg
        className="hidden lg:block absolute left-16 bottom-14 w-24 "
        viewBox="0 0 80 40"
      >
        <g fill="#fff">
          <circle cx="15" cy="20" r="8"/>
          <circle cx="30" cy="12" r="8"/>
          <circle cx="45" cy="20" r="8"/>
          <circle cx="30" cy="28" r="8"/>
        </g>
      </svg>

    </section>
  );
}
