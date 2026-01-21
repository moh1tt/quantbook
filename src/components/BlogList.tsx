import { Link } from "react-router-dom";
import { sortedBlogs } from "@/blogs";

const BlogList = () => {
  return (
    <div className="space-y-3">
      {sortedBlogs.map((blog) => (
        <Link
          key={blog.meta.slug}
          to={`/blog/${blog.meta.slug}`}
          className="block group"
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-foreground group-hover:text-foreground/70 transition-colors underline underline-offset-2">
              {blog.meta.title}
            </span>
            <span className="text-muted-foreground text-sm whitespace-nowrap">
              {blog.meta.readTime} · {blog.meta.date}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
