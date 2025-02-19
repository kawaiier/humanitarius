"use client";

import { User, Users } from "lucide-react";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TargetAudience() {
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

  return (
    <section className="py-12 sm:py-20 bg-gray-50" id="audience">
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
            Для кого этот курс?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            {/* For Kids and Teenagers */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="/images/kids-coding.jpg"
                  alt="Дети изучают программирование"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-blue-600 rounded-full p-3 inline-flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Для детей и подростков
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Освой навыки создания сайтов с ранних лет</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Подготовь ребёнка к будущей востребованной профессии
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Ключевые запросы: «создание сайтов для детей», «создание
                      сайтов для подростков»
                    </span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Разработана специальная методика для юных учеников с
                    игровыми элементами и интерактивными заданиями
                  </p>
                </div>
              </div>
            </motion.div>

            {/* For Adults */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="/images/adults-learning.jpg"
                  alt="Взрослые на курсе программирования"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-indigo-600 rounded-full p-3 inline-flex items-center justify-center mb-3">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Для взрослых
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>
                      Попробуй свои силы в IT, даже если у тебя гуманитарное
                      образование
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>
                      Пойми, насколько тебе интересно заниматься разработкой, и
                      получи первые заказы
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>
                      Ключевые запросы: «разработка сайтов для чайников»,
                      «разработка сайтов для гуманитариев», «разработка сайтов с
                      нуля»
                    </span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Удобное расписание для работающих людей, акцент на
                    практических проектах для портфолио
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
