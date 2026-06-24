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
  github_url?: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 border-b border-zinc-900 pb-8"
        >
          <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">[ ARCHITECTURE INDEX ]</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100">Production Systems</h1>
          <p className="text-zinc-400 text-sm max-w-xl">A curated archive of full-stack ecosystems, specialized backend APIs, and microservices.</p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.12)" }}
              className="p-8 bg-zinc-900/10 border border-zinc-900 rounded-xl flex flex-col justify-between h-[260px] group transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-zinc-700 font-mono text-xs">//0{project.id}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech_stack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-950 text-zinc-500 border border-zinc-800/80 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-2">
                  <Link href={`/projects/${project.slug}`} className="text-xs font-mono font-bold tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                    VIEW SYSTEM SPECS _
                  </Link>
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-zinc-600 hover:text-zinc-400 transition">
                      [ SOURCE ]
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}
