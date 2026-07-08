"use client";

import Image from "next/image";

const partners = [
  {
    name: "VMart",
    logo: "/vmart.png",
  },
  {
    name: "VBazaar",
    logo: "/vbazar.png",
  },
];

export default function PartnerSection() {
  return (
    <section className="py-7 bg-[#FFF8EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl lg:text-4xl font-bold text-[#17172F] leading-tight">
            Collaborate for a Brighter Tomorrow
            
          </h2>

          <p className="mt-5 text-gray-500 text-lg leading-7">
            We proudly team up with brands that believe in shaping young
            minds and joyful learning.
            <br />
            Together, we create playful possibilities that make a lasting
            impact.
          </p>

          {/* Decorative Line */}

          <svg
            width="170"
            height="18"
            viewBox="0 0 170 18"
            className="mx-auto mt-8"
          >
            <path
              d="M2 9
                 C8 2 14 16 20 9
                 S32 2 38 9
                 S50 16 56 9
                 S68 2 74 9
                 S86 16 92 9
                 S104 2 110 9
                 S122 16 128 9
                 S140 2 146 9
                 S158 16 166 9"
              fill="none"
              stroke="#FF6A6A"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Partner Cards */}

        <div className="mt-20 flex flex-wrap justify-center gap-10">

          {partners.map((item, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="w-[320px] h-[220px] rounded-[28px] border-2 border-dashed border-[#D5AE28] bg-white flex items-center justify-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-solid">

                <Image
                  src={item.logo}
                  alt={item.name}
                  width={210}
                  height={120}
                  className="object-contain transition duration-500 group-hover:scale-105"
                />

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}