import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Project Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
      >
        ← Back to Projects
      </Link>

      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-zinc-950">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="h-72 w-full object-cover"
        />

        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {project.description}
          </p>

          <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">
            Tech Stack
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}