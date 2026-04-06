"use client"
import ImageCompo from './ImageCompo';
import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

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
                            className=" top-20 left-0 right-0 flex items-center justify-center bg-transparent bg-opacity-70 h-[calc(100vh-5rem)]"
                        >
                            <div className="bg-transparent p-10 rounded-lg text-2xl font-bold flex space-x-2 justify-center items-center ">
                                <img src="https://i.pinimg.com/originals/f7/be/aa/f7beaa7787bd55e9ac54135566d6af97.gif" alt="" className="h-34" />
                                <h1 className="text-4xl font-bold text-black ">npm install grow</h1>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className=" grid grid-cols-2 gap-20 justify-center h-full items-center">
                    {!showPopup && (
                        <motion.div
                            className="flex flex-col p-8 mt-32 md:mt- h-full lg:mt-64 max-w-4xl mx-auto text-center md:text-left "
                            initial={{ opacity: 0, x: 80, rotate: 120, scale: 1.4 }}
                            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1, }}
                        >
                            <motion.h1
                                className="text-orange-500 text-xl sm:text-2xl font-inter font-bold"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, animation: easeInOut, delay: 1.6 }}
                            >
                                Hi, I'm
                            </motion.h1>

                            <motion.h3
                                className="text-black text-4xl sm:text-5xl md:text-6xl font-bold font-inter mb-6"
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
                                className="text-lg sm:text-xl md:text-2xl font-inter text-blue-900 font-bold"
                            >
                                Full Stack Developer
                            </motion.h1>

                            <p className="text-black mt-6 sm:mt-8 text-sm sm:text-base md:text-md leading-relaxed">
                                Experienced developer proficient in full-stack technologies, creating visually stunning and high-performance applications. Passionate about seamless user experiences and staying up-to-date with modern trends.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                                    View Projects
                                </button>
                                <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition">
                                    Contact
                                </button>
                            </div>
                        </motion.div>

                    )}

                    {!showPopup && (
                        <ImageCompo />
                    )}
                </div>
            </div>
        </>
    );
}