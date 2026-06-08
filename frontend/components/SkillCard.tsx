type SkillCardProps = {
  name: string;
};

export default function SkillCard({ name }: SkillCardProps) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}