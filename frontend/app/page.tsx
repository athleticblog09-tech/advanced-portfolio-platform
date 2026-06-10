import HeroSection from "@/components/HeroSection";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        <p className="mt-3 text-gray-600">
          Technologies and tools I use for backend and full-stack development.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.id} name={skill.name} />
          ))}
        </div>
      </section>
    </>
  );
}