import { CompareDemo } from "@/Components/UI";
import { ShootingStars, StarsBackground } from "@/Components/UI";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex flex-col justify-center"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Night Sky Background with Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
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
      </motion.div>

      {/* Navigation */}
      <motion.header
        className="absolute top-0 w-full z-50 pt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <nav className="flex justify-center items-center py-2 px-2 sm:py-3 sm:px-4">
          <div className="nav-glass-card">
            <div className="flex space-x-2 sm:space-x-4 md:space-x-6">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link transition-colors duration-300 text-sm sm:text-base px-2 sm:px-3 py-1 sm:py-2"
                  onClick={(e) => handleNavigation(e, item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 w-full py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Side - Hero Title with Animation */}
          <div className="text-left space-y-6 md:space-y-8 flex flex-col justify-center min-h-[60vh] lg:pr-8">
            <div className="space-y-4 md:space-y-6">
              {/* Animated Title */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4 leading-tight hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                >
                  Welcome to My{" "}
                </motion.span>
                <motion.span
                  className="hero-portfolio-text inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.8,
                  }}
                  whileHover={{
                    scale: 1.05,
                    filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
                  }}
                >
                  Portfolio
                </motion.span>
              </motion.h1>

              {/* Animated Subtitle with Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 1.2,
                }}
              >
                <motion.p
                  className="text-lg sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 hero-subtitle leading-relaxed max-w-none lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.5,
                  }}
                >
                  {"Interactive comparison showcasing my development journey"
                    .split(" ")
                    .map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 1.8 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="inline-block mr-2"
                      >
                        {word}
                      </motion.span>
                    ))}
                </motion.p>
              </motion.div>

              {/* Animated Decorative Line */}
              <motion.div
                className="w-16 sm:w-20 h-1 hero-gradient-line rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 80, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 2.5,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>

          {/* Right Side - Compare Demo Component with Animation */}
          <div className="flex justify-center lg:justify-end mt-4 lg:mt-8">
            <CompareDemo />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
