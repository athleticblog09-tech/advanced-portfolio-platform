export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  tech_stack: string[];
  github_url: string | null;
  details_url: string | null;
  image: string | null;
}
