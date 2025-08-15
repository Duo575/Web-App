/**
 * FeatureTypedAPI Component - Fully Typed API Feature Card
 * Purpose: Animated feature card showcasing TypeScript API with IDE simulation
 * Dependencies: React, GSAP
 * Features: IDE simulation, tooltip animations, code highlighting
 */

import React, { useRef, useState, useEffect } from "react";
// import { gsap } from "gsap";

const FeatureTypedAPI: React.FC = () => {
  const [isCardActive, setIsCardActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Initialize animation when component mounts
  useEffect(() => {
    // Auto-start animation on desktop
    if (window.innerWidth >= 1024) {
      startAnimation();
    }
  }, []);

  const startAnimation = () => {
    setIsCardActive(true);
  };

  return (
    <div
      ref={cardRef}
      className="feature-card"
      id="fully-typed-api"
      onMouseOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
        startAnimation();
      }}
    >
      <div
        className={`feature__visualization flex-1 relative ${
          isCardActive ? "active" : ""
        }`}
      >
        <div className="ide">
          <span className="code code__inactive">
            <span className="code--red">import</span> {" { createServer } "}
            <span className="code--red">from</span>
            <span className="code--blue"> 'vite'</span>
            <br />
            <br />
            <span className="code--red">const</span> server =
            <span className="code--red"> await</span>
            <span className="code--purple"> createServer</span>({`{`}
            <br />
            <span className="code--grey">
              &nbsp;&nbsp;&nbsp;// user config options
            </span>
            <br />
            {`}`})
          </span>
          <span className="code code__feature">
            <span className="code--red">await</span> server.
            <span className="code--highlight">listen</span>()
            <br />
            <span className="code--extra">
              server.<span className="code--purple">printUrls</span>()
            </span>
          </span>
        </div>
        <div className="tooltip">
          <span className="code">
            (method) ViteDevServer.<span className="code--blue">listen</span>
            (port<span className="code--blue">?:</span> number
            <span className="code--blue"> | undefined,</span> isRestart
            <span className="code--blue">?:</span>
            boolean <span className="code--blue">| undefined</span>):
            <span className="code--yellow"> Promise</span>
            <span className="code--blue">&lt;</span>ViteDevServer
            <span className="code--blue">&gt;</span>
            <br />
            <span className="code--descriptor">Start the server.</span>
          </span>
        </div>
      </div>
      <div className="feature__meta meta--center text-center mt-4 pt-2">
        <div className="meta__title text-xl font-semibold mb-2 text-white">
          Fully typed API
        </div>
        <div className="meta__description text-sm opacity-80 text-gray-300">
          Designed to be built on top of.
        </div>
      </div>
    </div>
  );
};

export default FeatureTypedAPI;
