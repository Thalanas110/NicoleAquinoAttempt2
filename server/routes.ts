import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the vanilla version at /vanilla
  app.use("/vanilla", express.static(path.resolve(process.cwd(), "vanilla")));
  
  // Serve the background image for the vanilla version
  app.use("/attached_assets", express.static(path.resolve(process.cwd(), "attached_assets")));
  
  // Redirect root to vanilla version
  app.get("/", (req, res) => {
    res.redirect("/vanilla");
  });

  // API routes
  app.get("/api/poems", async (req, res) => {
    try {
      const poems = await storage.getAllPoems();
      res.json(poems);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch poems", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.get("/api/poems/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid poem ID" });
      }

      const poem = await storage.getPoemById(id);
      if (!poem) {
        return res.status(404).json({ message: "Poem not found" });
      }

      res.json(poem);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch poem", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
