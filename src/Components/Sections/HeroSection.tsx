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
          <div className="nav-glass-card w-auto mobile:w-auto tablet:w-auto">
            <div className="flex space-x-1 mobile:space-x-2 tablet:space-x-4 desktop:space-x-6">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link transition-colors duration-300 text-xs mobile:text-sm tablet:text-base px-1 mobile:px-2 tablet:px-3 py-1 tablet:py-2"
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
        className="relative z-10 max-w-7xl mx-auto px-3 mobile:px-4 w-full py-6 mobile:py-8 pt-20 mobile:pt-24 tablet:pt-28 desktop:pt-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 mobile:gap-10 tablet:gap-12 desktop:gap-16 items-start lg:items-center min-h-[60vh] mobile:min-h-[65vh] tablet:min-h-[70vh]">
          {/* Left Side - Hero Title with Animation */}
          <div className="text-left space-y-4 mobile:space-y-6 tablet:space-y-8 flex flex-col justify-center min-h-[30vh] mobile:min-h-[40vh] tablet:min-h-[50vh] desktop:min-h-[60vh] lg:pr-4 tablet:pr-6 desktop:pr-8 order-1 lg:order-1">
            <div className="space-y-3 mobile:space-y-4 tablet:space-y-6">
              {/* Animated Title */}
              <motion.h1
                className="text-2xl mobile:text-3xl tablet:text-4xl desktop:text-5xl 2xl:text-6xl font-bold text-white mb-3 mobile:mb-4 tablet:mb-6 leading-tight hero-title"
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
                  className="text-base mobile:text-lg tablet:text-xl desktop:text-xl 2xl:text-2xl text-gray-300 hero-subtitle leading-relaxed max-w-none mobile:max-w-md tablet:max-w-lg desktop:max-w-xl 2xl:max-w-2xl mb-3 mobile:mb-4 tablet:mb-6"
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
                className="w-12 mobile:w-16 tablet:w-20 h-1 hero-gradient-line rounded-full"
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
          <div className="flex justify-center lg:justify-end mt-6 mobile:mt-8 tablet:mt-10 desktop:mt-4 order-2 lg:order-2 w-full">
            <CompareDemo />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
