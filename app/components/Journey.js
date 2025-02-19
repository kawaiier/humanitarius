"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Journey() {
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

  const projects = [
    {
      name: "BlockSquare Exchange",
      description: "Редизайн сайта для обмена криптовалюты.",
      image: "/images/blocksquare-exchange-project.png",
      link: "https://www.blocksquare.exchange/",
      type: "Коммерческий проект",
    },
    {
      name: "Grand Moneta Georgia",
      description: "Сайт для обмена валюты в Тбилиси.",
      image: "/images/grand-moneta-georgia-project.png",
      link: "https://www.grandmonetageorgia.com/",
      type: "Коммерческий проект",
    },
    {
      name: "Binas",
      description: "Сервис, которым воспользовались сотни экспатов в Грузии.",
      image: "/images/binas-project.png",
      link: "https://binas.kawaiier.dev/",
      type: "Pet-проект",
    },
    {
      name: "Browserating",
      description:
        "Популярный в США сайт с оценкой производительности браузеров.",
      image: "/images/browserating-project.png",
      link: "https://browserating.kawaiier.dev/",
      type: "Pet-проект",
    },
  ];

  return (
    <section className="py-20 bg-white" id="journey">
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
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900"
          >
            Мой путь и проекты
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mx-auto mb-16 text-center max-w-3xl"
          >
            <p className="text-lg text-gray-700">
              Я начинал с нуля, как гуманитарий, и столкнулся с трудностями в
              изучении сложных концепций. Но благодаря упорству я смог сделать
              обучение доступным и понятным даже для тех, кто думал, что никогда
              ничего не поймёт.
            </p>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold mb-8 text-center text-gray-800"
          >
            Избранные проекты
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-60">
                  <Image
                    src={project.image}
                    alt={`Проект ${project.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {project.name}
                    </h4>
                    <p className="text-white text-opacity-90">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex justify-between items-center bg-gray-50">
                  <span className="text-sm font-medium text-gray-500">
                    {project.type}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Посмотреть
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-lg font-medium text-gray-700">
              Мой опыт подтверждает, что любой может научиться создавать сайты и
              даже участвовать в коммерческих проектах.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
