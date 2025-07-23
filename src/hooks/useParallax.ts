import { useEffect, useRef } from "react";

interface ParallaxLayer {
  element: HTMLElement;
  speed: number;
  direction?: "up" | "down" | "left" | "right";
  effect?: "zoom" | "curve" | "slide" | "normal";
}

export const useParallax = () => {
  const containerRef = useRef<HTMLElement>(null);
  const layersRef = useRef<ParallaxLayer[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Initialize parallax layers
    const parallaxLayers = container.querySelectorAll(
      ".parallax-layer"
    ) as NodeListOf<HTMLElement>;

    layersRef.current = Array.from(parallaxLayers).map((element) => {
      const speed = parseFloat(element.getAttribute("data-speed") || "0.5");
      const direction =
        (element.getAttribute("data-direction") as
          | "up"
          | "down"
          | "left"
          | "right") || "up";
      const effect =
        (element.getAttribute("data-effect") as
          | "zoom"
          | "curve"
          | "slide"
          | "normal") || "normal";
      return { element, speed, direction, effect };
    });

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;

      // Only apply parallax when the hero section is visible
      if (scrollTop < containerTop + containerHeight) {
        layersRef.current.forEach((layer) => {
          if (!layer.element) return;

          const speed = layer.speed;
          const direction = layer.direction || "up";
          const effect = layer.effect || "normal";

          // Calculate scroll progress (0 to 1)
          const scrollProgress = Math.min(
            scrollTop / (containerHeight * 0.5),
            1
          );

          let transform = "";

          switch (effect) {
            case "zoom": {
              // Front mountain zooms in from center
              const scale = 1 + scrollProgress * 0.2; // Scale from 1 to 1.2 (reduced)
              const yOffset = -scrollTop * speed;
              transform = `translate3d(0, ${yOffset}px, 0) scale(${scale})`;
              break;
            }

            case "curve": {
              // Moon moves in curve from center to top-left
              const curveX = -scrollProgress * 150; // Move left
              const curveY =
                -scrollProgress * 100 - scrollProgress * scrollProgress * 50; // Curved upward motion
              transform = `translate3d(${curveX}px, ${curveY}px, 0)`;
              break;
            }

            case "slide": {
              // Behind mountain slides up with enhanced movement
              const slideY = -scrollTop * speed * 2; // 2x faster upward movement
              transform = `translate3d(0, ${slideY}px, 0)`;
              break;
            }

            default:
              // Normal parallax movement
              switch (direction) {
                case "up":
                  transform = `translate3d(0, ${-scrollTop * speed}px, 0)`;
                  break;
                case "down":
                  transform = `translate3d(0, ${scrollTop * speed}px, 0)`;
                  break;
                case "left":
                  transform = `translate3d(${-scrollTop * speed}px, 0, 0)`;
                  break;
                case "right":
                  transform = `translate3d(${scrollTop * speed}px, 0, 0)`;
                  break;
              }
          }

          layer.element.style.transform = transform;
        });
      }
    };

    // Throttled scroll handler for better performance
    let ticking = false;
    let lastScrollTime = 0;
    const throttleDelay = 16; // ~60fps cap

    const smoothScroll = () => {
      const now = performance.now();
      if (now - lastScrollTime < throttleDelay && ticking) return;

      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
          lastScrollTime = now;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", smoothScroll, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", smoothScroll);
    };
  }, []);

  return containerRef;
};
