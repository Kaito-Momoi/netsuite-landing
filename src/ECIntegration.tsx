import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  Package,
  Zap,
  BarChart3,
  Database,
  Target,
  Settings,
  ShoppingCart,
  TrendingUp,
  Sparkles,
  Award,
  ArrowUpRight,
  Layers,
  Network,
  Cpu,
  Rocket,
  Play,
  Pause,
  CheckCircle,
  ChevronRight,
  Shield,
  Building,
  GitMerge,
  Activity,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import ContactModal from './components/ContactModal';
import { Feature } from './types';

// Core features
const CORE_FEATURES: Feature[] = [
  {
    icon: <Network className="w-10 h-10" />,
    title: 'オムニチャネル統合',
    description: '複数のECプラットフォームを一つのダッシュボードで完全統合管理',
    bulletPoints: ['全チャネル統合管理', 'リアルタイム同期', '統一インターフェース'],
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: 'AIインテリジェンス',
    description: 'AI が売れ筋商品を分析し、在庫配分を自動最適化',
    bulletPoints: ['売れ筋予測', '在庫自動配分', '価格最適化提案'],
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: 'リアルタイム処理',
    description: '受注から在庫更新まで、全プロセスをミリ秒単位で処理',
    bulletPoints: ['遅延ゼロ処理', '即時在庫反映', 'リアルタイム分析'],
  },
];

// Platform integrations with enhanced details
const PLATFORMS = [
  { name: 'Amazon', color: 'from-orange-500 to-yellow-500', features: ['FBA連携', 'セラーセントラル統合', 'Prime対応'] },
  { name: '楽天市場', color: 'from-red-500 to-pink-500', features: ['RMS完全対応', 'ポイント管理', 'イベント連携'] },
  { name: 'Yahoo!', color: 'from-purple-500 to-indigo-500', features: ['ストアAPI連携', 'PayPay対応', 'キャンペーン管理'] },
  { name: 'Shopify', color: 'from-green-500 to-teal-500', features: ['Admin API', 'Plus対応', 'アプリ連携'] },
  { name: 'BASE', color: 'from-blue-500 to-cyan-500', features: ['API完全対応', '決済連携', '配送管理'] },
  { name: 'STORES', color: 'from-gray-400 to-gray-100', features: ['API連携', '在庫同期', '受注管理'] },
];

// Detailed capabilities
const CAPABILITIES = [
  {
    icon: <Database className="w-8 h-8" />,
    title: '統合データベース',
    description: '全ECチャネルの商品・顧客・受注データを一元管理',
  },
  {
    icon: <GitMerge className="w-8 h-8" />,
    title: '自動マッピング',
    description: 'SKU・商品コードの自動紐付けで運用負荷を削減',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'セキュリティ',
    description: 'OAuth2.0対応、暗号化通信で安全なデータ連携',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: '統合分析',
    description: 'チャネル横断の売上・在庫・顧客分析',
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: '在庫最適化',
    description: 'AIによる需要予測と自動在庫配分',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '売上最大化',
    description: '価格戦略・在庫配分の自動最適化',
  },
];

// Success metrics
const SUCCESS_METRICS = [
  { value: '飛躍的な', label: '売上成長', sublabel: '導入後1年で達成' },
  { value: '劇的な', label: '業務効率化', sublabel: '手作業時間削減' },
  { value: '完全', label: '売り越し防止', sublabel: '在庫同期による実現' },
  { value: '大幅な', label: '利益率向上', sublabel: '最適化による改善' },
];

// Case study
const CASE_STUDY = {
  company: 'アパレルEC事業者 B社',
  challenge: '5つのECモールと自社ECを運営。在庫管理の複雑化により売り越しが頻発',
  solution: 'NetSuite EC連携基盤を導入し、全チャネルの在庫をリアルタイム一元管理',
  results: [
    { metric: '月商', before: '3,000万円', after: '9,000万円', improvement: '3倍成長' },
    { metric: '在庫回転率', before: '年4回', after: '年12回', improvement: '3倍向上' },
    { metric: '売り越し', before: '月50件', after: '0件', improvement: '完全解消' },
    { metric: '業務時間', before: '160時間/月', after: '16時間/月', improvement: '90%削減' },
  ],
  quote: 'EC連携基盤の導入により、複雑だった在庫管理が自動化され、売り越しがゼロに。業務効率が劇的に改善し、販売戦略に集中できるようになりました。',
};

// Implementation roadmap
const ROADMAP = [
  {
    phase: 'Phase 1',
    title: '要件定義',
    duration: '1-2週間',
    activities: ['ECチャネル確認', 'API仕様確認', '連携要件定義'],
    icon: <Target className="w-8 h-8" />,
  },
  {
    phase: 'Phase 2',
    title: 'API接続',
    duration: '2-3週間',
    activities: ['API認証設定', '接続テスト', 'データマッピング'],
    icon: <Network className="w-8 h-8" />,
  },
  {
    phase: 'Phase 3',
    title: 'データ移行',
    duration: '1-2週間',
    activities: ['マスタデータ移行', '在庫データ同期', '受注データ連携'],
    icon: <Database className="w-8 h-8" />,
  },
  {
    phase: 'Phase 4',
    title: '本番運用',
    duration: '継続',
    activities: ['運用開始', '監視・最適化', '継続改善'],
    icon: <Rocket className="w-8 h-8" />,
  },
];

const ECIntegration: React.FC = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);
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
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/90 via-white to-pink-50/90"></div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Network grid effect */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Interactive glow */}
        <div
          className="pointer-events-none fixed w-64 h-64 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl transition-all duration-300"
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
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-xl rounded-full border border-purple-400 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ShoppingCart className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              オムニチャネルECソリューション
            </span>
            <Sparkles className="w-5 h-5 text-yellow-600 animate-pulse" />
          </div>

          {/* Main Title with 3D effect */}
          <div className={`relative mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <div className="absolute inset-0 text-5xl md:text-7xl font-black text-purple-900/30 blur-sm transform translate-x-2 translate-y-2">
                ECデータ連携基盤
              </div>
              <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                ECデータ連携基盤
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700">
              全ECチャネルを一つに統合
            </p>
          </div>

          {/* Animated Feature Carousel */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: '6大ECモール対応', icon: <Globe className="w-8 h-8" />, gradient: 'from-purple-400 to-pink-400' },
                { text: 'リアルタイム在庫同期', icon: <Zap className="w-8 h-8" />, gradient: 'from-pink-400 to-orange-400' },
                { text: 'AI需要予測', icon: <Cpu className="w-8 h-8" />, gradient: 'from-orange-400 to-yellow-400' },
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
            className="mb-12 p-3 bg-gray-100 backdrop-blur rounded-full hover:bg-gray-200 transition-all"
            aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openContactModal}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              導入相談する
            </button>
            <button
              onClick={() => navigate('/netsuite/solutions')}
              className="px-8 py-4 bg-gray-50 border border-purple-400 text-gray-900 font-bold text-lg rounded-full hover:bg-white hover:border-purple-500 transition-all duration-300"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              3つの革新的機能
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EC事業を次のステージへ導く最先端テクノロジー
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {CORE_FEATURES.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-gray-300/50 hover:border-purple-500/50 transition-all hover:scale-105 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-purple-400">
                    <div className="text-purple-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  {feature.bulletPoints && (
                    <ul className="space-y-3">
                      {feature.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
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

      {/* Platform Integration Showcase */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent via-purple-50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              対応ECプラットフォーム
            </h2>
            <p className="text-xl text-gray-600">
              主要ECモールを完全サポート
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLATFORMS.map((platform, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredPlatform(index)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-2xl blur-xl transition-all ${hoveredPlatform === index ? 'opacity-40' : 'opacity-20'}`}></div>
                <div className="relative bg-white backdrop-blur-xl rounded-2xl p-6 border border-gray-300/50 hover:border-gray-400 transition-all">
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.name}
                  </h3>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowUpRight className="w-4 h-4 text-gray-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              充実の機能群
            </h2>
            <p className="text-xl text-gray-600">
              ECビジネスの成長を加速
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((capability, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white backdrop-blur-xl rounded-2xl p-6 border border-gray-300/50 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform border border-cyan-500/30">
                      <div className="text-cyan-600">{capability.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                      <p className="text-sm text-gray-600">{capability.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              導入成果
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {SUCCESS_METRICS.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-300">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full mb-6">
                <Award className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-600">導入成功事例</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{CASE_STUDY.company}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-purple-600 mb-4">課題</h3>
                <p className="text-gray-700 mb-6">{CASE_STUDY.challenge}</p>
                <h3 className="text-xl font-bold text-green-600 mb-4">ソリューション</h3>
                <p className="text-gray-700">{CASE_STUDY.solution}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-6">導入結果</h3>
                <div className="space-y-4">
                  {CASE_STUDY.results.map((result, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 p-3 bg-gray-50/50 rounded-lg">
                      <div className="text-sm text-gray-600">{result.metric}</div>
                      <div className="text-sm text-gray-700 line-through">{result.before}</div>
                      <div className="text-sm font-bold text-green-600">{result.after}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-300">
              <p className="text-gray-700 italic">&ldquo;{CASE_STUDY.quote}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              導入ロードマップ
            </h2>
            <p className="text-xl text-gray-600">
              最短4週間でEC統合を実現
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>

            <div className="grid lg:grid-cols-4 gap-8">
              {ROADMAP.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-white backdrop-blur-xl rounded-2xl p-6 border border-gray-300/50 hover:border-blue-400 transition-all hover:scale-105">
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="text-blue-600 mb-4">{phase.icon}</div>
                    <div className="text-sm font-bold text-blue-700 mb-2">{phase.phase}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <div className="text-sm text-orange-600 font-semibold mb-4">{phase.duration}</div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-gray-700 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{activity}</span>
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
          <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            ECビジネスの成長を
            <br />
            今すぐ加速させませんか？
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            複雑なEC運営をシンプルに、そして強力に
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openContactModal}
              className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              無料相談を予約
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-gray-50 border border-purple-400 text-gray-900 font-bold text-lg rounded-full hover:bg-white hover:border-purple-500 transition-all duration-300"
            >
              詳細資料をダウンロード
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { label: '導入実績300社以上', icon: <Building className="w-5 h-5" /> },
              { label: '売上平均3倍成長', icon: <TrendingUp className="w-5 h-5" /> },
              { label: '24/7サポート体制', icon: <Shield className="w-5 h-5" /> },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-50 backdrop-blur rounded-full border border-gray-300">
                <div className="text-yellow-600">{badge.icon}</div>
                <span className="text-sm text-gray-700">{badge.label}</span>
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

export default ECIntegration;