// Simple script to start the Vite dev server directly
import { createServer } from 'vite';

async function startVite() {
  try {
    const server = await createServer({
      server: {
        port: 5000,
        open: true,
      },
    });
    
    await server.listen();
    console.log('Vite server is running at http://localhost:5000');
  } catch (error) {
    console.error('Error starting Vite server:', error);
    process.exit(1);
  }
}

startVite();