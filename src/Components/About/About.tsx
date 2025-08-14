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
import { Coffee, Target } from "lucide-react";
import { motion } from "framer-motion";

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
        {/* Section Header with styled heading matching Journey section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-3xl mobile:text-4xl tablet:text-5xl font-bold mb-3 mobile:mb-4 tablet:mb-5">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>

          <p className="subtext text-center max-w-3xl mx-auto">
            Four passionate developers creating innovative web solutions for
            businesses of all sizes.
          </p>
        </motion.div>

        {/* The Cosmobits Story Card (Moved from Journey section) */}
        <div
          data-grid="0"
          className={`bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-4 mobile:mb-5 tablet:mb-6 ${
            visibleGrids.has(0) ? "animate-visible" : "animate-hidden"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Cosmobits Story
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Cosmobits</strong> began as a
                  simple idea shared between four friends who were passionate
                  about technology and design. We saw businesses struggling with
                  outdated websites, poor digital presence, and expensive agency
                  costs.
                </p>
                <p>
                  We realized we could offer something different -{" "}
                  <strong className="text-blue-400">personal attention</strong>,{" "}
                  <strong className="text-purple-400">modern technology</strong>
                  , and{" "}
                  <strong className="text-cyan-400">flexible pricing</strong>{" "}
                  that big agencies simply can't match.
                </p>
                <p>
                  Today, we're building our reputation one project at a time,
                  focusing on delivering exceptional results and growing our
                  expertise with every challenge.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <Coffee className="w-8 h-8 text-yellow-400 mr-3" />
                  <h4 className="text-xl font-semibold text-white">
                    Our Mission
                  </h4>
                </div>
                <p className="text-gray-300 mb-6">
                  To democratize professional web development and digital
                  design, making high-quality digital solutions accessible to
                  businesses of all sizes.
                </p>

                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-green-400 mr-3" />
                  <h5 className="text-lg font-semibold text-white">
                    Our Vision
                  </h5>
                </div>
                <p className="text-gray-300">
                  To become the go-to digital partner for businesses seeking
                  innovative, affordable, and personalized web solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mobile:gap-5 tablet:gap-6 md:grid-cols-6 mt-4 mobile:mt-5 tablet:mt-6">
          {/* Grid 1 - Personal Introduction (Wider) */}
          <div
            data-grid="1"
            className={`flex flex-col justify-end bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 grid-1 relative overflow-hidden animate-slide-from-left ${
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
              <p className="subtext text-justify">
                We are a team of four skilled web developers specializing in
                full-stack development. We craft dynamic software and innovative
                web applications by integrating cutting-edge technologies—such
                as payment gateways and map APIs—with creative design. Operating
                from our virtual hub, we're here to bring your digital vision to
                life.
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-primary" />
          </div>

          {/* Grid 3 - Location & Time Zone (Moved to first row) */}
          <div
            data-grid="3"
            className={`bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 grid-3 relative animate-slide-from-right ${
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
            className={`bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 grid-5 animate-slide-from-left ${
              visibleGrids.has(5) ? "animate-visible" : "animate-hidden"
            }`}
          >
            <FeatureSSRSupport />
          </div>

          {/* Grid 6 - Optimized Build Feature (Moved up to row 2) */}
          <div
            data-grid="6"
            className={`bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 grid-6 animate-slide-from-right ${
              visibleGrids.has(6) ? "animate-visible" : "animate-hidden"
            }`}
          >
            <FeatureOptimizedBuild />
          </div>

          {/* Grid 7 - Typed API Feature (Moved up to row 3) */}
          <div
            data-grid="7"
            className={`bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 grid-7 animate-fade-in ${
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
