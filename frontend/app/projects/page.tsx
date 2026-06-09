import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          githubUrl={project.githubUrl}
          detailsUrl={project.detailsUrl}
        />
      ))}
    </div>
  );
}