"use client"

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

const workItems = [
    {
        date: "Feb 2026 – Present",
        title: "Full Stack Developer",
        company: "Legion Automations",
        description:
            "Developed and maintained full-stack applications using React, Node.js and cloud services. Led migration of legacy systems to modern microservices architecture.",
        tech: ["React", "Node.js", "AWS", "n8n", "Postgres", "Supabase"],
    },
    {
        date: "Sept 2025 – Dec 2025",
        title: "Web Developer ",
        company: "Phicsit",
        description:
            "Built responsive web interfaces and collaborated with design teams to implement pixel-perfect UI components. Improved page load times by 40%.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    },
    {
        date: "Jan 2025 – May 2025",
        title: "Open Source Contributor",
        company: "Project Name",
        description:
            "Contributed to open source projects, fixing bugs and implementing new features. Participated in code reviews and documentation improvements.",
        tech: ["Python", "Git", "Docker"],
    },
    // {
    //     date: "Aug 2024 – Dec 2024",
    //     title: "Freelance Developer",
    //     company: "Self-Employed",
    //     description:
    //         "Designed and delivered custom web solutions for small businesses. Handled full project lifecycle from requirements gathering to deployment.",
    //     tech: ["React", "Firebase", "Figma"],
    // },
];

function TimelineItem({ item, index }) {
    const isLeft = index % 2 === 0;

    return (
        <div className="relative flex items-center w-full mb-8 md:mb-12">
            {/* Left content */}
            <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-8 lg:pr-12 md:text-right" : ""}`}>
                {isLeft && (
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <CardContent item={item} align="right" />
                    </motion.div>
                )}
            </div>

            {/* Center checkpoint */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center hidden md:flex">
                <motion.div
                    className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-orange-500 border-4 border-white dark:border-[#1a1a1a] shadow-lg shadow-orange-200 dark:shadow-orange-500/30"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        delay: 0.1,
                    }}
                />
            </div>

            {/* Right content */}
            <div className={`w-full md:w-1/2 ${!isLeft ? "md:pl-8 lg:pl-12" : ""}`}>
                {!isLeft && (
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <CardContent item={item} align="left" />
                    </motion.div>
                )}
            </div>
        </div>
    );
}

function CardContent({ item, align }) {
    return (
        <div
            className="group relative bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-6 shadow-sm dark:shadow-md
                        hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-500/50 dark:hover:shadow-orange-500/20 transition-all duration-300 cursor-default"
        >
            {/* Arrow pointer toward center line */}
            <div
                className={`absolute top-6 w-3 h-3 bg-white dark:bg-[#2a2a2a] border-gray-200 dark:border-gray-700 rotate-45 hidden md:block
                    ${align === "right"
                        ? "right-[-7px] border-r border-t"
                        : "left-[-7px] border-l border-b"
                    }
                    group-hover:border-orange-200 dark:group-hover:border-orange-500/50 transition-colors duration-300`}
            />

            <span className="inline-block text-xs font-semibold text-orange-500 bg-orange-50 dark:bg-orange-900/20
                             px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
                {item.date}
            </span>

            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white font-inter">
                {item.title}
            </h3>

            <p className="text-xs md:text-sm font-semibold text-blue-900 dark:text-blue-400 mt-1 font-inter">
                {item.company}
            </p>

            <p className={`text-gray-600 dark:text-gray-400 mt-3 text-xs md:text-sm leading-relaxed ${align === "right" ? "text-right" : "text-left"}`}>
                {item.description}
            </p>

            <div className={`flex flex-wrap gap-2 mt-4 ${align === "right" ? "justify-end" : "justify-start"}`}>
                {item.tech.map((t, i) => (
                    <span
                        key={i}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md 
                                   font-medium group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 group-hover:text-orange-600 dark:group-hover:text-orange-400
                                   transition-colors duration-300"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Work() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    
    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
            {/* Section heading */}
            <motion.div
                className="text-center mb-12 md:mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter text-gray-900 dark:text-white">
                    Proof of{" "}
                    <span className="text-orange-500">Work</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm md:text-base max-w-md mx-auto">
                    A timeline of my professional journey and contributions.
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
                {/* Center vertical line */}
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-300 to-transparent hidden md:block"
                    style={{ height: "100%" }}
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Timeline items */}
                {workItems.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                ))}

                {/* Bottom dot */}
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3 h-3 rounded-full bg-orange-300 hidden md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                />
            </div>
        </section>
    );
}
