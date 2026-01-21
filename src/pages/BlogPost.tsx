import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { sortedBlogs } from "@/blogs";
import ThemeToggle from "@/components/ThemeToggle";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = sortedBlogs.find((b) => b.meta.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex justify-center">
        <ThemeToggle />
        <main className="max-w-2xl w-full px-2 py-10 md:py-16">
          <p className="text-foreground">Blog post not found.</p>
          <Link to="/" className="text-proud underline underline-offset-2 mt-4 inline-block">
            ← back home
          </Link>
        </main>
      </div>
    );
  }

  const { Component, meta } = blog;

  return (
    <div className="min-h-screen bg-background flex justify-center">
      <ThemeToggle />
      <main className="max-w-2xl w-full px-2 py-10 md:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>back</span>
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl text-foreground font-medium mb-2">
            {meta.title}
          </h1>
          <p className="text-muted-foreground">
            {meta.date} · {meta.readTime}
          </p>
        </header>

        <article className="prose max-w-none font-mono text-base prose-headings:text-foreground prose-headings:font-medium prose-headings:font-mono prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:text-foreground prose-p:leading-relaxed prose-strong:text-proud prose-a:text-proud prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-proud/80 prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground prose-code:text-proud prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-hr:border-border">
          <Component />
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
