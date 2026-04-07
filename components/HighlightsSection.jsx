"use client"

import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

function useImageSlider(images, delay = 3000) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, delay);

        return () => clearInterval(timer);
    }, [images, delay]);

    return currentIndex;
}

function SlidingImage({ images, alt = "", className = "" }) {
    const currentIndex = useImageSlider(images, 3000);

    return (
        <div className={`relative h-48 sm:h-56 md:h-64 rounded-md overflow-hidden ${className}`}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={alt}
                    className="w-full h-full rounded-md object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: easeInOut }}
                />
            </AnimatePresence>
        </div>
    );
}

export default function HighlightsSection() {
    const [show, setShow] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    const card1Images = [
        "/lc.png",
    ];

    const card2Images = [
        "/h12.jpg",
        "/hi1.jpg",
        "/h13.jpg"
    ];

    const card3Images = [
        "/hi1.jpg",
    ];

    const card4Images = [
        "/h13.jpg",
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const timer = setTimeout(() => {
            setShow(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [mounted]);

    return (
        <>
            <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 rounded-2xl md:rounded-3xl bg-gray-50 dark:bg-[#242424] min-h-auto md:min-h-screen mt-8 md:mt-16 space-y-12 md:space-y-20 transition-colors duration-300">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter text-gray-900 dark:text-white">
                    Highlights
                </h2>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                    {/* Card 1 - LeetCode */}
                    <motion.div
                        className="shadow-md dark:shadow-lg flex flex-col bg-gradient-to-b from-white to-red-500 dark:from-[#2a2a2a] dark:to-[#2a2a2a] items-center p-4 sm:p-6 md:p-8 space-y-3 md:space-y-4 rounded-2xl md:rounded-3xl transition-all"
                        initial={{ opacity: 0, z: 20, rotate: 0 }}
                        animate={{ opacity: 1, z: 0, rotate: -10 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-inter text-orange-500 font-semibold">
                            LeetCode
                        </h1>

                        <SlidingImage images={card1Images} alt="LeetCode" />

                        <h2 className="font-inter text-center text-gray-900 dark:text-white font-semibold my-4 md:my-6 text-base sm:text-lg md:text-xl">
                            Solved <span className="bg-pink-200 dark:bg-pink-900/40 px-2 py-1 rounded-lg">400+</span> DSA Problems
                        </h2>

                        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg md:rounded-xl text-white cursor-pointer w-fit font-medium text-sm md:text-base transition">
                            View
                        </button>
                    </motion.div>

                    {/* Card 2 - HackIndia */}
                    <motion.div
                        className="shadow-md dark:shadow-lg flex flex-col bg-gradient-to-b from-white to-green-500 dark:from-[#2a2a2a] dark:to-[#2a2a2a] items-center p-4 sm:p-6 md:p-8 space-y-3 md:space-y-4 rounded-2xl md:rounded-3xl transition-all"
                        initial={{ z: 20, rotate: 0 }}
                        animate={{ z: 0, rotate: 10 }}
                        transition={{ delay: 0.6, duration: 5 }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-inter text-orange-500 font-semibold">
                            HackIndia
                        </h1>

                        <SlidingImage images={card2Images} alt="HackIndia" />

                        <h2 className="font-inter text-center text-gray-900 dark:text-white font-semibold my-4 md:my-6 text-base sm:text-lg md:text-xl">
                            Reached <span className="bg-yellow-200 px-2 py-1 rounded-xl">HackIndia's(National Level Hackathon)</span> Round 2, beating 200+ teams and reached in the top 50
                        </h2>

                        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg md:rounded-xl text-white cursor-pointer w-fit font-medium text-sm md:text-base transition">
                            View
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                    <motion.div
                        className="shadow-md dark:shadow-lg flex flex-col bg-gradient-to-b from-white to-blue-500 dark:from-[#2a2a2a] dark:to-[#2a2a2a] items-center p-4 sm:p-6 md:p-8 space-y-3 md:space-y-4 rounded-2xl md:rounded-3xl transition-all"
                        initial={{ z: 20, rotate: 0 }}
                        animate={{ z: 0, rotate: -10 }}
                        transition={{ delay: 0.6, duration: 5 }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-inter text-orange-500 font-semibold">
                            Achievements
                        </h1>

                        <SlidingImage images={card3Images} alt="Achievements" />

                        <h2 className="font-inter text-center text-gray-900 dark:text-white font-semibold my-4 md:my-6 text-base sm:text-lg md:text-xl">
                            Advanced Data Structures & Algorithms
                        </h2>

                        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg md:rounded-xl text-white cursor-pointer w-fit font-medium text-sm md:text-base transition">
                            View
                        </button>
                    </motion.div>

                    {/* Card 4 - Certifications */}
                    <motion.div
                        className="shadow-md dark:shadow-lg flex flex-col bg-gradient-to-b from-white to-yellow-500 dark:from-[#2a2a2a] dark:to-[#2a2a2a] items-center p-4 sm:p-6 md:p-8 space-y-3 md:space-y-4 rounded-2xl md:rounded-3xl transition-all"
                        initial={{ z: 20, rotate: 0 }}
                        animate={{ z: 0, rotate: 10 }}
                        transition={{ delay: 0.6, duration: 5 }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-inter text-orange-500 font-semibold">
                            Certifications
                        </h1>

                        <SlidingImage images={card4Images} alt="Certifications" />

                        <h2 className="font-inter text-center text-gray-900 dark:text-white font-semibold my-4 md:my-6 text-base sm:text-lg md:text-xl">
                            Full-Stack Web Development Certified
                        </h2>

                        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg md:rounded-xl text-white cursor-pointer w-fit font-medium text-sm md:text-base transition">
                            View
                        </button>
                    </motion.div>
                </motion.div>

            </div>
        </>
    )
}