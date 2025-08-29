import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, Cloud, BarChart3, Package, Users, TrendingUp,
  CheckCircle, ArrowRight, Zap, Settings, Calculator,
  ShoppingCart, Truck, Factory, Store, Briefcase,
  Code, Sparkles, AlertTriangle
} from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { FeatureGrid } from './components/FeatureCard';
import { Feature } from './types';

const WhatIsNetSuite: React.FC = () => {
  const navigate = useNavigate();

  const coreFeatures: Feature[] = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "財務会計",
      description: "リアルタイムの財務レポートと多通貨対応で、グローバルビジネスを支援"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "在庫管理",
      description: "複数拠点の在庫をリアルタイムで把握し、適正在庫を維持"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "受注管理",
      description: "受注から出荷まで一元管理し、顧客満足度を向上"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM",
      description: "顧客情報を一元化し、営業活動を効率化"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Eコマース",
      description: "B2B/B2C両方に対応したオムニチャネル展開"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "BI・分析",
      description: "経営ダッシュボードでKPIをリアルタイムに可視化"
    }
  ];

  const industries = [
    { name: '製造業', icon: <Factory className="w-6 h-6" /> },
    { name: '小売業', icon: <Store className="w-6 h-6" /> },
    { name: '卸売業', icon: <Truck className="w-6 h-6" /> },
    { name: 'サービス業', icon: <Briefcase className="w-6 h-6" /> },
    { name: 'IT・ソフトウェア', icon: <Globe className="w-6 h-6" /> },
  ];

  // Removed unused benefits array

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <NavigationBar showBackButton={false} variant="page" />

      {/* Hero Section */}
      <HeroSection
        title="NetSuiteの革新的な強み"
        subtitle="独自のビジネスモデルに寄り添う柔軟性"
      />


      {/* Customization Power */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              あなたの業務に合わせて自由自在にカスタマイズ
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              企業独自のプロセスや商習慣をそのままシステム化。運用負担を大幅に削減
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Code className="w-12 h-12 text-orange-600" />,
                title: 'SuiteScript',
                description: 'JavaScriptベースのスクリプト言語で複雑な業務ロジックを実装',
                features: ['イベントトリガー', 'スケジュール実行', 'REST API連携']
              },
              {
                icon: <Settings className="w-12 h-12 text-orange-600" />,
                title: 'SuiteFlow',
                description: 'ドラッグ&ドロップでワークフローを視覚的に設計',
                features: ['承認フロー', '自動通知', '条件分岐']
              },
              {
                icon: <Globe className="w-12 h-12 text-orange-600" />,
                title: 'SuiteTalk',
                description: 'WebサービスAPIで外部システムとシームレスに連携',
                features: ['SOAP/REST API', 'リアルタイム同期', 'データ一括処理']
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className="mb-6">{tool.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{tool.title}</h3>
                <p className="text-slate-600 mb-6">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                カスタマイズで実現できること
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {[
                  { title: '独自の承認フロー', desc: '日本企業特有の稟議・決裁プロセス' },
                  { title: '特殊な価格計算', desc: '複雑なリベートや数量割引' },
                  { title: '業界固有の帳票', desc: 'フォーマットや項目を自由に設計' },
                  { title: '既存システム連携', desc: 'APIであらゆるシステムと接続' }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4">
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                カスタマイズ性が高い = 開発力が重要
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
                NetSuiteのポテンシャルを最大限引き出すには、
                <span className="font-bold text-slate-900">高度な開発スキルを持つパートナー選び</span>が成功の鍵
              </p>
              <div className="text-sm bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 rounded-full inline-block mb-8">
                <span className="font-semibold text-orange-700">✨ 2024年最新：AI・機械学習機能が大幅強化され、カスタマイズの可能性がさらに拡大</span>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                {[
                  { 
                    icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
                    title: '開発力が乏しい場合',
                    items: ['標準機能で妥協', '手作業が残る', '効果が限定的']
                  },
                  { 
                    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
                    title: '開発力が高い場合',
                    items: ['業務に完全フィット', '完全自動化', 'ROI最大化']
                  },
                  { 
                    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                    title: '結果の違い',
                    items: ['導入コスト50%削減', '運用工数80%削減', '生産性200%向上']
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                    <ul className="space-y-2">
                      {item.items.map((point, idx) => (
                        <li key={idx} className="text-sm text-slate-600">• {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Link to EvangSol Strengths */}
              <div className="mt-12">
                <button
                  onClick={() => navigate('/evangsol-strengths')}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  NetSuiteとEvangSolの親和性を見る
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Core Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              NetSuiteの主要機能
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              企業の成長に必要なすべての機能を統合プラットフォームで提供
            </p>
          </div>
          <FeatureGrid features={coreFeatures} />
        </div>
      </section>


      {/* Industry Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              業界別ソリューション
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              各業界の特性に最適化された機能を提供
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6 text-center hover:border-sky-400 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="font-bold text-slate-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Global Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">NetSuiteの実績</h2>
            <p className="text-xl opacity-90">世界中の企業から信頼される理由</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '38,000+', label: '導入企業数' },
              { number: '220+', label: '対応国・地域' },
              { number: '27', label: '対応言語' },
              { number: '190+', label: '対応通貨' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Cloud Benefits with 2024 Updates */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-slate-50 to-sky-50 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full text-green-700 font-semibold mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  2024年最新アップデート
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  クラウドERPのメリット
                </h3>
                <ul className="space-y-4">
                  {[
                    { title: '初期投資を抑制', desc: 'サーバー購入やシステム構築が不要' },
                    { title: '自動アップデート', desc: '年間2回のメジャーアップデートで最新機能' },
                    { title: 'AI機能統合', desc: '2024年生成AI機能を大幅強化' },
                    { title: 'どこでもアクセス', desc: 'モバイルアプリでいつでも業務可能' },
                    { title: '災害対策', desc: 'データセンターでの安全なデータ管理' },
                    { title: 'スケーラビリティ', desc: 'スタートアップからIPO後まで対応' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900">{item.title}：</span>
                        <span className="text-slate-600">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <Cloud className="w-16 h-16 text-sky-600 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-center text-slate-900 mb-4">
                    Oracle Cloud Infrastructure
                  </h4>
                  <p className="text-slate-600 text-center mb-4">
                    世界最高水準のセキュリティと可用性を誇るOracleのクラウド基盤で運用
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 text-center">
                    <p className="text-sm font-semibold text-orange-700">
                      🎯 日本向けローカライゼーション強化
                    </p>
                    <p className="text-xs text-orange-600 mt-1">
                      2024年7月発表
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="NetSuiteで業務を変革しませんか？"
        description="EvangSolは豊富な導入実績と技術力で、お客様のNetSuite導入を成功に導きます"
        primaryButtonText="EvangSolの強みを見る"
        primaryButtonAction={() => navigate('/evangsol-strengths')}
        secondaryButtonText="お問い合わせ"
        secondaryButtonAction={() => navigate('/contact')}
      />

      <Footer />
    </div>
  );
};

export default WhatIsNetSuite;
