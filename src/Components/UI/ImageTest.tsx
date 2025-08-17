import { useState } from "react";

export default function ImageTest() {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);
  const [firstImageError, setFirstImageError] = useState(false);
  const [secondImageError, setSecondImageError] = useState(false);

  return (
    <div className="p-4 bg-gray-800 rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4">Image Loading Test</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-gray-600 p-2 rounded">
          <h3 className="text-lg mb-2">First Image: /Snap.png</h3>
          <div className="h-[200px] bg-black flex items-center justify-center">
            <img
              src="/Snap.png"
              alt="First test image"
              className="max-h-full max-w-full object-contain"
              onLoad={() => setFirstImageLoaded(true)}
              onError={() => setFirstImageError(true)}
            />
          </div>
          <div className="mt-2">
            Status:{" "}
            {firstImageLoaded
              ? "✅ Loaded"
              : firstImageError
              ? "❌ Error"
              : "⏳ Loading..."}
          </div>
        </div>

        <div className="border border-gray-600 p-2 rounded">
          <h3 className="text-lg mb-2">Second Image: /127.0.0.1_5500_.PNG</h3>
          <div className="h-[200px] bg-black flex items-center justify-center">
            <img
              src="/127.0.0.1_5500_.PNG"
              alt="Second test image"
              className="max-h-full max-w-full object-contain"
              onLoad={() => setSecondImageLoaded(true)}
              onError={() => setSecondImageError(true)}
            />
          </div>
          <div className="mt-2">
            Status:{" "}
            {secondImageLoaded
              ? "✅ Loaded"
              : secondImageError
              ? "❌ Error"
              : "⏳ Loading..."}
          </div>
        </div>
      </div>

      <div className="mt-4 p-2 bg-gray-700 rounded">
        <p>Debug Information:</p>
        <ul className="list-disc pl-5">
          <li>
            First Image:{" "}
            {firstImageLoaded
              ? "Loaded"
              : firstImageError
              ? "Error"
              : "Loading"}
          </li>
          <li>
            Second Image:{" "}
            {secondImageLoaded
              ? "Loaded"
              : secondImageError
              ? "Error"
              : "Loading"}
          </li>
        </ul>
      </div>
    </div>
  );
}
