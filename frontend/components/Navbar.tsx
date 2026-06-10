"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Shreeyash Patil
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-900 dark:text-white md:hidden"
        >
          ☰
        </button>

        <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300 md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>
          <a
            href="/resume.pdf"
            className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Resume
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <a
              href="/resume.pdf"
              className="w-fit rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}