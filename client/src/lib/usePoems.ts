import { useQuery } from "@tanstack/react-query";
import type { Poem } from "@shared/schema";
import { poems } from "./poemData";

export function useAllPoems() {
  return useQuery<Poem[]>({
    queryKey: ['/api/poems'],
    queryFn: () => Promise.resolve(poems),
  });
}

export function usePoemById(id: number | undefined) {
  return useQuery<Poem>({
    queryKey: [`/api/poems/${id}`],
    enabled: !!id,
    queryFn: () => {
      const poem = poems.find(p => p.id === id);
      if (!poem) {
        throw new Error(`Poem with id ${id} not found`);
      }
      return Promise.resolve(poem);
    }
  });
}
