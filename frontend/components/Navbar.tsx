"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-black/95 backdrop-blur-md border-b border-zinc-900 px-4 md:px-12 py-4 flex justify-between items-center fixed top-0 left-0 z-50">
      {/* LOGO */}
      <div className="text-lg font-bold tracking-tight text-white font-sans shrink-0 z-50">
        <Link href="/" onClick={() => setIsOpen(false)}>Shreeyash Patil</Link>
      </div>

      {/* 💻 DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-zinc-400">
        {menuItems.map((item, idx) => (
          <Link key={idx} href={item.href} className="hover:text-white transition-colors">
            {item.name}
          </Link>
        ))}
        {/* RESUME BUTTON FIXED */}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-zinc-200 transition text-xs"
        >
          Resume
        </a>
      </nav>

      {/* 📱 MOBILE HAMBURGER BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-zinc-400 hover:text-white focus:outline-none p-2 z-50 cursor-pointer"
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* 📱 MOBILE DROPDOWN OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] h-screen w-full bg-black z-40 md:hidden flex flex-col p-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-base font-medium text-zinc-300">
            {menuItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-white border-b border-zinc-900/50 pb-3 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* MOBILE RESUME BUTTON FIXED */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-zinc-100 text-black text-center px-4 py-3 rounded-xl font-bold text-sm tracking-wide mt-2"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
