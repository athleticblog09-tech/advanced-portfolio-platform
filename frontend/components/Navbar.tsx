import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-12 py-6 bg-black text-white border-b border-zinc-900 fixed top-0 left-0 w-full z-50">
      <div className="text-xl font-bold tracking-tight">
        <Link href="/">Shreeyash Patil</Link>
      </div>
      <nav className="flex items-center gap-8 text-sm font-medium text-zinc-400">
        <Link href="/" className="hover:text-white transition">Home</Link>
        <Link href="/about" className="hover:text-white transition">About</Link>
        <Link href="/projects" className="hover:text-white transition">Projects</Link>
        <Link href="/blogs" className="hover:text-white transition">Blogs</Link>
        <Link href="/contact" className="hover:text-white transition">Contact</Link>
        <Link href="/contact" className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-zinc-200 transition">
          Resume
        </Link>
      </nav>
    </header>
  );
}
