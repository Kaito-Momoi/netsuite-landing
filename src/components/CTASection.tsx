import React from 'react';
import { CTASectionProps } from '../types';

const CTASectionComponent: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
  gradient = 'from-blue-600 to-blue-700',
}) => {
  return (
    <section className={`py-24 bg-gradient-to-r ${gradient}`} aria-labelledby="cta-title">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>

        {description && (
          <p className="text-lg md:text-xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        )}

        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={primaryButtonAction}
            className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold text-base hover:bg-slate-50 transition-all focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            aria-label={primaryButtonText}
          >
            {primaryButtonText}
          </button>

          {secondaryButtonText && secondaryButtonAction && (
            <button
              onClick={secondaryButtonAction}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-bold text-base hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              aria-label={secondaryButtonText}
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
const CTASection = React.memo(CTASectionComponent);
CTASection.displayName = 'CTASection';

export default CTASection;
