#!/bin/bash

# Navigate to client directory
cd client

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing client dependencies..."
  npm install
fi

# Start the development server
echo "Starting frontend development server..."
npm run dev -- --host 0.0.0.0 --port 5000