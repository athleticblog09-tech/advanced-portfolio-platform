import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Shreeyash Patil
        </h1>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/about" className="hover:text-black">About</a>
          <a href="/projects" className="hover:text-black">Projects</a>
          <a href="/blogs" className="hover:text-black">Blogs</a>
          <a href="/contact" className="hover:text-black">Contact</a>
          <a
            href="/resume.pdf"
            className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}