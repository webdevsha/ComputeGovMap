# Interactive Compute Governance Map

## Overview

This is an interactive data visualization application that maps the global AI compute landscape, highlighting the divide between "Compute Rich" nations and emerging "Compute South" regions. The application displays governance progress and gaps in AI infrastructure across different countries and regions, providing insights into global AI governance challenges.

The map serves as an educational tool for understanding geopolitical AI dynamics, featuring detailed country profiles with governance scores, progress indicators, and policy gaps. Users can explore different compute categories, filter by governance maturity, and export data for further analysis.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React + TypeScript**: Modern component-based frontend with strict typing
- **Vite**: Fast build tool and development server with hot module replacement
- **Tailwind CSS**: Utility-first styling with a custom design system based on shadcn/ui components
- **Leaflet.js**: Interactive mapping library for rendering the world map and geographical overlays
- **TanStack Query**: Client-side state management for data fetching and caching
- **Wouter**: Lightweight client-side routing solution

### Component Structure
- **Modular Design**: Clean separation between map functionality, UI controls, and data visualization
- **shadcn/ui Components**: Comprehensive UI component library providing buttons, cards, dialogs, forms, and navigation elements
- **Custom Map Components**: Specialized components for map interactions, tooltips, layer controls, and data filtering
- **Responsive Layout**: Mobile-first design with adaptive layouts for different screen sizes

### Data Management
- **Static Data**: Country governance data and GeoJSON regional overlays stored in TypeScript modules
- **Type Safety**: Comprehensive TypeScript interfaces for CountryData, RegionData, and ComputeType definitions
- **Real-time Filtering**: Client-side filtering by governance score ranges and compute categories
- **Export Functionality**: Support for CSV, JSON, and PDF data export formats

### Styling System
- **Dark Theme**: Professional color palette with deep navy backgrounds and accent colors
- **Custom CSS Variables**: Consistent spacing, typography, and color management through Tailwind configuration
- **Design Guidelines**: Reference-based approach inspired by data visualization platforms like Observable and Mapbox
- **Professional Typography**: Inter font family for clean, readable data visualization

### State Management
- **Local State**: React hooks for component-level state (filters, selections, UI interactions)
- **Map State**: Leaflet map instance management with country selection and layer visibility
- **Query State**: TanStack Query for potential future API integration and data synchronization

### Build and Development
- **ESM Modules**: Modern JavaScript module system throughout the application
- **TypeScript Configuration**: Strict type checking with path aliases for clean imports
- **Development Tools**: Vite plugin ecosystem including runtime error overlays and development banners
- **Production Build**: Optimized bundling with code splitting and asset optimization

## External Dependencies

### Core Libraries
- **React 18**: Component framework with concurrent features and hooks
- **TypeScript**: Static type checking and enhanced developer experience
- **Vite**: Build tool providing fast development server and optimized production builds
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens

### UI and Visualization
- **Leaflet.js**: Open-source mapping library for interactive geographical visualizations
- **Radix UI**: Accessible, unstyled UI primitives (dialogs, dropdowns, sliders, tooltips)
- **shadcn/ui**: Pre-built component library built on Radix UI with Tailwind styling
- **Lucide React**: Modern icon library for consistent visual elements

### Data and State
- **TanStack Query**: Powerful data synchronization and caching library
- **date-fns**: Modern date utility library for temporal data handling
- **clsx + tailwind-merge**: Conditional CSS class management utilities

### Backend Foundation
- **Express.js**: Web application framework ready for API endpoints
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database for production deployment

### Development Tools
- **PostCSS**: CSS processing with Tailwind integration
- **ESBuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution engine for development workflows