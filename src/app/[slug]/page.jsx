import Image from "next/image";
import { notFound } from "next/navigation";
import products from "@/data/products";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = products.find((item) => item.slug === slug);

  if (!category) {
    return {};
  }

  const description =
    category.metaDescription ||
    category.categoryDescription.replace(/<[^>]+>/g, "").trim();

  return {
    title: category.metaTitle || `${category.categoryName} | Young Wheels`,
    description,
    keywords: category.keywords || [
      category.categoryName,
      `${category.categoryName} for kids`,
      "Young Wheels",
      "kids ride on toys",
    ],
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = products.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  // Title background colors (repeats automatically)
  const titleColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
  ];

  const faqSchema = category.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: category.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
    <Breadcrumb current={category.categoryName} />
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.products.length > 0 ? (
            category.products.map((product, index) => (
              <div
                key={product.productName}
                className="bg-white rounded-t-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="relative h-72 bg-[#f7ead3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.productName}
                    fill
                    className="object-contain p-6 hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Title */}
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
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h2 className="text-3xl font-bold">
                Products Coming Soon
              </h2>
            </div>
          )}
        </div>

        {/* Category Description */}
        <div className="mt-20 max-w-5xl mx-auto">
          {category.h1 ? (
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-900">
              {category.h1}
            </h1>
          ) : (
            <h2 className="text-3xl font-bold mb-6 text-center">
              About {category.categoryName}
            </h2>
          )}

          <div
            className="rich-content text-gray-700 leading-8"
            dangerouslySetInnerHTML={{
              __html: category.categoryDescription,
            }}
          />
        </div>

        {/* FAQs */}
        {category.faqs && (
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {category.faqs.map((faq, index) => (
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
        )}
      </div>
    </section>

    {faqSchema && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    )}
    </>
  );
}
