#!/bin/bash
echo "Starting Netlify build..."
echo "Installing dependencies..."
npm ci
echo "Building frontend with Vite..."
./node_modules/.bin/vite build
echo "Build complete!"
