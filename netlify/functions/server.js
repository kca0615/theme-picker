const serverless = require('serverless-http');

// Import your Express app
// Note: This assumes your built server is available at this path
// You may need to adjust the path based on your build output
let app;

try {
  // Try to import the built server
  app = require('../../dist/index.js');
} catch (error) {
  console.error('Failed to import server:', error);
  
  // Fallback: create a simple Express app
  const express = require('express');
  app = express();
  
  app.get('*', (req, res) => {
    res.status(500).json({ 
      error: 'Server not properly built for Netlify deployment',
      message: 'Please ensure the build process completes successfully'
    });
  });
}

// Export the serverless handler
module.exports.handler = serverless(app);
