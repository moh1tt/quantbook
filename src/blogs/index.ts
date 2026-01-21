// Blog registry - import all MDX files here
import * as examplePost from "./example-post.mdx";

export interface BlogMeta {
  title: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface BlogPost {
  meta: BlogMeta;
  Component: React.ComponentType;
}

// Add new blog imports here
const blogModules = [examplePost];

export const blogs: BlogPost[] = blogModules.map((mod) => ({
  meta: mod.meta,
  Component: mod.default,
}));

// Sort by date, newest first
export const sortedBlogs = [...blogs].sort(
  (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
);
