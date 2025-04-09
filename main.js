// Simple script to run the Vite development server
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Starting Vite development server...');

const childProcess = spawn('npx', ['vite', 'dev', '--host', '0.0.0.0', '--port', '5000'], {
  cwd: join(__dirname, 'client'),
  stdio: 'inherit',
  shell: true
});

childProcess.on('error', (err) => {
  console.error('Failed to start Vite server:', err);
  process.exit(1);
});

childProcess.on('exit', (code) => {
  console.log(`Vite server exited with code ${code}`);
  process.exit(code);
});