/**
 * About Company Section Component
 * Purpose: Tell the Cosmobits story, mission, and journey
 * Dependencies: React, framer-motion, lucide-react icons
 * Features: Company story, mission/vision, team journey, values
 */

import React from "react";
import { motion } from "framer-motion";

const AboutCompanySection: React.FC = () => {
  return (
    <section
      id="about-company"
      className="py-12 mobile:py-16 tablet:py-20 px-3 mobile:px-4 tablet:px-6 content-above-particles"
    >
      <div className="c-space">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-3xl mobile:text-4xl tablet:text-5xl font-bold mb-3 mobile:mb-4 tablet:mb-5">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="subtext text-center max-w-3xl mx-auto">
            From four friends with a shared passion to a growing digital
            solutions team - this is the Cosmobits story.
          </p>
        </motion.div>

        {/* Note: The Cosmobits Story card has been moved to the About Us section */}

        {/* Animated Beam Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-black/40 backdrop-blur-sm p-8 md:p-12"
        >
          {/* Animated beam effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent rotate-45"
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rotate-45"
              animate={{
                x: ["100%", "-100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Building the Future Together
            </motion.h3>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Four friends united by passion, driven by innovation, and
              committed to transforming your digital vision into reality.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
