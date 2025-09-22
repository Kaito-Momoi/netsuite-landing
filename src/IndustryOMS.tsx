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
  Settings,
  BarChart3,
  Target,
  Zap,
  Layers,
  Globe,
  Cpu,
  Sparkles,
  Award,
  Rocket,
  Play,
  Pause,
  ChevronRight,
  TrendingUp,
  GitBranch,
  Network,
  ArrowRight,
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
    color: 'from-orange-500 to-red-500',
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
    color: 'from-purple-500 to-pink-500',
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
    color: 'from-green-500 to-teal-500',
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
    description: 'AIによる受注予測',
  },
];

// Impact metrics
const IMPACT_METRICS = [
  { value: '75%', label: '処理時間削減', sublabel: '受注処理の自動化' },
  { value: '99.8%', label: '処理精度', sublabel: 'ヒューマンエラー排除' },
  { value: '3倍', label: '処理能力向上', sublabel: '同一人員での処理量' },
  { value: '30分→3分', label: '納期回答', sublabel: '即時回答を実現' },
];

// Case study
const CASE_STUDY = {
  company: '総合商社 C社',
  industry: '商社・卸売業',
  challenge: '国内外500社以上の取引先から、日次1,000件超の受注を手作業で処理。処理遅延とミスが頻発',
  solution: '業界特化OMSを導入し、受注プロセス全体を自動化',
  results: [
    { metric: '受注処理時間', before: '平均45分/件', after: '平均3分/件', improvement: '93%削減' },
    { metric: '処理人員', before: '15名', after: '3名', improvement: '80%削減' },
    { metric: '処理ミス', before: '月間50件', after: '月間0件', improvement: '完全排除' },
    { metric: '売上', before: '月商10億円', after: '月商15億円', improvement: '50%成長' },
  ],
  quote: 'OMSの導入により、受注処理が劇的に効率化されました。スタッフは単純作業から解放され、顧客対応や営業活動に注力できるようになり、売上も大幅に向上しました。',
};

// Implementation phases
const PHASES = [
  {
    phase: 'Phase 1',
    title: '業務分析',
    duration: '2-3週間',
    activities: ['現行フロー分析', '業界要件確認', '課題抽出'],
    icon: <Target className="w-8 h-8" />,
  },
  {
    phase: 'Phase 2',
    title: 'システム設計',
    duration: '3-4週間',
    activities: ['業界別カスタマイズ', 'ワークフロー設計', 'マスタ設計'],
    icon: <Settings className="w-8 h-8" />,
  },
  {
    phase: 'Phase 3',
    title: '実装・連携',
    duration: '4-6週間',
    activities: ['NetSuite実装', '既存システム連携', 'テスト実施'],
    icon: <Network className="w-8 h-8" />,
  },
  {
    phase: 'Phase 4',
    title: '運用開始',
    duration: '継続',
    activities: ['段階的移行', 'トレーニング', '継続最適化'],
    icon: <Rocket className="w-8 h-8" />,
  },
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-black to-blue-950/90"></div>

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
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 backdrop-blur-xl rounded-full border border-indigo-500/30 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Package className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              業界別受注管理ソリューション
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>

          {/* Main Title with 3D effect */}
          <div className={`relative mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <div className="absolute inset-0 text-5xl md:text-7xl font-black text-indigo-900/30 blur-sm transform translate-x-2 translate-y-2">
                業界特化OMS
              </div>
              <span className="relative bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                業界特化OMS
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300">
              あなたの業界に、完璧な受注管理を
            </p>
          </div>

          {/* Animated Feature Carousel */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: '業界別テンプレート', icon: <Layers className="w-8 h-8" />, gradient: 'from-indigo-400 to-blue-400' },
                { text: '全チャネル統合', icon: <Globe className="w-8 h-8" />, gradient: 'from-blue-400 to-cyan-400' },
                { text: 'AI自動処理', icon: <Cpu className="w-8 h-8" />, gradient: 'from-cyan-400 to-teal-400' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute flex items-center gap-4 transition-all duration-1000 ${activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient}`}>
                    <div className="text-black">{item.icon}</div>
                  </div>
                  <span className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Play/Pause control */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mb-12 p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all"
            aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openContactModal}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              業界別デモを見る
            </button>
            <button
              onClick={() => navigate('/netsuite/solutions')}
              className="px-8 py-4 bg-gray-900/70 border border-indigo-500/30 text-white font-bold text-lg rounded-full hover:bg-gray-900/90 hover:border-indigo-400/60 transition-all duration-300"
            >
              ソリューション一覧へ
            </button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              3つのコア機能
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              業界の常識を変える、次世代受注管理システム
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {CORE_FEATURES.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all hover:scale-105 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-indigo-500/30">
                    <div className="text-indigo-400">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  {feature.bulletPoints && (
                    <ul className="space-y-3">
                      {feature.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{point}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              業界別ソリューション
            </h2>
            <p className="text-xl text-gray-400">
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
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <div className="text-white">{industry.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                  <div className="space-y-3">
                    {industry.features.map((feature, idx) => (
                      <div key={idx}>
                        <div className="font-semibold text-white mb-1">{feature.title}</div>
                        <div className="text-xs text-gray-400">{feature.desc}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              高度な機能群
            </h2>
            <p className="text-xl text-gray-400">
              受注管理のあらゆる課題を解決
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((capability, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform border border-cyan-500/30">
                      <div className="text-cyan-400">{capability.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                      <p className="text-sm text-gray-400">{capability.description}</p>
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
          <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-12 border border-indigo-500/20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              導入効果
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {IMPACT_METRICS.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-bold text-white mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-400">{metric.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full mb-6">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold text-green-400">導入成功事例</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{CASE_STUDY.company}</h2>
              <p className="text-gray-400">{CASE_STUDY.industry}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-4">課題</h3>
                <p className="text-gray-300 mb-6">{CASE_STUDY.challenge}</p>
                <h3 className="text-xl font-bold text-green-400 mb-4">ソリューション</h3>
                <p className="text-gray-300">{CASE_STUDY.solution}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-6">導入結果</h3>
                <div className="space-y-4">
                  {CASE_STUDY.results.map((result, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-sm text-gray-400">{result.metric}</div>
                      <div className="text-sm text-gray-500 line-through">{result.before}</div>
                      <div className="text-sm font-bold text-green-400">{result.after}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <p className="text-gray-300 italic">&ldquo;{CASE_STUDY.quote}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              導入ロードマップ
            </h2>
            <p className="text-xl text-gray-400">
              最短2ヶ月で本番稼働を実現
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hidden lg:block"></div>

            <div className="grid lg:grid-cols-4 gap-8">
              {PHASES.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all hover:scale-105">
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="text-purple-400 mb-4">{phase.icon}</div>
                    <div className="text-sm font-bold text-purple-300 mb-2">{phase.phase}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                    <div className="text-sm text-orange-400 font-semibold mb-4">{phase.duration}</div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-xs text-gray-400">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
          <p className="text-xl text-gray-300 mb-12">
            業界のベストプラクティスを、今すぐ導入しませんか？
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openContactModal}
              className="px-10 py-5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              業界別デモを予約
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-gray-900/70 border border-indigo-500/30 text-white font-bold text-lg rounded-full hover:bg-gray-900/90 hover:border-indigo-400/60 transition-all duration-300"
            >
              詳細資料をダウンロード
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { label: '4業界対応済み', icon: <Building2 className="w-5 h-5" /> },
              { label: '導入企業200社以上', icon: <Award className="w-5 h-5" /> },
              { label: '99.8%の処理精度', icon: <Shield className="w-5 h-5" /> },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur rounded-full border border-gray-700">
                <div className="text-yellow-400">{badge.icon}</div>
                <span className="text-sm text-gray-300">{badge.label}</span>
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