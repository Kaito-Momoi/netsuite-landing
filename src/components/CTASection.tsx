import React from 'react';
import { CTASectionProps } from '../types';

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
  gradient = 'from-sky-400 to-sky-600'
}) => {
  return (
    <section className={`py-20 bg-gradient-to-r ${gradient}`}>
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        
        {description && (
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={primaryButtonAction}
            className="px-8 py-4 bg-white text-sky-600 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {primaryButtonText}
          </button>
          
          {secondaryButtonText && secondaryButtonAction && (
            <button
              onClick={secondaryButtonAction}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-sky-600 transition-all"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;