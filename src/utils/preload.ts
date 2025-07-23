/**
 * Preload Utilities
 * Purpose: Preload critical resources for better performance
 */

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = async (sources: string[]): Promise<void> => {
  const results = await Promise.allSettled(sources.map(preloadImage));

  // Log any failed preloads for debugging
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.warn(`Failed to preload image: ${sources[index]}`, result.reason);
    }
  });
};

// Preload critical resources on app start
export const preloadCriticalResources = async (): Promise<void> => {
  // Add critical images that should be preloaded
  const criticalImages: string[] = [
    // Add any critical images here when needed
    // Currently using ShootingStars and StarsBackground components instead of static images
  ];

  if (criticalImages.length > 0) {
    await preloadImages(criticalImages);
  }
};
