import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
        Python Backend Developer
      </p>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
        Hi, I’m Shreeyash Patil
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        I build scalable APIs, backend systems and full-stack platforms using
        Python, FastAPI, Django and SQL.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}