import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Buy Baby Potty Seat Manufacturer in Delhi | Young Wheels",
  description:
    "Young Wheels is a baby potty seat manufacturer in Delhi since 2019. 8+ designs, factory-direct wholesale pricing, pan-India & export supply. Contact us.",
  keywords: [
    "Baby Potty Seat Manufacturer",
    "Baby Potty Chair Manufacturer",
    "Potty Seat Wholesale Supplier",
    "Baby Potty Seat Exporter",
  ],
  alternates: {
    canonical: "/baby-potty-seat-manufacturer",
  },
};

const faqs = [
  {
    question: "What material is used in Young Wheels baby potty seats?",
    answer:
      "Most models are made from BPA-free, child-safe plastic; the Foam Potty uses cushioned, non-toxic foam for extra comfort.",
  },
  {
    question: "Are your baby potty seats safe for toddlers?",
    answer:
      "Yes. They are designed with safety features like a wide non-slip base and smooth, rounded edges to prevent tipping or injury.",
  },
  {
    question: "Do you supply in bulk?",
    answer:
      "Yes, we provide wholesale and bulk supply for retailers, distributors, and online sellers across India.",
  },
  {
    question: "Can I get customized designs or branding?",
    answer:
      "Yes. We offer custom branding — your logo, colors, and packaging — for bulk and wholesale orders.",
  },
  {
    question: "What age is a baby potty seat suitable for?",
    answer:
      "Generally 18 months to 4 years, though this varies slightly by model. Contact us for age recommendations on a specific design.",
  },
  {
    question: "Do your potty seats have anti-slip features?",
    answer:
      "Yes, all our models are built with a wide, stable, non-slip base to keep the seat steady during use.",
  },
  {
    question: "Do you supply outside Delhi, or export internationally?",
    answer:
      "Yes. We supply pan-India and also support export orders — contact us for documentation and pricing details.",
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

export default function BabyPottySeatManufacturerPage() {
  return (
    <>
      <Breadcrumb current="Baby Potty Seat Manufacturer" />

      <section className="py-20 bg-[#FFF9F0]">
        <div className="max-w-5xl mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-900">
            Baby Potty Seat Manufacturer in Delhi — Wholesale &amp; Export Supply Since 2019
          </h1>

          <div
            className="rich-content text-gray-700 leading-8"
            dangerouslySetInnerHTML={{
              __html: `
                <p>
                  Young Wheels is a <strong>baby potty seat manufacturer</strong>
                  based in New Delhi (MSME: UDYAM-DL-10-0029707), making 8+
                  designs &mdash; including the Teddy Potty Chair, Cow Potty,
                  and Foam Potty &mdash; for toddlers aged roughly 18 months
                  to 4 years. We supply wholesale to retailers and
                  distributors across India, with export and
                  custom-branding support for bulk buyers.
                </p>
                <p style="font-size:0.95rem;color:#6b7280;">
                  This page is for retailers, distributors, and exporters
                  buying in bulk. If you're a parent looking to buy a single
                  potty chair, visit our
                  <a href="/potty-chair-for-kids">potty chair for kids</a>
                  page instead.
                </p>

                <h2>Why Work With a Dedicated Baby Potty Seat Manufacturer</h2>
                <p>Buying directly from a manufacturer &mdash; instead of a trader or reseller &mdash; means:</p>
                <ul>
                  <li>No middleman markup, so your margins are better</li>
                  <li>Consistent quality across every batch, since we control production ourselves</li>
                  <li>Custom branding (your logo, colours, packaging) on bulk orders</li>
                  <li>Direct communication for MOQ, lead times, and specifications</li>
                </ul>

                <h2>Our Baby Potty Seat Range</h2>
                <table>
                  <thead><tr><th>Model</th><th>Style</th><th>Best Suited For</th></tr></thead>
                  <tbody>
                    <tr><td>Foam Potty</td><td>Cushioned foam seat</td><td>Younger toddlers who need extra comfort</td></tr>
                    <tr><td>Plastic Potty</td><td>Standard plastic, removable bowl</td><td>Everyday use, easy to clean and sanitize</td></tr>
                    <tr><td>Teddy Potty Chair</td><td>Teddy bear character design</td><td>Toddlers who respond well to fun, playful designs</td></tr>
                    <tr><td>Cow Potty</td><td>Cow character design</td><td>Popular animal-themed pick for retail shelves</td></tr>
                    <tr><td>Sofa Potty</td><td>Wider, cushioned sofa-style seat</td><td>Comfort-focused buyers, longer sitting sessions</td></tr>
                    <tr><td>Yw P400</td><td>Classic plastic model</td><td>General wholesale/retail staple</td></tr>
                    <tr><td>Joy Ride On</td><td>Ride-on style potty</td><td>Toddlers who respond to interactive, play-based training</td></tr>
                    <tr><td>Scooty Potty Seat</td><td>Scooter-shaped ride-on potty</td><td>Reluctant toddlers who need potty time to feel like play</td></tr>
                  </tbody>
                </table>

                <h2>Manufacturing Process &amp; Quality Standards</h2>
                <p>Every Young Wheels potty seat goes through:</p>
                <ul>
                  <li>Sourcing of BPA-free, child-safe raw material</li>
                  <li>Molding and shaping to the final design</li>
                  <li>Smoothing and polishing to remove sharp edges</li>
                  <li>Quality inspection and stability testing before packaging</li>
                  <li>Safe, damage-resistant packaging for dispatch</li>
                </ul>

                <h2>Bulk Supply &amp; Export</h2>
                <p>Young Wheels supplies:</p>
                <ul>
                  <li><strong>Retailers and toy/baby-product shops</strong> &mdash; factory pricing, consistent quality, on-time delivery</li>
                  <li><strong>Distributors</strong> &mdash; long-term regional partnerships; contact us for MOQ and territory terms</li>
                  <li><strong>Online sellers</strong> (Amazon, Flipkart, Meesho) &mdash; packaging and listing-ready supply</li>
                  <li><strong>Export buyers</strong> &mdash; export pricing and documentation support available</li>
                </ul>
                <p>Applications: homes, daycare centres, play schools, and baby care facilities all use our potty seats to support early toilet training.</p>

                <h2>Why Choose Young Wheels</h2>
                <ul>
                  <li>MSME-registered manufacturer based in New Delhi (UDYAM-DL-10-0029707)</li>
                  <li>8+ designs across comfort-focused, character-themed, and interactive ride-on styles</li>
                  <li>Factory-direct wholesale pricing &mdash; no middleman</li>
                  <li>Custom branding available for bulk orders</li>
                  <li>Pan-India supply plus export support</li>
                </ul>
                <p>
                  Also stock our full
                  <a href="/potty-chair-for-kids">potty chair for kids</a>
                  range, or explore our
                  <a href="/baby-walker-manufacturer">baby walker</a> and
                  <a href="/battery-operated-ride-on-car-manufacturer">battery operated ride-on car</a>
                  lines for a complete wholesale catalogue.
                </p>

                <h2>Ready to Order?</h2>
                <p>
                  Young Wheels is a baby potty seat manufacturer in Delhi
                  since 2019, with 8+ designs built for safety, comfort, and
                  easy cleaning. Whether you're a retailer, distributor, or
                  export buyer, <a href="/contact-us">WhatsApp us</a> &mdash;
                  our team responds within a few hours.
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
