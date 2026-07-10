import { redirect } from "next/navigation";

export default async function BlogPostRedirectPage({ params }) {
  const { slug } = await params;
  redirect(`/${slug}`);
}
