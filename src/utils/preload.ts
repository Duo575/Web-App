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
  try {
    await Promise.all(sources.map(preloadImage));
  } catch (error) {
    // Some images failed to preload, but continue silently
  }
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
