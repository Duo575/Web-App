import React, { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FrameworkCard, { type Framework } from "./FrameworkCard";
import "./FrameworksSection.css";

// Framework assets
import logoAstro from "@/assets/icons/astro.svg";
import logoNuxt from "@/assets/icons/nuxt.svg";
import logoVue from "@/assets/icons/vue.svg";
import logoAnalog from "@/assets/icons/analog.svg";
import logoPlaywright from "@/assets/icons/playwright.svg";
import logoMarko from "@/assets/icons/marko.svg";
import logoStorybook from "@/assets/icons/storybook.svg";
import logoQwik from "@/assets/icons/qwik.svg";
import logoVitest from "@/assets/icons/vitest.svg";
import logoRedwood from "@/assets/icons/redwood.svg";
import logoSolid from "@/assets/icons/solid.svg";
import logoAngular from "@/assets/icons/angular.svg";
import logoReact from "@/assets/icons/react.svg";
import logoRemix from "@/assets/icons/remix.svg";
import logoSvelte from "@/assets/icons/svelte.svg";
import logoLaravel from "@/assets/icons/laravel.svg";
import logoAdonis from "@/assets/icons/adonis.svg";
import logoEmber from "@/assets/icons/ember.svg";
import logoPreact from "@/assets/icons/preact.svg";
import logoHono from "@/assets/icons/hono.svg";
import logoPostman from "@/assets/icons/postman.svg";
import logoTypescript from "@/assets/icons/typescript.svg";
import logoMongodb from "@/assets/icons/mongodb.svg";
import logoJavascript from "@/assets/icons/javascript.svg";
import logoTailwind from "@/assets/icons/Tailwind_CSS.svg";
import logoNodejs from "@/assets/icons/nodejs.svg";

gsap.registerPlugin(ScrollTrigger);

/**
 * The frameworks and tools to display in this section.
 */
const frameworksData: Omit<Framework, "visible">[] = [
  {
    name: "TypeScript",
    logo: logoTypescript,
    color: "#3178c6",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "MongoDB",
    logo: logoMongodb,
    color: "#47a248",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Vitest",
    logo: logoVitest,
    color: "#fac52b",
    url: "https://vitest.dev/",
  },
  {
    name: "React",
    logo: logoReact,
    color: "#00d6fd",
    url: "https://react.dev/",
  },
  {
    name: "Angular",
    logo: logoAngular,
    color: "#e03237",
    url: "https://angular.dev/",
  },
  {
    name: "Vue",
    logo: logoVue,
    color: "#40b782",
    url: "https://vuejs.org/",
  },
  {
    name: "Solid",
    logo: logoSolid,
    color: "#75b2df",
    url: "https://www.solidjs.com/",
  },
  {
    name: "Svelte",
    logo: logoSvelte,
    color: "#fd3e00",
    url: "https://svelte.dev/",
  },
  {
    name: "Preact",
    logo: logoPreact,
    color: "#673ab8",
    url: "https://preactjs.com/",
  },
  {
    name: "JavaScript",
    logo: logoJavascript,
    color: "#f7df1e",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Astro",
    logo: logoAstro,
    color: "#FFFFFF",
    url: "https://astro.build",
  },
  {
    name: "Remix",
    logo: logoRemix,
    color: "#3991fd",
    url: "https://remix.run/",
  },
  {
    name: "Nuxt",
    logo: logoNuxt,
    color: "#00da81",
    url: "https://nuxt.com",
  },
  {
    name: "Qwik",
    logo: logoQwik,
    color: "#18b5f4",
    url: "https://qwik.dev/",
  },
  {
    name: "Redwood",
    logo: logoRedwood,
    color: "#be4622",
    url: "https://redwoodjs.com/",
  },
  {
    name: "Analog",
    logo: logoAnalog,
    color: "#c10f2e",
    url: "https://analogjs.org/",
  },
  {
    name: "Playwright",
    logo: logoPlaywright,
    color: "#d45247",
    url: "https://playwright.dev/",
  },
  {
    name: "Tailwind CSS",
    logo: logoTailwind,
    color: "#06b6d4",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    logo: logoNodejs,
    color: "#339933",
    url: "https://nodejs.org/",
  },
  {
    name: "Storybook",
    logo: logoStorybook,
    color: "#fd4684",
    url: "https://storybook.js.org/",
  },
  {
    name: "Marko",
    logo: logoMarko,
    color: "#de2a87",
    url: "https://markojs.com/",
  },
  {
    name: "Laravel",
    logo: logoLaravel,
    color: "#eb4432",
    url: "https://laravel.com/",
  },
  {
    name: "AdonisJS",
    logo: logoAdonis,
    color: "#5a45ff",
    url: "https://adonisjs.com/",
  },
  {
    name: "EmberJS",
    logo: logoEmber,
    color: "#e04e39",
    url: "https://emberjs.com/",
  },
  {
    name: "Hono",
    logo: logoHono,
    color: "#ff5c13",
    url: "https://hono.dev/",
  },
  {
    name: "Postman",
    logo: logoPostman,
    color: "#ff6b35",
    url: "https://www.postman.com/",
  },
];

const FrameworksSectionComplete: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(1920);
  const [frameworks, setFrameworks] = useState<Framework[]>(
    frameworksData.map((framework) => ({ ...framework, visible: false }))
  );
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * When the resize event fires, update the screen width.
   */
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  /**
   * Throttle the resize event handler.
   */
  const throttledResizeHandler = () => {
    if (resizeTimeoutRef.current === null) {
      resizeTimeoutRef.current = setTimeout(() => {
        handleResize();
        resizeTimeoutRef.current = null;
      }, 100);
    }
  };

  useEffect(() => {
    // Set the initial size of the screen
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", throttledResizeHandler);

    // Initialize the GSAP timeline
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#frameworks-section",
        start: "top 70%",
        once: true,
      },
    });

    // Animate frameworks visibility
    frameworks.forEach((_, index) => {
      timelineRef.current!.call(
        () => {
          setFrameworks((prev) =>
            prev.map((framework, i) =>
              i === index ? { ...framework, visible: true } : framework
            )
          );
        },
        [],
        index * 0.05
      );
    });

    return () => {
      // Deregister the throttled event handler
      window.removeEventListener("resize", throttledResizeHandler);

      // Clear any pending execution of the resize handler
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
        resizeTimeoutRef.current = null;
      }

      // Kill the GSAP timeline
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, []);

  /**
   * How many total blocks (framework or empty) will fit in a single row?
   */
  const numBlocksPerRow = useMemo(() => {
    return Math.floor(screenWidth / (96 + 24));
  }, [screenWidth]);

  const paddedBlocksPerSide = useMemo(() => {
    if (screenWidth < 840) {
      return 0;
    }
    if (screenWidth < 1280) {
      return 1;
    }
    if (screenWidth < 1600) {
      return 2;
    }
    return Math.max(Math.floor((screenWidth - 840) / 280), 0);
  }, [screenWidth]);

  const numFrameworksPerRow = useMemo(
    () => numBlocksPerRow - paddedBlocksPerSide * 2,
    [numBlocksPerRow, paddedBlocksPerSide]
  );

  /**
   * How many rows do we need to display all the frameworks?
   */
  const numRows = useMemo(() => {
    return Math.ceil(frameworks.length / numFrameworksPerRow);
  }, [frameworks.length, numFrameworksPerRow]);

  /**
   * The indexes of the blocks on each row that support framework cards.
   */
  const centerIndexes = useMemo(() => {
    const firstRowsStartIndex = paddedBlocksPerSide;
    const frameworksPerFirstRows = numBlocksPerRow - 2 * paddedBlocksPerSide;
    const lastRowStartIndex =
      paddedBlocksPerSide +
      Math.floor(
        (frameworksPerFirstRows -
          (frameworks.length % frameworksPerFirstRows)) /
          2
      );

    return Array.from({ length: numRows + 1 }, (_, i) => {
      return i < numRows || frameworks.length % frameworksPerFirstRows === 0
        ? {
            start: firstRowsStartIndex,
            end: numBlocksPerRow - paddedBlocksPerSide,
          }
        : {
            start: lastRowStartIndex,
            end:
              lastRowStartIndex +
              (frameworks.length % frameworksPerFirstRows) +
              1,
          };
    });
  }, [numRows, numBlocksPerRow, paddedBlocksPerSide, frameworks.length]);

  /**
   * Generate CSS transformations for each row, to gracefully slide between horizontal positions.
   */
  const rowStyle = {
    transform: "translate3d(var(--row-offset), 0, 0)",
  };

  return (
    <section className="frameworks-section" id="frameworks-section">
      <h1 className="text-heading">Technology Stack & Development Tools</h1>
      <div className="frameworks-container">
        {/* Top Row */}
        <div className="framework-row" style={rowStyle}>
          {Array.from({ length: numBlocksPerRow + 2 }, (_, index) => (
            <FrameworkCard key={`top-${index}`} />
          ))}
        </div>

        {/* Logo Rows */}
        {Array.from({ length: numRows }, (_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="framework-row"
            style={rowStyle}
          >
            {Array.from({ length: numBlocksPerRow + 2 }, (_, columnIndex) => {
              const isInCenterRange =
                columnIndex - 1 >= centerIndexes[rowIndex + 1]?.start &&
                columnIndex - 1 < centerIndexes[rowIndex + 1]?.end;

              if (isInCenterRange) {
                const frameworkIndex =
                  rowIndex * numFrameworksPerRow +
                  (columnIndex - 1) -
                  centerIndexes[rowIndex + 1].start;

                const framework = frameworks[frameworkIndex];

                if (framework) {
                  return (
                    <FrameworkCard
                      key={`framework-${rowIndex}-${columnIndex}`}
                      framework={framework}
                    />
                  );
                }
              }

              return <FrameworkCard key={`empty-${rowIndex}-${columnIndex}`} />;
            })}
          </div>
        ))}

        {/* Bottom Row */}
        <div className="framework-row" style={rowStyle}>
          {Array.from({ length: numBlocksPerRow + 2 }, (_, index) => (
            <FrameworkCard key={`bottom-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworksSectionComplete;
