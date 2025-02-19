import Link from "next/link";
import { getAllPosts } from "../utils/blogUtils";

export const metadata = {
  title: "Блог | humanITarius",
  description: "Статьи о веб-разработке, программировании и обучении",
  openGraph: {
    title: "Блог | humanITarius",
    description: "Статьи о веб-разработке, программировании и обучении",
  },
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Блог</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-2xl font-semibold mb-2" itemProp="headline">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-2">
                <time itemProp="datePublished" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </p>
              <p className="text-gray-700" itemProp="description">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
