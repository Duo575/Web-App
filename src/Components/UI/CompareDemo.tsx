import { Compare } from "@/Components/UI/Compare";
import { motion } from "framer-motion";

export default function CompareDemo() {
  return (
    <motion.div
      className="compare-container p-2 sm:p-3 rounded-2xl sm:rounded-3xl backdrop-blur-lg bg-white/5 shadow-2xl shadow-black/30 border border-white/10 sm:border-2 sm:border-white/15 w-full max-w-[520px] xs:max-w-[640px] sm:max-w-[840px] md:max-w-[940px] lg:max-w-[1100px] xl:max-w-[1200px]"
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
      <div className="flex justify-center items-center w-full">
        <Compare
          firstImage="/Snap.png"
          secondImage="/127.0.0.1_5500_.PNG"
          firstImageClassName="custom-first-image w-full h-full"
          secondImageClassname="custom-second-image w-full h-full"
          className="w-full h-[220px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] 2xl:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900/60 compare-image-container"
          slideMode="drag"
          initialSliderPercentage={52}
          showHandlebar={true}
        />
      </div>
    </motion.div>
  );
}
