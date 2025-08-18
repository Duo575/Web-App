import { CompareDemo } from "@/Components/UI";
import { ShootingStars, StarsBackground } from "@/Components/UI";
import { motion } from "framer-motion";
import { AuroraText } from "@/Components/magicui/aurora-text";

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
        className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-5 w-full py-4 sm:py-6 md:py-8 pt-12 sm:pt-14 md:pt-16 lg:pt-16 xl:pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-6 xl:gap-8 items-start lg:items-center min-h-[20vh] sm:min-h-[25vh] md:min-h-[70vh]">
          {/* Left Side - Hero Title with Animation */}
          <div className="text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 flex flex-col justify-start min-h-[10vh] sm:min-h-[15vh] md:min-h-[40vh] lg:min-h-[50vh] xl:min-h-[60vh] lg:pr-2 xl:pr-4 order-1 lg:order-1">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-5">
              {/* Animated Title */}
              <motion.h1
                className="font-bold text-white mb-3 sm:mb-5 leading-tight hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              >
                <motion.span
                  className="block text-white text-6xl sm:text-7xl md:text-8xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                >
                  Welcome to{" "}
                </motion.span>
                <motion.span
                  className="hero-portfolio-text block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.8,
                  }}
                >
                  <AuroraText
                    className="font-bold text-7xl sm:text-8xl md:text-9xl"
                    colors={["#0070F3", "#38bdf8", "#FF0080", "#7928CA"]}
                    speed={1.2}
                  >
                    Cosmobits
                  </AuroraText>
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
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gray-300 hero-subtitle leading-relaxed max-w-none sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mb-3 sm:mb-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.5,
                  }}
                >
                  {"Your idea, Our code".split(" ").map((word, index) => (
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
          <div className="flex justify-center lg:justify-end mt-5 sm:mt-6 md:mt-8 lg:mt-2 order-2 lg:order-2 w-full">
            <div className="w-full overflow-hidden">
              <CompareDemo />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
