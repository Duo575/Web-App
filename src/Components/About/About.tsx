/**
 * About Component - Main About Section with 7 Feature Grids
 * Purpose: Complete about section showcasing skills, location, tech stack and advanced features
 * Dependencies: React, framer-motion, custom components
 * Features: 7 responsive grids with animations, interactive elements, tech stack display
 */

import { useRef } from "react";
import Card from "./Card";
import { Globe } from "./Globe";
import CopyEmailButton from "./CopyEmailButton";
import FeatureSSRSupport from "./FeatureSSRSupport";
import FeatureOptimizedBuild from "./FeatureOptimizedBuild";
import FeatureTypedAPI from "./FeatureTypedAPI";

const About: React.FC = () => {
  const grid2Container = useRef<HTMLDivElement>(null);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[27rem] mt-12">
        {/* Grid 1 - Personal Introduction */}
        <div className="flex items-end grid-black-color grid-1 relative overflow-hidden">
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
        <div className="grid-special-color grid-2 overflow-hidden">
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
        <div className="grid-black-color grid-3 relative">
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
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 - SSR Support Feature (Now first in row 3) */}
        <div className="grid-black-color grid-5">
          <FeatureSSRSupport />
        </div>

        {/* Grid 6 - Optimized Build Feature */}
        <div className="grid-special-color grid-6">
          <FeatureOptimizedBuild />
        </div>

        {/* Grid 7 - Typed API Feature */}
        <div className="grid-black-color grid-7">
          <FeatureTypedAPI />
        </div>
      </div>
    </section>
  );
};

export default About;
