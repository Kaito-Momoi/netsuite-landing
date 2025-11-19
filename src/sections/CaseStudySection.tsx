import React from 'react';
import { Building2, MapPin, Users, ExternalLink, Quote } from 'lucide-react';
import { CASE_STUDY } from '../constants/netsuite-data';

/**
 * Case Study Section - 導入事例を表示
 */
const CaseStudySection: React.FC = React.memo(() => {
  const handleLinkClick = (): void => {
    try {
      const newWindow = window.open(CASE_STUDY.link, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        console.error('Failed to open case study link. Please check popup blocker settings.');
      }
    } catch (error) {
      console.error('Error opening case study link:', error);
    }
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full mb-6 border border-white/20">
            <Building2 className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-bold text-white">導入事例</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {CASE_STUDY.company}
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {CASE_STUDY.headline}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Company Info & Summary */}
          <div className="space-y-8">
            {/* Company Info Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">企業情報</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">所在地</p>
                    <p className="text-white">{CASE_STUDY.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">従業員数</p>
                    <p className="text-white">{CASE_STUDY.employees}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">導入パートナー</p>
                    <p className="text-white">{CASE_STUDY.partner}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/20">
              <h3 className="text-xl font-bold text-white mb-4">導入の背景と成果</h3>
              <p className="text-slate-300 leading-relaxed">{CASE_STUDY.summary}</p>
            </div>
          </div>

          {/* Right Column - Highlights & Quote */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">主な成果</h3>
              {CASE_STUDY.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-cyan-400 flex-shrink-0">{highlight.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-slate-300 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Customer Quote */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/20">
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-slate-200 leading-relaxed mb-4 italic">
                {CASE_STUDY.quote.text}
              </p>
              <p className="text-sm text-slate-400 text-right whitespace-pre-line">
                {CASE_STUDY.quote.author}
              </p>
            </div>

            {/* External Link */}
            <button
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold transition-all group"
            >
              <span>詳細を見る</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

CaseStudySection.displayName = 'CaseStudySection';

export default CaseStudySection;
