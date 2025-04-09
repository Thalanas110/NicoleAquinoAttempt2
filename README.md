# Operation Nicole Aquino - Poetry Collection

A beautiful React poetry collection website featuring 12 poems with a carefully designed green-themed interface that matches a background image.

## Features

- 12 carefully crafted poems by "Van Riev"
- Responsive design that works on mobile, tablet, and desktop
- Beautiful background image with matching color scheme
- Light and dark mode toggle
- Poem detail pages with elegant typography
- Frontend-only implementation for easy deployment
- Clean, modern UI with smooth animations

## Running the Application

### Development Mode

To run the application in development mode:

```bash
# Method 1: Using the script
./run-poems.sh

# Method 2: Directly with npm
cd client
npx vite --host 0.0.0.0 --port 5000
```

The development server will start at http://localhost:5000

### Production Build

To create a production build:

```bash
# Method 1: Using the script
./build-poems.sh

# Method 2: Directly with npm
cd client
npm run build
```

The production files will be in the `client/dist` directory.

To serve the production build locally:

```bash
node simple-server.js
```

## Deployment to Vercel

This project is optimized for deployment on Vercel:

1. Push the code to a GitHub repository
2. Connect the repository to Vercel
3. Set the following configuration:
   - Framework Preset: Vite
   - Build Command: `cd client && vite build`
   - Output Directory: `client/dist`
   - Install Command: `npm install`

## Project Structure

- `client/src/` - React application source code
- `client/src/assets/` - Images and static assets
- `client/src/components/` - Reusable UI components
- `client/src/lib/` - Utilities and data
- `client/src/pages/` - Page components for routing
- `run-poems.sh` - Script to run the development server
- `build-poems.sh` - Script to build for production
- `simple-server.js` - Simple server for production build

## Technologies Used

- React
- Vite
- TailwindCSS
- React Query
- Wouter (routing)
- Lucide React (icons)