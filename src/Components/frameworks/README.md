# Frameworks Section

This section displays a grid of framework and tool logos with smooth animations and responsive design.

## Components

### FrameworkCard
- **Purpose**: Individual framework logo card with hover effects
- **Props**: 
  - `framework?: Framework` - Framework data (optional, renders empty card if not provided)
- **Features**:
  - Hover animations with GSAP
  - Clickable links to framework websites
  - Smooth opacity transitions
  - Responsive design

### FrameworksSection Components

#### FrameworksSectionComplete
- Full-featured version with complex responsive grid calculations
- Staggered row layouts with offset animations
- Advanced scroll-triggered animations
- Handles various screen sizes with dynamic padding
- Main component exported as FrameworksSection

## Features

### Responsive Design
- Adapts to different screen sizes
- Dynamic grid calculations
- Mobile-friendly layout

### Animations
- GSAP-powered scroll triggers
- Staggered card appearances
- Smooth hover effects
- Row offset animations for visual interest

### Framework Data
Currently includes 20 popular frameworks and tools:
- Frontend: React, Vue, Angular, Svelte, Solid, Preact, Astro
- Meta-frameworks: Nuxt, Remix, Redwood, Analog, Qwik
- Testing: Vitest, Playwright
- Development: Storybook
- Backend: Laravel, AdonisJS, Hono
- UI Libraries: Marko, Ember

## Usage

```tsx
import FrameworksSectionComplete from '@/Components/frameworks/FrameworksSectionComplete';

function App() {
  return (
    <div>
      <FrameworksSectionComplete />
    </div>
  );
}
```

## Customization

### Adding New Frameworks
1. Add the SVG logo to `./image/` directory
2. Import the logo in the component
3. Add framework data to `frameworksData` array:

```tsx
{
  name: 'Framework Name',
  logo: logoFramework,
  color: '#hexcolor',
  url: 'https://framework.dev/',
}
```

### Styling
- Main styles in `FrameworksSection.css`
- Card styles in `FrameworkCard.css`
- CSS custom properties for theming
- Responsive breakpoints configurable

## Performance Notes
- Uses `useMemo` for expensive calculations
- Throttled resize handlers
- Proper cleanup of GSAP timelines
- Optimized re-renders with React best practices

## Browser Support
- Modern browsers with CSS Grid support
- GSAP animations require JavaScript
- Graceful degradation for older browsers