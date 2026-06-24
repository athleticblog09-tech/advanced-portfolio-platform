import Link from "next/link";
import { notFound } from "next/navigation";

interface Blog {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  created_at: string;
}

async function getSingleBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/blogs/${slug}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching single blog:", error);
    return null;
  }
}

// Next.js च्या नवीन नियमांनुसार params ला Promise टाईप दिले आहे
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // 🔑 इथे params ला await करणे गरजेचे आहे, जेणेकरून अचूक slug मिळेल
  const resolvedParams = await params;
  const blog = await getSingleBlog(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/blogs" className="text-xs font-mono text-gray-500 hover:text-white transition block mb-8">
          ← BACK TO LOGS
        </Link>
        
        <div className="text-xs text-gray-500 mb-3 font-mono">
          {new Date(blog.created_at).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
          })}
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-zinc-100 leading-tight">
          {blog.title}
        </h1>
        
        {blog.summary && (
          <p className="text-zinc-400 text-base md:text-lg italic border-l-2 border-zinc-700 pl-4 mb-8 leading-relaxed">
            {blog.summary}
          </p>
        )}

        <div className="text-zinc-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-sans">
          {blog.content}
        </div>
      </div>
    </main>
  );
}
