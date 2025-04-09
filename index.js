// Simple frontend server for Replit
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Build the frontend first
console.log('Building React frontend...');
exec('cd client && npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error.message}`);
    return;
  }
  
  console.log('Frontend built successfully, starting server...');
  
  // Create a simple HTTP server
  const server = http.createServer((req, res) => {
    let filePath = req.url;
    
    // Default to index.html for the root path
    if (filePath === '/') {
      filePath = '/index.html';
    }
    
    // Serve files from the dist directory
    filePath = path.join(__dirname, 'dist/public', filePath);
    
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        // Return 404 if file not found
        res.writeHead(404);
        res.end('File not found');
        return;
      }
      
      // Get the file's MIME type
      const extname = path.extname(filePath);
      let contentType = 'text/html';
      
      switch (extname) {
        case '.js':
          contentType = 'text/javascript';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.json':
          contentType = 'application/json';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.jpg':
          contentType = 'image/jpg';
          break;
        case '.svg':
          contentType = 'image/svg+xml';
          break;
      }
      
      // Read and serve the file
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        }
      });
    });
  });
  
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});