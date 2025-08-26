import React from 'react';
import { ProcessStep } from '../types';
import { CheckCircle } from 'lucide-react';

interface ProcessStepsProps {
  steps: ProcessStep[];
  variant?: 'timeline' | 'grid';
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ 
  steps, 
  variant = 'timeline' 
}) => {
  if (variant === 'grid') {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold">
                  {step.step}
                </div>
                {step.duration && (
                  <span className="ml-3 text-sm text-slate-500">
                    {step.duration}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-600">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              {step.step}
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-20 bg-sky-200 mx-auto mt-2"></div>
            )}
          </div>
          <div className="flex-grow">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                {step.duration && (
                  <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                )}
              </div>
              <p className="text-slate-600">
                {step.description}
              </p>
              {step.icon && (
                <div className="mt-4 text-sky-600">
                  {step.icon}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;