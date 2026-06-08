interface BlogDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Blog Details</h1>
      <p>Blog Slug: {slug}</p>
    </main>
  );
}