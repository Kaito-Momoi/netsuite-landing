import React from 'react';
import { ChevronDown } from 'lucide-react';
import { HeroSectionProps } from '../types';

const HeroSection: React.FC<HeroSectionProps> = React.memo(
  ({ badge, title, subtitle, description, actions, primaryButton, secondaryButton, variant = 'light', fullWidth = false }) => {
    return (
      <section
        className={`relative min-h-screen flex items-center justify-center ${fullWidth ? 'px-0' : 'px-6'} overflow-hidden`}
        aria-labelledby="hero-title"
      >
        {variant === 'light' && (
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50"
            aria-hidden="true"
          ></div>
        )}

        {/* Decorative background elements */}
        {variant === 'light' && (
          <>
            <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"
              style={{ animationDelay: '2s' }}
            ></div>
          </>
        )}

        <div className={`relative z-10 ${fullWidth ? 'w-full' : 'max-w-7xl mx-auto'} text-center py-20`}>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-slate-900 leading-tight tracking-tight"
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-700 font-light leading-relaxed max-w-5xl mx-auto mb-6">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {actions && (
            <div className="mt-6">
              {actions}
            </div>
          )}
        </div>

        {/* Scroll Indicator - always centered */}
        <div className="absolute bottom-10 inset-x-0 animate-bounce">
          <div className="flex flex-col items-center justify-center mx-auto w-full">
            <span className="text-sm text-slate-500 font-medium mb-2 tracking-wider">SCROLL</span>
            <ChevronDown className="w-8 h-8 text-slate-400" />
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = 'HeroSection';

export default HeroSection;
