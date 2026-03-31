"use client"
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <>
         <motion.nav className="flex justify-between px-8 py-4 bg-transparent text-black bg-gradient-to-r from-[#D9D7D7] to-[#D9D7D7] via-[#EDEDED] rounded-4xl"
                     initial={{ opacity: 0, y: -40 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.1 }}
         >
            <h1 className="text-black font-semibold text-2xl">
                Sundaram
            </h1>

            <div className="flex items-center justify-between gap-5 ">
               <h2 className="font-normal text-xl text-black">Home</h2>
               <h2 className="font-normal text-xl text-black">Projects</h2>
               <h2 className="font-normal text-xl text-black">Experience</h2>
               <h2 className="font-normal text-xl text-black">Contacts</h2>
            </div>
         </motion.nav>
        </>
    )
}