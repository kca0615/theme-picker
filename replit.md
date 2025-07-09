# Replit.md

## Overview

This is a full-stack web application built with React, Express, and TypeScript. It features a modern dashboard interface with a responsive design system using shadcn/ui components and Tailwind CSS. The application follows a monorepo structure with shared types and schemas between frontend and backend.

## User Preferences

Preferred communication style: Simple, everyday language.
Current Theme: Driftguard - Professional teal/navy with coral accents inspired by kanban and network interfaces.

## Recent Changes

- 2025-07-09: Created new "driftguard" theme based on attached screenshots of kanban board and network visualization interfaces
- Applied driftguard theme with professional teal primary colors, coral accent buttons, and deep navy backgrounds
- Updated chart placeholder gradient to use driftguard color palette

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Comprehensive set of Radix UI primitives wrapped in custom components
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage
- **Development**: Hot reload with Vite integration

### Data Storage
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Centralized schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Fallback**: In-memory storage implementation for development

## Key Components

### Frontend Structure
- `client/src/pages/` - Application pages (Dashboard, NotFound)
- `client/src/components/` - Reusable UI components
- `client/src/components/ui/` - shadcn/ui component library
- `client/src/hooks/` - Custom React hooks (useSidebar, useIsMobile, useToast) following camelCase naming
- `client/src/lib/` - Utilities and query client configuration

### Backend Structure
- `server/index.ts` - Express server setup and middleware
- `server/routes.ts` - API route definitions
- `server/storage.ts` - Database abstraction layer with fallback implementations
- `server/vite.ts` - Vite integration for development

### Shared Components
- `shared/schema.ts` - Database schema and validation using Drizzle and Zod
- Type definitions shared between frontend and backend

## Data Flow

### Client-Server Communication
1. Frontend makes API requests through TanStack Query
2. Custom `apiRequest` function handles HTTP calls with error handling
3. Server processes requests through Express middleware
4. Database operations handled through storage interface
5. Responses formatted and returned to client

### State Management
- Server state managed by TanStack Query with caching
- UI state managed through React hooks (sidebar, mobile detection)
- Form state handled by React Hook Form with Zod validation

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Routing**: Wouter for lightweight client-side routing
- **HTTP Client**: Native fetch API with custom wrapper
- **State Management**: TanStack Query for server state

### UI and Styling
- **Component Library**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React for consistent iconography
- **Theming**: CSS variables for light/dark mode support

### Backend Dependencies
- **Web Framework**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL driver
- **Session Storage**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full type safety across the stack
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Development**: Hot reload and error overlays

## Deployment Strategy

### Build Process
1. Frontend builds to `dist/public` directory using Vite
2. Backend builds to `dist/` directory using esbuild
3. Production server serves static files and API routes

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Production and development modes with different optimizations
- Session configuration for PostgreSQL storage

### Database Setup
- Drizzle migrations stored in `./migrations` directory
- Schema definitions in `./shared/schema.ts`
- Database push command for development: `npm run db:push`

### Development vs Production
- Development: Vite dev server with hot reload
- Production: Static file serving with Express
- Environment-specific configurations for optimal performance

The architecture emphasizes type safety, developer experience, and maintainability while providing a solid foundation for a modern web application with real-time features and responsive design.