# Deployment Guide

This project is configured for deployment on both Vercel and Netlify platforms.

## Project Structure

- **Frontend**: React + Vite (builds to `dist/public`)
- **Backend**: Express.js server (builds to `dist/index.js`)
- **Database**: PostgreSQL with Drizzle ORM

## Environment Variables

Make sure to set these environment variables in your deployment platform:

```
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

## Vercel Deployment

### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration from `vercel.json`
3. Set your environment variables in the Vercel dashboard
4. Deploy!

### Manual Deployment
```bash
npm install -g vercel
vercel --prod
```

### Configuration
The `vercel.json` file is already configured to:
- Build both frontend and backend
- Route API calls to the Express server
- Serve static files from the frontend build

## Netlify Deployment

### Automatic Deployment
1. Connect your GitHub repository to Netlify
2. Netlify will use the configuration from `netlify.toml`
3. Set your environment variables in the Netlify dashboard
4. Deploy!

### Manual Deployment
```bash
npm install -g netlify-cli
npm run build:netlify
netlify deploy --prod --dir=dist/public
```

### Configuration
The `netlify.toml` file is configured to:
- Build the project using `npm run build`
- Serve static files from `dist/public`
- Route API calls to Netlify Functions
- Handle client-side routing with redirects

## Database Setup

### For Production
1. Set up a PostgreSQL database (recommended: Neon, Supabase, or Railway)
2. Get your connection string
3. Set the `DATABASE_URL` environment variable
4. Run migrations: `npm run db:push`

### Environment Variables Setup

#### Vercel
1. Go to your project dashboard
2. Navigate to Settings > Environment Variables
3. Add `DATABASE_URL` with your PostgreSQL connection string

#### Netlify
1. Go to your site dashboard
2. Navigate to Site settings > Environment variables
3. Add `DATABASE_URL` with your PostgreSQL connection string

## Build Commands

- **Development**: `npm run dev`
- **Production Build**: `npm run build`
- **Vercel Build**: `npm run build:vercel`
- **Netlify Build**: `npm run build:netlify`

## Troubleshooting

### Common Issues

1. **Database Connection**: Ensure your `DATABASE_URL` is correctly set
2. **Build Failures**: Check that all dependencies are properly installed
3. **API Routes**: Verify that API routes are properly configured in deployment configs

### Vercel Specific
- Functions timeout: Increase timeout in `vercel.json` if needed
- Memory issues: Adjust memory allocation in function configuration

### Netlify Specific
- Function size limits: Netlify has a 50MB limit for functions
- Cold starts: First request might be slower due to function initialization

## Theme Picker Feature

The application includes a theme picker with the following themes:
- **Light**: Clean light theme with neutral colors
- **Driftguard Dark**: Dark theme with blue accents
- **Driftguard Ocean**: Dark ocean theme with coral accents
- **Driftguard Pro**: Professional teal/navy with coral accents

Theme preferences are automatically saved to localStorage and persist across sessions.
