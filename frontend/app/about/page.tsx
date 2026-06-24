"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const skillCategories = [
    {
      title: "Backend Core",
      skills: ["Python", "FastAPI", "Django", "SQLAlchemy Engine", "PyTest Suite"]
    },
    {
      title: "Full-Stack & React",
      skills: ["React 19", "Next.js (App Router)", "State Management", "Hooks & Context", "Tailwind CSS / Motion"]
    },
    {
      title: "Databases & Cloud",
      skills: ["PostgreSQL", "Neon Tech Cloud", "Connection Pooling", "RESTful Architecture", "Git Version Control"]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-24 relative overflow-hidden font-sans">
      {/* 🌌 PREMIUM AMBIENT GLOW */}
      <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] bg-blue-950/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-zinc-900/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-20 relative z-10">
        
        {/* 🚀 BRIEF PROFESSIONAL INTRODUCTION */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-4"
        >
          <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">[ COMPREHENSIVE OVERVIEW ]</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Full-Stack Python Developer.
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-3xl leading-relaxed pt-2">
            I am <span className="text-zinc-200 font-medium">Shreeyash Patil</span>, a specialized Full-Stack Engineer who anchors high-performance backend pipelines in Python and bridges them seamlessly with high-fidelity, component-driven React and Next.js interfaces.
          </p>
          <p className="text-zinc-500 text-sm max-w-3xl leading-relaxed">
            My engineering philosophy centers around strict API contracts, robust data validation using Pydantic, and building highly scalable microstructures that look pristine and load flawlessly.
          </p>
        </motion.section>

        {/* 🧠 EXPANDED BENTO GRID FOR EXHAUSTIVE CAPABILITIES */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <div className="flex flex-col space-y-1">
            <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">[ TECH CAPABILITIES ]</span>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-200">The Core Stack & Engineering Ecosystem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                variants={fadeIn}
                whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.3)", backgroundColor: "rgba(24, 24, 27, 0.4)" }}
                className="p-6 bg-zinc-900/20 border border-zinc-900 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <h3 className="text-sm font-mono text-zinc-400 border-b border-zinc-800 pb-2 mb-4 uppercase tracking-wider">
                  // {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ⏳ INTERACTIVE PATHWAY (EXPERIENCE/TIMELINE) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="space-y-8"
        >
          <div className="flex flex-col space-y-1">
            <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">[ TIMELINE REGISTER ]</span>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-200">Engineered Production Systems</h2>
          </div>

          <div className="border-l border-zinc-800 ml-2 space-y-12 relative">
            
            {/* PLATFORM */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-300" />
              <span className="text-xs font-mono text-zinc-500 block mb-1">2026 — ACTIVE</span>
              <h3 className="text-lg font-bold text-zinc-200 group-hover:text-blue-400 transition-colors">Advanced Portfolio Architecture</h3>
              <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
                Designed an enterprise-grade modular portfolio utilizing Next.js Turbopack for near-instant rendering and FastAPI for high-speed API resolution. Features fully modular database entities hooked into cloud-hosted Neon Tech PostgreSQL.
              </p>
            </div>

            {/* CRYPTO */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-300" />
              <span className="text-xs font-mono text-zinc-500 block mb-1">MID 2026</span>
              <h3 className="text-lg font-bold text-zinc-200 group-hover:text-blue-400 transition-colors">Crypto Order Management System</h3>
              <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
                Engineered a comprehensive transaction execution layout via FastAPI and SQLAlchemy Core. Rigorously tested endpoints with automated PyTest suites to ensure zero transaction lag and complete safety.
              </p>
            </div>

            {/* COOLCAB */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-300" />
              <span className="text-xs font-mono text-zinc-500 block mb-1">EARLY 2026</span>
              <h3 className="text-lg font-bold text-zinc-200 group-hover:text-blue-400 transition-colors">CoolCab Logistics Ecosystem</h3>
              <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
                Developed a corporate ride logistics automation system using the robust Django MVC layout. Managed complete database relational schema structures with customized admin control logging dashboards.
              </p>
            </div>

          </div>
        </motion.section>

        {/* 🎯 CTA SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="pt-8 text-center border-t border-zinc-900"
        >
          <Link href="/contact">
            <motion.span 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-zinc-100 text-black px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-zinc-200 transition cursor-pointer shadow-lg"
            >
              Initiate Professional Connection →
            </motion.span>
          </Link>
        </motion.section>

      </div>
    </main>
  );
}
