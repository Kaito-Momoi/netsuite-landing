import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Trophy,
  Building2,
  Zap,
  Clock,
  Code,
  Cloud,
  ChevronDown,
} from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { Feature } from './types';
import { SOLUTIONS } from './constants/features';

// Static content moved out of component to reduce re-allocations on re-render
const STRENGTHS: Feature[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: '圧倒的な開発力',
    description: 'SuiteScriptエキスパートが多数在籍。複雑な業務ロジックも完全にシステム化',
    bulletPoints: ['高度なカスタマイズ開発', '複雑な業務フローの実装', '独自機能の開発'],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: '高速開発・短納期',
    description: '独自の開発フレームワークとテンプレートで、開発スピードを大幅に短縮',
    bulletPoints: ['効率的な開発プロセス', '豊富なテンプレート活用', '迅速な納品'],
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: '日本企業特有の要件に精通',
    description: '稟議・承認フロー、特殊な帳票、複雑な価格計算などに完全対応',
    bulletPoints: ['日本の商習慣に精通', '複雑な承認フロー対応', '特殊な帳票作成'],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: '全国対応拠点',
    description: '東京・札幌に活動拠点を構え、近隣企業様との対面でのやり取りが可能',
    bulletPoints: ['東京・札幌の2拠点体制', '対面サポート可能', '認識齟齬なく円滑な進行'],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'グループ総合力',
    description: 'グループ会社EvangTechとの連携によるワンストップサービス',
    bulletPoints: ['システム開発からERP導入まで', 'ワンストップ対応', '総合的なIT支援'],
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'ヒアリング・要件定義',
    description: '現状の業務プロセスを分析し、最適な導入計画を策定',
    duration: '1-2ヶ月',
  },
  {
    step: '02',
    title: 'システム設計・構築',
    description: 'NetSuiteの設定とカスタマイズ開発を実施',
    duration: '2-3ヶ月',
  },
  {
    step: '03',
    title: 'データ移行・テスト',
    description: '既存システムからのデータ移行と動作検証',
    duration: '1-2ヶ月',
  },
  {
    step: '04',
    title: '本稼働・サポート',
    description: '本番稼働後も継続的な改善サポートを提供',
    duration: '継続',
  },
];

// Removed unused testimonials to reduce bundle and warnings

const EvangSolStrengths: React.FC = () => {
  const navigate = useNavigate();

  // Stats section removed as per request
  const goContact = useCallback(() => navigate('/contact'), [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <NavigationBar showBackButton={false} variant="page" />

      {/* Why Perfect Match */}
      <section className="relative min-h-screen flex items-center px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              NetSuite × EvangSol = 最強の組み合わせ
            </h2>
            <p className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold text-orange-600">NetSuiteの高いカスタマイズ性</span>を
              <span className="font-bold text-red-600">EvangSolの圧倒的な開発力</span>で
              <br />
              100%活用し、あなたの業務に完全フィットするシステムを実現
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">NetSuiteの強み</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">無限のカスタマイズ性</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">強力な開発ツール</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">柔軟なAPI連携</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 shadow-xl border-2 border-red-300 transform scale-105">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">相乗効果</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="font-bold text-slate-800">業務に100%フィット</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="font-bold text-slate-800">運用負荷80%削減</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="font-bold text-slate-800">ROI 200%以上</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">EvangSolの強み</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">高度な開発技術</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">日本企業の理解</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">迅速な実装力</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm text-slate-500 font-medium mb-2 tracking-wider">SCROLL</span>
            <ChevronDown className="w-8 h-8 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Removed Stats Section and extra dividers */}

      {/* Core Strengths */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-sky-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              EvangSolの開発力が選ばれる5つの理由
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              圧倒的な技術力でNetSuiteのポテンシャルを最大限引き出します
            </p>
          </div>

          {/* Custom Strengths Grid with 5 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {STRENGTHS.map((strength) => (
              <div
                key={strength.title}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient bar at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500"></div>

                <div className="p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-sky-600">
                    {strength.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{strength.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {strength.description}
                  </p>

                  {/* Bullet points */}
                  {strength.bulletPoints && (
                    <ul className="space-y-2">
                      {strength.bulletPoints.map((point) => (
                        <li key={point} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-xs text-slate-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Solutions */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              EvangSolオリジナルソリューション
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              日本企業の商習慣に合わせて独自開発した、NetSuite拡張ソリューション
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution) => (
              <div
                key={solution.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group cursor-pointer"
                onClick={() => navigate(solution.path)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-sky-600">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 mb-4">{solution.description}</p>
                <div className="flex items-center text-sky-600 font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">確実な導入プロセス</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              段階的なアプローチで、リスクを最小限に抑えながら確実に導入
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="relative">
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-sky-300 to-sky-300/0 -z-10"></div>
                )}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-semibold">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="NetSuite導入をご検討中ですか？"
        description="豊富な実績と高度な技術力を持つEvangSolが、貴社のDXを成功に導きます"
        primaryButtonText="お問い合わせ"
        primaryButtonAction={goContact}
      />

      <Footer />
    </div>
  );
};

export default React.memo(EvangSolStrengths);
// If desired, we could wrap with React.memo to avoid rerenders:
// export default React.memo(EvangSolStrengths);
