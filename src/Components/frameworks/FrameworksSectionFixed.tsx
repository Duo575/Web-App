import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FrameworkCard, { type Framework } from "./FrameworkCard";
import "./FrameworksSection.css";

// Framework assets
import logoAstro from "./image/astro.svg";
import logoNuxt from "./image/nuxt.svg";
import logoVue from "./image/vue.svg";
import logoAnalog from "./image/analog.svg";
import logoPlaywright from "./image/playwright.svg";
import logoMarko from "./image/marko.svg";
import logoStorybook from "./image/storybook.svg";
import logoQwik from "./image/qwik.svg";
import logoVitest from "./image/vitest.svg";
import logoRedwood from "./image/redwood.svg";
import logoSolid from "./image/solid.svg";
import logoAngular from "./image/angular.svg";
import logoReact from "./image/react.svg";
import logoRemix from "./image/remix.svg";
import logoSvelte from "./image/svelte.svg";
import logoLaravel from "./image/laravel.svg";
import logoAdonis from "./image/adonis.svg";
import logoEmber from "./image/ember.svg";
import logoPreact from "./image/preact.svg";
import logoHono from "./image/hono.svg";

gsap.registerPlugin(ScrollTrigger);

/**
 * The frameworks and tools to display in this section.
 */
const frameworksData: Omit<Framework, "visible">[] = [
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
];

const FrameworksSectionFixed: React.FC = () => {
  const [frameworks, setFrameworks] = useState<Framework[]>(
    frameworksData.map((framework) => ({ ...framework, visible: false }))
  );
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
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
      // Kill the GSAP timeline
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, []);

  return (
    <section className="frameworks-section" id="frameworks-section">
      <h2>Powering your favorite frameworks and tools</h2>
      <div className="frameworks-container">
        {/* Simple grid layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(96px, 1fr))",
            gap: "24px",
            padding: "40px 20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {frameworks.map((framework, index) => (
            <FrameworkCard key={index} framework={framework} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworksSectionFixed;
