"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/messages/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message dispatched successfully! 🚀 I will review this shortly." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Transmission failed. Please check backend services." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "ECONNREFUSED: Unable to connect to the API server." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-24 relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* 🌌 BACKGROUND GLOW EFFCT */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-950/20 rounded-full blur-[100px] pointer-events-none" />

      {/* 🔔 PREMIUM TOAST NOTIFICATION */}
      <AnimatePresence>
        {status.type && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className={`fixed top-6 right-6 z-50 px-5 py-4 rounded-xl border shadow-2xl backdrop-blur-md max-w-sm font-mono text-xs ${
              status.type === "success" 
                ? "bg-zinc-950/90 border-emerald-500/30 text-emerald-400" 
                : "bg-zinc-950/90 border-rose-500/30 text-rose-400"
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="font-bold text-sm">{status.type === "success" ? "✓" : "!"}</span>
              <div>
                <div className="font-bold uppercase tracking-wider mb-0.5">
                  {status.type === "success" ? "System Alert" : "Process Error"}
                </div>
                <p className="text-zinc-400 font-sans text-sm leading-normal">{status.message}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTAINER WITH SMOOTH REVEAL */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl space-y-8 relative z-10"
      >
        <div className="space-y-2">
          <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">[ INITIATE COMMS ]</span>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100">Contact</h1>
          <p className="text-gray-400 text-sm">Have a project, opportunity or question? Send a system message.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900/20 border border-zinc-900 p-8 rounded-xl space-y-6 backdrop-blur-sm">
          
          {/* NAME FIELD */}
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your professional name"
              required
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-700 outline-none transition-all duration-200 focus:border-blue-500/80 focus:ring-4 focus:ring-blue-500/5"
            />
          </div>

          {/* EMAIL FIELD */}
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="recruiter@company.com"
              required
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-700 outline-none transition-all duration-200 focus:border-blue-500/80 focus:ring-4 focus:ring-blue-500/5"
            />
          </div>

          {/* MESSAGE FIELD */}
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the architectural requirements or job opportunities..."
              required
              rows={5}
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-700 outline-none resize-none transition-all duration-200 focus:border-blue-500/80 focus:ring-4 focus:ring-blue-500/5"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-zinc-100 text-black hover:bg-zinc-200 font-semibold py-3 rounded-lg text-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed tracking-wide shadow-md"
          >
            {isSubmitting ? "TRANSMITTING..." : "SUBMIT REQUEST"}
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}
