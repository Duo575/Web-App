import { CompareDemo } from "@/Components/UI";
import { ShootingStars, StarsBackground } from "@/Components/UI";
import { motion } from "framer-motion";
import { AuroraText } from "@/Components/magicui/aurora-text";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex flex-col justify-center w-full"
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
          minSpeed={isMobile ? 3 : 5}
          maxSpeed={isMobile ? 8 : 15}
          minDelay={isMobile ? 1500 : 800}
          maxDelay={isMobile ? 5000 : 3000}
        />
        <StarsBackground
          starDensity={isMobile ? 0.0001 : 0.0003}
          allStarsTwinkle={!isMobile}
          twinkleProbability={isMobile ? 0.3 : 0.8}
          minTwinkleSpeed={0.3}
          maxTwinkleSpeed={isMobile ? 0.8 : 1.2}
        />
      </motion.div>

      {/* Navigation */}
      <motion.header
        className="absolute top-0 w-full z-50 pt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <nav className="flex justify-between items-center py-3 px-4 sm:py-4 sm:px-6 w-full max-w-full" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <motion.div
            className="flex items-center justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/Cosmobits company logo.svg"
              alt="Cosmobits Logo"
              className="w-16 h-16 mobile:w-18 mobile:h-18 sm:w-20 sm:h-20 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden tablet:flex justify-center flex-1">
            <div className="nav-glass-card w-auto">
              <div className="flex space-x-4 desktop:space-x-6">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="nav-link transition-colors duration-300 text-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                    onClick={(e) => handleNavigation(e, item.toLowerCase())}
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="tablet:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobile && (
          <motion.div
            className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/20 ${isMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col py-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link text-white hover:text-blue-400 px-6 py-3 text-lg transition-colors duration-300 touch-manipulation"
                  onClick={(e) => handleNavigation(e, item.toLowerCase())}
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Content */}
      <motion.div
        className="absolute top-16 sm:top-20 left-0 right-0 md:relative md:top-auto md:left-auto md:right-auto z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 py-4 sm:py-6 md:py-8 md:pt-16 lg:pt-16 xl:pt-20 mobile-safe"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-6 xl:gap-8 items-start lg:items-center md:min-h-[70vh] w-full">
          {/* Left Side - Hero Title with Animation */}
          <div className="text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 flex flex-col justify-start md:min-h-[40vh] lg:min-h-[50vh] xl:min-h-[60vh] lg:pr-2 xl:pr-4 order-1 lg:order-1 w-full max-w-full">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6">
              {/* Animated Title */}
              <motion.h1
                className="font-bold text-white mb-4 sm:mb-6 leading-tight hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              >
                <motion.span
                  className="block text-white text-5xl mobile:text-6xl sm:text-7xl md:text-8xl"
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
                  className="block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.8,
                  }}
                >
                  <AuroraText
                    className="font-bold text-5xl mobile:text-6xl sm:text-7xl md:text-8xl"
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
                  className="text-xl mobile:text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 hero-subtitle leading-relaxed max-w-full sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mb-4 sm:mb-6 break-words"
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

              {/* Decorative Line */}
              <div
                className="w-20 h-1 hero-gradient-line rounded-full mt-2"
              />
            </div>
          </div>

          {/* Right Side - Compare Demo Component with Animation */}
          <div className="flex justify-center lg:justify-end mt-5 sm:mt-6 md:mt-8 lg:mt-2 order-2 lg:order-2 w-full max-w-full">
            <div className="w-full max-w-full overflow-hidden mobile-safe">
              <CompareDemo />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
