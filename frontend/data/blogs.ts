export interface Blog {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  published_date: string;
  tags: string[];
}