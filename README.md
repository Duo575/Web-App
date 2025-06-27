# 🌌 Portfolio Website

> **Modern, responsive portfolio website built with React, TypeScript, and cutting-edge web technologies**

## 🚀 **Live Demo**

🔗 [Visit Portfolio](http://localhost:5173/) _(Development)_

## ✨ **Features**

### 🎨 **Design & User Experience**

- **Night Sky Theme** - Black, dark blue, purple color palette
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Framer Motion powered transitions
- **Interactive 3D Elements** - Three.js globe and floating animations
- **Glass Morphism** - Modern UI effects and hover states

### 🛠️ **Technology Stack**

- **Frontend**: React 19 + TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **Forms**: EmailJS integration
- **Build Tool**: Vite
- **Fonts**: Inter + Orbitron (Google Fonts)

### 📱 **Sections**

- **Hero** - Value proposition with call-to-action
- **Tech Stack** - Interactive technology showcase
- **Portfolio** - Project gallery with live demos
- **About Us** - Team introduction and skills
- **Contact** - Interactive form with validation

## 🏃‍♂️ **Quick Start**

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio-website

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### 🔧 **Development Commands**

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
```

## 📂 **Project Structure**

```
portfolio-website/
├── public/
│   └── assets/
│       ├── images/     # Hero, portfolio, team photos
│       ├── logos/      # Technology logos
│       ├── models/     # 3D models (.glb files)
│       └── icons/      # Favicons
├── src/
│   ├── Components/
│   │   ├── UI/         # Reusable components (Button, Card, Modal)
│   │   ├── Layout/     # Header, Footer, Navigation
│   │   └── Sections/   # Hero, Portfolio, Contact sections
│   ├── custom-hooks/   # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── constants/      # Static data and configurations
│   ├── types/          # TypeScript type definitions
│   └── styles/         # Global styles and theme
├── docs/               # Project documentation
└── config files...
```

## 🎨 **Theme Configuration**

### Colors

```css
primary: #0A192F    /* Dark blue - main brand */
secondary: #7F00FF  /* Purple - innovation */
accent: #FFFFFF     /* White - text, contrast */
background: #000000 /* Black - page background */
```

### Typography

- **Body Text**: Inter (sans-serif)
- **Headings**: Orbitron (monospace)

### Breakpoints

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+

## 🔌 **Key Dependencies**

| Package              | Purpose       | Version   |
| -------------------- | ------------- | --------- |
| `react`              | UI Library    | ^19.1.0   |
| `typescript`         | Type Safety   | ~5.8.3    |
| `tailwindcss`        | Styling       | ^3.4.0    |
| `framer-motion`      | Animations    | ^10.16.16 |
| `@react-three/fiber` | 3D Graphics   | ^8.15.12  |
| `@emailjs/browser`   | Contact Forms | ^3.11.0   |
| `vite`               | Build Tool    | ^7.0.0    |

## 📋 **Development Roadmap**

### Phase 1: Foundation ✅

- [x] Project setup with Vite + React + TypeScript
- [x] TailwindCSS configuration
- [x] Folder structure and naming conventions
- [x] Basic layout and theme

### Phase 2: Components 🚧

- [ ] Reusable UI components (Button, Card, Modal)
- [ ] Navigation with mobile menu
- [ ] Hero section with animations
- [ ] Portfolio grid with project cards

### Phase 3: Advanced Features 📋

- [ ] 3D globe with Three.js
- [ ] Contact form with EmailJS
- [ ] Smooth scrolling and intersection observer
- [ ] Loading states and error boundaries

### Phase 4: Optimization 📋

- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Accessibility compliance
- [ ] Production deployment

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 **Contact**

For questions or support, please reach out via the contact form on the website or create an issue in this repository.

---

**Built with ❤️ using React + TypeScript + TailwindCSS**
