/**
 * Custom scroll indicator that shows a glowing white bar on the side of the page
 * This script updates the scroll indicator height based on scroll position
 */

// Function to update the scroll indicator
function updateScrollIndicator(): void {
  // Calculate scroll percentage
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
  // Update the CSS variable that controls the indicator height
  document.documentElement.style.setProperty('--scroll-height', `${scrollPercentage}%`);
}

// Initialize the scroll indicator
function initScrollIndicator(): void {
  // Set initial position
  updateScrollIndicator();
  
  // Update on scroll
  window.addEventListener('scroll', updateScrollIndicator);
  
  // Update on resize (in case document height changes)
  window.addEventListener('resize', updateScrollIndicator);
}

// Export for potential use in other components
export { initScrollIndicator, updateScrollIndicator };