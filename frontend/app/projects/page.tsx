import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Projects
      </h1>

      <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
        A collection of backend and full-stack projects I have worked on.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            detailsUrl={project.detailsUrl}
            image={project.image}
          />
        ))}
      </div>
    </main>
  );
}