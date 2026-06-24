"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  tech_stack: string[];
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // बॅकएंडवरून प्रोजेक्ट्स आणणे
    fetch("http://127.0.0.1:8000/api/v1/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 3))) // पहिल्या ३ प्रोजेक्ट्सला ग्रिडमध्ये दाखवणे
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-24 relative overflow-hidden flex flex-col justify-center">
      {/* 🌌 BACKGROUND AMBIENT GLOW (ॲमेझॉन/गुगल प्रीमियम स्टँडर्ड) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full space-y-24">
        
        {/* 🚀 HERO INTRO SECTION */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">Available for Senior Roles</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
          >
            I build robust backend engines & fluid interfaces.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-zinc-400 text-base md:text-xl font-normal leading-relaxed max-w-xl"
          >
            Hi, I'm <span className="text-zinc-200 font-medium">Shree</span>. A Full-Stack Python Developer specializing in designing clean architectural pipelines with FastAPI, Django, and Next.js.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects">
              <span className="px-5 py-3 bg-zinc-100 text-black font-semibold text-sm rounded-lg hover:bg-zinc-200 transition duration-300 shadow-lg block cursor-pointer">
                View Architecture _
              </span>
            </Link>
            <Link href="/contact">
              <span className="px-5 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold text-sm rounded-lg hover:bg-zinc-800 transition duration-300 block cursor-pointer">
                Get In Touch
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* 🛠️ FEATURED WORK (DYNAMIC BENTO GRID) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="flex justify-between items-end border-b border-zinc-900 pb-4">
            <div>
              <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">[ PRODUCTION SYSTEMS ]</span>
              <h2 className="text-2xl font-bold text-zinc-200 tracking-tight mt-1">Featured Projects</h2>
            </div>
            <Link href="/projects" className="text-xs font-mono text-zinc-500 hover:text-blue-400 transition">
              ALL PROJECTS →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.length === 0 ? (
              // जर अजून डेटाबेस रिकामी असेल तर सिस्टीम स्केलेटन दाखवणे
              [1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-zinc-900/40 border border-zinc-800/60 rounded-xl animate-pulse" />
              ))
            ) : (
              projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)" }}
                  className="p-6 bg-zinc-900/20 border border-zinc-900 rounded-xl flex flex-col justify-between group transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-zinc-700 font-mono text-xs">//0{project.id}</span>
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="pt-6">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech_stack.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-950 text-zinc-500 border border-zinc-800/60 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link href={`/projects/${project.slug}`} className="text-[11px] font-mono font-bold tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                      EXPLORE SOURCE _
                    </Link>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
