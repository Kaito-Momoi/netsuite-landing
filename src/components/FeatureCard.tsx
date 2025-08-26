import React from 'react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'gradient';
}

const FeatureCard: React.FC<FeatureCardProps> = React.memo(({ 
  feature, 
  size = 'medium',
  variant = 'default' 
}) => {
  const sizeClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };

  const iconSizeClasses = {
    small: 'w-10 h-10',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const titleSizeClasses = {
    small: 'text-base',
    medium: 'text-lg',
    large: 'text-xl'
  };

  const baseClasses = variant === 'gradient' 
    ? 'bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200'
    : 'bg-white shadow-lg hover:shadow-xl';

  return (
    <div className={`rounded-xl ${baseClasses} ${sizeClasses[size]} transition-all`}>
      <div className={`${iconSizeClasses[size]} bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-sky-600`}>
        {feature.icon}
      </div>
      <h3 className={`${titleSizeClasses[size]} font-bold mb-2 text-slate-900`}>
        {feature.title}
      </h3>
      <p className="text-sm text-slate-600">
        {feature.description}
      </p>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'gradient';
}

export const FeatureGrid: React.FC<FeatureGridProps> = React.memo(({ 
  features, 
  columns = 3,
  size = 'medium',
  variant = 'default'
}) => {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-6`}>
      {features.map((feature, index) => (
        <FeatureCard 
          key={index} 
          feature={feature} 
          size={size}
          variant={variant}
        />
      ))}
    </div>
  );
});

FeatureGrid.displayName = 'FeatureGrid';

export default FeatureCard;