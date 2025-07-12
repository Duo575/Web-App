/**
 * Animated Beam Demo Component
 * Purpose: Showcase the animated beam effect
 * Dependencies: AnimatedBeam component from Magic UI
 * Features: Multiple input/output beams, integration showcase
 */

import AnimatedBeamMultipleInputs from "@/Components/UI/animated-beam-multiple-inputs";

export default function AnimatedBeamDemo() {
  return (
    <section className="py-20 px-6 content-above-particles">
      <div className="c-space">
        <div className="text-center mb-20">
          <h2 className="text-heading">
            Partnership Framework
          </h2>
        </div>

        <div className="flex justify-center">
          <AnimatedBeamMultipleInputs className="w-full max-w-4xl" />
        </div>
      </div>
    </section>
  );
}
