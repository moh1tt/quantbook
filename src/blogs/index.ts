// Blog registry - import all MDX files here
import * as momentumsignal from "./momentumsignal.mdx";

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
  Component: React.ComponentType;
}

// Add new blog imports here
const blogModules = [momentumsignal];

export const blogs: BlogPost[] = blogModules.map((mod) => ({
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
