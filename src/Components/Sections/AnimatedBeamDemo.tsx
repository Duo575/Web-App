/**
 * Animated Beam Demo Component
 * Purpose: Showcase the animated beam effect
 * Dependencies: AnimatedBeam component from Magic UI
 * Features: Multiple input/output beams, integration showcase
 */

import AnimatedBeamMultipleInputs from "@/Components/UI/animated-beam-multiple-inputs";

export default function AnimatedBeamDemo() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4">
            <span className="text-gradient">Stellar Service</span> Blueprint
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Discover how our company crafts fast, quality, and cost-effective
            solutions for clients with our animated beam visualization
          </p>
        </div>

        <div className="flex justify-center">
          <AnimatedBeamMultipleInputs className="w-full max-w-4xl" />
        </div>
      </div>
    </section>
  );
}
