import { motion } from "framer-motion";
import "./compareDemo.css";

export default function SimpleCompareDemo() {
  return (
    <motion.div
      className="compare-container p-4 rounded-2xl backdrop-blur-lg bg-white/5 shadow-2xl shadow-black/30 border border-white/10 w-full max-w-[800px] mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-col space-y-4">
        <h3 className="text-white text-xl font-semibold">Image Comparison</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-neutral-900/60 rounded-xl overflow-hidden h-[320px] flex items-center justify-center">
            <img
              src="/Snap.png"
              alt="First Image"
              className="max-w-full max-h-full object-contain"
              onLoad={() =>
                console.log("First image loaded in simple component")
              }
              onError={() =>
                console.error("Error loading first image in simple component")
              }
            />
          </div>

          <div className="bg-neutral-900/60 rounded-xl overflow-hidden h-[320px] flex items-center justify-center">
            <img
              src="/127.0.0.1_5500_.PNG"
              alt="Second Image"
              className="max-w-full max-h-full object-contain"
              onLoad={() =>
                console.log("Second image loaded in simple component")
              }
              onError={() =>
                console.error("Error loading second image in simple component")
              }
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
