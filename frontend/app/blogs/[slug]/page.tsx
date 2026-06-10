import Link from "next/link";
import { blogs } from "@/data/blogs";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Blog Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/blogs"
        className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
      >
        ← Back to Blogs
      </Link>

      <article className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-950 md:p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {blog.title}
        </h1>

        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {blog.summary}
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">
          Tags
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </main>
  );
}