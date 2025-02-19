"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Путь от гуманитария к IT-специалисту
            </h1>

            <p className="text-lg md:text-xl text-white mb-8">
              Индивидуальное обучение веб-разработке с опытным наставником. От
              основ до реальных проектов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://t.me/kawaiier"
                className="px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-600 
                         transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Написать в Telegram
              </Link>

              <Link
                href="https://wa.me/+79688824045"
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-500 
                         transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Написать в WhatsApp
              </Link>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative h-[500px] md:h-[600px] w-full max-w-[400px] mx-auto">
            <Image
              src="/images/sergei.JPG"
              alt="Sergei"
              fill
              className="object-cover object-center rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
