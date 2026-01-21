import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import BlogList from "@/components/BlogList";
import { blogsByCategory } from "@/blogs";

// Define the order of categories (edit this array to reorder)
const categoryOrder = ["tech", "fashion", "life"];

const Blogs = () => {
  // Sort categories based on defined order, unknown categories go to the end
  const sortedCategories = Object.keys(blogsByCategory).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  return (
    <div className="min-h-screen bg-background flex justify-center">
      <ThemeToggle />

      <main className="max-w-2xl w-full px-2 py-10 md:py-16">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>back</span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl text-foreground mb-1.5 font-medium">good reads</h1>
          <p className="text-muted-foreground">all my writings, grouped by topic</p>
        </header>

        {/* Blogs grouped by category */}
        <div className="space-y-10">
          {sortedCategories.map((category) => (
            <section key={category}>
              <h2 className="text-proud font-medium mb-4">{category}</h2>
              <BlogList blogs={blogsByCategory[category]} />
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blogs;
