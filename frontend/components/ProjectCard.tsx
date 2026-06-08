type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}