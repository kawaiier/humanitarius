"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section
      className="py-40 bg-gradient-to-br from-blue-900 to-indigo-800 text-white relative overflow-hidden"
      id="cta"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            Готов начать?
          </h2>

          <p className="text-xl sm:text-2xl mb-12 text-blue-100">
            Если ты готов сделать первый шаг к новой карьере или помочь своему
            ребёнку открыть двери в мир IT, нажми на кнопку ниже и свяжись со
            мной через Telegram или WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://t.me/kawaiier"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Записаться в Telegram"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-indigo-900 font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2 hover:scale-110 transition-transform"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2a10 10 0 110 20 10 10 0 010-20zm6.83 6.43c-.2 2.03-1.05 6.96-1.49 9.23-.18.92-.5 1.22-.82 1.25-.7.07-1.22-.45-1.9-.88-.93-.59-1.23-.78-2.14-1.35-1.05-.67-.4-1.03.21-1.65.16-.16 2.93-2.68 2.99-2.91.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.24-.02-.14.02-2.18 1.38-3.7 2.35-.26.18-.74.37-1.07.36-.35-.01-1.03-.2-1.53-.36-.62-.21-1.11-.32-1.07-.68.02-.18.28-.36.73-.56 2.93-1.27 4.89-2.11 5.87-2.53.28-.12 2.76-1.16 3.13-1.17.08 0 .26.03.38.12.1.08.12.2.13.29 0 .05 0 .16-.01.26z" />
                </svg>
                Записаться в Telegram
              </motion.button>
            </Link>

            <Link
              href="https://wa.me/+79688824045"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Записаться в WhatsApp"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-500 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2 hover:scale-110 transition-transform"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm.14 4a8.13 8.13 0 017.26 12l-1.42 4.16a.4.4 0 01-.51.24l-4.17-1.45a8.13 8.13 0 11-1.16-15zm.04 1.46a6.67 6.67 0 00-6.67 6.66c0 1.41.38 2.69 1.18 3.9l.1.14-.42 1.58 1.6-.41.13.1a6.63 6.63 0 009.53-2.04 6.67 6.67 0 00-5.45-9.93zm3.15 9.96c-.17.27-.5.54-.82.6-.3.06-.68.09-1.96-.41-1.66-.64-2.73-2.15-2.82-2.25-.08-.1-.69-.92-.69-1.76s.43-1.24.57-1.4c.13-.17.29-.21.39-.21l.28.01c.1 0 .23-.03.35.26.12.3.42 1.03.46 1.1.04.08.06.17.01.27-.05.1-.08.16-.16.24l-.24.28c-.08.09-.17.19-.07.37.1.18.44.77.94 1.24.65.6 1.2.79 1.37.87.17.1.27.08.37-.04.1-.12.42-.5.53-.67.11-.17.23-.14.39-.08.16.06 1 .46 1.17.55.16.08.27.13.31.2.04.07.04.4-.1.78z" />
                </svg>
                Записаться в WhatsApp
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Custom shape divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg
          className="h-12 sm:h-16 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C176.56,125.89,269.22,91.2,321.39,56.44Z"
            fill="#f9fafb"
          ></path>
        </svg>
      </div>
    </section>
  );
}
