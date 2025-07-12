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
          <div className="flex flex-col justify-center gap-6 text-white text-lg font-medium min-w-[160px] text-right">
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
            <Circle ref={div1Ref} className="p-1">
              <Icons.fast />
            </Circle>
            <Circle ref={div2Ref} className="p-1">
              <Icons.quality />
            </Circle>
            <Circle ref={div3Ref} className="p-1">
              <Icons.costEffective />
            </Circle>
            <Circle ref={div4Ref} className="p-1">
              <Icons.negotiable />
            </Circle>
            <Circle ref={div5Ref} className="p-1">
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
  fast: () => <img src="/icons/Fast.svg" alt="Fast" width="24" height="24" />,

  quality: () => (
    <img src="/icons/Quality.svg" alt="Quality" width="24" height="24" />
  ),

  costEffective: () => (
    <img
      src="/icons/Cost_effective.svg"
      alt="Cost Effective"
      width="24"
      height="24"
    />
  ),

  negotiable: () => (
    <img src="/icons/Negotiable.svg" alt="Negotiable" width="24" height="24" />
  ),

  modernTech: () => (
    <img
      src="/icons/Modern_technologies.svg"
      alt="Modern Tech"
      width="24"
      height="24"
    />
  ),

  companyLogo: () => (
    <img src="/icons/Company.svg" alt="Company" width="32" height="32" />
  ),

  client: () => (
    <img src="/icons/Client.svg" alt="Client" width="24" height="24" />
  ),
};
