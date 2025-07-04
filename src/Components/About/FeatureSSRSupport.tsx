/**
 * FeatureSSRSupport Component - SSR Support Feature Card
 * Purpose: Animated feature card showcasing SSR capabilities
 * Dependencies: React, GSAP
 * Features: Hover animations, slide-in effects, SVG animations
 */

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const FeatureSSRSupport: React.FC = () => {
  const [isCardActive, setIsCardActive] = useState(true); // Start active
  const cardRef = useRef<HTMLDivElement>(null);

  // Slide in animation when component mounts and start the feature animation
  useEffect(() => {
    if (cardRef.current) {
      gsap.set(cardRef.current, { x: -60, opacity: 0 });
      gsap.to(cardRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      // Auto-start the animation
      setIsCardActive(true);

      // Set up animation loop
      const animationLoop = () => {
        // Reset and restart animation every 5 seconds
        setIsCardActive(false);
        setTimeout(() => setIsCardActive(true), 100);
      };

      // Start loop after initial animation
      const loopTimer = setInterval(animationLoop, 5000);

      // Clean up
      return () => clearInterval(loopTimer);
    }
  }, []);

  const startAnimation = () => {
    setIsCardActive(true);
  };

  return (
    <div
      ref={cardRef}
      className="feature-card md:transform md:-translate-x-[60px] max-w-full flex flex-col"
      id="ssr-support"
    >
      <div
        className={`feature__visualization flex-1 flex items-center justify-center ${
          isCardActive ? "active" : ""
        }`}
      >
        <svg
          width="402"
          height="166"
          viewBox="0 0 402 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[380px] h-auto"
        >
          {/* JS Box */}
          <g className="js">
            <g className="js__glow" filter="url(#filter-js-glow)">
              <rect
                x="30"
                y="31.0947"
                width="104"
                height="104"
                rx="16.2078"
                fill="url(#linear-js-glow)"
              />
              <rect
                x="30.6753"
                y="31.7701"
                width="102.649"
                height="102.649"
                rx="15.5325"
                stroke="#A3A3A3"
                strokeWidth="1.35065"
              />
            </g>
            <g className="js__bg" filter="url(#filter-js-bg)">
              <rect
                x="30"
                y="31.0947"
                width="104"
                height="104"
                rx="16.2078"
                fill="url(#linear-js-bg)"
              />
            </g>
            <rect
              className="js__border"
              x="30.6753"
              y="31.7701"
              width="102.649"
              height="102.649"
              rx="15.5325"
              stroke="#A3A3A3"
              strokeWidth="1.2"
            />
          </g>

          {/* JS Text */}
          <text className="js-text" x="80" y="120">
            .JS
          </text>

          {/* Connector */}
          <path
            className="connector"
            opacity="0.25"
            d="M133.5 84.5H164M164 84.5V58.5C164 52.4249 168.925 47.5 175 47.5H193.5M164 84.5V108C164 114.075 168.925 119 175 119H193.5"
          />

          {/* Client Transform Box */}
          <g className="client" filter="url(#filter-client)">
            <g clipPath="url(#clip-client)">
              <rect
                className="client__bg"
                x="193"
                y="20"
                width="182"
                height="54"
                fill="url(#linear-client-bg)"
                fillOpacity="0.1"
              />
              <g className="client__glow" filter="url(#filter-client-glow)">
                <rect
                  x="213"
                  y="41.5342"
                  width="12"
                  height="12"
                  rx="1"
                  fill="#FFE358"
                />
              </g>
              <rect
                className="client__indicator"
                x="212.777"
                y="41.5338"
                width="12"
                height="12"
                rx="1"
              />
            </g>
            <rect
              className="client__border"
              x="193.507"
              y="22.507"
              width="180.986"
              height="50.0537"
              rx="11.661"
              stroke="#737373"
              strokeOpacity="0.3"
              strokeWidth="1.014"
            />
          </g>

          {/* Client Transform Text */}
          <text className="client-text" x="236" y="53">
            Client transform
          </text>

          {/* Server Transform Box */}
          <g className="server" filter="url(#filter-server)">
            <g clipPath="url(#clip-server)">
              <rect
                className="server__bg"
                x="193"
                y="90"
                width="186"
                height="54"
                fill="url(#linear-server-bg)"
                fillOpacity="0.1"
              />
              <g className="server__glow" filter="url(#filter-server-glow)">
                <circle cx="218.933" cy="117.534" r="5.93296" fill="#FFE358" />
              </g>
              <rect
                className="server__indicator"
                x="212.777"
                y="111.74"
                width="12"
                height="12"
                rx="1"
              />
            </g>
            <rect
              x="193.507"
              y="92.7135"
              width="181.402"
              height="50.0537"
              rx="11.661"
              stroke="#737373"
              strokeOpacity="0.3"
              strokeWidth="1.014"
            />
          </g>

          {/* Server Transform Text */}
          <text className="server-text" x="236" y="122">
            Server transform
          </text>

          {/* Definitions */}
          <defs>
            <filter
              id="filter-js-glow"
              x="0"
              y="1.09473"
              width="164"
              height="164"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_1_6"
              />
            </filter>
            <filter
              id="filter-js-bg"
              x="30"
              y="31.0947"
              width="104"
              height="108"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_1_6"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_6"
              />
            </filter>
            <filter
              id="filter-client"
              x="193"
              y="22"
              width="182"
              height="55.0677"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_6"
              />
            </filter>
            <filter
              id="filter-client-glow"
              x="203"
              y="31.5342"
              width="32"
              height="32"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="5"
                result="effect1_foregroundBlur_1_6"
              />
            </filter>
            <filter
              id="filter-server"
              x="193"
              y="92.2065"
              width="182.416"
              height="55.0677"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_6"
              />
            </filter>
            <filter
              id="filter-server-glow"
              x="203"
              y="101.601"
              width="31.8659"
              height="31.8659"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="5"
                result="effect1_foregroundBlur_1_6"
              />
            </filter>
            <linearGradient
              id="linear-js-glow"
              x1="130"
              y1="144"
              x2="22.5"
              y2="23.5002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE358" />
              <stop offset="1" stopColor="#FFE358" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="linear-js-bg"
              x1="130"
              y1="144"
              x2="22.5"
              y2="23.5002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE358" />
              <stop offset="1" stopColor="#FFE358" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="linear-client-bg"
              x1="193"
              y1="47"
              x2="375"
              y2="47"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE358" />
              <stop offset="1" stopColor="#FFE358" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="linear-server-bg"
              x1="193"
              y1="117"
              x2="379"
              y2="117"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE358" />
              <stop offset="1" stopColor="#FFE358" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip-client">
              <rect
                x="193"
                y="22"
                width="182"
                height="51.0677"
                rx="12.168"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip-server">
              <rect
                x="193"
                y="92.2065"
                width="182.416"
                height="51.0677"
                rx="12.168"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="feature__meta text-center mt-8 pt-4">
        <div className="meta__title text-xl font-semibold mb-2 text-white">
          First class SSR Support
        </div>
        <div className="meta__description text-sm opacity-80 text-gray-300">
          It's never been easier to setup custom SSR (Server-Side Rendering), or
          build your own SSR framework.
        </div>
      </div>
    </div>
  );
};

export default FeatureSSRSupport;
