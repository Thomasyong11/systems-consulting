# Systems Consulting - Cloud Services Platform

## Overview

This is a modern React-based business website for Systems Consulting, a Canadian IT consulting company specializing in Microsoft 365, SharePoint Online, and cloud automation solutions. The platform serves as a marketing and lead generation website targeting small-to-mid-sized businesses in the Greater Toronto Area (GTA) seeking cloud migration, tenant optimization, and workflow automation services.

The application features a professional design with dark/light mode toggle, fully responsive layout, and a contact form system for capturing potential client inquiries. Built with modern web technologies, it provides an engaging user experience while maintaining professional credibility for IT consulting services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing without the complexity of React Router
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Styling**: Tailwind CSS with custom design system implementing brand colors (blue primary, orange secondary, green accent)
- **Component Library**: Radix UI primitives with custom shadcn/ui components for accessibility and consistency
- **Theme System**: Custom theme provider supporting light/dark mode with persistent localStorage

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for type safety across the full stack
- **API Design**: REST endpoints for contact form submissions and data retrieval
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Development**: Hot module reloading with Vite integration for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL as the primary database with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database queries and schema management
- **Schema Validation**: Zod for runtime type checking and API request validation
- **Development Storage**: In-memory storage implementation for development and testing
- **Migrations**: Drizzle Kit for database schema migrations and version control

### Authentication and Authorization
- **Current State**: Basic session-based architecture prepared for future authentication needs
- **User Management**: Database schema includes user table with username/password fields
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Future Extensibility**: Architecture supports adding authentication middleware and protected routes

### Page Structure and Content
- **Homepage**: Hero section with primary CTAs, service highlights, and trust indicators
- **About Page**: Company information, mission/vision, and team credibility
- **Services Page**: Detailed service offerings including Infrastructure Assessment and Modernization
- **Blog Page**: Content marketing with cloud migration and business technology insights
- **Contact Page**: Lead capture form with service-specific inquiries and company information
- **Responsive Design**: Mobile-first approach with responsive breakpoints and touch-friendly interactions

### Performance and Development
- **Code Splitting**: Vite handles automatic code splitting for optimal loading
- **Development Tools**: ESBuild for fast TypeScript compilation and bundling
- **Error Handling**: Custom error boundaries and runtime error overlays for development
- **Build Optimization**: Separate client and server builds with external package handling

## External Dependencies

### Database and Hosting
- **Neon Database**: Serverless PostgreSQL hosting for production database needs
- **Environment Configuration**: DATABASE_URL environment variable for database connectivity

### UI and Design System
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives including dialogs, forms, navigation, and interactive components
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens matching brand guidelines
- **shadcn/ui**: Pre-built component library built on Radix UI with consistent styling patterns
- **Lucide React**: Modern icon library for consistent iconography throughout the application

### Development and Build Tools
- **Vite**: Fast build tool with HMR, optimized for React and TypeScript development
- **TypeScript**: Static typing for improved code quality and developer experience
- **ESBuild**: Fast bundler for production server builds
- **Replit Integration**: Development environment integration with cartographer and runtime error handling

### Form and Data Management
- **React Hook Form**: Performant form handling with minimal re-renders
- **Hookform Resolvers**: Integration layer for Zod validation with React Hook Form
- **TanStack Query**: Server state management with caching, background updates, and error handling
- **Date-fns**: Date manipulation library for handling timestamps and formatting

### Fonts and Assets
- **Google Fonts**: Inter font family for clean, professional typography
- **Custom CSS Variables**: Brand color system with light/dark mode support
- **Responsive Images**: Optimized asset handling through Vite's asset pipeline