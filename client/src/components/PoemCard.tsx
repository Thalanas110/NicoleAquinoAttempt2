import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import type { Poem } from "@shared/schema";

interface PoemCardProps {
  poem: Poem;
}

export default function PoemCard({ poem }: PoemCardProps) {
  return (
    <Link href={`/poem/${poem.id}`}>
      <Card className="poem-card bg-white dark:bg-gray-800 shadow-md overflow-hidden hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1">
        <div 
          className="h-40 flex items-end p-4" 
          style={{ 
            background: `linear-gradient(to right, ${poem.gradientFrom}, ${poem.gradientTo})` 
          }}
        >
          <h3 className="text-white font-medium text-xl">{poem.title}</h3>
        </div>
        <CardContent className="p-4">
          <p className="text-text-medium dark:text-gray-300 text-sm mb-2">{poem.author}</p>
          <p className="text-text-dark dark:text-gray-200 line-clamp-3">
            {poem.content.split('\n')[0]}...
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
