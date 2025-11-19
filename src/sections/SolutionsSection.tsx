import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';
import { Solution } from '../types';

interface SolutionsSectionProps {
  /** Solutions to display (first 6 by default) */
  solutions: Solution[];
}

/**
 * Solutions Section - 独自開発アドオンを表示
 */
const SolutionsSection: React.FC<SolutionsSectionProps> = React.memo(({ solutions }) => {
  const navigate = useNavigate();

  const handleSolutionClick = useCallback(
    (path: string): void => {
      try {
        navigate(path);
      } catch (error) {
        console.error('Navigation error:', error);
      }
    },
    [navigate]
  );

  return (
    <section id="solutions" className="relative py-24 px-6 bg-slate-50 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-900">EvangSol Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              独自開発アドオン
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            日本企業の課題を解決する、EvangSol独自開発のNetSuite拡張機能
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.path}
              onClick={() => handleSolutionClick(solution.path)}
              className="group cursor-pointer relative bg-white backdrop-blur-xl rounded-2xl p-6 border-2 border-slate-300 hover:border-emerald-600 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="text-emerald-600 mb-4 group-hover:text-teal-600 transition-colors">
                {solution.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {solution.title}
              </h3>

              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {solution.description}
              </p>

              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm group-hover:gap-3 transition-all">
                <span>詳細を見る</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

SolutionsSection.displayName = 'SolutionsSection';

export default SolutionsSection;
