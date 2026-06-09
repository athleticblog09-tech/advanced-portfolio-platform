  import HeroSection from "@/components/HeroSection";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section>
        <h2>Skills</h2>

        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
          />
        ))}
      </section>
    </>
  );
}