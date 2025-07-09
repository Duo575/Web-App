import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface ScrollToTopButtonProps {
  className?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ className = "" }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <motion.button
        onClick={scrollToTop}
        className="scroll-to-top-button group relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Glass morphism background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
        
        {/* Button content */}
        <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-full p-4 transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-black/60">
          <ChevronUp 
            size={24} 
            className="text-white group-hover:text-purple-300 transition-colors duration-300" 
          />
        </div>
        
        {/* Animated glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
      </motion.button>
    </div>
  );
};

export default ScrollToTopButton;