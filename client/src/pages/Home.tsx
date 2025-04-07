import { useAllPoems } from "@/lib/usePoems";
import PoemCard from "@/components/PoemCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { data: poems, isLoading, error } = useAllPoems();

  if (isLoading) {
    return (
      <div className="animate-fade-in">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-text-dark dark:text-white mb-2">Poetry Collection</h2>
          <p className="text-text-medium dark:text-gray-300 max-w-2xl mx-auto">A curated selection of poems for Nicole Aquino. Select a poem to begin reading.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
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
      <div className="text-center py-10">
        <h2 className="text-2xl font-medium text-red-600 mb-4">Error Loading Poems</h2>
        <p className="text-text-medium">
          {error instanceof Error ? error.message : "An unexpected error occurred"}
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-text-dark dark:text-white mb-2">Poetry Collection</h2>
        <p className="text-text-medium dark:text-gray-300 max-w-2xl mx-auto">A curated selection of poems for Nicole Aquino. Select a poem to begin reading.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {poems?.map((poem) => (
          <PoemCard key={poem.id} poem={poem} />
        ))}
      </div>
    </div>
  );
}
