/**
 * App Component - Main Application Entry
 * Purpose: Root component, layout structure, section routing
 * Dependencies: React, custom sections
 * Features: One-page portfolio layout, smooth scrolling, responsive design
 */

import AnimatedBeamDemo from "@/Components/Sections/AnimatedBeamDemo";
import {
  ProjectsSection,
  ProfileSection,
  ContactSection,
} from "@/Components/Sections";
import { FrameworksSection } from "@/Components/frameworks";
import { About } from "@/Components/About";
import { Testimonials } from "@/Components/Sections/Testimonials";
import { ShootingStars, StarsBackground } from "@/Components/UI";

function App() {
  return (
    <div
      className="min-h-screen font-body relative"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      {/* Shooting Stars and Stars Background */}
      <ShootingStars
        starColor="#ffffff"
        trailColor="#ffffff"
        minSpeed={5}
        maxSpeed={15}
        minDelay={800}
        maxDelay={3000}
      />
      <StarsBackground
        starDensity={0.0002}
        allStarsTwinkle={true}
        twinkleProbability={0.8}
        minTwinkleSpeed={0.3}
        maxTwinkleSpeed={1.2}
      />
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 content-above-particles">
        <nav className="flex justify-center items-center py-6 px-6">
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
        <section id="home" className="min-h-screen relative overflow-hidden">
          {/* Parallax images will be added here */}
        </section>

        {/* Animated Beam Demo Section */}
        <AnimatedBeamDemo />

        {/* Frameworks Section */}
        <FrameworksSection />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Profile Section */}
        <ProfileSection />

        {/* Contact Section */}
        <ContactSection />
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
