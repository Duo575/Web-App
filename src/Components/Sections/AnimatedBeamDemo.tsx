/**
 * Animated Beam Demo Component
 * Purpose: Showcase the animated beam effect
 * Dependencies: AnimatedBeam component from Magic UI
 * Features: Multiple input/output beams, integration showcase
 */

import AnimatedBeamMultipleInputs from "@/Components/UI/animated-beam-multiple-inputs";

export default function AnimatedBeamDemo() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-6 content-above-particles">
      <div className="c-space">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-heading">Partnership Framework</h2>
        </div>

        <div className="flex justify-center">
          <AnimatedBeamMultipleInputs className="w-full max-w-4xl" />
        </div>
      </div>
    </section>
  );
}
