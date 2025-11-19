/**
 * Layout constants used across the application
 * These values are used for consistent spacing, offsets, and responsive breakpoints
 */
export const LAYOUT = {
  /** Height of the fixed header/navigation bar in pixels */
  HEADER_HEIGHT: 80,

  /** Offset for scroll positioning to account for fixed header (negative value) */
  SECTION_OFFSET: -80,

  /** Breakpoint for mobile devices in pixels */
  MOBILE_BREAKPOINT: 768,

  /** Breakpoint for desktop devices in pixels */
  DESKTOP_BREAKPOINT: 1024,

  /** Duration for carousel/slideshow transitions in milliseconds */
  CAROUSEL_INTERVAL: 3000,
} as const;

/** Type for layout constants to ensure type safety */
export type LayoutConstants = typeof LAYOUT;
