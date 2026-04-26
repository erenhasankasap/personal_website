import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  order?: number;
}

export type ProjectStatus = "Completed" | "Processing" | "Failed";

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  status: ProjectStatus;
  link: string;
  github?: string;
  generalPurpose: string;
  myRole: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function readMarkdownDir(subdir: string) {
  const dir = path.join(CONTENT_DIR, subdir);
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { file, data, content };
    });
}

export function getAllPosts(): BlogPost[] {
  return readMarkdownDir("blog")
    .map(({ file, data, content }) => ({
      slug: file.replace(/\.md$/, ""),
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      order: data.order,
      content: content.trim(),
    }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return readMarkdownDir("projects")
    .map(({ data }) => ({
      id: data.id,
      title: data.title,
      description: data.description,
      techStack: data.techStack ?? [],
      status: data.status as ProjectStatus,
      link: data.link,
      github: data.github,
      generalPurpose: data.generalPurpose,
      myRole: data.myRole,
    }))
    .sort((a, b) => a.id - b.id);
}
