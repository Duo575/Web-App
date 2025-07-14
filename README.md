# 🌌 Cosmobits Website

> **Modern, responsive Cosmobits website built with React, TypeScript, and cutting-edge web technologies**

## 🚀 **Live Demo**

🔗 [Visit Cosmobits](http://localhost:5173/) _(Development)_

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
- **Prrojects** - Project gallery with live demos
- **About Us** - Team introduction and skills
- **Contact** - Interactive form with validation

## 🏃‍♂️ **Quick Start**

### 📋 **Prerequisites**

- **Node.js 18+** (Download from [nodejs.org](https://nodejs.org/))
- **Git** (for cloning the repository)
- **VS Code** (recommended IDE)

### 🚀 **Complete Setup Guide**

Follow these steps to run this project on any PC:

```bash
# 1. Clone the repository
git clone <your-repository-url>

# 2. Navigate to project directory
cd "Portfolio website/Version 5/Web-App"

# 3. Install all dependencies (this installs 70+ packages automatically)
npm install

# 4. Set up environment variables (optional - only for contact form)
cp .env.example .env
# Edit .env with your EmailJS credentials if you want contact form to work

# 5. Start the development server
npm run dev
```

**🎯 That's it!** Your Cosmobits website website will be running at `http://localhost:5173`

### 🔧 **Development Commands**

```bash
npm run dev     # Start development server (http://localhost:5173)
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint for code quality
```

### 💻 **VS Code Setup (Recommended)**

For the best development experience:

1. **Install recommended extensions** (VS Code will prompt you):

   - TailwindCSS IntelliSense
   - PostCSS Language Support

2. **Settings are pre-configured** in `.vscode/settings.json`:
   - TailwindCSS autocomplete enabled
   - CSS validation disabled (to prevent @tailwind errors)
   - Enhanced IntelliSense for utility classes

### 📧 **Contact Form Setup (Optional)**

To enable the contact form functionality:

1. **Create EmailJS account**: Visit [EmailJS.com](https://www.emailjs.com/)
2. **Get your credentials**: Service ID, Template ID, and Public Key
3. **Configure environment**:

   ```bash
   # Copy the example file
   cp .env.example .env

   # Edit .env and replace with your actual values:
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

### ✅ **What Gets Installed**

Running `npm install` automatically sets up:

- ✅ **React 18** + TypeScript for modern development
- ✅ **TailwindCSS** for styling with custom theme
- ✅ **Framer Motion** for smooth animations
- ✅ **Three.js** for 3D graphics and interactive elements
- ✅ **Radix UI** components for accessibility
- ✅ **EmailJS** for contact form functionality
- ✅ **Vite** for fast development and building
- ✅ **ESLint** for code quality
- ✅ All other dependencies (70+ packages total)

### 🚨 **Troubleshooting**

**"Unknown at rule @tailwind" error in CSS?**

- This is just a VS Code warning, not an actual error
- Install TailwindCSS IntelliSense extension
- The project will build and run perfectly

**Port 5173 already in use?**

- Vite will automatically use the next available port
- Check the terminal output for the actual URL

## 📂 **Project Structure**

```
cosmobits-website/
├── public/
│   └── assets/
│       ├── images/     # Hero, prrojects, team photos
│       ├── logos/      # Technology logos
│       ├── models/     # 3D models (.glb files)
│       └── icons/      # Favicons
├── src/
│   ├── Components/
│   │   ├── UI/         # Reusable components (Button, Card, Modal)
│   │   ├── Layout/     # Header, Footer, Navigation
│   │   └── Sections/   # Hero, Prrojects, Contact sections
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
- [ ] Prrojects grid with project cards

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
