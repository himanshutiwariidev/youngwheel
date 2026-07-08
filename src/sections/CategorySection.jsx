"use client";

import Link from "next/link";
import Image from "next/image";

import categories from "@/data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

export default function CategorySection() {
  return (
    <section className="py-15 overflow-hidden">

      <div className="max-w-[1700px] mx-auto px-5">

        {/* Heading */}

        <div className="flex items-center justify-between mb-10">

          <div>

            <span className="uppercase tracking-[4px] text-[#ff5b6d] font-semibold">
              Categories
            </span>

            <h2 className="text-2xl md:text-5xl font-black mt-2">
              Shop By Category
            </h2>

          </div>

          <div className="hidden md:flex gap-4">

            <button className="category-prev w-14 h-14 rounded-xl bg-[#FFE7BF] hover:bg-[#FFD89A] transition flex items-center justify-center">

              <FaChevronLeft />

            </button>

            <button className="category-next w-14 h-14 rounded-xl bg-[#FFE7BF] hover:bg-[#FFD89A] transition flex items-center justify-center">

              <FaChevronRight />

            </button>

          </div>

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".category-prev",
            nextEl: ".category-next",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Link href={`/${category.slug}`}>

                <div className="relative overflow-hidden rounded-[30px]  aspect-[1.45/1] group">

                  {/* Background Image */}

                  <Image
                    src={category.categoryImage}
                    alt={category.categoryName}
                    fill
                    priority
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}

                 
                  {/* Content */}

                  
                    {/* SVG Decoration */}

                  
                </div>

              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}