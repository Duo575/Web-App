"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
// Temporary fallback icon component until @tabler/icons-react is installed
const IconDotsVertical = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}
export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const [, setIsMouseOver] = useState(false);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress =
        (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16); // ~60fps
    };

    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  function mouseEnterHandler() {
    setIsMouseOver(true);
    stopAutoplay();
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    if (slideMode === "hover") {
      setSliderXPercent(initialSliderPercentage);
    }
    if (slideMode === "drag" && isDragging) {
      // Don't reset dragging state on mouse leave - let global handlers manage it
      // This prevents the glitch when dragging outside the component
    }
    startAutoplay();
  }

  const handleStart = useCallback(
    (_clientX: number) => {
      if (slideMode === "drag") {
        setIsDragging(true);
      }
    },
    [slideMode]
  );

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false);
      // Return to original position when drag ends
      setSliderXPercent(initialSliderPercentage);
    }
  }, [slideMode, initialSliderPercentage]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [slideMode, isDragging]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault(); // Prevent text selection and other default behaviors
      handleStart(e.clientX);
    },
    [handleStart]
  );
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleMove(e.clientX),
    [handleMove]
  );

  // Global mouse event handlers to fix drag issues when mouse leaves component
  useEffect(() => {
    if (slideMode === "drag" && isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => handleMove(e.clientX);
      const handleGlobalMouseUp = () => handleEnd();

      // Add global listeners
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);

      // Cleanup
      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [slideMode, isDragging, handleMove, handleEnd]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!autoplay) {
        handleStart(e.touches[0].clientX);
      }
    },
    [handleStart, autoplay]
  );

  const handleTouchEnd = useCallback(() => {
    if (!autoplay) {
      handleEnd();
    }
  }, [handleEnd, autoplay]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!autoplay) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove, autoplay]
  );

  return (
    <div
      ref={sliderRef}
      className={cn(
        "w-full h-full overflow-hidden mx-auto relative",
        className
      )}
      style={{
        position: "relative",
        cursor:
          slideMode === "drag"
            ? isDragging
              ? "grabbing"
              : "grab"
            : "col-resize",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
          style={{
            left: `${sliderXPercent}%`,
            top: "0",
            zIndex: 40,
          }}
          transition={{ duration: 0 }}
        >
          {showHandlebar && (
            <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute   flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]">
              <IconDotsVertical className="h-4 w-4 text-black" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 rounded-2xl shrink-0 w-full h-full select-none overflow-hidden",
                firstImageClassName
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              <img
                alt="first image"
                src={firstImage}
                className={cn(
                  "absolute inset-0 z-20 rounded-2xl shrink-0 w-full h-full select-none object-cover",
                  firstImageClassName
                )}
                draggable={false}
                loading="eager"
                onError={(e) => {
                  console.error("Error loading first image:", firstImage);
                  e.currentTarget.style.display = "none";
                }}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            className={cn(
              "absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none object-cover",
              secondImageClassname
            )}
            alt="second image"
            src={secondImage}
            draggable={false}
            loading="eager"
            onError={(e) => {
              console.error("Error loading second image:", secondImage);
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};
