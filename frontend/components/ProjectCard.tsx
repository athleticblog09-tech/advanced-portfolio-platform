import React from 'react';
import Link from 'next/link';
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative border border-zinc-800/80 bg-zinc-900/30 rounded-2xl p-6 backdrop-blur-md hover:-translate-y-1 hover:border-zinc-700/80 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between h-full shadow-[0_0_30px_rgba(0,0,0,0.3)]">
      <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-blue-500/5 blur-[30px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-300" />
      <div>
        <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech_stack.map((tech, index) => (
            <span key={index} className="bg-zinc-900 text-zinc-300 text-xs px-2.5 py-1 rounded-md border border-zinc-800 font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-zinc-800/60 flex items-center justify-between">
        <Link 
          href={`/projects/${project.slug}`} 
          className="text-zinc-300 hover:text-white text-sm font-medium inline-flex items-center gap-1.5 group/link"
        >
          View Technical Breakdown 
          <span className="text-zinc-500 group-hover/link:text-white transform group-hover/link:translate-x-0.5 transition-all duration-200">→</span>
        </Link>
      </div>
    </div>
  );
}
