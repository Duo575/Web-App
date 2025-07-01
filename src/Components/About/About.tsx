/**
 * About Component - Main About Section with 7 Feature Grids
 * Purpose: Complete about section showcasing skills, location, tech stack and advanced features
 * Dependencies: React, framer-motion, custom components
 * Features: 7 responsive grids with animations, interactive elements, tech stack display
 */

import { useRef, useEffect, useState } from "react";
import Card from "./Card";
import { Globe } from "./Globe";
import CopyEmailButton from "./CopyEmailButton";
import FeatureSSRSupport from "./FeatureSSRSupport";
import FeatureOptimizedBuild from "./FeatureOptimizedBuild";
import FeatureTypedAPI from "./FeatureTypedAPI";

const About: React.FC = () => {
  const grid2Container = useRef<HTMLDivElement>(null);
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
      className="c-space section-spacing"
      id="about"
    >
      <h2 className="text-heading">About Us</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[27rem] mt-12">
        {/* Grid 1 - Personal Introduction */}
        <div
          data-grid="1"
          className={`flex items-end grid-hover-background-border grid-1 relative overflow-hidden animate-slide-from-left ${
            visibleGrids.has(1) ? "animate-visible" : "animate-hidden"
          }`}
        >
          <div className="absolute -right-[2rem] -top-[2rem] text-8xl opacity-10 text-secondary">
            💻
          </div>
          <div className="z-10">
            <p className="headtext">Hi, I'm Ali Sanati</p>
            <p className="subtext">
              Over the last 4 years, I developed my frontend and backend dev
              skills to deliver dynamic software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-primary" />
        </div>

        {/* Grid 2 - Skills & Principles */}
        <div
          data-grid="2"
          className={`grid-special-color grid-2 overflow-hidden animate-slide-from-right ${
            visibleGrids.has(2) ? "animate-visible" : "animate-hidden"
          }`}
        >
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-5xl text-gray-500 font-heading">
              CODE IS CRAFT
            </p>

            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              text="C#"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              text=".NET"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              text="Blazor"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "60deg", top: "15%", left: "60%" }}
              text="ASP.NET"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 - Location & Time Zone (Now first in row 2) */}
        <div
          data-grid="3"
          className={`grid-hover-white-border grid-3 relative animate-slide-from-left ${
            visibleGrids.has(3) ? "animate-visible" : "animate-hidden"
          }`}
        >
          <div className="z-10 relative">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <div className="absolute top-[7%] left-[5%] w-56 h-56">
            <Globe className="scale-[0.7]" />
          </div>
        </div>

        {/* Grid 4 - Contact (Now wider and second in row 2) */}
        <div
          data-grid="4"
          className={`grid-special-color grid-4 animate-slide-from-right ${
            visibleGrids.has(4) ? "animate-visible" : "animate-hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 - SSR Support Feature (Now first in row 3) */}
        <div
          data-grid="5"
          className={`grid-hover-white-border grid-5 animate-fade-in ${
            visibleGrids.has(5) ? "animate-visible" : "animate-hidden"
          }`}
        >
          <FeatureSSRSupport />
        </div>

        {/* Grid 6 - Optimized Build Feature */}
        <div
          data-grid="6"
          className={`grid-special-color grid-6 animate-fade-in ${
            visibleGrids.has(6) ? "animate-visible" : "animate-hidden"
          }`}
        >
          <FeatureOptimizedBuild />
        </div>

        {/* Grid 7 - Typed API Feature */}
        <div
          data-grid="7"
          className={`grid-hover-white-border grid-7 animate-fade-in ${
            visibleGrids.has(7) ? "animate-visible" : "animate-hidden"
          }`}
        >
          <FeatureTypedAPI />
        </div>
      </div>
    </section>
  );
};

export default About;
