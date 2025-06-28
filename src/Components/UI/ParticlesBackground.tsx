/**
 * ParticlesBackground Component
 * Purpose: Provides animated particle background effect across the website
 * Dependencies: @tsparticles/react, @tsparticles/slim
 * Features: Configurable particle system, responsive design, performance optimized
 */

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

interface ParticlesBackgroundProps {
  className?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  className = "",
}) => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("Initializing particles engine...");
      await loadSlim(engine);
      console.log("Particles engine loaded successfully");
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded:", container);
    if (container) {
      console.log(
        "Particles container is ready with",
        container.particles.count,
        "particles"
      );
    }
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          enable: true,
          speed: isMobile ? 0.5 : 1,
          random: true,
        },
        number: {
          value: isMobile ? 60 : 120,
        },
        opacity: {
          value: 0.9,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1.5 },
        },
      },
      detectRetina: true,
    }),
    [isMobile]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className={`fixed inset-0 ${className}`}
        style={{ zIndex: -1 }}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
