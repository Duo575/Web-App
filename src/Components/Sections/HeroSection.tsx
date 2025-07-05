import { CompareDemo } from "@/Components/UI";
import { ShootingStars, StarsBackground } from "@/Components/UI";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Night Sky Background */}
      <div className="absolute inset-0 z-0">
        <ShootingStars
          starColor="#ffffff"
          trailColor="#ffffff"
          minSpeed={5}
          maxSpeed={15}
          minDelay={800}
          maxDelay={3000}
        />
        <StarsBackground
          starDensity={0.0003}
          allStarsTwinkle={true}
          twinkleProbability={0.8}
          minTwinkleSpeed={0.3}
          maxTwinkleSpeed={1.2}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Side - Hero Title and CTA */}
          <div className="text-left space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Welcome to My <span className="text-blue-400">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Interactive comparison showcasing my development journey
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Compare Demo Component */}
          <div className="flex justify-center lg:justify-end">
            <CompareDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
