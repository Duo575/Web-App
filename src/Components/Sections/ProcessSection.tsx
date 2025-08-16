/**
 * Process Section Component
 * Purpose: Explain how Cosmobits works with clients step by step
 * Dependencies: React, framer-motion, lucide-react icons
 * Features: Process steps, timeline, client journey explanation
 */

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

// Create a context to share the line progress between components
interface ProcessContextType {
  lineProgress: number;
}

const ProcessContext = createContext<ProcessContextType>({ lineProgress: 0 });
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
  // Determine if the card should appear on the left or right
  const isLeft = index % 2 === 0;

  // Refs for scroll-based animations
  const containerRef = useRef<HTMLDivElement>(null);

  // Track if the line has reached this step
  const [lineHasReached, setLineHasReached] = useState(false);

  // Standard inView detection
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3,
    margin: "-100px 0px -100px 0px",
  });

  // Use scroll position to animate the line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"], // Changed to center alignment for better visibility
  });

  // Get access to the global line progress from the parent component
  const processContext = useContext(ProcessContext);

  // Check if the main line has reached this step's position
  useEffect(() => {
    // Calculate the threshold based on step index - when should this step appear
    // Each step should appear when it's in the middle of the screen
    // For the first step (index 0), we want it to appear immediately when scrolling starts
    // For other steps, we want them to appear when the line reaches their position
    const threshold =
      index === 0 ? 0 : Math.max(0, (index - 0.5) / (processSteps.length - 1));

    // Function to check if line has reached this step
    const checkLineProgress = () => {
      // Show the step when line reaches or passes its position
      if (processContext.lineProgress >= threshold) {
        if (!lineHasReached) {
          // Show content immediately when line reaches the threshold
          setLineHasReached(true);
        }
      } else {
        // Hide the step when line goes back below its position
        setLineHasReached(false);
      }
    };

    // Check whenever the progress changes
    checkLineProgress();
  }, [processContext.lineProgress, index, lineHasReached]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Step Card and Number Container */}
      <div
        className={`flex items-start gap-6 ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Content Card */}
        <motion.div
          className={`flex-1 ${isLeft ? "text-left" : "text-right"}`}
          initial={{
            opacity: 0,
            x: isLeft ? 100 : -100, // Start from the middle (where the number is)
            scale: 0.8,
          }}
          animate={
            lineHasReached
              ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  x: isLeft ? 100 : -100,
                  scale: 0.8,
                }
          }
          transition={{
            duration: 0.5, // Faster animation for more responsive feel
            delay: 0.1, // Smaller delay for more immediate response
            type: "spring",
            stiffness: 200, // Higher stiffness for snappier animation
            damping: 20,
          }}
        >
          <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-300">
            {/* Header with Icon and Duration */}
            <div
              className={`flex items-center gap-3 mb-4 ${
                isLeft ? "" : "flex-row-reverse"
              }`}
            >
              {/* Icon moved from below number to inside card */}
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + 0.1 * index,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1 }}
              >
                {step.icon}
              </motion.div>

              {/* Duration Badge */}
              <motion.div
                className={`inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full ${
                  isLeft ? "" : "mr-auto"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + 0.1 * index,
                }}
              >
                <Clock className="w-4 h-4 mr-1" />
                {step.duration}
              </motion.div>
            </div>

            {/* Title */}
            <motion.h3
              className="text-xl md:text-2xl font-bold text-white mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + 0.1 * index,
              }}
            >
              {step.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-300 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.9 + 0.1 * index,
              }}
            >
              {step.description}
            </motion.p>

            {/* Details */}
            <div className="space-y-2">
              {step.details.map((detail, detailIndex) => (
                <motion.div
                  key={detailIndex}
                  className={`flex items-center gap-2 ${
                    isLeft ? "" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.0 + 0.1 * index + 0.05 * detailIndex,
                  }}
                >
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{detail}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Step Number Column - Just the number, no individual lines */}
        <div className="flex-shrink-0 z-10">
          {/* Step Number - appears only after line has reached this position */}
          <motion.div
            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              lineHasReached
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.3, // Faster animation for more responsive feel
              type: "spring",
              stiffness: 300, // Higher stiffness for snappier animation
              damping: 20,
            }}
          >
            {step.id}
          </motion.div>
        </div>

        {/* Spacer for alternating layout */}
        <div className="flex-1" />
      </div>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  // Reference for the entire process section
  const processRef = useRef<HTMLDivElement>(null);

  // Use scroll position to animate the main line
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end center"], // Changed to center alignment for better visibility
  });

  // Transform scroll progress to line height directly - map directly to scroll position
  const mainLineHeight = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Use the scroll progress directly for the line height without spring animation
  // This ensures the line moves exactly like the scroll bar

  // Create a line progress for the steps to use that matches the scroll position
  const [lineProgress, setLineProgress] = useState(0);

  // Update the line progress based on the scroll position
  useEffect(() => {
    // Function to update line progress to exactly match scroll position
    const updateProgress = (value: number) => {
      setLineProgress(value);
    };

    // Subscribe to scroll changes
    const unsubscribe = scrollYProgress.onChange(updateProgress);

    // Check initial scroll position
    updateProgress(scrollYProgress.get());

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <ProcessContext.Provider value={{ lineProgress }}>
      <section
        id="process"
        className="py-12 mobile:py-16 tablet:py-20 px-3 mobile:px-4 tablet:px-6 content-above-particles"
      >
        <div className="c-space" ref={processRef}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
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

          {/* Main Timeline Line - This is the single continuous line */}
          <div className="relative">
            {/* The main continuous line that grows as you scroll - stops exactly at number 7 */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-gray-800/20"
              style={{ height: "198rem" }} // Fixed height to stop exactly at number 7 (6 steps × 36rem - 18rem)
            >
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"
                style={{
                  height: "100%",
                  scaleY: mainLineHeight, // Use direct scroll position without spring animation
                  transformOrigin: "top",
                  // Add a subtle glow effect to make the line more visible
                  boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                }}
              />
            </div>

            {/* Process Steps */}
            <div className="space-y-36 mb-16 relative">
              {/* Increased spacing between steps for better animation flow */}
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

          {/* No CTA card here anymore */}
        </div>
      </section>
    </ProcessContext.Provider>
  );
};

export default ProcessSection;
