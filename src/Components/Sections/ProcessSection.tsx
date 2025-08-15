/**
 * Process Section Component
 * Purpose: Explain how Cosmobits works with clients step by step
 * Dependencies: React, framer-motion, lucide-react icons
 * Features: Process steps, timeline, client journey explanation
 */

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  Palette,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
  Clock,
  CheckCircle,
} from "lucide-react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  details: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "We start by understanding your vision, goals, and requirements through detailed discussion.",
    icon: <MessageCircle className="w-8 h-8" />,
    duration: "1-2 Days",
    details: [
      "Free consultation call or meeting",
      "Understanding your business needs",
      "Discussing project scope and timeline",
      "Budget analysis and custom pricing",
    ],
  },
  {
    id: 2,
    title: "Research & Planning",
    description:
      "Deep dive into your industry, competitors, and target audience to create the perfect strategy.",
    icon: <Search className="w-8 h-8" />,
    duration: "2-3 Days",
    details: [
      "Market and competitor analysis",
      "User experience research",
      "Technical requirements planning",
      "Project roadmap creation",
    ],
  },
  {
    id: 3,
    title: "Design & Prototyping",
    description:
      "Creating beautiful, user-friendly designs that align with your brand and convert visitors.",
    icon: <Palette className="w-8 h-8" />,
    duration: "3-7 Days",
    details: [
      "Wireframe and mockup creation",
      "UI/UX design development",
      "Brand integration and styling",
      "Client feedback and revisions",
    ],
  },
  {
    id: 4,
    title: "Development",
    description:
      "Building your project with modern technologies, clean code, and best practices.",
    icon: <Code className="w-8 h-8" />,
    duration: "1-4 Weeks",
    details: [
      "Frontend development with React",
      "Backend development with Node.js",
      "Database design and integration",
      "Regular progress updates",
    ],
  },
  {
    id: 5,
    title: "Testing & Optimization",
    description:
      "Rigorous testing across devices and browsers to ensure perfect performance.",
    icon: <TestTube className="w-8 h-8" />,
    duration: "2-5 Days",
    details: [
      "Cross-browser compatibility testing",
      "Mobile responsiveness verification",
      "Performance optimization",
      "Security and accessibility checks",
    ],
  },
  {
    id: 6,
    title: "Launch & Delivery",
    description:
      "Going live with your project and providing all necessary documentation and training.",
    icon: <Rocket className="w-8 h-8" />,
    duration: "1-2 Days",
    details: [
      "Domain and hosting setup",
      "Live deployment and configuration",
      "Documentation and training",
      "SEO setup and optimization",
    ],
  },
  {
    id: 7,
    title: "Ongoing Support",
    description:
      "Continued support, maintenance, and updates to keep your project running smoothly.",
    icon: <HeadphonesIcon className="w-8 h-8" />,
    duration: "Ongoing",
    details: [
      "Technical support and maintenance",
      "Content updates and modifications",
      "Performance monitoring",
      "Future enhancement planning",
    ],
  },
];

const ProcessStep: React.FC<{
  step: ProcessStep;
  index: number;
  isLast: boolean;
}> = ({ step, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Step Card */}
      <div
        className={`flex items-start gap-6 ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Content */}
        <div
          className={`flex-1 ${index % 2 === 0 ? "text-left" : "text-right"}`}
        >
          <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
            {/* Duration Badge */}
            <div
              className={`inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-4 ${
                index % 2 === 0 ? "" : "ml-auto"
              }`}
            >
              <Clock className="w-4 h-4 mr-1" />
              {step.duration}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              {step.description}
            </p>

            {/* Details */}
            <div className="space-y-2">
              {step.details.map((detail, detailIndex) => (
                <div
                  key={detailIndex}
                  className={`flex items-center gap-2 ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Number & Icon */}
        <div className="flex flex-col items-center flex-shrink-0">
          {/* Step Number */}
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg">
            {step.id}
          </div>

          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white mb-4 hover:scale-110 transition-transform duration-300">
            {step.icon}
          </div>

          {/* Connector Line */}
          {!isLast && (
            <div className="w-0.5 h-24 bg-gradient-to-b from-blue-500/50 to-purple-500/50" />
          )}
        </div>

        {/* Spacer for alternating layout */}
        <div className="flex-1" />
      </div>
    </motion.div>
  );
};

const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
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
            How We{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <p className="subtext text-center max-w-3xl mx-auto">
            Our streamlined process ensures your project is delivered on time,
            within budget, and exceeds your expectations.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-12 mb-16">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
