// Blog registry - auto-imports all MDX files
import { ComponentType } from "react";

export interface BlogMeta {
  title: string;
  date: string;
  readTime: string;
  slug: string;
  category?: string;
  featured?: boolean;
}

export interface BlogPost {
  meta: BlogMeta;
  Component: ComponentType;
}

// Auto-import all MDX files from this directory
const blogModules = import.meta.glob<{
  default: ComponentType;
  meta: BlogMeta;
}>("./*.mdx", { eager: true });

export const blogs: BlogPost[] = Object.values(blogModules).map((mod) => ({
  meta: mod.meta,
  Component: mod.default,
}));

// Sort by date, newest first
export const sortedBlogs = [...blogs].sort(
  (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
);

// Featured blogs for homepage (max 3)
export const featuredBlogs = sortedBlogs
  .filter((blog) => blog.meta.featured)
  .slice(0, 3);

// Group blogs by category
export const blogsByCategory = sortedBlogs.reduce((acc, blog) => {
  const category = blog.meta.category || "uncategorized";
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(blog);
  return acc;
}, {} as Record<string, BlogPost[]>);
