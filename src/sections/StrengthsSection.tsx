import React from 'react';
import { Rocket, CheckCircle } from 'lucide-react';
import { STRENGTHS } from '../constants/netsuite-data';

/**
 * Strengths Section - EvangSolの強みを表示
 */
const StrengthsSection: React.FC = React.memo(() => {
  return (
    <section id="evangsol" className="relative py-24 px-6 bg-slate-50 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <Rocket className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold text-blue-900">EvangSol</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              NetSuiteの可能性を最大化する
            </span>
            <br />
            <span className="text-slate-900">圧倒的な開発力と実績</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            製造業特化の実績、SAP・OBICからのリプレイス経験、SuiteScriptエキスパートによる高度な開発力
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {STRENGTHS.map((strength, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 text-cyan-600 group-hover:scale-110 transition-transform">
                  {strength.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {strength.description}
                  </p>

                  {strength.bulletPoints && strength.bulletPoints.length > 0 && (
                    <ul className="space-y-2">
                      {strength.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

StrengthsSection.displayName = 'StrengthsSection';

export default StrengthsSection;
