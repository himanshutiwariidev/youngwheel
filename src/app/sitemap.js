import products from "@/data/products";
import blogs from "@/data/blogs";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" },
    { route: "/about-us", priority: 0.7, changeFrequency: "monthly" },
    { route: "/contact-us", priority: 0.7, changeFrequency: "monthly" },
    { route: "/products", priority: 0.9, changeFrequency: "weekly" },
    { route: "/new-arrival", priority: 0.8, changeFrequency: "weekly" },
    { route: "/blog", priority: 0.7, changeFrequency: "weekly" },
    {
      route: "/baby-potty-seat-manufacturer",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      route: "/battery-operated-ride-on-car-manufacturer",
      priority: 0.6,
      changeFrequency: "monthly",
    },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const categoryRoutes = products.map((category) => ({
    url: `${SITE_URL}/category/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogRoutes = blogs.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes];
}
