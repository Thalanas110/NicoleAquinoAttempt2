// Simple script to start the Vite development server
// This is used by the Replit workflow

import { exec } from 'child_process';
import path from 'path';

// Start the Vite server
const viteServer = exec('npx vite --host 0.0.0.0 --port 5000', {
  cwd: path.resolve(process.cwd())
});

viteServer.stdout.on('data', (data) => {
  console.log(data);
});

viteServer.stderr.on('data', (data) => {
  console.error(data);
});

viteServer.on('close', (code) => {
  console.log(`Vite server process exited with code ${code}`);
});

// Keep the process running
process.on('SIGINT', () => {
  viteServer.kill();
  process.exit();
});