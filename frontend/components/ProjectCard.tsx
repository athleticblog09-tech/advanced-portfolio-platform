import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  detailsUrl: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  detailsUrl,
  image,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <Image
        src={image}
        alt={title}
        width={1200}
        height={800}
        className="h-36 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            GitHub
          </a>

          <Link
            href={detailsUrl}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            Details
          </Link>
        </div>
      </div>

    </div>
  );
}