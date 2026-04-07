"use client";
import { motion } from "framer-motion";
import {gitHub} from 'lucide-react';
import { ExternalLink } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

const projectData = [
  {
    id: 8,
    title: "Snippify",
    description:
      "Snippify is a full-stack developer tool that allows users to save, organize, and manage code snippets. It also provides AI-powered code explanations using the user's own Gemini API key, ensuring privacy and flexibility.",
    imageUrl: "./snip.png",
    gitHub: "https://github.com/Sundaram-Katare/Snippify",
    live: "https://snippify-nine.vercel.app/",
  },
  {
    id: 0,
    title: "Stellar",
    description:
      "A code review tool which reviews your code and find bugs, suggest improvements and return the rewritten code.",
    imageUrl: "./stellar.png",
    gitHub: "https://github.com/Sundaram-Katare/stellar",
    live: "https://stellar-seven-topaz.vercel.app/",
  },
  {
    id: 1,
    title: "Weave",
    description:
      "AI powered Job cover letter generator based on job descriptions and user profiles.",
    imageUrl: "/weave.png",
    gitHub: "https://github.com/Sundaram-Katare/Weave",
    live: "https://weaves-xi.vercel.app/",
  },
  {
    id: 2,
    title: "Lumin",
    description:
      "Online quiz platform with progress tracking and topic based quizzes.",
    imageUrl: "/lumin.png",
    gitHub: "https://github.com/Sundaram-Katare/Lumin",
    live: "https://lumin-alpha.vercel.app/",
  },
  {
    id: 7,
    title: "BuzzNet",
    description:
      "BuzzNet Chat App is a full-stack application built for seamless instant messaging between users. It allows people to create or join chat rooms, exchange messages in real time, and stay connected with a clean, responsive UI.",
    imageUrl: "/buzz.png",
    gitHub: "https://github.com/Sundaram-Katare/BuzzNet",
    live: "https://buzz-net-lime.vercel.app/",
  },
  {
    id: 6,
    title: "Nike Shoe Store",
    description:
      "This is a Shoe store's website landing page built using pure HTML, CSS and JavaScript.",
    imageUrl: "/nike.png",
    gitHub: "https://github.com/Sundaram-Katare/Nike-Shoe-Store",
    live: "https://nike-shoe-store-nu.vercel.app/",
  },
  {
    id: 3,
    title: "Liluxe",
    description:
      "Clothing brand landing page with modern UI and animations.",
    imageUrl: "/liluxe.png",
    gitHub: "https://github.com/Sundaram-Katare/Liluxe",
    live: "https://stylespot-orpin.vercel.app/",
  },
  {
    id: 4,
    title: "Learnzo",
    description:
      "E-learning platform for structured topic based learning.",
    imageUrl: "/learnzo.png",
    gitHub: "https://github.com/Sundaram-Katare/Learnzo",
    live: "https://e-learning-rosy-gamma.vercel.app/",
  },
  {
    id: 5,
    title: "S2T",
    description:
      "This is a real-time speech-to-text web application built using pure HTML, CSS, and JavaScript. It uses the Web Speech API to convert spoken words into text and features a live audio visualizer using the Web Audio API.",
    imageUrl: "/s2t.png",
    gitHub: "https://github.com/Sundaram-Katare/Speech-to-text",
    live: "https://speech-to-text-nine-plum.vercel.app/",
  },
];

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -80 : 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? 80 : -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.15,
      },
    },
  };

  const imageBlock = (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative group"
    >
      <div className="overflow-hidden rounded-2xl shadow-lg dark:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-2xl dark:hover:shadow-orange-500/20 dark:hover:shadow-2xl">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 sm:h-80 md:h-[280px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );

  const textBlock = (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col justify-center gap-5"
    >
      <motion.span
        className="text-orange-500 font-semibold text-xs sm:text-sm tracking-widest uppercase"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        Project {String(index + 1).padStart(2, "0")}
      </motion.span>

      <motion.h3
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.4 }}
      >
        {project.title}
      </motion.h3>

      <motion.p
        className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        {project.description}
      </motion.p>

      <motion.div
        className="flex items-center gap-4 mt-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <a
          href={project.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gray-900 dark:bg-gray-700 text-white text-xs sm:text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          {/* <Github size={18} strokeWidth={2} /> */}
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          <ExternalLink size={18} strokeWidth={2} />
          Live Demo
        </a>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
      {isEven ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-12 bg-gray-50 dark:bg-[#242424] rounded-2xl md:rounded-3xl transition-colors duration-300">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Projects{" "}
          <span className="text-orange-500">&amp;</span>{" "}
          My Work
        </h2>
        <div className="mt-4 mx-auto w-20 h-1 bg-orange-500 rounded-full" />
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          A showcase of applications I&apos;ve built &mdash; from AI-powered
          tools to full-stack platforms.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="flex flex-col gap-16 sm:gap-20 md:gap-24">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}