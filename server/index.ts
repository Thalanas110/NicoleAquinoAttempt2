// This is a simple Express server that will serve the static client files
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Path to the client directory
const clientDir = join(__dirname, '../client');

// Serve the client files from the client directory
app.use(express.static(clientDir));

// For any route, serve index.html (client-side routing)
app.get('*', (req, res) => {
  res.sendFile(join(clientDir, 'index.html'));
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});