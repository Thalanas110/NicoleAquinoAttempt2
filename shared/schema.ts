import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const poems = pgTable("poems", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  content: text("content").notNull(),
  gradientFrom: text("gradient_from").notNull(),
  gradientTo: text("gradient_to").notNull(),
  publishedDate: text("published_date").notNull(),
});

export const insertPoemSchema = createInsertSchema(poems).omit({
  id: true,
});

export type InsertPoem = z.infer<typeof insertPoemSchema>;
export type Poem = typeof poems.$inferSelect;
