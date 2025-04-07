import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePoemById } from "@/lib/usePoems";
import { Skeleton } from "@/components/ui/skeleton";

export default function PoemDetail() {
  const [match, params] = useRoute<{ id: string }>("/poem/:id");
  const poemId = match ? parseInt(params.id) : undefined;
  
  const { data: poem, isLoading, error } = usePoemById(poemId);

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto animate-slide-up">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center text-primary hover:text-primary/80 transition-colors focus:outline-none group"
          disabled
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Collection
        </Button>

        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <CardHeader className="mb-4 pb-4 border-b border-neutral">
            <Skeleton className="h-10 w-3/4 mb-3" />
            <Skeleton className="h-6 w-1/3" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-5 w-full" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start mt-6 pt-4 border-t border-neutral">
            <Skeleton className="h-5 w-1/2 mb-2" />
            <Skeleton className="h-5 w-1/3" />
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (error || !poem) {
    return (
      <div className="max-w-3xl mx-auto animate-slide-up">
        <Link href="/">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center text-primary hover:text-primary/80 transition-colors focus:outline-none group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Collection
          </Button>
        </Link>

        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
          <div className="text-center py-10">
            <h2 className="text-2xl font-medium text-red-600 mb-4">Error Loading Poem</h2>
            <p className="text-text-medium dark:text-gray-300">
              {error instanceof Error ? error.message : "This poem could not be found or has been removed."}
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-slide-up">
      <Link href="/">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center text-primary hover:text-primary/80 transition-colors focus:outline-none group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </Button>
      </Link>

      <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <CardHeader className="mb-4 pb-4 border-b border-neutral">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-3">{poem.title}</h2>
          <p className="text-text-medium dark:text-gray-300">By {poem.author}</p>
        </CardHeader>
        <CardContent>
          <div className="poem-content text-lg leading-relaxed font-light dark:text-gray-200 whitespace-pre-line">
            {poem.content}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start mt-6 pt-4 border-t border-neutral">
          <p className="text-text-medium dark:text-gray-300 text-sm">From the collection "Operation Nicole Aquino"</p>
          <p className="mt-2 text-text-medium dark:text-gray-300 text-sm">Published: {poem.publishedDate}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
