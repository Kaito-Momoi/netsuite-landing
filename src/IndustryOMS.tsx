import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Package,
  Shield,
  Database,
  CheckCircle,
  Building2,
  Truck,
  ShoppingBag,
  Factory,
  BarChart3,
  Zap,
  Layers,
  Globe,
  Cpu,
  Sparkles,
  Award,
  Rocket,
  Play,
  Pause,
  TrendingUp,
  GitBranch,
  Network,
  ArrowRight,
  Mail,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import ContactModal from './components/ContactModal';
import { Feature } from './types';

// Core features
const CORE_FEATURES: Feature[] = [
  {
    icon: <Layers className="w-10 h-10" />,
    title: '業界別最適化エンジン',
    description: '製造・卸売・小売・商社など、各業界の商習慣を完全にシステム化',
    bulletPoints: ['業界別テンプレート', '商習慣自動対応', 'カスタムワークフロー'],
  },
  {
    icon: <Network className="w-10 h-10" />,
    title: '全チャネル統合',
    description: '電話・FAX・メール・EDI・ECサイトの受注を一つのプラットフォームに統合',
    bulletPoints: ['マルチチャネル対応', '自動データ変換', 'リアルタイム連携'],
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: 'AI受注処理',
    description: 'AIが受注パターンを学習し、処理を自動化・最適化',
    bulletPoints: ['パターン認識', '自動振り分け', '異常検知'],
  },
];

// Industry solutions with detailed features
const INDUSTRIES = [
  {
    icon: <Factory className="w-12 h-12" />,
    name: '製造業',
    color: 'from-blue-500 to-indigo-500',
    features: [
      { title: 'BOM管理', desc: '複雑な部品構成を完全管理' },
      { title: 'ロット追跡', desc: '製造ロットの完全トレース' },
      { title: '納期回答AI', desc: '生産計画連動の自動納期回答' },
      { title: 'カスタム製造', desc: '個別仕様製品の受注管理' },
    ],
  },
  {
    icon: <Truck className="w-12 h-12" />,
    name: '卸売業',
    color: 'from-blue-500 to-indigo-500',
    features: [
      { title: '多段階価格', desc: '取引先別の価格体系管理' },
      { title: 'リベート管理', desc: '複雑なリベート計算を自動化' },
      { title: '直送管理', desc: 'メーカー直送の一元管理' },
      { title: 'EDI完全対応', desc: '大手取引先のEDI要件対応' },
    ],
  },
  {
    icon: <ShoppingBag className="w-12 h-12" />,
    name: '小売業',
    color: 'from-blue-500 to-indigo-500',
    features: [
      { title: '店舗在庫連携', desc: '全店舗の在庫をリアルタイム管理' },
      { title: 'オムニチャネル', desc: '店舗・EC完全統合' },
      { title: 'セット商品', desc: '複雑なセット商品の在庫管理' },
      { title: '予約販売', desc: '予約・取り置き管理機能' },
    ],
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    name: '商社',
    color: 'from-green-500 to-indigo-500',
    features: [
      { title: '貿易管理', desc: '輸出入業務の完全サポート' },
      { title: '為替管理', desc: 'マルチカレンシー対応' },
      { title: 'コミッション', desc: '複雑な手数料計算' },
      { title: '三国間貿易', desc: '複雑な商流に完全対応' },
    ],
  },
];

// Advanced capabilities
const CAPABILITIES = [
  {
    icon: <Database className="w-8 h-8" />,
    title: '統合マスタ管理',
    description: '商品・顧客・価格マスタを一元管理',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: '与信リスク管理',
    description: '取引先の与信を自動チェック',
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: '承認ワークフロー',
    description: '業界別の承認フローを自動化',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'リアルタイム分析',
    description: '受注状況を即座に可視化',
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: '在庫自動引当',
    description: '最適な在庫から自動引当',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '需要予測',
    description: 'データ分析による受注予測',
  },
];

// Impact metrics
const IMPACT_METRICS = [
  { value: '大幅な', label: '処理時間削減', sublabel: '受注処理の自動化' },
  { value: '極めて高い', label: '処理精度', sublabel: 'ヒューマンエラー排除' },
  { value: '飛躍的な', label: '処理能力向上', sublabel: '同一人員での処理量' },
  { value: '迅速な', label: '納期回答', sublabel: '即時回答を実現' },
];



const IndustryOMS: React.FC = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const openContactModal = useCallback(() => setIsContactModalOpen(true), []);
  const closeContactModal = useCallback(() => setIsContactModalOpen(false), []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/90"></div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80h-80z' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='rgba(255,255,255,0.2)'/%3E%3Ccircle cx='90' cy='10' r='2' fill='rgba(255,255,255,0.2)'/%3E%3Ccircle cx='90' cy='90' r='2' fill='rgba(255,255,255,0.2)'/%3E%3Ccircle cx='10' cy='90' r='2' fill='rgba(255,255,255,0.2)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Interactive glow */}
        <div
          className="pointer-events-none fixed w-64 h-64 bg-gradient-radial from-indigo-500/20 to-transparent rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 128}px`,
            top: `${mousePosition.y - 128}px`,
          }}
        />
      </div>

      <ModernNavigationBar
        showBackButton={true}
        variant="page"
        onContactClick={openContactModal}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 backdrop-blur-xl rounded-full border-2 border-indigo-400 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Package className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              業界別受注管理ソリューション
            </span>
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          </div>

          {/* Main Title with 3D effect */}
          <div className={`relative mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                業界特化OMS
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-800">
              あなたの業界に、完璧な受注管理を
            </p>
          </div>

          {/* Animated Feature Carousel */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: '業界別テンプレート', icon: <Layers className="w-8 h-8" />, gradient: 'from-indigo-400 to-blue-400' },
                { text: '全チャネル統合', icon: <Globe className="w-8 h-8" />, gradient: 'from-blue-600 to-indigo-600' },
                { text: 'スマート自動処理', icon: <Cpu className="w-8 h-8" />, gradient: 'from-cyan-400 to-teal-400' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute flex items-center gap-4 transition-all duration-1000 ${activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient}`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <span className={`text-3xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Play/Pause control */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mb-12 p-3 bg-gray-50 backdrop-blur rounded-full hover:bg-slate-200 transition-all"
            aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

        </div>
      </section>

      {/* Core Features */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              3つのコア機能
            </h2>
            <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto">
              業界の常識を変える、次世代受注管理システム
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {CORE_FEATURES.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border-2 border-slate-300/50 hover:border-indigo-500/50 transition-all hover:scale-105 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border-2 border-indigo-400">
                    <div className="text-indigo-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-4">{feature.title}</h3>
                  <p className="text-slate-800 mb-6">{feature.description}</p>
                  {feature.bulletPoints && (
                    <ul className="space-y-3">
                      {feature.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-slate-800">{point}</span>
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

      {/* Industry Solutions Showcase */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              業界別ソリューション
            </h2>
            <p className="text-xl text-slate-900 font-bold">
              各業界の特性に完全対応
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} rounded-3xl blur-xl transition-all ${hoveredIndustry === index ? 'opacity-40' : 'opacity-20'}`}></div>
                <div className="relative bg-white backdrop-blur-xl rounded-3xl p-6 border-2 border-slate-300/50 hover:border-gray-400 transition-all h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <div className="text-slate-900">{industry.icon}</div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-4">{industry.name}</h3>
                  <div className="space-y-3">
                    {industry.features.map((feature, idx) => (
                      <div key={idx}>
                        <div className="font-semibold text-slate-900 mb-1">{feature.title}</div>
                        <div className="text-xs text-slate-800">{feature.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              高度な機能群
            </h2>
            <p className="text-xl text-slate-900 font-bold">
              受注管理のあらゆる課題を解決
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((capability, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white backdrop-blur-xl rounded-2xl p-6 border-2 border-slate-300/50 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform border-2 border-cyan-400">
                      <div className="text-blue-600">{capability.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{capability.title}</h3>
                      <p className="text-sm text-slate-900 font-medium">{capability.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-12 border-2 border-indigo-500/20">
            <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              導入効果
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {IMPACT_METRICS.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-slate-900 font-medium">{metric.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            あなたの業界に特化した
            <br />
            完璧な受注管理を実現
          </h2>
          <p className="text-xl text-slate-900 font-bold mb-12">
            業界のベストプラクティスを、今すぐ導入しませんか？
          </p>
          <div className="flex justify-center">
            <button
              onClick={openContactModal}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              お問い合わせ
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { label: '4業界対応済み', icon: <Building2 className="w-5 h-5" /> },
              { label: '導入企業200社以上', icon: <Award className="w-5 h-5" /> },
              { label: '99.8%の処理精度', icon: <Shield className="w-5 h-5" /> },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white backdrop-blur rounded-full border-2 border-slate-300">
                <div className="text-blue-600">{badge.icon}</div>
                <span className="text-sm text-slate-900 font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default IndustryOMS;