/**
 * SimpleParticles Component - Minimal test version
 * Purpose: Test basic particles functionality
 */

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

const SimpleParticles = () => {
  const [init, setInit] = useState(false);

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
    console.log("Simple particles loaded:", container);
  };

  const options = useMemo(
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
          speed: 1,
        },
        number: {
          value: 50,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 3,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="simple-particles"
        particlesLoaded={particlesLoaded}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundColor: "transparent",
        }}
        options={options}
      />
    );
  }

  return <></>;
};

export default SimpleParticles;
