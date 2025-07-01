import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { preloadImages } from "./utils/preload";

// Import critical parallax images
import moonImg from "./assets/parallax images/moon.png";
import mountainsBehindImg from "./assets/parallax images/mountains_behind.png";
import mountainsFrontImg from "./assets/parallax images/mountains_front.png";

// Preload critical parallax images
preloadImages([moonImg, mountainsBehindImg, mountainsFrontImg]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
