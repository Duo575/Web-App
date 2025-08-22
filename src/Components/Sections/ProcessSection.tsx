/**
 * Process Section Component
 * Purpose: Explain how Cosmobits works with clients step by step
 * Dependencies: React, framer-motion, lucide-react icons
 * Features: Process steps, timeline, client journey explanation
 */

import React, { useRef, useLayoutEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
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

// Process Step Card Component
const ProcessStepCard: React.FC<{ step: ProcessStep }> = ({ step }) => {
  return (
    <div className="scroll-stack-card relative w-full p-14 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.2)] box-border origin-top will-change-transform bg-gradient-to-br from-blue-950 via-purple-950 to-cyan-950 border border-white/20">
      {/* Header with Icon and Duration */}
      <div className="flex items-center gap-3 mb-4">
        {/* Icon */}
        <motion.div
          className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/15 border border-white/30 rounded-xl flex items-center justify-center text-white"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1 }}
        >
          {step.icon}
        </motion.div>

        {/* Duration Badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-blue-100 text-base font-medium rounded-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <Clock className="w-5 h-5 mr-2" />
          {step.duration}
        </motion.div>

        {/* Step Number */}
        <motion.div
          className="ml-auto w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {step.id}
        </motion.div>
      </div>

      {/* Title */}
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-white mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
        }}
      >
        {step.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-200 text-lg md:text-xl mb-5 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        {step.description}
      </motion.p>

      {/* Details */}
      <div className="space-y-2">
        {step.details.map((detail, detailIndex) => (
          <motion.div
            key={detailIndex}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.6 + 0.05 * detailIndex,
            }}
          >
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-base md:text-lg text-gray-200">{detail}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, any>());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    },
    []
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(value as string);
    },
    []
  );

  const updateCardTransforms = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    // Use window scroll position instead of scroller.scrollTop
    const scrollTop = window.scrollY || window.pageYOffset;
    const containerHeight = window.innerHeight;
    const stackPosition = "15%";
    const scaleEndPosition = "5%";
    const itemStackDistance = 10;
    const baseScale = 0.85;
    const itemScale = 0.03;
    const rotationAmount = 0; // Set to 0 to remove tilting effect
    const blurAmount = 1;

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    );
    // Get the section's position relative to the page
    const sectionRect = scroller.getBoundingClientRect();
    const sectionTop = sectionRect.top + window.scrollY;

    const endElement = scroller.querySelector(
      ".scroll-stack-end"
    ) as HTMLElement;
    const endElementTop = endElement
      ? sectionTop + endElement.offsetTop
      : sectionTop + scroller.offsetHeight;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      // Calculate card position relative to the page
      const cardTop = sectionTop + card.offsetTop;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = sectionTop + cardsRef.current[j].offsetTop;
          const jTriggerStart =
            jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        // Remove rotation from transform to prevent tilting
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
        const filter =
          newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }
    });

    isUpdatingRef.current = false;
  }, [calculateProgress, parsePercentage]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Use window as the wrapper to respond to the main page scroll
    const lenis = new Lenis({
      wrapper: window,
      content: document.documentElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });

    // Handle both Lenis scroll and direct window scroll
    lenis.on("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll(".scroll-stack-card")
    ) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;
    const itemDistance = 230;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      card.style.webkitTransform = "translateZ(0)";
      card.style.perspective = "1000px";
      card.style.webkitPerspective = "1000px";
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      // Remove window scroll event listener
      window.removeEventListener("scroll", handleScroll);
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [setupLenis, updateCardTransforms]);

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

        {/* ScrollStack Implementation */}
        <div
          className="relative w-full overflow-x-visible"
          ref={scrollerRef}
          style={{
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
          <div className="scroll-stack-inner px-4 md:px-20 pb-[20rem]">
            {processSteps.map((step) => (
              <ProcessStepCard key={step.id} step={step} />
            ))}
            {/* Spacer so the last pin can release cleanly */}
            <div className="scroll-stack-end w-full h-px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
