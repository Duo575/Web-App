# Portfolio Website Information

## Summary

Modern, responsive portfolio website built with React, TypeScript, and cutting-edge web technologies. Features a night sky theme with interactive 3D elements, smooth animations, and a contact form integration.

## Structure

- **public/**: Static assets including images, logos, and 3D models
- **src/**: Source code for the application
  - **Components/**: UI components organized by functionality
  - **assets/**: Images and icons used in the application
  - **hooks/**: Custom React hooks
  - **lib/**: Utility libraries
  - **styles/**: CSS styles including parallax and scrollbar customizations
  - **types/**: TypeScript type definitions
  - **utils/**: Utility functions
- **docs/**: Project documentation

## Language & Runtime

**Language**: TypeScript/JavaScript
**Version**: TypeScript ~5.8.3
**Build System**: Vite 7.0.0
**Package Manager**: npm

## Dependencies

**Main Dependencies**:

- React 18.3.1
- React DOM 18.3.1
- Framer Motion 10.16.16
- Three.js 0.158.0
- React Three Fiber 8.15.12
- Radix UI Components (various)
- EmailJS Browser 3.11.0
- TailwindCSS 3.4.0
- GSAP 3.13.0

**Development Dependencies**:

- TypeScript 5.8.3
- Vite 7.0.0
- ESLint 9.29.0
- PostCSS 8.4.32
- Autoprefixer 10.4.16
- @vitejs/plugin-react 4.5.2

## Build & Installation

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Main Entry Points

**Application Entry**: src/main.tsx
**Root Component**: src/App.tsx
**Component Structure**:

- UI components in src/Components/UI/
- Section components in src/Components/Sections/
- Framework components in src/Components/frameworks/
- About section components in src/Components/About/

## Configuration

**Vite Config**: Configured with React plugin, path aliases, and build optimizations
**TypeScript Config**: Split into app and node configurations with path aliases
**TailwindCSS**: Custom theme with night sky color palette (dark blue, purple, white, black)
**Environment Variables**: EmailJS integration for contact form functionality

## Features

- Responsive design for all device sizes
- Interactive 3D elements using Three.js
- Smooth animations with Framer Motion
- Glass morphism UI effects
- EmailJS integration for contact form
- Custom parallax scrolling effects
- Night sky theme with custom color palette
