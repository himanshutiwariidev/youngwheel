import Link from "next/link";
import Image from "next/image";
import categories from "@/data/products";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Products | Young Wheels - Shop Kids Ride On Toys",
  description:
    "Explore Young Wheels' full range of kids ride-on toys, including swing cars, walkers, potty trainers, rocking animals, tricycles and electric ride-ons.",
  keywords: [
    "kids ride on toys shop",
    "swing cars",
    "baby walkers",
    "potty trainers",
    "rocking animals",
    "tricycles for kids",
    "electric ride on toys",
    "Young Wheels products",
  ],
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
    <Breadcrumb current="Products" />
    <section className="py-15 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-5">

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              href={`/${category.slug}`}
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[30px] aspect-[1.45/1] shadow-md hover:shadow-xl transition duration-500">

                {/* Background Image */}
                <Image
                  src={category.categoryImage}
                  alt={category.categoryName}
                  fill
                  priority={index < 4}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

           
                
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
    </>

  );
}