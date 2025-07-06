import { Compare } from "@/Components/UI/Compare";
import { motion } from "framer-motion";

export default function CompareDemo() {
  return (
    <motion.div
      className="p-2 rounded-3xl backdrop-blur-lg bg-white/5 shadow-2xl shadow-black/30 border-2 border-white/15"
      style={{
        boxShadow:
          "0 0 20px rgba(139, 92, 246, 0.08), 0 0 40px rgba(139, 92, 246, 0.04), inset 0 0 20px rgba(255, 255, 255, 0.03)",
      }}
      initial={{
        opacity: 0,
        x: 100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: 0.5,
      }}
    >
      <div className="flex justify-center items-center">
        <Compare
          firstImage="/code-snippet.png"
          secondImage="/website-design.png"
          firstImageClassName="object-cover object-left-top w-full h-full"
          secondImageClassname="object-cover object-left-top w-full h-full"
          className="h-[250px] w-[230px] md:h-[350px] md:w-[500px] lg:h-[470px] lg:w-[680px] rounded-2xl overflow-hidden"
          slideMode="drag"
          initialSliderPercentage={50}
          showHandlebar={true}
        />
      </div>
    </motion.div>
  );
}
