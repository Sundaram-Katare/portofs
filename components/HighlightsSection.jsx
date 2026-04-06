"use client"

import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
        <div className={`relative h-65 rounded-md overflow-hidden ${className}`}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={"Hello"}
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
        const timer = setTimeout(() => {
            setShow(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="py-24 px-12 rounded-2xl bg-gray-100 rounded-xl min-h-screen mt-16 space-y-20">
                <h2 className="text-4xl sm:text-5xl font-bold font-inter text-gray-900">
                    Highlights
                </h2>

                <motion.div className="grid grid-cols-2 gap-10">
                    <motion.div
                        className="shadow-md shadow-black flex flex-col bg-gradient-to-b from-white to-red-500 items-center p-6 space-y-2 rounded-2xl"
                        initial={{ opacity: 0, z: 20, rotate: 0 }}
                        animate={{ opacity: 1, z: 0, rotate: -10 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-inter text-orange-500 font-semibold">
                            LeetCode
                        </h1>

                        <SlidingImage images={card1Images} alt="" />

                        <h2 className="font-inter text-center text-black font-semibold my-8 text-xl">
                            Solved <span className="bg-pink-200 px-2 py-1 rounded-xl">400+</span> DSA Problems on LeetCode
                        </h2>

                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white cursor-pointer w-fit">
                            View
                        </button>
                    </motion.div>

                    <motion.div
                        className="shadow-md shadow-black flex flex-col bg-gradient-to-b from-white to-green-500 items-center p-6 space-y-2 rounded-2xl"
                        initial={{ z: 20, rotate: 0 }}
                        animate={{ z: 0, rotate: [10, 0, 10] }}
                        transition={{ delay: 0.6, duration: 5, repeat: Infinity }}
                    >
                        <h1 className="text-4xl font-inter text-orange-500 font-semibold">
                            HackIndia
                        </h1>

                        <SlidingImage images={card2Images} alt="" />

                        <h2 className="font-inter text-center text-black font-semibold my-8 text-xl">
                            Reached <span className="bg-yellow-200 px-2 py-1 rounded-xl">HackIndia's(National Level Hackathon)</span> Round 2, beating 200+ teams and reached in the top 50
                        </h2>

                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white cursor-pointer w-fit">
                            View
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div className="grid grid-cols-2 gap-10">
                    <motion.div
                        className="shadow-md shadow-black flex flex-col bg-gradient-to-b from-white to-blue-500 items-center p-6 space-y-2 rounded-2xl"
                        initial={{ z: 20, rotate: 0 }}
                        animate={{ z: 0, rotate: [-10, 0, -10] }}
                        transition={{ delay: 0.6, duration: 5, repeat: Infinity }}
                    >
                        <h1 className="text-4xl font-inter text-orange-500 font-semibold">
                            Achievements
                        </h1>

                        <SlidingImage images={card3Images} alt="" />

                        <h2 className="font-inter text-center text-black font-semibold my-8 text-xl">
                            Completed advanced data structures and algorithms training
                        </h2>

                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white cursor-pointer w-fit">
                            View
                        </button>
                    </motion.div>
                    <motion.div
                        className="shadow-md shadow-black flex flex-col bg-gradient-to-b from-white to-yellow-500 items-center p-6 space-y-2 rounded-2xl"
                        initial={{ z: 20, rotate: 0 }}
                        animate={{ z: 0, rotate: [10, 0, 10] }}
                        transition={{ delay: 0.6, duration: 5, repeat: Infinity }}
                    >
                        <h1 className="text-4xl font-inter text-orange-500 font-semibold">
                            Certifications
                        </h1>

                        <SlidingImage images={card4Images} alt="" />

                        <h2 className="font-inter text-center text-black font-semibold my-8 text-xl">
                            Certified in modern web development and full-stack technologies
                        </h2>

                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white cursor-pointer w-fit">
                            View
                        </button>
                    </motion.div>
                </motion.div>

            </div>
        </>
    )
}