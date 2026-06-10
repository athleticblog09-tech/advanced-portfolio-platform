type SkillCardProps = {
  name: string;
};

export default function SkillCard({ name }: SkillCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-800 shadow-sm">
      {name}
    </div>
  );
}