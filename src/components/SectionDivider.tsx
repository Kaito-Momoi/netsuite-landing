import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionDividerProps {
  showArrow?: boolean;
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ showArrow = true, className = '' }) => {
  return (
    <div className={`relative h-24 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Optional decorative line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div className="max-w-7xl mx-auto px-6">
            <div className="border-t border-slate-200/30"></div>
          </div>
        </div>

        {/* Arrow centered */}
        {showArrow && (
          <div className="relative z-10 bg-white px-4">
            <div className="relative">
              {/* Arrow with gradient effect */}
              <div className="absolute inset-0 blur-xl bg-gradient-to-b from-blue-200 to-transparent opacity-30"></div>
              <ChevronDown className="w-8 h-8 text-slate-300 animate-pulse relative z-10" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionDivider;
