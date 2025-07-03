/**
 * App Component - Main Application Entry
 * Purpose: Root component, layout structure, section routing
 * Dependencies: React, custom sections
 * Features: One-page portfolio layout, smooth scrolling, responsive design, code splitting
 */

import React, { Suspense } from "react";
import {
  StarsBackground,
  LoadingSpinner,
} from "@/Components/UI";

import "@/styles/scrollbar.css";
import ScrollProgressBar from "@/Components/ScrollProgressBar";

// Lazy load heavy components for better performance
const HeroSection = React.lazy(() =>
  import("@/Components/Sections").then((module) => ({
    default: module.HeroSection,
  }))
);
const AnimatedBeamDemo = React.lazy(
  () => import("@/Components/Sections/AnimatedBeamDemo")
);
const ProjectsSection = React.lazy(() =>
  import("@/Components/Sections").then((module) => ({
    default: module.ProjectsSection,
  }))
);
const ProfileSection = React.lazy(() =>
  import("@/Components/Sections").then((module) => ({
    default: module.ProfileSection,
  }))
);
const ContactSection = React.lazy(() =>
  import("@/Components/Sections").then((module) => ({
    default: module.ContactSection,
  }))
);
const FrameworksSection = React.lazy(() =>
  import("@/Components/frameworks").then((module) => ({
    default: module.FrameworksSection,
  }))
);
const About = React.lazy(() =>
  import("@/Components/About").then((module) => ({ default: module.About }))
);
const Testimonials = React.lazy(() =>
  import("@/Components/Sections/Testimonials").then((module) => ({
    default: module.Testimonials,
  }))
);

function App() {
  return (
    <div
      className="min-h-screen font-body relative"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      {/* Scroll Progress Bar - Top layer */}
      <ScrollProgressBar />

      {/* Global Stars Background for other sections */}
      <StarsBackground
        starDensity={0.0001}
        allStarsTwinkle={true}
        twinkleProbability={0.6}
        minTwinkleSpeed={0.3}
        maxTwinkleSpeed={1.0}
      />
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 content-above-particles">
        <nav className="flex justify-center items-center py-1 px-4">
          <div className="nav-glass-card">
            <div className="flex space-x-4 md:space-x-6">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="content-above-particles">
        {/* Hero Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
        >
          <HeroSection />
        </Suspense>

        {/* Animated Beam Demo Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[200px]" />}
        >
          <AnimatedBeamDemo />
        </Suspense>

        {/* Frameworks Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}
        >
          <FrameworksSection />
        </Suspense>

        {/* About Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[300px]" />}
        >
          <About />
        </Suspense>

        {/* Projects Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[500px]" />}
        >
          <ProjectsSection />
        </Suspense>

        {/* Testimonials Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[300px]" />}
        >
          <Testimonials />
        </Suspense>

        {/* Profile Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}
        >
          <ProfileSection />
        </Suspense>

        {/* Contact Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[300px]" />}
        >
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/20 content-above-particles">
        <div className="max-w-6xl mx-auto text-center">
          <p className="opacity-60">
            © 2025 Portfolio Website. Built with React + Vite + TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
