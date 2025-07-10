#!/bin/bash
echo "Starting Netlify build..."
echo "Installing dependencies..."
npm ci
echo "Building frontend with Vite..."
npx vite build
echo "Build complete!"
