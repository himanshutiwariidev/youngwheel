import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import blogs from "@/data/blogs";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: post.image
      ? {
          title: post.metaTitle,
          description: post.metaDescription,
          images: [{ url: post.image }],
        }
      : undefined,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const faqSchema = post.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
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
      <Breadcrumb current="Blog" />

      <section className="py-20 bg-[#FFF9F0]">
        <div className="max-w-4xl mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-900">
            {post.title}
          </h1>

          {post.image && (
            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-10 bg-[#f7ead3]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          <div
            className="rich-content text-gray-700 leading-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.faqs && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {post.faqs.map((faq, index) => (
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
