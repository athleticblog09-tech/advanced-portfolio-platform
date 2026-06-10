import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Blogs</h1>
      <p className="mt-3 max-w-2xl text-gray-600">
        Notes and articles about backend development, APIs and web technologies.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            summary={blog.summary}
            tags={blog.tags}
            readMoreUrl={blog.readMoreUrl}
          />
        ))}
      </div>
    </main>
  );
}