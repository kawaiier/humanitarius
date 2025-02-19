"use client";

import { Book, Code, Zap } from "lucide-react";

import { motion } from "framer-motion";

export default function AboutCourse() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const benefits = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Гибкая программа",
      description:
        "Занятия подбираются индивидуально — от базового курса (HTML, CSS, JavaScript) до продвинутых модулей (React, NextJS).",
    },
    {
      icon: <Book className="h-8 w-8 text-blue-600" />,
      title: "Практические навыки",
      description:
        "Применение live-кодинга, квизов и наглядных схем для лучшего понимания материала.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Адаптивный подход",
      description:
        "Можем быстро пробежаться по CSS с Tailwind или углубиться в backend на NodeJS — всё зависит от твоих целей.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
          >
            О курсе
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 w-full"
              >
                <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-16 p-6 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Формат обучения
            </h3>
            <p className="text-gray-700">
              Индивидуальные онлайн-занятия через Google Meet (рекомендуется не
              менее 2 занятий в неделю, курс длится от 3 до 12 месяцев).
            </p>
            <p className="text-gray-700 mt-4">
              Стоимость обучения —{" "}
              <span className="font-bold text-blue-600">$15</span> за 60 минут.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
