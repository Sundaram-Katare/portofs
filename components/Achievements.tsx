"use client";

import React, { use, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ScrollSection,
  HackathonCard,
  StatsCounter,
  OpenSourceCard,
  PRList
} from "./AchievementsComponents";
import { PencilIcon, Trophy } from "lucide-react";
import DSA from './DSA';
import { FaTrophy } from "react-icons/fa";

const IITImages = ["./iit1.png", "./iit2.png"];
const HackIndiaImages = ["./hi1.jpg", "./farmer.jpg"];

const Achievements = () => {
  const [currentIITImage, setCurrentIITImage] = React.useState(0);
  const [currentHackIndiaImage, setCurrentHackIndiaImage] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIITImage((prev) => (prev + 1) % IITImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHackIndiaImage((prev) => (prev + 1) % HackIndiaImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const hackathons = [
    { title: "Smart India Hackathon", achievement: "Top 35 @ National Level", date: "2024" },
    { title: "Chainlink Hackathon", achievement: "Top 25 @ Global Web3", date: "2023" },
  ];

  const mergedPRs = [
    { repo: "https://github.com/devayanm/Inboxly/pull/9", title: "Built Authentication System with DB integration" },
    { repo: "https://github.com/devayanm/Scribly/pull/22", title: "feat: Inline editing feature added" },
    { repo: "https://github.com/KnifeChann/SchemaScouters/pull/6", title: "feat: integrate Google Gemini for AI-based eligibility parsing" },
  ];

  return (
    <div className="bg-  dark:bg-[#0a0a0a] dark:text-white selection:bg-white selection:text-black">
      <ScrollSection className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black dark:text-white/90">
            I don’t just build projects.
          </h2>
          <p className="text-2xl md:text-4xl font-light text-black/40 dark:text-white/40 italic">
            I compete, contribute, and scale ideas.
          </p>
        </motion.div>
      </ScrollSection>

      <ScrollSection>
        <div className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12 text-center"
          >
            <span className="text-white/20 text-xs uppercase tracking-[0.3em] font-medium">Community</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Open Source <span className="text-orange-500">Work</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-40">
            <div className="flex items-center justify- flex-col space-y-6">
              <h1 className="text-black dark:text-white text-2xl">
                My Open Sourced Projects
              </h1>
              <OpenSourceCard
                project="BookHub: e-commerce platform for Books"
                contributors="6+"
                prs="10+"
                url="https://github.com/Sundaram-Katare/BookHub"
              />

              <OpenSourceCard
                project="Lumin:  Online Quiz Platform with leaderboard"
                contributors="4+"
                prs="5+"
                url="https://github.com/Sundaram-Katare/Lumin"
              />

            </div>

            <div className="flex items-center flex-col space-y-6">
              <h1 className="text-black dark:text-white text-2xl">My Merged PRs</h1>
              <PRList prs={mergedPRs} />
            </div>

          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer px-4 mt-6 py-2 text-xl bg-black dark:bg-white text-white dark:text-black rounded-md"
            onClick={() => window.open("https://github.com/Sundaram-Katare", "_blank")}
          >
            View more on GitHub
          </motion.button>
        </div>
      </ScrollSection>

      <ScrollSection>
        <div className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12 text-center"
          >
            <span className="text-orange-800 bg-orange-200 px-2 rounded-full py-1 text-xs uppercase tracking-[0.3em] ">Competition</span>
            <h3 className="text-4xl font-light mt-2 flex gap-4">Hackathons <FaTrophy className="dark:text-orange-400" /> </h3>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-40 mx-36">
            <motion.div className="flex flex-cols gap-6 bg-gray-200/40 p-2 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >

              <div className="space-y-4">
                <h1 className="font-poppins text-2xl font-semibold dark:text-white">Top <span className="bg-yellow-400 px-1 py-0 rounded text-black">35</span> in Devcation, IIT Delhi Hackathon</h1>

                <motion.img src={IITImages[currentIITImage]} alt="IIT Hackathon" className="rounded-xl h-64 object-cover"
                  initial={{ opacity: 0, scale: 0.95, z: -1 }}
                  animate={{ opacity: 1, scale: 1, z: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  whileInView={"true"}
                />

                <p className="text-md ">
                  Solved delayed maternal care in rural settings by leveraging TigerGraph to analyze patient relationships and trigger real-time risk alerts for timely intervention.
                </p>

                <Link href={"https://www.linkedin.com/posts/sundaram-katare5_hackathon-iitdelhi-devcation-activity-7451262358703771648-s10L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAKzyMBwb4eXt9DlvtlgOeMl64COBehWJU"} target="_blank" className="ml-4 px-4 curor-pointer text-md bg-black text-white px-1 py-1 rounded dark:bg-white dark:text-blue-600">
                  View
                </Link>
              </div>
            </motion.div>

            <motion.div className="flex flex-cols gap-6 bg-gray-200/40 px-8 py-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >

              <div className="space-y-4">
                <h1 className="font-poppins text-2xl font-semibold dark:text-white">Top <span className="bg-yellow-400 px-1 py-0 rounded text-black">30</span> in HackIndia - Spark 4, East Region NCR Hackathon</h1>
                <motion.img src={HackIndiaImages[currentHackIndiaImage]} alt="HackIndia Hackathon" className="rounded-xl h-64 object-cover"
                  initial={{ opacity: 0, scale: 0.95, z: -1 }}
                  animate={{ opacity: 1, scale: 1, z: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  whileInView={"true"}
                />

                <p className="text-md ">
                  Developed a Farmer Policy Blockchain Project aimed at bringing transparency, trust, and security to agricultural insurance systems.
                </p>

                <Link href={"https://www.linkedin.com/posts/sundaram-katare5_hackindia-hackathon-blockchain-activity-7441486799744671745-dcfj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAKzyMBwb4eXt9DlvtlgOeMl64COBehWJU"} target="_blank" className="ml-4 px-4 curor-pointer text-md bg-black text-white px-1 py-1 rounded dark:bg-white dark:text-blue-600">
                  View
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </ScrollSection>

      <h3 className="text-5xl text-center font-bold mt-2 flex justify-center gap-4 font-poppins items-center"><span className="text-orange-400">Problem</span> Solving <PencilIcon className="dark:text-orange-400" /> </h3>
      <ScrollSection className=" mx-36">
        <DSA />
      </ScrollSection>

      <ScrollSection className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-4xl font-light dark:text-white/50">
            From solving problems to building systems —
          </h2>
          <p className="text-5xl md:text-7xl font-medium tracking-tighter dark:text-white">
            I ship impact.
          </p>
        </motion.div>
      </ScrollSection>
    </div>
  );
};

export default Achievements;
