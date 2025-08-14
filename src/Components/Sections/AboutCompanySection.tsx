/**
 * About Company Section Component
 * Purpose: Tell the Cosmobits story, mission, and journey
 * Dependencies: React, framer-motion, lucide-react icons
 * Features: Company story, mission/vision, team journey, values
 */

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Target } from "lucide-react";

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

        {/* Main Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-16"
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
        </motion.div>

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
