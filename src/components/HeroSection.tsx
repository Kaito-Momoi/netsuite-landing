import React from 'react';
import { HeroSectionProps } from '../types';

const HeroSection: React.FC<HeroSectionProps> = React.memo(({
  badge,
  title,
  subtitle,
  description,
  actions
}) => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {badge && (
            <div className={`inline-flex items-center px-4 py-2 ${badge.bgColor || 'bg-sky-100'} ${badge.borderColor || 'border border-sky-300'} rounded-full mb-6`}>
              {badge.icon}
              <span className={`text-sm ${badge.textColor || 'text-sky-700'} font-semibold`}>
                {badge.text}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            {title}
          </h1>
          
          {subtitle && (
            <h2 className="text-2xl text-slate-700 mb-4">
              {subtitle}
            </h2>
          )}
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {actions && (
            <div className="mt-8 flex justify-center gap-4">
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;