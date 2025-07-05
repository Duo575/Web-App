import React from "react";
import { Compare } from "@/Components/UI/Compare";

export default function CompareDemo() {
  return (
    <div className="p-6 rounded-3xl backdrop-blur-lg bg-transparent border border-white/5 shadow-2xl shadow-black/30 hover:border-white/10 hover:shadow-3xl transition-all duration-300">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
