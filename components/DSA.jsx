"use client"

import { eachAxis, motion } from 'framer-motion';
import { StatsCounter } from './AchievementsComponents'
import { easeInOut } from 'framer-motion'
import { FaHackerNews } from 'react-icons/fa';

export default function DSA() {
    return (
        <>
            <div className="relative rounded-2xl py-20 flex items-center justify-center flex-col overflow-hidden w-72"
                style={{
                    background: "linear-gradient(135deg, #1e1e2e 0%, #16162a 60%, #1a1a30 100%)",
                    border: "1px solid rgba(255,180,0,0.15)",
                    fontFamily: "'Syne', sans-serif"
                }}>
                {/* Glow orb */}
                <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(255,180,0,0.12) 0%, transparent 70%)" }} />

                {/* Logo */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(255,180,0,0.12)", border: "1px solid rgba(255,180,0,0.2)" }}>
                    <img src="./lcLogo.png" className="h-10" alt="LeetCode" />
                </div>

                <StatsCounter
                    value={410}
                    label="LeetCode Questions Solved"
                    subLabel="HackerRank 3–4★"
                />

                <div className="w-full h-px mb-5" style={{ background: "rgba(255,255,255,0.07)" }} />

                <button className="rounded-xl px-7 py-2.5 font-bold text-sm tracking-wider transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer"
                    style={{ background: "#ffb400", color: "#1a1a2e", border: "none", fontFamily: "'Syne', sans-serif" }}
                    onClick={() => window.open("https://leetcode.com/u/SundaramKatare/", "_blank")}
                    >
                    View Profile
                </button>
            </div>
        </>
    )
}