/**
 * About Component - Main About Section with 7 Feature Grids
 * Purpose: Complete about section showcasing skills, location, tech stack and advanced features
 * Dependencies: React, framer-motion, custom components
 * Features: 7 responsive grids with animations, interactive elements, tech stack display
 */

import { useRef, useEffect, useState } from "react";
import { Globe } from "./Globe";
import FeatureSSRSupport from "./FeatureSSRSupport";
import FeatureOptimizedBuild from "./FeatureOptimizedBuild";
import FeatureTypedAPI from "./FeatureTypedAPI";

const About: React.FC = () => {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const [visibleGrids, setVisibleGrids] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const gridNumber = parseInt(
              entry.target.getAttribute("data-grid") || "0"
            );
            setVisibleGrids((prev) => new Set([...prev, gridNumber]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    if (aboutSectionRef.current) {
      const gridElements =
        aboutSectionRef.current.querySelectorAll("[data-grid]");
      gridElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutSectionRef}
      className="py-12 mobile:py-16 tablet:py-20 px-3 mobile:px-4 tablet:px-6 content-above-particles mt-12 mobile:mt-16 tablet:mt-20"
      id="about"
    >
      <div className="c-space">
        <h2 className="text-heading text-3xl mobile:text-4xl tablet:text-5xl font-bold mb-3 mobile:mb-4 tablet:mb-5">
          About Us
        </h2>
        <div className="grid grid-cols-1 gap-4 mobile:gap-5 tablet:gap-6 md:grid-cols-6 mt-8 mobile:mt-10 tablet:mt-12">
          {/* Grid 1 - Personal Introduction (Wider) */}
          <div
            data-grid="1"
            className={`flex flex-col justify-end about-card grid-1 relative overflow-hidden animate-slide-from-left ${
              visibleGrids.has(1) ? "animate-visible" : "animate-hidden"
            }`}
          >
            <div className="absolute -right-[2rem] -top-[2rem] text-6xl mobile:text-7xl tablet:text-8xl opacity-10 text-secondary">
              💻
            </div>
            <div className="z-10 relative max-w-full mobile:max-w-xl tablet:max-w-2xl pl-1 mobile:pl-2 mb-4 mobile:mb-5 tablet:mb-6">
              <p className="headtext text-xl mobile:text-2xl tablet:text-3xl mb-3 mobile:mb-4 transform -translate-y-8 mobile:-translate-y-10 tablet:-translate-y-12">
                Hi, we are a team of four passionate web developers!
              </p>
<<<<<<< HEAD
              <p className="subtext text-sm mobile:text-base tablet:text-lg text-justify">
                We've honed our frontend and backend skills to deliver dynamic
                software and innovative web applications. Based in a virtual
                'digital universe,' we combine cutting-edge technologies with
                creative design to craft stellar solutions for our clients. From
                full-stack websites to custom integrations like payment gateways
                and map APIs, we're here to bring your vision to life.
=======
              <p className="subtext text-justify">
                We are a team of four skilled web developers specializing in
                full-stack development. We craft dynamic software and innovative
                web applications by integrating cutting-edge technologies—such
                as payment gateways and map APIs—with creative design. Operating
                from our virtual hub, we're here to bring your digital vision to
                life.
>>>>>>> 2968ab73d8797180c6caa55e82a930ea624b09c0
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-primary" />
          </div>

          {/* Grid 3 - Location & Time Zone (Moved to first row) */}
          <div
            data-grid="3"
            className={`about-card grid-3 relative animate-slide-from-right ${
              visibleGrids.has(3) ? "animate-visible" : "animate-hidden"
            }`}
          >
            <div className="z-10 relative">
              <p className="headtext text-xl mobile:text-2xl tablet:text-3xl mb-2 mobile:mb-3">
                Time Zone
              </p>
              <p className="subtext text-sm mobile:text-base">
                I'm based in Mars, and open to remote work worldwide
              </p>
            </div>
            <div className="absolute top-[7%] left-[5%] w-40 h-40 mobile:w-48 mobile:h-48 tablet:w-56 tablet:h-56">
              <Globe className="scale-[0.5] mobile:scale-[0.6] tablet:scale-[0.7]" />
            </div>
          </div>

          {/* Grid 5 - SSR Support Feature (Moved up to row 2) */}
          <div
            data-grid="5"
            className={`about-card grid-5 animate-slide-from-left ${
              visibleGrids.has(5) ? "animate-visible" : "animate-hidden"
            }`}
          >
            <FeatureSSRSupport />
          </div>

          {/* Grid 6 - Optimized Build Feature (Moved up to row 2) */}
          <div
            data-grid="6"
            className={`about-card grid-6 animate-slide-from-right ${
              visibleGrids.has(6) ? "animate-visible" : "animate-hidden"
            }`}
          >
            <FeatureOptimizedBuild />
          </div>

          {/* Grid 7 - Typed API Feature (Moved up to row 3) */}
          <div
            data-grid="7"
            className={`about-card grid-7 animate-fade-in ${
              visibleGrids.has(7) ? "animate-visible" : "animate-hidden"
            }`}
          >
            <FeatureTypedAPI />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
