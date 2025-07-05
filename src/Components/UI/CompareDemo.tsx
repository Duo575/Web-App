import React from "react";
import { Compare } from "@/Components/UI/Compare";

export default function CompareDemo() {
  return (
    <div className="p-6 rounded-3xl backdrop-blur-lg bg-transparent shadow-2xl shadow-black/30 hover:shadow-3xl transition-all duration-300">
      <div className="ml-[7.5%]">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[240px] md:h-[500px] md:w-[600px]"
          slideMode="hover"
        />
      </div>
    </div>
  );
}
