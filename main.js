// Frontend-only startup script
const { exec } = require('child_process');

// Start the Vite development server directly
console.log('Starting poetry collection frontend...');
exec('npx vite --port 5000 --host 0.0.0.0', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});