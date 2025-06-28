"use client";
// @ts-nocheck
import { motion } from "framer-motion";
import {
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

interface CircleProps {
  className?: string;
  children?: ReactNode;
}

interface AnimatedBeamMultipleOutputDemoProps {
  className?: string;
}

export const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#E5E7EB",
  gradientStopColor = "#F8FAFC",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 border-gray-300 bg-white p-3 shadow-[0_0_20px_-12px_rgba(127,0,255,0.6)]",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Circle.displayName = "Circle";

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: AnimatedBeamMultipleOutputDemoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10 bg-transparent",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-4xl flex-row items-center justify-between gap-10">
        {/* Left labels and icons */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-col justify-center gap-6 text-white text-sm font-medium min-w-[160px] text-right">
            <span className="flex items-center justify-end h-12">Fast</span>
            <span className="flex items-center justify-end h-12">Quality</span>
            <span className="flex items-center justify-end h-12">
              Cost effective
            </span>
            <span className="flex items-center justify-end h-12">
              Negotiable
            </span>
            <span className="flex items-center justify-end h-12">
              Modern Technologies
            </span>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <Circle ref={div1Ref}>
              <Icons.fast />
            </Circle>
            <Circle ref={div2Ref}>
              <Icons.quality />
            </Circle>
            <Circle ref={div3Ref}>
              <Icons.costEffective />
            </Circle>
            <Circle ref={div4Ref}>
              <Icons.negotiable />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.modernTech />
            </Circle>
          </div>
        </div>
        {/* Center company */}
        <div className="flex flex-col items-center mx-9">
          <div className="flex items-center justify-center h-full mt-9">
            <Circle
              ref={div6Ref}
              className="size-16 border-purple-500 shadow-[0_0_30px_-12px_rgba(127,0,255,0.8)]"
            >
              <Icons.companyLogo />
            </Circle>
          </div>
          <span className="mt-2 text-white text-lg font-semibold">Company</span>
        </div>
        {/* Right client */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center h-full mt-9">
            <Circle
              ref={div7Ref}
              className="border-blue-400 shadow-[0_0_20px_-12px_rgba(10,25,47,0.6)]"
            >
              <Icons.client />
            </Circle>
          </div>
          <span className="mt-2 text-white text-lg font-semibold">Client</span>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div1Ref as React.RefObject<HTMLElement>}
        toRef={div6Ref as React.RefObject<HTMLElement>}
        duration={2.2}
        delay={0.3}
        gradientStartColor="#E5E7EB"
        gradientStopColor="#F8FAFC"
        pathColor="#E5E7EB"
        pathOpacity={0.2}
        pathWidth={2}
        curvature={25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={2.8}
        delay={0.7}
        gradientStartColor="#E5E7EB"
        gradientStopColor="#F8FAFC"
        pathColor="#E5E7EB"
        pathOpacity={0.2}
        pathWidth={2}
        curvature={15}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={1.9}
        delay={1.2}
        gradientStartColor="#E5E7EB"
        gradientStopColor="#F8FAFC"
        pathColor="#E5E7EB"
        pathOpacity={0.2}
        pathWidth={2}
        curvature={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={2.5}
        delay={0.1}
        gradientStartColor="#E5E7EB"
        gradientStopColor="#F8FAFC"
        pathColor="#E5E7EB"
        pathOpacity={0.2}
        pathWidth={2}
        curvature={-15}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={2.1}
        delay={1.6}
        gradientStartColor="#E5E7EB"
        gradientStopColor="#F8FAFC"
        pathColor="#E5E7EB"
        pathOpacity={0.2}
        pathWidth={2}
        curvature={-25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={2.4}
        delay={0.5}
        gradientStartColor="#E5E7EB"
        gradientStopColor="#F8FAFC"
        pathColor="#E5E7EB"
        pathOpacity={0.4}
        pathWidth={3}
        curvature={0}
      />
    </div>
  );
}

const Icons = {
  fast: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        fill="url(#fast-gradient)"
        stroke="#7F00FF"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="fast-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F00FF" />
          <stop offset="100%" stopColor="#0A192F" />
        </linearGradient>
      </defs>
    </svg>
  ),

  quality: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="url(#quality-gradient)"
        stroke="#7F00FF"
        strokeWidth="1"
      />
      <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
      <defs>
        <linearGradient
          id="quality-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#7F00FF" />
        </linearGradient>
      </defs>
    </svg>
  ),

  costEffective: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="url(#cost-gradient)"
        stroke="#7F00FF"
        strokeWidth="1"
      />
      <path
        d="M12 6v2m0 8v2m-6-6h2m8 0h2M8.464 8.464l1.414 1.414m4.243 4.243l1.414 1.414M8.464 15.536l1.414-1.414m4.243-4.243l1.414-1.414"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="10"
        fontWeight="bold"
      >
        $
      </text>
      <defs>
        <linearGradient id="cost-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#0A192F" />
        </linearGradient>
      </defs>
    </svg>
  ),

  negotiable: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 12h8M8 8h8M8 16h8"
        stroke="url(#nego-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        fill="none"
        stroke="#7F00FF"
        strokeWidth="1.5"
      />
      <path
        d="M7 4V2M17 4V2M7 20v2M17 20v2"
        stroke="#0A192F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="nego-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7F00FF" />
          <stop offset="50%" stopColor="#0A192F" />
          <stop offset="100%" stopColor="#7F00FF" />
        </linearGradient>
      </defs>
    </svg>
  ),

  modernTech: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="12"
        rx="2"
        fill="url(#tech-gradient)"
        stroke="#7F00FF"
        strokeWidth="1"
      />
      <circle cx="6" cy="10" r="1.5" fill="#FFFFFF" />
      <circle cx="12" cy="10" r="1.5" fill="#FFFFFF" />
      <circle cx="18" cy="10" r="1.5" fill="#FFFFFF" />
      <path
        d="M4 18h16M8 18v2M16 18v2"
        stroke="#0A192F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A192F" />
          <stop offset="50%" stopColor="#7F00FF" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>
    </svg>
  ),

  companyLogo: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="url(#logo-gradient)"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <path d="M16 6L20 12H12L16 6Z" fill="#FFFFFF" />
      <path d="M10 14L14 20H18L22 14H10Z" fill="#FFFFFF" />
      <circle cx="16" cy="24" r="2" fill="#FFFFFF" />
      <path
        d="M8 16L12 18L8 20M24 16L20 18L24 20"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <radialGradient id="logo-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F00FF" />
          <stop offset="70%" stopColor="#0A192F" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>
    </svg>
  ),

  client: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="8"
        r="4"
        fill="url(#client-gradient)"
        stroke="#0A192F"
        strokeWidth="1"
      />
      <path
        d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
        fill="none"
        stroke="#0A192F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="6" r="2" fill="#7F00FF" />
      <circle cx="6" cy="6" r="2" fill="#7F00FF" />
      <path
        d="M12 12v2M10 14h4"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="client-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#0A192F" />
          <stop offset="100%" stopColor="#7F00FF" />
        </linearGradient>
      </defs>
    </svg>
  ),
};
