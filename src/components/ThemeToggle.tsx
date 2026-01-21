import { Sun } from "lucide-react";

const ThemeToggle = () => {
  return (
    <button
      className="fixed top-6 right-6 p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="w-4 h-4" />
    </button>
  );
};

export default ThemeToggle;
