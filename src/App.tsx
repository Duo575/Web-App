/**
 * App Component - Main Application Entry
 * Purpose: Root component, layout structure, section routing
 * Dependencies: React, custom sections
 * Features: One-page portfolio layout, smooth scrolling, responsive design
 */

import AnimatedBeamDemo from "@/Components/Sections/AnimatedBeamDemo";
import { ProjectsSection, ProfileSection, ContactSection } from "@/Components/Sections";
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
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Welcome to Our{" "}
              <span className="text-gradient">Digital Universe</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-80">
              Crafting innovative web solutions with cutting-edge technology
            </p>
            <button className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg hover:scale-hover transition-all duration-300">
              Explore Our Work
            </button>
          </div>
        </section>

        {/* Quick Demo Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">Technology Stack</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["React", "TypeScript", "Tailwind", "Vite"].map((tech) => (
                <div
                  key={tech}
                  className="card-glow p-6 rounded-lg text-center hover:scale-hover transition-all duration-300"
                >
                  <h3 className="font-heading text-xl font-semibold">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
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
            © 2024 Portfolio Website. Built with React + Vite + TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
