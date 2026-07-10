import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import blogs from "@/data/blogs";

export const metadata = {
  title: "Blog | Young Wheels — Guides for Parents",
  description:
    "Parent-friendly guides on choosing the right ride-on toys, magic cars, potty chairs, and electric ride-ons for your child, from Young Wheels.",
  keywords: [
    "Young Wheels blog",
    "kids toy buying guides",
    "magic car guide",
    "potty chair guide",
    "electric ride on car guide",
  ],
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumb current="Blog" />

      <section className="py-20 bg-[#FFF9F0]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
              >
                <div className="relative h-48 bg-[#f7ead3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-7 flex-1">{post.excerpt}</p>
                  <span className="mt-5 inline-block text-[#ff4d6d] font-semibold">
                    Read guide &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
