import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  proud?: boolean;
  className?: string;
}

const ExternalLink = ({ href, children, proud = false, className }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "underline underline-offset-2 transition-colors",
        proud ? "text-proud hover:text-proud/80" : "text-link hover:text-link-hover",
        className
      )}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
