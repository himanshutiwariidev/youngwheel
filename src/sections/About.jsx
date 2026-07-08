import Image from "next/image";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-[#fdf5e8] py-15 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <div className="relative flex justify-center">

            {/* Decorative Blob */}

            <div className="hidden md:block absolute w-[520px] h-[520px] bg-[#d7eef5] rounded-[44%_56%_60%_40%/44%_40%_60%_56%] z-0" />

            {/* Dotted Border */}

            <div className="hidden md:block absolute w-[560px] h-[560px] border-[3px] border-dashed border-[#b9d8df] rounded-[42%_58%_64%_36%/46%_44%_56%_54%]" />

            {/* Your Image */}

            <div className="hidden md:block relative z-10">
              <Image
                src="/aboutimage.webp"
                alt="Young Wheels"
                width={540}
                height={620}
                className="object-contain"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span className="uppercase tracking-[3px] text-[#ff4d6d] font-bold text-lg">
              Young Wheels
            </span>

            <h2 className=" text-5xl font-extrabold text-[#111827] mt-3 mb-8">
              ABOUT US
            </h2>

           <div className="md:hidden relative z-10 w-full max-w-[320px] mx-auto">
              <Image
                src="/aboutimage.png"
                alt="Young Wheels"
                width={540}
                height={620}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-[#6b7280] text-[19px] leading-7">
              As the most trusted name in quality toys, Young Wheels is helping
              kids to make their childhood exciting with a wide range of
              products. We design and curate swing cars, potty trainers,
              rocking animals and many more while providing an extraordinary
              customer experience.
            </p>

            {/* Mission */}

            <div className="flex gap-6 mt-6">

              <div className="w-16 h-16 rounded-xl bg-[#ff4d6d] text-white flex items-center justify-center shrink-0">
                <FaBullseye size={24} />
              </div>

              <div>

                <h3 className="text-3xl font-bold mb-3">
                  MISSION
                </h3>

                <p className="text-[#6b7280] text-lg leading-7">
                  Our mission is to manufacture quality toys in India that are
                  safe, innovative and affordable while encouraging children to
                  learn through play.
                </p>

              </div>

            </div>

            {/* Vision */}

            <div className="flex gap-6 mt-6">

              <div className="w-16 h-16 rounded-xl bg-[#ff4d6d] text-white flex items-center justify-center shrink-0">
                <FaEye size={24} />
              </div>

              <div>

                <h3 className="text-3xl font-bold mb-3">
                  VISION
                </h3>

                <p className="text-[#6b7280] text-lg leading-7">
                  Our vision is to become the most loved toy manufacturer by
                  offering innovative products that inspire creativity and
                  joyful learning for every child.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}