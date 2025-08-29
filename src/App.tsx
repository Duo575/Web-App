/**
 * App Component - Main Application Entry
 * Purpose: Root component, layout structure, section routing
 * Dependencies: React, custom sections
 * Features: One-page portfolio layout, smooth scrolling, responsive design, code splitting
 */

import React, { Suspense, useState } from "react";
import {
  StarsBackground,
  LoadingSpinner,
  ScrollToTopButton,
} from "@/Components/UI";
import { SEOHead } from "@/Components/SEO";
import { Footer } from "@/Components/Layout";
import { ErrorBoundary } from "@/Components/ErrorBoundary";

import "@/styles/scrollbar.css";
import "@/styles/parallax.css";
import "@/styles/mobile.css";
import "@/styles/mobile-fixes.css";
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
const ServicesSection = React.lazy(() =>
  import("@/Components/Sections/ServicesSection").then((module) => ({
    default: module.default,
  }))
);
// AboutCompanySection removed as requested
const ProcessSection = React.lazy(() =>
  import("@/Components/Sections/ProcessSection").then((module) => ({
    default: module.default,
  }))
);
const BusinessInfo = React.lazy(() =>
  import("@/Components/Business").then((module) => ({
    default: module.BusinessInfo,
  }))
);

function App() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <ErrorBoundary>
      <div
        className="min-h-screen font-body relative"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        {/* SEO Head Component */}
        <SEOHead />

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

      {/* Main Content */}
      <main className="content-above-particles">
        {/* Hero Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
        >
          <HeroSection />
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

        {/* Services Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}
        >
          <ServicesSection />
        </Suspense>

        {/* Animated Beam Demo Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[200px]" />}
        >
          <AnimatedBeamDemo />
        </Suspense>

        {/* About Company Section - Removed as requested */}

        {/* Process Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}
        >
          <ProcessSection />
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

        {/* Business Information Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}
        >
          <BusinessInfo />
        </Suspense>

        {/* Contact Section */}
        <Suspense
          fallback={<LoadingSpinner size="lg" className="min-h-[300px]" />}
        >
          <ContactSection
            onPrivacyModalOpen={() => setShowPrivacyModal(true)}
          />
        </Suspense>
      </main>

      {/* Scroll to Top Button */}
      <div className="content-above-particles py-8">
        <ScrollToTopButton />
      </div>

      {/* Enhanced Footer */}
      <Footer onPrivacyClick={() => setShowPrivacyModal(true)} />

      {/* Global Privacy Policy Modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 mobile:p-3 tablet:p-4"
          style={{ zIndex: 2147483647 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPrivacyModal(false);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          onWheel={(e) => {
            // Prevent backdrop from capturing wheel events
            e.stopPropagation();
          }}
        >
          <div
            className="bg-gray-900 rounded-xl mobile:rounded-2xl w-full max-w-[95vw] mobile:max-w-[90vw] tablet:max-w-4xl h-[90vh] flex flex-col border border-white/20 overflow-hidden relative"
            style={{ zIndex: 2147483647 }}
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => {
              // Allow wheel events to pass through to content
              e.stopPropagation();
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center p-3 mobile:p-4 tablet:p-6 border-b border-white/20 flex-shrink-0">
              <div className="flex items-center gap-2 mobile:gap-3">
                <div className="text-blue-400">🛡️</div>
                <h3 id="privacy-modal-title" className="text-base mobile:text-lg tablet:text-xl font-semibold text-white">
                  Privacy Policy
                </h3>
              </div>
            </div>

            {/* Modal Content - Reusing the same content from ContactSection */}
            <div
              className="flex-1 overflow-y-auto p-3 mobile:p-4 tablet:p-6 modal-content"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => {
                // Ensure wheel events are handled by this scrollable container
                e.stopPropagation();
              }}
              style={{
                scrollBehavior: "smooth",
                overscrollBehavior: "contain",
              }}
            >
              <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                <div className="text-sm text-gray-400 mb-4">
                  Last Updated: June 30, 2025
                </div>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    1. Introduction
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Welcome to Cosmobits, a premier web development company
                    pioneering a digital universe where innovation seamlessly
                    integrates with privacy. We are dedicated to safeguarding
                    your personal information and delivering a secure,
                    trustworthy experience as you engage with our cutting-edge
                    services. This Privacy Policy provides a transparent
                    overview of how we collect, process, utilize, disclose, and
                    protect your data, ensuring compliance with relevant
                    regulations, including the Digital Personal Data Protection
                    Act 2023 (India) and the General Data Protection Regulation
                    (GDPR) where applicable.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    2. Data We Collect
                  </h4>
                  <p className="text-sm leading-relaxed mb-3">
                    As part of our commitment to delivering exceptional web
                    solutions, we may collect the following categories of
                    personal data when you interact with our website or reach
                    out to us:
                  </p>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>
                      <strong>Contact Information:</strong> Full name, email
                      address, and phone number submitted via our "Contact Us"
                      form.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> IP address, browser type,
                      pages visited, and session duration, gathered through
                      cookies and advanced analytics tools.
                    </li>
                    <li>
                      <strong>Optional Data:</strong> Additional details you
                      choose to provide, such as project inquiries or messages.
                    </li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-3">
                    This data is obtained via secure form submissions, cookies,
                    and third-party analytics platforms like Google Analytics.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    3. How We Use Your Data
                  </h4>
                  <p className="text-sm leading-relaxed mb-3">
                    We leverage your data to enhance our services and support
                    your needs:
                  </p>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>
                      Respond promptly to your inquiries and provide tailored
                      support through our "Contact Us" channel.
                    </li>
                    <li>
                      Optimize our website and development offerings using
                      insightful usage analytics.
                    </li>
                    <li>
                      Share relevant updates, promotional offers, or project
                      opportunities, subject to your explicit consent.
                    </li>
                    <li>
                      Fulfill legal obligations and safeguard against potential
                      fraud or security threats.
                    </li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    4. Your Rights
                  </h4>
                  <p className="text-sm leading-relaxed mb-3">
                    As a user, you are empowered with the following rights
                    regarding your personal data:
                  </p>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>
                      Request access, correction, or deletion of your
                      information.
                    </li>
                    <li>
                      Limit or object to specific data processing activities.
                    </li>
                    <li>
                      Seek data portability or withdraw consent at any time.
                    </li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-3">
                    To exercise these rights, please email us at
                    privacy@cosmobits.work. We aim to respond to your request
                    within 30 days.
                  </p>
                </section>
              </div>
            </div>

            {/* Modal Footer */}
            <div
              className="p-3 mobile:p-4 tablet:p-6 border-t border-white/20 flex justify-end flex-shrink-0 relative"
              style={{ zIndex: 2147483647 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPrivacyModal(false);
                }}
                className="px-4 mobile:px-5 tablet:px-6 py-1.5 mobile:py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm mobile:text-base rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer select-none relative"
                style={{ zIndex: 2147483647 }}
                type="button"
                aria-label="Close privacy policy modal"
                autoFocus
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
