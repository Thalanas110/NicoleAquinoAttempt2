// Simple TypeScript interface for poems data
export interface Poem {
  id: number;
  title: string;
  author: string;
  content: string;
  gradientFrom: string;
  gradientTo: string;
  publishedDate: string;
}

// Type without id for creating new poems
export interface InsertPoem {
  title: string;
  author: string;
  content: string;
  gradientFrom: string;
  gradientTo: string;
  publishedDate: string;
}
