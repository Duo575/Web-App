import React, { useEffect, useRef, useState } from "react";
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
