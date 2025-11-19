import React, { useState } from 'react';
import { Zap, ChevronDown, CheckCircle } from 'lucide-react';
import { AGILE_QA } from '../constants/netsuite-data';

/**
 * Agile Process Section - アジャイル導入プロセスのQ&Aを表示
 */
const AgileProcessSection: React.FC = React.memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="matching" className="relative py-24 px-6 bg-white z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold text-blue-900">アジャイル導入</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              柔軟で確実な
            </span>
            <br />
            <span className="text-slate-900">アジャイル導入プロセス</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            不確実性を受け入れ、段階的に価値を提供しながら確実にゴールへ
          </p>
        </div>

        {/* Q&A Accordion */}
        <div className="space-y-4">
          {AGILE_QA.map((qa, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-slate-200 hover:border-cyan-500 transition-all overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0 text-cyan-600">{qa.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900">{qa.question}</h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-slate-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer Panel */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-6 pb-6 border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed mt-4 mb-6">{qa.answer}</p>

                  {qa.details && qa.details.length > 0 && (
                    <ul className="space-y-2">
                      {qa.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                          <span>{detail}</span>
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

AgileProcessSection.displayName = 'AgileProcessSection';

export default AgileProcessSection;
