import AboutSection from "@/sections/About";
import CategorySection from "@/sections/CategorySection";
import Hero from "@/sections/Hero";
import PartnerSection from "@/sections/Partnersection";
import WhyChoose from "@/sections/Whychooseus";
import ReviewSection from "@/sections/ReviewSection";
import Image from "next/image";

export const metadata = {
  title: "Young Wheels - Kids Ride On Toys Manufacturer in Delhi",
  description:
    "As the most trusted name in quality toys, Young Wheels is helping kids to make their childhood exciting with a wide range of products.",
  keywords: [
    "kids ride on toys",
    "ride on toys manufacturer India",
    "swing cars for kids",
    "baby walkers",
    "potty trainers",
    "rocking animals toys",
    "Young Wheels",
    "kids toys Delhi",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
  <>
  <Hero/>
  <CategorySection/>
  <AboutSection/>
  <WhyChoose/>
  <ReviewSection/>
  <PartnerSection/>
  </>
  );
}
