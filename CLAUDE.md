# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue.js presentation platform built with Vite that creates interactive slide presentations using Reveal.js. The application serves multiple presentation decks on different topics, with both public presentations and private analysis reports.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Lint code
npm run lint

# Lint and fix issues
npm run lint:fix

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Core Technologies
- **Vue 3** with Composition API and Options API
- **Vite** as build tool and dev server
- **Reveal.js** for presentation framework
- **Vue Router** for navigation between presentations
- **Pinia** for state management with persistence
- **Tailwind CSS** + custom SCSS for styling
- **Pug** templating support in Vue components

### Project Structure

- `src/views/` - Individual presentation components (each is a complete deck)
- `src/components/base/` - Core presentation components (Reveal wrapper, Slide, VideoSlide, etc.)
- `src/components/charts/` - Chart-specific slide components using Billboard.js and ECharts
- `src/components/data/` - Data visualization components
- `src/components/ui/` - Reusable UI components (auto-generated, excluded from linting)
- `src/router/index.js` - Route definitions with presentation metadata
- `public/` - Static assets organized by presentation topic
- `src/assets/data/` - JSON data files for charts and visualizations

### Presentation System

Each presentation is a Vue component that wraps slides in a `<Reveal>` component. The Reveal component:
- Initializes Reveal.js with custom configuration
- Handles keyboard shortcuts and accessibility features  
- Manages slide transitions and navigation
- Exposes the deck instance globally as `window.deck`

### Route Structure

Routes are defined with metadata including:
- `name` - Display title
- `description` - Public presentation description
- `img` - Preview image path
- `private` - Boolean flag to hide from public listing

### Styling System

- Custom Reveal.js theme in `src/assets/styles/reveal_theme.scss`
- Tailwind CSS with extended configuration for presentations
- Support for high-resolution displays (HD, 4K, 8K breakpoints)
- Custom color palette and text shadow utilities

### Data Integration

JSON data files in `src/assets/data/` and `public/*/data/` are loaded dynamically into chart components. The chart components use Billboard.js and ECharts for rendering visualizations.

## Key Files

- `src/components/base/Reveal.vue` - Main presentation wrapper
- `src/router/index.js` - Route definitions and presentation metadata
- `vite.config.mjs` - Vite configuration with Pug plugin support
- `tailwind.config.js` - Extended Tailwind configuration
- `src/assets/styles/reveal_theme.scss` - Custom Reveal.js styling