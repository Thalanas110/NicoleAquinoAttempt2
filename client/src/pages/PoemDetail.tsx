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
      <div className="max-w-3xl mx-auto px-4 py-8 animate-slide-up">
        <Button 
          variant="default" 
          className="mb-6 flex items-center bg-soft-green/70 text-white shadow-md transition-all focus:outline-none opacity-70 cursor-not-allowed"
          disabled
          size="lg"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Collection
        </Button>

        <Card className="content-overlay rounded-xl shadow-lg">
          <CardHeader className="mb-4 pb-4 border-b border-light-beige">
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
          <CardFooter className="flex flex-col items-start mt-6 pt-4 border-t border-light-beige">
            <Skeleton className="h-5 w-1/2 mb-2" />
            <Skeleton className="h-5 w-1/3" />
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (error || !poem) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 animate-slide-up">
        <Link href="/">
          <Button 
            variant="default" 
            className="mb-6 flex items-center bg-soft-green hover:bg-dark-green text-white shadow-md hover:shadow-lg transition-all focus:outline-none group"
            size="lg"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Collection
          </Button>
        </Link>

        <Card className="content-overlay rounded-xl shadow-lg p-6 md:p-8">
          <div className="text-center py-10">
            <h2 className="text-2xl font-medium text-accent-red mb-4">Error Loading Poem</h2>
            <p className="text-text-medium dark:text-gray-300 mb-6">
              {error instanceof Error ? error.message : "This poem could not be found or has been removed."}
            </p>
            <Link href="/">
              <Button 
                variant="default"
                size="lg" 
                className="bg-soft-green hover:bg-dark-green text-white shadow-md hover:shadow-lg transition-all"
              >
                Return to Collection
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 animate-slide-up">
      <Link href="/">
        <Button 
          variant="default" 
          className="mb-6 flex items-center bg-soft-green hover:bg-dark-green text-white shadow-md hover:shadow-lg transition-all focus:outline-none group"
          size="lg"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </Button>
      </Link>

      <Card className="content-overlay rounded-xl shadow-lg">
        <CardHeader className="mb-4 pb-4 border-b border-light-beige">
          <h2 className="text-3xl md:text-4xl font-semibold text-soft-green mb-3">{poem?.title || 'Untitled'}</h2>
          <p className="text-accent-red font-medium">By {poem?.author || 'Unknown'}</p>
        </CardHeader>
        <CardContent>
          <div className="poem-content text-lg leading-relaxed text-text-dark dark:text-gray-200 whitespace-pre-line">
            {poem?.content ? (
              poem.content.split('\n').map((line, index) => (
                <p key={index} className={line.trim() === '' ? 'my-4' : 'mb-2'}>
                  {line}
                </p>
              ))
            ) : (
              <p>No content available</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start mt-6 pt-4 border-t border-light-beige">
          <p className="text-text-medium dark:text-gray-300 text-sm">From the collection "Operation Nicole Aquino"</p>
          <p className="mt-2 text-soft-green dark:text-soft-green text-sm font-medium">
            Published: {poem?.publishedDate || 'Unknown date'}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
