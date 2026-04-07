"use client"
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 bg-gradient-to-r from-[#D9D7D7] to-[#EDEDED] rounded-2xl sm:rounded-3xl md:rounded-4xl">
                <h1 className="text-black font-semibold text-lg sm:text-xl md:text-2xl tracking-wide">
                    Sundaram
                </h1>
            </div>
        );
    }

    return (
        <>
            <motion.nav 
                className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 bg-gradient-to-r from-[#D9D7D7] to-[#EDEDED] dark:from-[#2a2a2a] dark:to-[#333333] rounded-2xl sm:rounded-3xl md:rounded-4xl transition-colors"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <h1 className="text-black dark:text-white font-semibold text-lg sm:text-xl md:text-2xl tracking-wide">
                    Sundaram
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-between gap-6 lg:gap-8">
                    <h2 className="font-normal text-sm lg:text-lg text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition cursor-pointer">Home</h2>
                    <h2 className="font-normal text-sm lg:text-lg text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition cursor-pointer">Projects</h2>
                    <h2 className="font-normal text-sm lg:text-lg text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition cursor-pointer">Experience</h2>
                    <h2 className="font-normal text-sm lg:text-lg text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition cursor-pointer">Contacts</h2>
                </div>

                {/* Theme Toggle & Mobile Menu */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-white dark:bg-[#1a1a1a] hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? (
                            <Moon className="w-5 h-5 text-gray-700" />
                        ) : (
                            <Sun className="w-5 h-5 text-orange-400" />
                        )}
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#404040] transition"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-black dark:text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-black dark:text-white" />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden mt-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-2xl p-4 flex flex-col gap-3 transition-colors"
                >
                    <h2 className="font-normal text-base text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition cursor-pointer py-2">Home</h2>
                    <h2 className="font-normal text-base text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition cursor-pointer py-2">Projects</h2>
                    <h2 className="font-normal text-base text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition cursor-pointer py-2">Experience</h2>
                    <h2 className="font-normal text-base text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition cursor-pointer py-2">Contacts</h2>
                </motion.div>
            )}
        </>
    )
}