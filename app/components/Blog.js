"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/posts/random?seed=main");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched posts:", data);

        // Randomly shuffle the posts array and take first 3
        const shuffledPosts = [...data].sort(() => Math.random() - 0.5);
        setPosts(shuffledPosts.slice(0, 3));
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  if (isLoading) {
    return (
      <section className="py-12 sm:py-20 bg-gray-50" id="blog">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading blog posts...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 sm:py-20 bg-gray-50" id="blog">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">Error: {error}</div>
        </div>
      </section>
    );
  }

  console.log("Rendering posts:", posts);

  return (
    <section className="py-12 sm:py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 sm:mb-12">
            <motion.div
              variants={itemVariants}
              className="text-center md:text-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Блог и новые знания
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                Каждую неделю я делюсь свежими статьями, полезными советами и
                новыми трендами в веб-разработке. Будь в курсе последних
                новостей и совершенствуй свои навыки вместе со мной!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 md:mt-0">
              <Link href="/blog">
                <span className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group">
                  Все статьи
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {posts.length === 0 ? (
              <div className="col-span-3 text-center">No blog posts found.</div>
            ) : (
              posts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href={`/blog/${post.id}`}>
                    <span className="block">
                      <div className="relative h-48">
                        <Image
                          src={post.image || "/images/default-blog.jpg"}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          style={{ objectFit: "cover" }}
                        />
                        {post.category && (
                          <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                            {post.category}
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {new Date(post.date).toLocaleDateString("ru-RU")}
                          </span>
                          {post.readTime && (
                            <>
                              <span className="mx-2">•</span>
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{post.readTime}</span>
                            </>
                          )}
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group">
                          Читать дальше
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </span>
                  </Link>
                </motion.article>
              ))
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Link href="/blog">
              <span className="inline-block bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors">
                Больше статей
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
