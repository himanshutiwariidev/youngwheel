import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import newArrivals from "@/data/newArrivals";

export const metadata = {
  title: "New Arrivals | Young Wheels - Latest Kids Ride On Toys",
  description:
    "Check out the latest ride-on toys, walkers, and scooters just added to the Young Wheels lineup.",
  alternates: {
    canonical: "/new-arrival",
  },
};

export default function NewArrivalPage() {
  const titleColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
  ];

  return (
    <>
      <Breadcrumb current="New Arrival" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product, index) => (
              <div
                key={product.productName}
                className="bg-white rounded-t-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-72 bg-[#f7ead3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.productName}
                    fill
                    className="object-contain p-6 hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div
                  className={`${
                    titleColors[index % titleColors.length]
                  } py-2 px-4`}
                >
                  <h3 className="text-lg font-bold text-center text-white">
                    {product.productName}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
