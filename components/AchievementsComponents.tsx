"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { GitPullRequest, Trophy, Terminal, Users, Code2, MoveUpRight } from "lucide-react";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

// 1. ScrollSection Wrapper
export const ScrollSection = ({ children, className = "" }: ScrollSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen flex flex-col items-center justify-center py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

interface HackathonCardProps {
  title: string;
  achievement: string;
  date: string;
}

// 2. HackathonCard
export const HackathonCard = ({ title, achievement, date }: HackathonCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full max-w-2xl bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl p-8 mb-6 transition-all hover:border-[#333] group"
    >
      <div className="flex items-center gap-6">
        <div className="p-4 bg-[#111] rounded-xl group-hover:bg-[#1a1a1a] transition-colors">
          <Trophy className="w-8 h-8 text-white/80" />
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-1">{achievement}</h3>
          <p className="text-white/40 text-sm font-light">@ {title}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface StatsCounterProps {
  value: number;
  label: string;
  subLabel?: string;
}

// 3. StatsCounter
export const StatsCounter = ({ value, label, subLabel }: StatsCounterProps) => {
  return (
    <div className="text-center">
      <div className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-4">
        <CountUp end={value} duration={2.5} enableScrollSpy scrollSpyOnce suffix="+" />
      </div>
      <p className="text-xl md:text-2xl text-white/60 font-light mb-2">{label}</p>
      {/* {subLabel && (
        // <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#1f1f1f] rounded-full text-sm text-white/40">
        //   <Code2 className="w-4 h-4" />
        //   {subLabel}
        // </div>
      )} */}
    </div>
  );
};

interface OpenSourceCardProps {
  contributors: string | number;
  prs: string | number;
  project: string;
  url: string;
  avatars?: string[];
}

// 4. OpenSourceCard
export const OpenSourceCard = ({ contributors, prs, project, url, avatars = [] }: OpenSourceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full max-w-2xl bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl p-10 transition-all hover:border-[#333]"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-4">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111] border border-[#1f1f1f] rounded-lg text-xs text-white/40 uppercase tracking-widest">
            <Users className="w-3 h-3" />
            Open Source
          </div> */}
          <h3 className="text-md font-medium text-white">{project}</h3>
          <div className="flex gap-6 text-sm text-white/50 font-light">
            <span className="flex items-center gap-2">
              <span className="text-white font-medium">{contributors}</span> Contributors
            </span>
            <span className="flex items-center gap-2">
              <span className="text-white font-medium">{prs}</span> PRs Merged
            </span>
          </div>
        </div>

        {/* Avatar Stack */}
        {/* <div className="flex -space-x-3 overflow-hidden">
          {avatars.length > 0 ? (
            avatars.map((url, i) => (
              <img
                key={i}
                className="inline-block h-12 w-12 rounded-full ring-4 ring-[#0a0a0a] object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
                src={url}
                alt={`Contributor ${i + 1}`}
              />
            ))
          ) : (
            [1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="h-12 w-12 rounded-full bg-[#111] border-4 border-[#0a0a0a] flex items-center justify-center text-[10px] text-white/20 font-bold"
              >
                C{i}
              </div>
            ))
          )}
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#111] border-4 border-[#0a0a0a] text-xs font-medium text-white/40">
            +
          </div>
        </div> */}
        <button
          onClick={() => window.open(url, "_blank")}
        >
          <MoveUpRight size={32} color="white" className="bg-gray-500 rounded-md p-1 cursor-pointer" />
        </button>
      </div>
    </motion.div>
  );
};

interface PR {
  repo: string;
  title: string;
}

interface PRListProps {
  prs: PR[];
}

// 5. PRList
export const PRList = ({ prs }: PRListProps) => {
  return (
    <div className="w-full max-w-2xl space-y-4">
      {prs.map((pr, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex items-center justify-between p-6 bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl hover:border-[#333] transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#111] rounded-lg text-purple-400 group-hover:text-green-500/80 transition-colors">
              <GitPullRequest className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white/80 font-mono mb-1">{pr.repo}</p>
              <h4 className="text-white font-medium text-sm md:text-base">{pr.title}</h4>
            </div>
          </div>
          <button className="px-3 py-1 bg-green-500/10 border cursor-pointer hover:text-green-300 hover:scale-[1.05] transition-all duration-300 border-green-500/20 rounded-full text-[10px] md:text-xs text-green-500 font-medium uppercase tracking-wider"
                  onClick={() => window.open(pr.repo, "_blank")}
          >
            View
          </button>
        </motion.div>
      ))}
    </div>
  );
};
