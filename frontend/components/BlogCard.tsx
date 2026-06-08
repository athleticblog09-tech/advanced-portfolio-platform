type BlogCardProps = {
  title: string;
  summary: string;
};

export default function BlogCard({ title, summary }: BlogCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  );
}