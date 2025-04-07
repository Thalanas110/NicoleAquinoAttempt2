import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import type { Poem } from "@shared/schema";
import { BookOpen } from "lucide-react";

interface PoemCardProps {
  poem: Poem;
}

export default function PoemCard({ poem }: PoemCardProps) {
  // Generate a gradient color based on the poem id for consistency
  const getGradientColors = (id: number) => {
    // Using the id to generate consistent colors
    const baseHue = (id * 25) % 360;
    const startColor = `hsl(${baseHue}, 70%, 85%)`;
    const endColor = `hsl(var(--soft-green))`;
    return `linear-gradient(135deg, ${startColor}, ${endColor})`;
  };

  return (
    <Link href={`/poem/${poem.id}`}>
      <Card className="poem-card rounded-lg shadow-md overflow-hidden cursor-pointer h-full flex flex-col">
        <div 
          className="h-40 flex items-end p-4 relative" 
          style={{ 
            background: getGradientColors(poem.id)
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 className="text-white font-bold text-xl relative z-10 leading-tight">{poem.title}</h3>
        </div>
        <CardContent className="p-4 flex-1 flex flex-col">
          <p className="text-accent-red dark:text-accent-red font-medium text-sm mb-2 flex items-center gap-1">
            <span>{poem.author}</span>
          </p>
          <p className="text-text-dark dark:text-gray-200 line-clamp-3 flex-1">
            {poem.content.split('\n')[0]}...
          </p>
          <div className="mt-3 text-soft-green flex items-center text-sm font-medium">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>Read more</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
