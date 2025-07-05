export const checkImageExists = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

export const getImageWithFallback = async (primarySrc: string, fallbackSrc: string): Promise<string> => {
  const primaryExists = await checkImageExists(primarySrc);
  if (primaryExists) {
    return primarySrc;
  }
  
  const fallbackExists = await checkImageExists(fallbackSrc);
  if (fallbackExists) {
    return fallbackSrc;
  }
  
  // Return a placeholder or empty string if neither exists
  return '';
};