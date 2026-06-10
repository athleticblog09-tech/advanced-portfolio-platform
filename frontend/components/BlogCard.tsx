type BlogCardProps = {
  title: string;
  summary: string;
  tags: string[];
  readMoreUrl: string;
};

export default function BlogCard({
  title,
  summary,
  tags,
  readMoreUrl,
}: BlogCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={readMoreUrl}
        className="mt-6 inline-block text-sm font-semibold text-black hover:underline"
      >
        Read More →
      </a>
    </div>
  );
}