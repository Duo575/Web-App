/**
 * App Component - Main Application Entry
 * Purpose: Root component, layout structure, section routing
 * Dependencies: React, custom sections
 * Features: One-page portfolio layout, smooth scrolling, responsive design, code splitting
 */

import React, { Suspense } from "react";
import { ShootingStars, StarsBackground, LoadingSpinner, LazyImage } from "@/Components/UI";
import { useParallax } from "@/hooks/useParallax";
import "@/styles/parallax.css";
import "@/styles/scrollbar.css";
import ScrollProgressBar from "@/Components/ScrollProgressBar";

// Lazy load heavy components for better performance
const AnimatedBeamDemo = React.lazy(() => import("@/Components/Sections/AnimatedBeamDemo"));
const ProjectsSection = React.lazy(() => import("@/Components/Sections").then(module => ({ default: module.ProjectsSection })));
const ProfileSection = React.lazy(() => import("@/Components/Sections").then(module => ({ default: module.ProfileSection })));
const ContactSection = React.lazy(() => import("@/Components/Sections").then(module => ({ default: module.ContactSection })));
const FrameworksSection = React.lazy(() => import("@/Components/frameworks").then(module => ({ default: module.FrameworksSection })));
const About = React.lazy(() => import("@/Components/About").then(module => ({ default: module.About })));
const Testimonials = React.lazy(() => import("@/Components/Sections/Testimonials").then(module => ({ default: module.Testimonials })));

// Parallax images imports
import moonImg from "@/assets/parallax images/moon.png";
import mountainsBehindImg from "@/assets/parallax images/mountains_behind.png";
import mountainsFrontImg from "@/assets/parallax images/mountains_front.png";

function App() {
  const parallaxRef = useParallax();
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
        {/* Hero Section - Parallax Container */}
        <section
          id="home"
          className="h-screen relative overflow-hidden"
          ref={parallaxRef}
          style={{ backgroundColor: "#000000" }}
        >
          {/* Night Sky Background - Immediate Layer */}
          <div className="absolute inset-0 z-0">
            <ShootingStars
              starColor="#ffffff"
              trailColor="#ffffff"
              minSpeed={5}
              maxSpeed={15}
              minDelay={800}
              maxDelay={3000}
            />
            <StarsBackground
              starDensity={0.0003}
              allStarsTwinkle={true}
              twinkleProbability={0.8}
              minTwinkleSpeed={0.3}
              maxTwinkleSpeed={1.2}
            />
          </div>

          {/* Parallax Layers */}
          <div className="absolute inset-0 z-10">
            {/* Layer 1: Moon (Background - Curved Movement) */}
            <div
              className="absolute inset-0 parallax-layer moon-layer"
              style={{ transform: "translateZ(0) translateY(0)" }}
              data-speed="0.1"
              data-effect="curve"
            >
              <LazyImage
                src={moonImg}
                alt="Moon"
                className="parallax-moon absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-auto md:w-32 lg:w-36 opacity-90"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(255, 255, 200, 0.5))",
                }}
              />
            </div>

            {/* Layer 2: Mountains Behind (Slide Up) */}
            <div
              className="absolute inset-0 parallax-layer mountains-behind-layer"
              style={{ transform: "translateZ(0) translateY(0)" }}
              data-speed="0.5"
              data-effect="slide"
            >
              <LazyImage
                src={mountainsBehindImg}
                alt="Mountains Behind"
                className="parallax-mountains-behind absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[110vw] h-auto object-cover object-bottom opacity-80"
              />
            </div>

            {/* Layer 3: Mountains Front (Zoom In) */}
            <div
              className="absolute inset-0 parallax-layer mountains-front-layer"
              style={{ transform: "translateZ(0) translateY(0)" }}
              data-speed="0.6"
              data-effect="zoom"
            >
              <LazyImage
                src={mountainsFrontImg}
                alt="Mountains Front"
                className="parallax-mountains-front absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150vw] h-auto object-cover object-bottom opacity-90"
                style={{ minHeight: "120vh" }}
              />
            </div>
          </div>
        </section>

        {/* Animated Beam Demo Section */}
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[200px]" />}>
          <AnimatedBeamDemo />
        </Suspense>

        {/* Frameworks Section */}
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}>
          <FrameworksSection />
        </Suspense>

        {/* About Section */}
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[300px]" />}>
          <About />
        </Suspense>

        {/* Projects Section */}
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[500px]" />}>
          <ProjectsSection />
        </Suspense>

        {/* Testimonials Section */}
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[300px]" />}>
          <Testimonials />
        </Suspense>

        {/* Profile Section */}
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}>
          <ProfileSection />
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[300px]" />}>
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
