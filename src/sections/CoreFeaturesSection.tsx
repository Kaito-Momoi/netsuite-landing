import React from 'react';
import { Cloud } from 'lucide-react';
import { CORE_FEATURES } from '../constants/netsuite-data';

/**
 * Core Features Section - NetSuite主要モジュールを表示
 */
const CoreFeaturesSection: React.FC = React.memo(() => {
  return (
    <section id="netsuite" className="relative py-24 px-6 bg-white z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
            <Cloud className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold text-blue-900">NetSuite ERP</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              基幹業務すべてを統合する
            </span>
            <br />
            <span className="text-slate-900">クラウドERP</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            会計・販売・在庫・購買・生産・プロジェクト管理など、企業活動のあらゆる業務を1つのプラットフォームで実現
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

CoreFeaturesSection.displayName = 'CoreFeaturesSection';

export default CoreFeaturesSection;
