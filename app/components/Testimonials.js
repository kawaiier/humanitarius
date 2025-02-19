"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Валерий",
      role: "Выпускник курса",
      avatar: "https://avatar.iran.liara.run/public/15",
      quote:
        "С нуля научился создавать сайты и даже участвовал в коммерческой разработке на NextJS в качестве ассистента.",
      rating: 5,
    },
    {
      id: 2,
      name: "Милена",
      role: "Выпускница курса",
      avatar: "https://avatar.iran.liara.run/public/75",
      quote:
        "Есть фултайм-работа, но мне хотелось научиться делать сайты для друзей. Занималась, научилась, и поняла, что меня тянет к бекенду — туда и хочу дальше развиваться.",
      rating: 5,
    },
    {
      id: 3,
      name: "Антон",
      role: "Выпускник курса",
      avatar: "https://avatar.iran.liara.run/public/33",
      quote:
        "Всегда думал, что программирование — это очень сложно, но благодаря индивидуальному подходу я смог освоить базовые концепции и создать свой первый сайт-портфолио.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="py-12 sm:py-20 bg-gradient-to-br from-indigo-50 to-blue-50"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900"
          >
            Отзывы учеников
          </motion.h2>

          <div className="relative">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 relative z-10"
            >
              <div className="absolute -top-6 left-12 bg-blue-600 rounded-full p-3">
                <Quote className="h-6 w-6 text-white" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="md:col-span-1 flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      fill
                      sizes="96px"
                      className="object-cover"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-500 mb-4">
                    {testimonials[activeIndex].role}
                  </p>

                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    )}
                  </div>

                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          activeIndex === index ? "bg-blue-600" : "bg-gray-300"
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 flex items-center">
                  <blockquote>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      &quot;{testimonials[activeIndex].quote}&quot;
                    </p>
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
