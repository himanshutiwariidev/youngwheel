import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Best Battery Operated Ride On Car Manufacturer | Young Wheels",
  description:
    "Young Wheels is a battery operated ride-on car manufacturer in Delhi since 2019. Tractor Electric & JCV Electric models. Wholesale supply available.",
  keywords: [
    "Battery Operated Ride On Car Manufacturer",
    "Ride On Car Manufacturer Delhi",
    "Battery Operated Ride On Car Wholesale",
  ],
  alternates: {
    canonical: "/battery-operated-ride-on-car-manufacturer",
  },
};

const faqs = [
  {
    question: "What age group are Young Wheels ride-on cars suitable for?",
    answer:
      "Our current models, the Tractor Electric and JCV Electric, are designed for children roughly 2 to 6 years old.",
  },
  {
    question: "How long does the battery last on a single charge?",
    answer:
      "Battery runtime depends on usage and terrain. WhatsApp us at +91 7011227049 for the runtime details of a specific model.",
  },
  {
    question: "Are your ride-on cars safe for children?",
    answer:
      "Yes. Our models are built with child-safe materials and durable construction, designed to give children a fun and secure riding experience.",
  },
  {
    question: "What's the difference between the Tractor Electric and the JCV Electric?",
    answer:
      "The Tractor Electric is farm and outdoor-vehicle themed, while the JCV Electric is styled after a JCB or construction vehicle. Both suit the same age group, so the choice usually comes down to which theme the child is more drawn to.",
  },
  {
    question: "Do you provide bulk supply?",
    answer:
      "Yes, we offer bulk supply for wholesalers, distributors, and retailers across India.",
  },
  {
    question: "Can I get customized branding on ride-on cars?",
    answer:
      "Yes, customization and branding options are available on bulk orders. Contact us for details.",
  },
  {
    question: "What type of battery is used in these ride-on cars?",
    answer:
      "Our ride-on cars use rechargeable batteries. WhatsApp us for the exact specifications of a specific model.",
  },
  {
    question: "How can I place a bulk order?",
    answer:
      "Call or WhatsApp us at +91 7011227049. We'll share our current catalogue, wholesale pricing, and minimum order quantity right away.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function BatteryOperatedRideOnCarManufacturerPage() {
  return (
    <>
      <Breadcrumb current="Ride On Car Manufacturer" />

      <section className="py-20 bg-[#FFF9F0]">
        <div className="max-w-5xl mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-900">
            Battery Operated Ride On Car Manufacturer in Delhi | Young Wheels
          </h1>

          <div
            className="rich-content text-gray-700 leading-8"
            dangerouslySetInnerHTML={{
              __html: `
                <p>
                  Young Wheels is a <strong>battery operated ride on car manufacturer</strong>
                  based in New Delhi, established in 2019. We make electric
                  ride-on models including the Tractor Electric and JCV
                  Electric, designed for children who love the experience of
                  driving their own vehicle. We supply wholesale to retailers
                  and distributors, with custom branding available for bulk
                  buyers.
                </p>
                <p style="font-size:0.95rem;color:#6b7280;">
                  This page is for retailers, distributors, and bulk buyers.
                  Parents looking to buy a single unit should visit our
                  <a href="/category/electric-rydons">electric ride on cars for kids</a>
                  page instead.
                </p>

                <h2>What Is a Battery Operated Ride On Car?</h2>
                <p>
                  A battery operated ride on car is a toy vehicle powered by
                  a rechargeable battery instead of pedals or pushing. The
                  child sits inside and drives it using simple foot pedal or
                  steering controls. Many models also include a parental
                  remote control option, so an adult can guide the car when
                  needed.
                </p>

                <h2>Our Battery Operated Ride-On Models</h2>
                <table>
                  <thead><tr><th>Model</th><th>Theme</th><th>Suitable Age</th></tr></thead>
                  <tbody>
                    <tr><td>Tractor Electric</td><td>Farm/outdoor vehicle</td><td>Roughly 2 to 6 years</td></tr>
                    <tr><td>JCV Electric</td><td>JCB / construction vehicle</td><td>Roughly 2 to 6 years</td></tr>
                  </tbody>
                </table>
                <p>
                  Both models run on a rechargeable battery, so children can
                  enjoy the experience of driving without pedaling or manual
                  pushing. Many parents and retailers choose to stock both,
                  since the two themes appeal to different children within
                  the same age group.
                </p>

                <h2>Why Work With a Dedicated Ride On Car Manufacturer</h2>
                <p>
                  Buying directly from a manufacturer instead of a trader or
                  reseller means no middleman markup, so your margins are
                  better. It also means consistent quality across every
                  production batch, custom branding options such as your own
                  logo, colours, and packaging on bulk orders, and direct
                  communication for order quantity, lead times, and
                  specifications.
                </p>

                <h2>Manufacturing Process &amp; Quality Standards</h2>
                <p>
                  Every Young Wheels ride-on car goes through careful
                  selection of child-safe raw materials, molding and assembly
                  of the body and chassis, battery and motor fitting, safety
                  and durability checks, and secure packaging before dispatch.
                </p>

                <h2>Bulk Supply</h2>
                <p>
                  Young Wheels supplies retailers and toy shops with factory
                  pricing, consistent quality, and on-time delivery. We work
                  with distributors on long-term regional partnerships, and
                  support online sellers on Amazon, Flipkart, and Meesho with
                  packaging and listing-ready supply.
                </p>

                <h2>Why Choose Young Wheels</h2>
                <ul>
                  <li>Manufacturer based in New Delhi, established in 2019</li>
                  <li>Rechargeable battery-powered ride-on models</li>
                  <li>Two distinct themes to suit different children's interests</li>
                  <li>Custom branding available for bulk buyers</li>
                  <li>Factory-direct wholesale pricing</li>
                  <li>Pan-India supply</li>
                </ul>
                <p>
                  Also stock our
                  <a href="/category/electric-rydons">electric ride on cars for kids</a>,
                  <a href="/category/magic-car-swing-car">magic cars</a>, and
                  <a href="/baby-potty-seat-manufacturer">baby potty seats</a>
                  for a complete wholesale catalogue.
                </p>

                <h2>Ready to Order?</h2>
                <p>
                  Young Wheels manufactures battery operated ride-on cars in
                  Delhi, including the Tractor Electric and JCV Electric.
                  Whether you're a retailer, distributor, or bulk buyer,
                  <a href="/contact-us">WhatsApp us</a> &mdash; our team
                  responds within a few hours.
                </p>
              `,
            }}
          />

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
