import Link from "next/link";

interface Blog {
  id: number;
  title: str;
  slug: str;
  summary: str;
  content: str;
  created_at: str;
}

async function getLiveBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/v1/blogs/", { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching live blogs:", error);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getLiveBlogs();

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Engineering Logs</h1>
        <p className="text-gray-400 mb-12 text-sm">Technical write-ups, architecture breakdowns, and system insights.</p>

        {blogs.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/10">
            <p className="text-gray-500 text-sm">No production logs found. Add some via Swagger! 🚀</p>
          </div>
        ) : (
          <div className="space-y-10">
            {blogs.map((blog) => (
              <article key={blog.id} className="border-b border-zinc-900 pb-8 group">
                <div className="text-xs text-gray-500 mb-2 font-mono">
                  {new Date(blog.created_at).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </div>
                <Link href={`/blogs/${blog.slug}`}>
                  <h2 className="text-2xl font-bold mb-3 text-zinc-100 group-hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                    {blog.title}
                  </h2>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {blog.summary || "No summary provided for this engineering log."}
                </p>
                <Link href={`/blogs/${blog.slug}`} className="text-xs font-semibold text-blue-400 hover:underline tracking-wider font-mono">
                  READ LOG _
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
