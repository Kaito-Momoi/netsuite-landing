import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position with debouncing for better performance
 * @param threshold - The scroll position threshold in pixels (default: 50)
 * @param delay - Debounce delay in milliseconds (default: 10)
 * @returns boolean indicating whether scroll position exceeds threshold
 */
export const useScrollPosition = (threshold: number = 50, delay: number = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      // Cancel previous timeout if it exists
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set new timeout for debouncing
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > threshold);
      }, delay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, delay]);

  return scrolled;
};
