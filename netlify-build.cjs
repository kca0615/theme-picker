#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Netlify build process...');

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  execSync('npm ci --legacy-peer-deps', { stdio: 'inherit' });
} else {
  console.log('✅ Dependencies already installed');
}

// Check if vite is available
const vitePath = path.join('node_modules', '.bin', 'vite');
if (!fs.existsSync(vitePath)) {
  console.log('⚠️  Vite not found, installing...');
  execSync('npm install vite@^5.4.10 --save-dev --legacy-peer-deps', { stdio: 'inherit' });
}

console.log('🏗️  Building with Vite...');
try {
  execSync('npm run build:netlify', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
