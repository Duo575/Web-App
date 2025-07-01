import React, { useState, useEffect } from "react";

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercentage = Math.round((totalScroll / windowHeight) * 100);
      setScrollProgress(scrollPercentage);

      // Show progress bar when user starts scrolling
      setIsVisible(totalScroll > 10); // Show after 10px of scroll
      setIsScrolling(true);

      // Hide the bar after user stops scrolling (since it replaces the scrollbar)
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 2000); // Hide after 2 seconds of no scrolling
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 w-1 h-full z-50 transition-all duration-500 ease-out ${
        isVisible && isScrolling
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-1"
      }`}
    >
      <div
        className="w-full transition-all duration-100 ease-out"
        style={{
          height: `${scrollProgress}%`,
          background:
            "linear-gradient(180deg, #8b5cf6, #7c3aed, #6d28d9, #5b21b6)",
          boxShadow:
            "0 0 20px rgba(147, 51, 234, 0.8), -10px 0 40px rgba(147, 51, 234, 0.4)", // Enhanced glow to the left
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
