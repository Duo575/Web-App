import { Compare } from "@/components/ui/compare"

export default function CompareDemo() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-7xl mx-auto p-6 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[600px] w-full max-w-6xl mx-auto"
          slideMode="hover"
          autoplay={true}
          autoplayDuration={3000}
        />
      </div>
    </div>
  )
}
