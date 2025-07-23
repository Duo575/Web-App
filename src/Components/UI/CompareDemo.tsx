import { Compare } from "@/Components/UI/Compare";
import { motion } from "framer-motion";

export default function CompareDemo() {
  return (
    <motion.div
<<<<<<< HEAD
      className="p-1 mobile:p-1.5 tablet:p-2 rounded-xl mobile:rounded-2xl tablet:rounded-3xl backdrop-blur-lg bg-white/5 shadow-2xl shadow-black/30 border border-white/15 mobile:border-2 w-full max-w-[240px] mobile:max-w-[280px] tablet:max-w-[520px] desktop:max-w-[700px]"
=======
      className="compare-container p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl backdrop-blur-lg bg-white/5 shadow-2xl shadow-black/30 border border-white/10 sm:border-2 sm:border-white/15 w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[750px]"
>>>>>>> 2968ab73d8797180c6caa55e82a930ea624b09c0
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
          secondImageClassname="object-cover object-center w-full h-full scale-105"
<<<<<<< HEAD
          className="h-[200px] mobile:h-[250px] tablet:h-[350px] desktop:h-[470px] w-full max-w-[220px] mobile:max-w-[250px] tablet:max-w-[500px] desktop:max-w-[680px] rounded-lg mobile:rounded-xl tablet:rounded-2xl overflow-hidden"
=======
          className="h-[200px] w-full max-w-[280px] xs:h-[240px] xs:max-w-[320px] sm:h-[350px] sm:max-w-[500px] md:h-[400px] md:max-w-[580px] lg:h-[470px] lg:max-w-[680px] xl:h-[500px] xl:max-w-[730px] rounded-xl sm:rounded-2xl overflow-hidden"
>>>>>>> 2968ab73d8797180c6caa55e82a930ea624b09c0
          slideMode="drag"
          initialSliderPercentage={50}
          showHandlebar={true}
        />
      </div>
    </motion.div>
  );
}
