import React from 'react';
import { StatItem } from '../types';

interface StatsSectionProps {
  title?: string;
  stats: StatItem[];
  variant?: 'default' | 'gradient';
}

const StatsSection: React.FC<StatsSectionProps> = ({ 
  title, 
  stats,
  variant = 'gradient' 
}) => {
  const bgClass = variant === 'gradient' 
    ? '' 
    : 'bg-white';
  
  const textColorClass = variant === 'gradient' 
    ? 'text-white' 
    : 'text-slate-900';

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <h2 className={`text-3xl font-bold text-center mb-12 ${textColorClass}`}>
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold mb-2 ${variant === 'gradient' ? 'text-white' : 'text-sky-600'}`}>
                {stat.value}
              </div>
              <div className={`text-lg font-medium ${variant === 'gradient' ? 'text-white/90' : 'text-slate-700'}`}>
                {stat.label}
              </div>
              {stat.description && (
                <div className={`text-sm mt-1 ${variant === 'gradient' ? 'text-white/75' : 'text-slate-600'}`}>
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;