// This file simply runs the Vite dev server directly
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to client directory
const clientDir = join(__dirname, '../client');

console.log('Starting the Vite development server...');
console.log('Client directory:', clientDir);

// Start the Vite development server
const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  cwd: clientDir,
  stdio: 'inherit',
  shell: true
});

// Error handling
viteProcess.on('error', (error) => {
  console.error('Failed to start Vite process:', error);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down Vite server...');
  viteProcess.kill();
  process.exit(0);
});

// Keep the process running
process.stdin.resume();