import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreeyash Patil",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between px-12 py-6 bg-black text-white">
          <Link href="/" className="text-xl font-bold">
            Shreeyash Patil
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/blogs" className="hover:underline">Blogs</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/resume" className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200">
              Resume
            </Link>
          </nav>
        </header>
        {children}
        <footer className="text-center py-6 bg-black text-gray-400 text-sm border-t border-zinc-900">
          © 2026 Shreeyash Patil. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
