/**
 * Globe Component - Interactive 3D globe with markers
 * Purpose: 3D globe showing global locations with interactive rotation
 * Dependencies: cobe, framer-motion, React, tailwind-merge
 * Features: Mouse/touch interaction, auto-rotation, location markers
 */

"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const ALL_MARKERS = [
  { location: [14.5995, 120.9842] as [number, number], size: 0.03 },
  { location: [19.076, 72.8777] as [number, number], size: 0.1 },
  { location: [23.8103, 90.4125] as [number, number], size: 0.05 },
  { location: [30.0444, 31.2357] as [number, number], size: 0.07 },
  { location: [39.9042, 116.4074] as [number, number], size: 0.08 },
  { location: [-23.5505, -46.6333] as [number, number], size: 0.1 },
  { location: [19.4326, -99.1332] as [number, number], size: 0.1 },
  { location: [40.7128, -74.006] as [number, number], size: 0.1 },
  { location: [34.6937, 135.5022] as [number, number], size: 0.05 },
  { location: [41.0082, 28.9784] as [number, number], size: 0.06 },
];

const getGlobeConfig = (isMobile: boolean) => ({
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: isMobile ? 1 : 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: isMobile ? 8000 : 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1] as [number, number, number],
  markerColor: [1, 1, 1] as [number, number, number],
  glowColor: [1, 1, 1] as [number, number, number],
  markers: isMobile ? ALL_MARKERS.slice(0, 5) : ALL_MARKERS,
});

interface GlobeProps {
  className?: string;
  config?: ReturnType<typeof getGlobeConfig>;
}

export function Globe({ className, config }: GlobeProps) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    if (canvasRef.current) {
      const globeConfig = config || getGlobeConfig(isMobile);
      const scaleFactor = isMobile ? 1 : 2;
      const globe = createGlobe(canvasRef.current, {
        ...globeConfig,
        width: width * scaleFactor,
        height: width * scaleFactor,
        onRender: (state) => {
          if (!pointerInteracting.current) phi += 0.005;
          state.phi = phi + rs.get();
          state.width = width * scaleFactor;
          state.height = width * scaleFactor;
        },
      });

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      }, 0);

      return () => {
        globe.destroy();
        window.removeEventListener("resize", onResize);
      };
    }
  }, [rs, config, isMobile]);

  return (
    <div
      className={twMerge(
        "mx-auto aspect-[1/1] w-full max-w-[250px] mobile:max-w-[320px] tablet:max-w-[500px] desktop:max-w-[600px]",
        className
      )}
    >
      <canvas
        className={twMerge(
          "size-[15rem] mobile:size-[24rem] tablet:size-[28rem] desktop:size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size] mobile:translate-x-8 tablet:translate-x-0"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
