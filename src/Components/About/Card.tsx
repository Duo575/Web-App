/**
 * Card Component - Draggable animated cards for About section
 * Purpose: Interactive floating cards with text/images that can be dragged
 * Dependencies: framer-motion, React
 * Features: Drag constraints, hover animations, conditional rendering
 */

import { motion } from "framer-motion";
import { RefObject } from "react";

interface CardProps {
  style?: React.CSSProperties;
  text?: string;
  image?: string;
  containerRef: RefObject<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      alt={`${image} icon`}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-card w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;