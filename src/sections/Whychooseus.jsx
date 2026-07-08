"use client";

import {
  FaPuzzlePiece,
  FaChild,
  FaShieldAlt,
  FaSmile,
} from "react-icons/fa";

const features = [
  {
    title: "Wide Range of Engaging Toys",
    description:
      "From swing cars to rocking animals, we offer a fun-filled variety that keeps children entertained while supporting their development.",
    color: "bg-[#c7346c]",
    icon: <FaPuzzlePiece />,
  },
  {
    title: "Durable & Child-Friendly Build",
    description:
      "Our toys are built to handle rough and joyful play, making them perfect for everyday use by toddlers and kids alike.",
    color: "bg-[#ff6477]",
    icon: <FaChild />,
  },
  {
    title: "Safe & Non-Toxic Materials",
    description:
      "Your child's safety is our priority. All our toys are made from certified non-toxic and kid-friendly materials.",
    color: "bg-[#ff954f]",
    icon: <FaShieldAlt />,
  },
  {
    title: "Designed For Learning & Play",
    description:
      "Each product is thoughtfully crafted to stimulate creativity, motor skills and early learning through play.",
    color: "bg-[#ffc36d]",
    icon: <FaSmile />,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative">

      {/* Fixed Background */}

      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/whychoose.jpg')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#fff5ef]/20 backdrop-blur-[1px]" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto py-28 px-6">

        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#17162c]">
            Why Choose Us?
          </h2>

          <svg
            width="180"
            height="18"
            className="mx-auto mt-4"
          >
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

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {features.map((item, index) => (

            <div
              key={index}
              className={`${item.color} rounded-[170px] h-[560px] px-10 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-2xl hover:-translate-y-4 duration-500`}
            >

     

              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl mb-10">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                {item.title}
              </h3>

              <p className="text-white/90 leading-9 text-lg">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}