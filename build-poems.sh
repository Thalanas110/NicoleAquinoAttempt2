#!/bin/bash

# Navigate to the client directory
cd client

# Build the application
echo "Building the application..."
npx vite build

echo "Build complete! The production files are in the client/dist directory."