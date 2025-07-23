import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface ScrollToTopButtonProps {
  className?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  className = "",
}) => {
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
        className="scroll-to-top-button bg-black/70 backdrop-blur-sm border border-white/20 rounded-full p-4 cursor-pointer"
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <ChevronUp size={40} className="text-white" />{" "}
      </motion.button>
    </div>
  );
};

export default ScrollToTopButton;
