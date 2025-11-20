import { ReactNode, ReactElement } from 'react';

/**
 * Represents a feature or capability with icon, title, and description
 */
export interface Feature {
  /** Icon component to display */
  icon: ReactNode;
  /** Feature title */
  title: string;
  /** Detailed description of the feature */
  description: string;
  /** Optional bullet points for additional details */
  bulletPoints?: string[];
}

/**
 * Solution extends Feature with navigation path
 */
export interface Solution extends Feature {
  /** Route path for navigation */
  path: string;
  /** Whether this solution is coming soon (disables link) */
  comingSoon?: boolean;
}

/**
 * Case study information for customer testimonials
 */
export interface CaseStudy {
  /** Industry sector */
  industry: string;
  /** Challenge faced by the customer */
  challenge: string;
  /** Result or outcome achieved */
  result: string;
}

/**
 * Benefit metric with value and label
 */
export interface Benefit {
  /** Numerical or text value */
  value: string;
  /** Label describing the benefit */
  label: string;
  /** Optional detailed description */
  description?: string;
}

/**
 * Navigation item for header navigation
 */
export interface NavItem {
  /** Display label */
  label: string;
  /** Icon component */
  icon: ReactElement;
  /** Gradient CSS class */
  gradient: string;
  /** Section ID to scroll to */
  section: string;
  /** Whether this is an external link */
  isExternal?: boolean;
  /** External URL (if isExternal is true) */
  url?: string;
}

/**
 * Props for navigation components
 */
export interface NavigationProps {
  /** Show back button in navigation */
  showBackButton?: boolean;
  /** Navigation variant style */
  variant?: 'home' | 'page' | 'solution';
  /** Callback when contact button is clicked */
  onContactClick?: () => void;
}

export interface HeroSectionProps {
  badge?: {
    icon: ReactNode;
    text: string;
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
  };
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  /**
   * Background variant: `light` renders the default light gradient background.
   * `transparent` renders no background so parent sections can control it.
   */
  variant?: 'light' | 'transparent';
  /** Renders content full-width instead of max-w container */
  fullWidth?: boolean;
  primaryButton?: {
    text: string;
    onClick: () => void;
    icon?: ReactNode;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
    icon?: ReactNode;
  };
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
  icon?: ReactNode;
}

export interface FeatureCardProps {
  feature: Feature;
  size?: 'small' | 'medium' | 'large';
}

export interface CTASectionProps {
  title: ReactNode;
  description?: string;
  primaryButtonText: string;
  primaryButtonAction: () => void;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
  gradient?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
  suffix?: string;
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface ContactFormData {
  companyName: string;
  contactName: string;
  email: string;
  requirements: string;
}
