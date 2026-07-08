"use client";

import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Vineet Bansal",
    time: "10 months ago",
    initial: "V",
    color: "#7c3aed",
    text: "\"High-quality toys with safe, creative designs~perfect for kids' fun and learning!\"",
    business: "Shree Bala Ji Traders Shamli",
  },
  {
    name: "Kuldeep Rajpurohit",
    time: "10 months ago",
    initial: "K",
    color: "#c2410c",
    text: "Amazing products,love it .\u{1F618}",
  },
  {
    name: "kunal",
    time: "10 months ago",
    initial: "k",
    color: "#065f46",
    text: "Excellent product quality",
  },
  {
    name: "krishna",
    time: "02 months ago",
    initial: "k",
    color: "#507e17",
    text: "Best product quality",
  },
  {
    name: "Prashant Google",
    time: "11 months ago",
    initial: "P",
    color: "#065f46",
    text: "Excellent product quality and very professional company. Customer support was responsive and delivery was on time. Highly recommend.",
  },
];

function GoogleIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function VerifiedBadge({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#4285F4">
      <path d="M12 1.5l2.6 1.53 3-.62 1.02 2.9 2.9 1.02-.62 3 1.53 2.6-1.53 2.6.62 3-2.9 1.02-1.02 2.9-3-.62L12 22.5l-2.6-1.53-3 .62-1.02-2.9-2.9-1.02.62-3-1.53-2.6 1.53-2.6-.62-3 2.9-1.02 1.02-2.9 3 .62L12 1.5z" />
      <path
        d="M8.8 12.3l2.1 2.1 4.3-4.3"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function ReviewSection() {
  return (
    <section className="bg-[#FFF8EF] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-5xl font-extrabold text-[#17162c]">
            Review
          </h2>

          <svg width="180" height="18" className="mx-auto mt-4">
            <path
              d="M0 10
              Q10 0 20 10
              T40 10
              T60 10
              T80 10
              T100 10
              T120 10
              T140 10
              T160 10
              T180 10"
              stroke="#ff4f6d"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

        </div>

        {/* Reviews Carousel */}

        <div className="relative">

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".review-prev",
              nextEl: ".review-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="bg-[#f2f0ee] rounded-2xl p-6 h-full min-h-[260px] flex flex-col">

                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                      style={{ backgroundColor: r.color }}
                    >
                      {r.initial}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#1a1a1a] truncate">
                        {r.name}
                      </h4>
                      <p className="text-xs text-gray-500">{r.time}</p>
                    </div>

                    <GoogleIcon className="w-6 h-6 shrink-0" />
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} className="text-[#fbbc04] text-sm" />
                    ))}
                    <VerifiedBadge className="w-4 h-4 ml-1" />
                  </div>

                  <p className="text-[#333] leading-6">{r.text}</p>

                  {r.business && (
                    <p className="text-[#333] leading-6">{r.business}</p>
                  )}

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="review-prev absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center z-10 text-gray-600 hover:text-[#ff4f6d] transition-colors">
            <ChevronLeft size={20} />
          </button>

          <button className="review-next absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center z-10 text-gray-600 hover:text-[#ff4f6d] transition-colors">
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}
