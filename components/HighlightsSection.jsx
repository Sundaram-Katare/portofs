"use client"

import { easeInOut, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HighlightsSection() {
    const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
    return (
        <>
            <div className="py-24 px-12 rounded-2xl h-screen">
                <motion.div
                   className="flex justify-center items-center h-full"
                >
                  <motion.div
                     className="bg-green-500 h-20"
                     initial={{ opacity: 0, z:-20 }}
                     animate={{ opacity: [1,0], z:0 }}
                     transition={{ animation: easeInOut, duration:0.8 }}
                  >
                       Jack
                  </motion.div>

                  { show && (
                    <motion.div
                     className="bg-black h-20 rounded"
                     initial={{ opacity: 0, x: 0, y:0 }}
                     animate={{ opacity: 1, x: -520, y: -250 }}
                     transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Rose
                  </motion.div>
                  )}

                  { show && (
                    <motion.div
                     className="bg-black h-20 rounded"
                     initial={{ opacity: 0, x: 0, y:0 }}
                     animate={{ opacity: 1, x: 520, y: -250 }}
                     transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Rose
                  </motion.div>
                  )}

                  { show && (
                    <motion.div
                     className="bg-black h-20 rounded"
                     initial={{ opacity: 0, x: 0, y:0 }}
                     animate={{ opacity: 1, x: -520, y: 250 }}
                     transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Rose
                  </motion.div>
                  )}

                  { show && (
                    <motion.div
                     className="bg-black h-20 rounded"
                     initial={{ opacity: 0, x: 0, y:0 }}
                     animate={{ opacity: 1, x: 520, y: 250 }}
                     transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Rose
                  </motion.div>
                  )}
                </motion.div>

            </div>
        </>
    )
}