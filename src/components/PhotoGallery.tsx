import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-foreground text-lg hover:text-muted-foreground transition-colors"
      >
        pictures of me
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      
      {isOpen && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-square bg-secondary rounded-sm flex items-center justify-center text-muted-foreground text-sm">
            photo 1
          </div>
          <div className="aspect-square bg-secondary rounded-sm flex items-center justify-center text-muted-foreground text-sm">
            photo 2
          </div>
          <div className="aspect-square bg-secondary rounded-sm flex items-center justify-center text-muted-foreground text-sm">
            photo 3
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
