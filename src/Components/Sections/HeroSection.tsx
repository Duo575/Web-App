import { Compare } from "@/Components/UI";
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
        {/* Hero Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to My <span className="text-blue-400">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Interactive comparison showcasing my development journey
          </p>
        </div>

        {/* Compare Component */}
        <div className="w-full max-w-7xl mx-auto p-6 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[600px] w-full max-w-6xl mx-auto"
            slideMode="hover"
            autoplay={true}
            autoplayDuration={3000}
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
}
