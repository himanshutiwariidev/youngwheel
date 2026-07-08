import Link from "next/link";
import {
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Contact Us | Young Wheels - Kids Ride On Toys Manufacturer",
  description:
    "Get in touch with Young Wheels for enquiries about our ride-on toys, swing cars, walkers and rocking animals. Call, email or visit us in New Delhi.",
  keywords: [
    "contact Young Wheels",
    "kids toys manufacturer contact",
    "Young Wheels address",
    "Young Wheels phone number",
  ],
  alternates: {
    canonical: "/contact-us",
  },
};

const contactData = [
  {
    title: "Phone",
    value: "+91 8383047505",
    href: "tel:+918383047505",
    color: "border-sky-400",
    bg: "bg-sky-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    icon: PhoneCall,
  },
  {
    title: "Email",
    value: "india.youngwheels@gmail.com",
    href: "mailto:india.youngwheels@gmail.com",
    color: "border-pink-400",
    bg: "bg-pink-50",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: Mail,
  },
  {
    title: "Address",
    value:
      "Plot No 182-183 Kh No 155, Lal Doora Village, Pooth Khurd, New Delhi -110039 (India)",
    href: "https://maps.google.com",
    color: "border-yellow-400",
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    icon: MapPin,
  },
];
export default function ContactPage() {
  return (
    <>
    <Breadcrumb current="Contact Us" />
      <section className="py-20 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Contact Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">

          {contactData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`border-2 border-dashed ${item.color} rounded-3xl p-6 text-center bg-white hover:-translate-y-2 hover:shadow-xl transition duration-500`}
              >
                <div
                  className={`w-20 h-20 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon
                    className={`${item.iconColor}`}
                    size={38}
                    strokeWidth={2.2}
                  />
                </div>

                <h3 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <Link
                  href={item.href}
                  className="text-gray-600 text-md hover:text-orange-500 transition break-words"
                >
                  {item.value}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Map */}

        <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200">

          <iframe
            src="https://www.google.com/maps?q=Plot%20No%20182-183%20Kh%20No%20155,%20Lal%20Doora%20Village,%20Pooth%20Khurd,%20New%20Delhi%20110039&output=embed"
            width="100%"
            height="550"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>

        </div>

      </div>
    </section>
    </>
    );
    }   