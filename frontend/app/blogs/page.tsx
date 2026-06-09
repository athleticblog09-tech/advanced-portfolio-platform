import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <div>
      <h1>Blogs</h1>

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
  );
}