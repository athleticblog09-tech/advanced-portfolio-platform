import Link from "next/link";
import { notFound } from "next/navigation";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  tech_stack: string[];
  github_url?: string;
  details_url?: string;
}

async function getProjectSpecs(slug: string): Promise<Project | null> {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/projects/${slug}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching project specs:", error);
    return null;
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = await getProjectSpecs(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-20 font-sans">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* BACK ACTION */}
        <Link href="/projects" className="text-xs font-mono text-gray-500 hover:text-white transition block w-fit">
          ← BACK TO ARCHIVE
        </Link>

        {/* TITLE & META */}
        <div className="space-y-4">
          <div className="inline-block px-2.5 py-0.5 bg-blue-950/40 text-blue-400 border border-blue-900/50 rounded text-[10px] font-mono tracking-wider uppercase">
            System Breakdown
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            {project.title}
          </h1>
        </div>

        {/* TECH STACK BARS */}
        <div className="border-y border-zinc-900 py-4 flex flex-wrap gap-2">
          {project.tech_stack.map((tech, idx) => (
            <span key={idx} className="text-xs font-mono px-3 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800/60">
              {tech}
            </span>
          ))}
        </div>

        {/* CORE CORE SPECS */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono text-zinc-500 tracking-widest uppercase">[ ARCHITECTURAL OVERVIEW ]</h2>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-normal whitespace-pre-wrap">
            {project.description}
          </p>
        </div>

        {/* EXTERNAL DEPLOYMENT LINKS */}
        <div className="pt-8 border-t border-zinc-900 flex flex-wrap gap-6 font-mono text-xs">
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              // DEPLOYED_REPOSITORY_LINK
            </a>
          )}
          {project.details_url && (
            <a href={project.details_url} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white hover:underline">
              // LIVE_DEMO_INTERFACE
            </a>
          )}
        </div>

      </div>
    </main>
  );
}
