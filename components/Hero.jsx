"use client"
import ImageCompo from './ImageCompo';
import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
    const [showPopup, setShowPopup] = useState(true);
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [mounted]);

    return (
        <>
            <div className="flex flex-col">
                <AnimatePresence>
                    {showPopup && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, animation: easeOut }}
                            transition={{ duration: 1 }}
                            className="top-20 left-0 right-0 flex items-center justify-center bg-transparent bg-opacity-70 h-[calc(100vh-5rem)]"
                        >
                            <div className="bg-transparent p-6 sm:p-10 rounded-lg text-2xl font-bold flex flex-col sm:flex-row gap-4 space-x-2 justify-center items-center">
                                <img src="https://i.pinimg.com/originals/f7/be/aa/f7beaa7787bd55e9ac54135566d6af97.gif" alt="grow" className="h-24 sm:h-32 md:h-44" />
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">npm install grow</h1>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 justify-center h-full items-center">
                    {!showPopup && (
                        <motion.div
                            className="flex flex-col p-4 sm:p-8 mt-8 md:mt-0 lg:mt-32 h-full max-w-4xl mx-auto text-center md:text-left"
                            initial={{ opacity: 0, x: 80, rotate: 120, scale: 1.4 }}
                            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1, }}
                        >
                            <motion.h1
                                className="text-orange-500 text-lg sm:text-xl md:text-2xl font-inter font-bold"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, animation: easeInOut, delay: 1.6 }}
                            >
                                Hi, I'm
                            </motion.h1>

                            <motion.h3
                                className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-4 md:mb-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, animation: easeInOut, delay: 1.6 }}
                            >
                                Sundaram
                            </motion.h3>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, animation: easeInOut, delay: 1.6 }}
                                className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-blue-900 dark:text-blue-400 font-bold"
                            >
                                Full Stack Developer
                            </motion.h1>

                            <p className="text-gray-700 dark:text-gray-300 mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                                Experienced developer proficient in full-stack technologies, creating visually stunning and high-performance applications. Passionate about seamless user experiences and staying up-to-date with modern trends.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 lg:mt-10">
                                <button className="bg-orange-500 hover:bg-orange-600 dark:hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition text-sm md:text-base">
                                    View Projects
                                </button>
                                <button className="border border-orange-500 text-orange-500 dark:border-orange-400 dark:text-orange-400 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-100 dark:hover:bg-orange-900/20 transition text-sm md:text-base">
                                    Contact
                                </button>
                            </div>
                        </motion.div>

                    )}

                    {!showPopup && (
                        <div className="hidden md:flex justify-center">
                            <ImageCompo />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}