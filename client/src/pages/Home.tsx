import { useAllPoems } from "../lib/usePoems";
import PoemCard from "../components/PoemCard";
import { Skeleton } from "../components/ui/skeleton";

export default function Home() {
  const { data: poems, isLoading, error } = useAllPoems();

  if (isLoading) {
    return (
      <div className="animate-fade-in">
        <div className="content-overlay p-8 rounded-lg mb-10 text-center max-w-4xl mx-auto">
          <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-2" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="poem-card rounded-lg shadow-md overflow-hidden">
              <Skeleton className="h-40 w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="animate-fade-in content-overlay p-10 rounded-lg max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-medium text-accent-red mb-4">Error Loading Poems</h2>
        <p className="text-text-medium mb-4">
          {error instanceof Error ? error.message : "An unexpected error occurred"}
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-soft-green hover:bg-dark-green text-white px-6 py-2 rounded-md transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="content-overlay p-8 rounded-lg mb-10 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-soft-green dark:text-soft-green mb-4">Poetry Collection</h1>
        <p className="text-text-medium dark:text-gray-300 max-w-2xl mx-auto text-lg">
          For my babyy, please select a poem to read. Nothing to overthink, just click and read.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {poems?.map((poem) => (
          <PoemCard key={poem.id} poem={poem} />
        ))}
      </div>
    </div>
  );
}
