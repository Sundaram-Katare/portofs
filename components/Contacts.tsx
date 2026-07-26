"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText, ExternalLink } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { LinkedIn } from "@mui/icons-material";
import { DiGithub } from "react-icons/di";

const Contacts = () => {
  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      value: "sundaramkatare53@gmail.com", 
      href: "mailto:sundaramkatare53@gmail.com",
      color: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn className="w-6 h-6" />,
      value: "sundaram-katare",
      href: "https://www.linkedin.com/in/sundaram-katare5/",
      color: "hover:text-blue-600",
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter className="w-6 h-6" />,
      value: "@sundaram_katare",
      href: "https://x.com/sundaramkatare",
      color: "hover:text-gray-400",
    },
    {
      name: "Github",
      icon: <DiGithub className="w-6 h-6" />,
      value: "sundaram-katare",
      href: "https://github.com/Sundaram-Katare",
      color: "hover:text-gray-400",
    }
  ];

  const resumeLink = "https://drive.google.com/file/d/1b-7FojxPGzotOw_-9hXLYLm3YlchoX7x/view?usp=sharing"; 

  return (
    <section id="contacts" className="py-24 px-6 md:px-12 lg:px-32 bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-6 p-6 rounded-2xl bg-gray-50 dark:bg-[#242424] border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl group ${link.color}`}
              >
                <div className="p-4 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    {link.name}
                  </h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right: Resume */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center p-12 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-500/20"
          >
            <div className="p-6 bg-white/20 rounded-2xl mb-6 backdrop-blur-md">
              <FileText className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-4">My Resume</h3>
            <p className="text-orange-100 text-center mb-8 max-w-sm">
              Check out my professional journey, skills, and detailed experience in one place.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(resumeLink, "_blank")}
              className="flex items-center gap-3 px-8 py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>Open Resume</span>
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-gray-500 dark:text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Sundaram Katare. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
