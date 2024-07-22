"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroGlobe } from "./hero-globe";

export default function LandingSection() {
  return (
    <div className="pt-7 h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="max-w-7xl mx-auto p-4"
      >
        <h1 className="relative z-10 p-4 text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          We're Building Something Amazing!
        </h1>
        <p className="text-neutral-500 max-w-5xl mx-auto my-2 lg:text-xl text-sm text-center relative z-10">
          At Blemense Technologies, innovation never stops. Our website is
          currently under redevelopment, and we're working hard to bring you a
          fresh, dynamic, and user-friendly experience.
          <br />
          <button className="mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Stay tuned for updates!
          </button>
        </p>
      </motion.div>
      <HeroGlobe />
      <BackgroundBeams />
    </div>
  );
}
