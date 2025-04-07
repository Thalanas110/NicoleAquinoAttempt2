import { useQuery } from "@tanstack/react-query";
import type { Poem } from "@shared/schema";

export function useAllPoems() {
  return useQuery<Poem[]>({
    queryKey: ['/api/poems'],
  });
}

export function usePoemById(id: number | undefined) {
  return useQuery<Poem>({
    queryKey: ['/api/poems', id],
    enabled: !!id,
  });
}
