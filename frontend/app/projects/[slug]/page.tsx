interface ProjectDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Project Details</h1>
      <p>Project Slug: {slug}</p>
    </main>
  );
}