type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  detailsUrl: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  detailsUrl,
}: ProjectCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>

      <div>
        {techStack.map((tech) => (
          <span key={tech}>{tech} </span>
        ))}
      </div>

      <a href={githubUrl} target="_blank">GitHub</a>
      <a href={detailsUrl}>Details</a>
    </div>
  );
}