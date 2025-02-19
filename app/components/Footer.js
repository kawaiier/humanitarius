"use client";

import {
  ArrowRight,
  Calendar,
  GithubIcon,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";

import Image from "next/image";
// components/Footer.js
import Link from "next/link";

export default function Footer() {
  const [randomPosts, setRandomPosts] = useState([]);

  useEffect(() => {
    async function fetchRandomPosts() {
      try {
        const response = await fetch("/api/posts/random?seed=footer");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRandomPosts(data.slice(0, 2)); // Only show 2 posts to save space
      } catch (error) {
        console.error("Error fetching random posts:", error);
      }
    }

    fetchRandomPosts();
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">О курсе</h3>
            <p className="mb-4 text-gray-400 text-sm">
              Индивидуальное обучение веб-разработке с нуля — адаптивный курс,
              разработанный для детей и взрослых с любым уровнем подготовки.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/kawaiier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/kawaiier101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com/kawaiier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О курсе
                </Link>
              </li>
              <li>
                <Link
                  href="/#audience"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Для кого этот курс?
                </Link>
              </li>
              <li>
                <Link
                  href="/#journey"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  href="/#why-choose"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Преимущества
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Popular Blog */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Популярные статьи
            </h3>
            <div className="space-y-3">
              {randomPosts.map((post) => (
                <article key={post.id}>
                  <Link href={`/blog/${post.id}`}>
                    <div className="group">
                      <div className="text-xs text-gray-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString("ru-RU")}
                      </div>
                      <h4 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 text-blue-400 mt-1 flex-shrink-0" />
                <span>kawaiier@tutanota.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-2 text-blue-400 mt-1 flex-shrink-0" />
                <span>+995 551-123-771</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-blue-400 mt-1 flex-shrink-0" />
                <span>Онлайн-занятия через Google Meet</span>
              </li>
              <li className="flex items-start mt-4">
                <MessageCircle className="h-4 w-4 mr-2 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="mb-2">Запишись на консультацию:</p>
                  <div className="flex space-x-2">
                    <a
                      href="https://t.me/kawaiier"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs transition-colors"
                    >
                      Telegram
                    </a>
                    <a
                      href="https://wa.me/+79688824045"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center sm:text-left mb-4 sm:mb-0">
            © {new Date().getFullYear()} Индивидуальное обучение веб-разработке.
            Все права защищены.
          </p>
          {/* <div>
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-center">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
                >
                  Условия использования
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
