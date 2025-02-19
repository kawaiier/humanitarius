import { getAllPosts, getPostById } from "../../utils/blogUtils";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }) {
  const post = await getPostById(params.id);

  return {
    title: `${post.title} | humanITarius`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["humanITarius"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getPostById(params.id);

  return (
    <article
      className="max-w-4xl mx-auto px-4 py-8"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <h1 className="text-4xl font-bold mb-4" itemProp="headline">
        {post.title}
      </h1>
      <div className="text-gray-600 mb-8">
        <time itemProp="datePublished" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString()}
        </time>
      </div>
      <div
        className="prose lg:prose-xl"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            description: post.excerpt,
            author: {
              "@type": "Organization",
              name: "humanITarius",
            },
          }),
        }}
      />
    </article>
  );
}
