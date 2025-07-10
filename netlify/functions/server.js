const express = require('express');
const serverless = require('serverless-http');

// Create Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic API routes for Netlify Functions
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Netlify function is working' });
});

// Add your API routes here
// Example:
// app.get('/api/users', (req, res) => {
//   res.json({ users: [] });
// });

// Handle 404 for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Export the serverless handler
module.exports.handler = serverless(app);
