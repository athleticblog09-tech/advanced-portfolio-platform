import { blogs } from "@/data/blogs";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.summary}</p>

      <h3>Tags</h3>
      <ul>
        {blog.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </main>
  );
}