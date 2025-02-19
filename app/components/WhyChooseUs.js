"use client";

import { Monitor, Settings, Target } from "lucide-react";

// components/WhyChooseUs.js
import { motion } from "framer-motion";

export default function WhyChooseUs() {
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

  const reasons = [
    {
      icon: <Settings className="h-8 w-8 text-indigo-600" />,
      title: "Индивидуальный подход",
      description:
        "Программа меняется в процессе обучения в зависимости от твоих потребностей.",
    },
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: "Практическая направленность",
      description:
        "Учись на реальных примерах и сразу применяй знания в проектах.",
    },
    {
      icon: <Monitor className="h-8 w-8 text-indigo-600" />,
      title: "Адаптивность",
      description:
        "Сайт и уроки созданы для современных устройств с ярким дизайном, простыми анимациями и удобной навигацией.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="why-choose">
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
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
          >
            Почему выбирают мой курс?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="bg-indigo-100 rounded-full p-4 mb-6">
                    {reason.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 flex-grow">
                    {reason.description}
                  </p>

                  <div className="w-16 h-1 bg-indigo-500 rounded mt-6"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Кроме этого, мы постоянно адаптируем программу обучения под
              актуальные тренды в веб-разработке и учитываем обратную связь от
              студентов для улучшения курса.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
