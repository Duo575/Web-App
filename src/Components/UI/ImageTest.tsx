import { useState, useEffect } from "react";

export default function ImageTest() {
  const [imageStatus, setImageStatus] = useState({
    codeSnippet: "loading",
    websiteView: "loading",
    websiteLook: "loading",
  });

  const testImageLoad = (src: string, key: string) => {
    const img = new Image();
    img.onload = () => {
      console.log(`✅ ${src} loaded successfully`);
      setImageStatus((prev) => ({ ...prev, [key]: "loaded" }));
    };
    img.onerror = (e) => {
      console.error(`❌ ${src} failed to load:`, e);
      setImageStatus((prev) => ({ ...prev, [key]: "error" }));
    };
    img.src = src;
  };

  useEffect(() => {
    testImageLoad("/code-snippet.png", "codeSnippet");
    testImageLoad("/website-view.png", "websiteView");
    testImageLoad("/website-look.png", "websiteLook");
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "loaded":
        return "border-green-500 bg-green-900/20";
      case "error":
        return "border-red-500 bg-red-900/20";
      default:
        return "border-yellow-500 bg-yellow-900/20";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "loaded":
        return "✅ Loaded";
      case "error":
        return "❌ Failed";
      default:
        return "⏳ Loading...";
    }
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <h3 className="text-white mb-4">Image Loading Test</h3>

      {/* Status Summary */}
      <div className="mb-4 p-3 bg-gray-800 rounded">
        <p className="text-white text-sm mb-2">Status Summary:</p>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div
            className={`p-2 rounded ${getStatusColor(imageStatus.codeSnippet)}`}
          >
            <div className="text-white">Code Snippet</div>
            <div className="text-gray-300">
              {getStatusText(imageStatus.codeSnippet)}
            </div>
          </div>
          <div
            className={`p-2 rounded ${getStatusColor(imageStatus.websiteView)}`}
          >
            <div className="text-white">Website View</div>
            <div className="text-gray-300">
              {getStatusText(imageStatus.websiteView)}
            </div>
          </div>
          <div
            className={`p-2 rounded ${getStatusColor(imageStatus.websiteLook)}`}
          >
            <div className="text-white">Website Look</div>
            <div className="text-gray-300">
              {getStatusText(imageStatus.websiteLook)}
            </div>
          </div>
        </div>
      </div>

      {/* Direct Links Test */}
      <div className="mb-4 p-3 bg-gray-800 rounded">
        <p className="text-white text-sm mb-2">Direct Links Test:</p>
        <div className="space-y-1 text-xs">
          <div>
            <a
              href="/code-snippet.png"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              /code-snippet.png
            </a>
          </div>
          <div>
            <a
              href="/website-view.png"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              /website-view.png
            </a>
          </div>
          <div>
            <a
              href="/website-look.png"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              /website-look.png
            </a>
          </div>
        </div>
      </div>

      {/* Image Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-white text-sm mb-2">Code Snippet:</p>
          <img
            src="/code-snippet.png"
            alt="Code snippet"
            className="w-full h-32 object-cover border border-gray-600 rounded"
            onLoad={() => console.log("✅ IMG tag: code-snippet.png loaded")}
            onError={(e) =>
              console.error("❌ IMG tag: code-snippet.png failed:", e)
            }
          />
        </div>
        <div>
          <p className="text-white text-sm mb-2">Website View (New):</p>
          <img
            src="/website-view.png"
            alt="Website view"
            className="w-full h-32 object-cover border border-gray-600 rounded"
            onLoad={() => console.log("✅ IMG tag: website-view.png loaded")}
            onError={(e) =>
              console.error("❌ IMG tag: website-view.png failed:", e)
            }
          />
        </div>
        <div>
          <p className="text-white text-sm mb-2">Website Look (Old):</p>
          <img
            src="/website-look.png"
            alt="Website look"
            className="w-full h-32 object-cover border border-gray-600 rounded"
            onLoad={() => console.log("✅ IMG tag: website-look.png loaded")}
            onError={(e) =>
              console.error("❌ IMG tag: website-look.png failed:", e)
            }
          />
        </div>
      </div>
    </div>
  );
}
