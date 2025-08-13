# Rob Spectre's Talks 

[![CI/CD Pipeline](https://github.com/RobSpectre/Talks/actions/workflows/ci.yml/badge.svg)](https://github.com/RobSpectre/Talks/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/RobSpectre/Talks/actions/workflows/deploy.yml/badge.svg)](https://github.com/RobSpectre/Talks/actions/workflows/deploy.yml)
[![Vue Version](https://img.shields.io/badge/Vue-3.5.13-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Test Coverage](https://img.shields.io/badge/Coverage-91.16%25-brightgreen.svg)](https://github.com/RobSpectre/Talks)

Rob Spectre's repository of presentation slides available on the web. This Vue.js application powers [talks.robspectre.com](https://talks.robspectre.com), featuring interactive slides with charts, data visualizations, and multimedia content.

## 🚀 Features

- **Interactive Presentations**: Built with Reveal.js for smooth slide transitions and navigation
- **Data Visualizations**: Powered by Apache ECharts for dynamic charts and graphs
- **Responsive Design**: Optimized for all screen sizes from mobile to 4K displays
- **Component Architecture**: Reusable Vue 3 components for consistent slide layouts
- **Comprehensive Testing**: 90+ tests with 91%+ code coverage using Vitest
- **Modern Tooling**: Vite build system, ESLint, Tailwind CSS, and TypeScript support

## 🛠️ Tech Stack

- **Frontend**: Vue 3 (Composition API), Vue Router, Pinia
- **Styling**: Tailwind CSS, SCSS, Radix Vue components
- **Charts**: Apache ECharts 6.0
- **Presentations**: Reveal.js 5.2
- **Testing**: Vitest, Vue Test Utils, jsdom
- **Build**: Vite 6.2, PostCSS, Autoprefixer
- **Code Quality**: ESLint, Prettier, lint-staged

## 📋 Available Presentations

- **Building Your Customer Moat** - Strategies for customer retention and competitive advantage
- **Finding Your Audience in 2024** - Modern audience discovery and engagement techniques  

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 23.3.0+
- npm 10.9.0+

### Installation

```bash
# Clone the repository
git clone https://github.com/RobSpectre/Talks.git
cd Talks

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Open http://localhost:5173 in your browser
```

### Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🧪 Testing

This project maintains high test coverage with comprehensive unit tests for all components.

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Open test UI
npm run test:ui
```

### Test Coverage

- **Components**: 90 tests across 11 test files
- **Coverage**: 91.16% statements, 96.72% branches, 100% functions
- **Framework**: Vitest with Vue Test Utils and jsdom environment

## 🔧 Code Quality

```bash
# Lint JavaScript/Vue files
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

### Pre-commit Hooks

This project uses Yorkie for Git hooks:
- **pre-commit**: Runs ESLint on staged files

## 🚀 Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

```bash
# Build and deploy to GitHub Pages
npm run build
# Files are built to dist/ with CNAME file for custom domain
```

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── base/           # Core slide components
│   ├── charts/         # Chart and visualization components
│   ├── data/           # Data display components
│   └── ui/             # UI library components
├── views/              # Presentations 
├── router/             # Vue Router configuration
├── assets/             # Static assets and styles
└── lib/                # Utility functions

tests/
├── components/         # Component unit tests
└── setup.js           # Test environment setup

public/
├── images/             # Presentation images and media
├── video/              # Video assets
└── data/               # JSON data files for charts
```

## 🔧 Component Architecture

### Base Components
- **Slide**: Core slide layout and styling
- **Title**: Title slides with consistent typography
- **ImageSlide**: Image display with responsive sizing
- **VideoSlide**: Video playback with controls
- **Reveal**: Reveal.js presentation wrapper

### Chart Components  
- **ChartSlide**: Apache ECharts integration with responsive sizing
- **FunnelSlide**: Funnel chart visualization
- **TableSlide**: Data table display

### UI Components
- **Table**, **TableRow**, **TableCell**: Reusable table components
- Radix Vue integration for accessible UI primitives

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Vue 3 Composition API patterns
- Write tests for new components
- Maintain ESLint code standards
- Use semantic commit messages
- Update documentation for significant changes

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏗️ Architecture Notes

For detailed technical documentation, see [CLAUDE.md](CLAUDE.md) which contains:
- Project structure overview
- Component testing strategies  
- Development commands and workflows
- Dependency management notes

## 👨‍💻 Author

**Rob Spectre**
- Website: [talks.robspectre.com](https://talks.robspectre.com)
- GitHub: [@RobSpectre](https://github.com/RobSpectre)
- BlueSky: [@robspectre.bsky.social](https://bsky.app/profile/robspectre.bsky.social)

---

*Lovingly crafted in Brooklyn, New York* 🗽
