import { useQuery } from "@tanstack/react-query";
import type { Poem } from "@shared/schema";

export function useAllPoems() {
  return useQuery<Poem[]>({
    queryKey: ['/api/poems'],
  });
}

export function usePoemById(id: number | undefined) {
  return useQuery<Poem>({
    queryKey: [`/api/poems/${id}`],
    enabled: !!id,
    queryFn: async ({ queryKey }) => {
      const url = queryKey[0] as string;
      const response = await fetch(url, {
        credentials: "include",
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch poem');
      }
      
      return response.json();
    }
  });
}
