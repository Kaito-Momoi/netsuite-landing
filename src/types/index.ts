import { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  bulletPoints?: string[];
}

export interface Solution extends Feature {
  path: string;
}

export interface CaseStudy {
  industry: string;
  challenge: string;
  result: string;
}

export interface Benefit {
  value: string;
  label: string;
  description?: string;
}

export interface NavigationProps {
  showBackButton?: boolean;
  variant?: 'home' | 'page';
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
  phone: string;
  requirements: string;
}
