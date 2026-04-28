"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Smartphone,
  Layout,
  Cpu,
  Globe,
  Layers,
  Terminal,
  Zap,
  ShieldCheck,
  Infinity
} from "lucide-react";
import { useEffect, useState } from "react";

const techStack = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-400",
    skills: ["Node.js", "Express", "REST APIs"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-400",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Supabase"]
  },
  {
    category: "Tools & DevOps",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-orange-500 to-yellow-400",
    skills: ["Git", "Docker", "AWS", "Vercel", "Postman"]
  }
];

export default function Tech() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="tech" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-white dark:bg-[#1a1a1a] rounded-2xl md:rounded-3xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech <span className="text-orange-500">Stack</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            I build modern, scalable applications using a diverse set of technologies across the entire stack.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-gray-50 dark:bg-[#242424] border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-orange-500/10 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {tech.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors">
                {tech.category}
              </h3>  

              <ul className="space-y-3">
                {tech.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Zap className="w-3.5 h-3.5 text-orange-500" />
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-transparent to-gray-200/20 dark:to-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div 
          className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-gray-100 dark:border-gray-800 flex flex-wrap justify-center gap-4 sm:gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
        >
          {["Performance First", "Clean Architecture", "Responsive Design", "User Centric", "Security Focused"].map((badge, bIdx) => (
            <div key={bIdx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#242424] text-gray-500 dark:text-gray-400 text-xs md:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              {badge}
            </div>
          ))}
        </motion.div> */}

        
      </div>
    </section>
  );
}