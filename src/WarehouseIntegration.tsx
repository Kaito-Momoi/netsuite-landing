import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Warehouse,
  Scan,
  MapPin,
  Database,
  Package,
  Smartphone,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Trophy,
  Building2,
  Zap,
  Clock,
  Shield,
  Rocket,
  Target,
  Lightbulb,
  Award,
  HeartHandshake,
  MousePointer,
  Play,
  Pause,
  Code,
  Settings,
  BarChart3,
  Truck,
  Star,
  Quote,
  Wifi,
  Activity,
  Layers,
  Radio,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import ContactModal from './components/ContactModal';

// Core Features for Warehouse Integration
const CORE_FEATURES = [
  {
    icon: <Scan className="w-8 h-8" />,
    title: 'スキャンシステム',
    description: 'ハンディターミナルでのスキャンにより99.9%の精度で正確な入出荷処理を実現',
    bulletPoints: ['バーコード・QRコード対応', '99.9%の精度保証', 'リアルタイム更新'],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'リアルタイム同期',
    description: '倉庫管理システムとNetSuiteをリアルタイムで同期し、在庫精度99.9%を達成',
    bulletPoints: ['即座のデータ同期', '在庫情報の統一', 'エラー自動検出'],
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'ロケーション管理',
    description: '倉庫内の棚番地管理でピッキング時間6割短縮を実現',
    bulletPoints: ['詳細な位置管理', 'ピッキングルート最適化', '作業効率化'],
  },
];

// Advanced Capabilities
const ADVANCED_CAPABILITIES = [
  {
    icon: <Package className="w-6 h-6" />,
    title: '多様なデバイス対応',
    description: 'ハンディターミナル、タブレット、音声ピッキングなど多様なデバイスに対応',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: '高精度ピッキング',
    description: 'バーコード・QRコードスキャンで誤出荷率を0.01%以下に抑制',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'モバイル対応',
    description: 'スマートフォンやタブレットでの作業が可能、場所を選ばない柔軟性',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'WMS連携',
    description: '主要WMSベンダーとの標準連携で既存システムを活用',
  },
  {
    icon: <Radio className="w-6 h-6" />,
    title: '音声ピッキング',
    description: '音声認識システムによるハンズフリー作業で効率性を向上',
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: 'IoT連携',
    description: 'RFID、センサーなどのIoTデバイスと連携した自動化',
  },
];

// Impact Metrics
const IMPACT_METRICS = [
  { value: '極めて高い', label: '在庫精度', description: 'バーコード管理による精度向上', color: 'from-amber-400 to-orange-400' },
  { value: '大幅な', label: '作業時間短縮', description: 'ピッキング効率の改善', color: 'from-orange-400 to-red-400' },
  { value: '劇的な', label: '誤出荷削減', description: 'スキャンによる検品強化', color: 'from-red-400 to-pink-400' },
  { value: 'リアルタイム', label: '在庫可視化', description: '即時の在庫情報更新', color: 'from-pink-400 to-purple-400' },
];

// Case Study
const CASE_STUDY = {
  company: '株式会社ロジスティクスプロ',
  industry: '3PL物流業',
  headline: '倉庫作業のデジタル化で作業効率60%向上と誤出荷98%削減を実現',
  summary: '複数の顧客商品を扱う3PL事業において、従来の紙ベース作業からNetSuite連携のデジタル倉庫システムに移行。ハンディターミナルとリアルタイム同期により、作業の正確性と効率性を飛躍的に向上。',
  location: '〒135-0061 東京都江東区豊洲3-3-3',
  employees: '200～499名',
  results: {
    before: {
      title: '導入前の課題',
      metrics: [
        { label: 'ピッキング時間', value: '20分/オーダー', color: 'text-red-400' },
        { label: '誤出荷率', value: '2.5%', color: 'text-red-400' },
        { label: '在庫精度', value: '92%', color: 'text-red-400' },
        { label: '棚卸し作業', value: '3日間', color: 'text-red-400' },
      ],
    },
    after: {
      title: '導入後の成果',
      metrics: [
        { label: 'ピッキング時間', value: '8分/オーダー', color: 'text-amber-400' },
        { label: '誤出荷率', value: '0.05%', color: 'text-amber-400' },
        { label: '在庫精度', value: '99.9%', color: 'text-amber-400' },
        { label: '棚卸し作業', value: '4時間', color: 'text-amber-400' },
      ],
    },
  },
  quote: {
    text: '「NetSuiteとの連携により、倉庫作業が劇的に変わりました。ピッキング時間が60%短縮され、誤出荷もほぼゼロになったことで、顧客満足度が大幅に向上し、新規顧客の獲得にもつながっています。デジタル化の効果を実感しています。」',
    author: '株式会社ロジスティクスプロ オペレーション部長 佐藤 美咲 氏',
  },
};

// Implementation Roadmap
const IMPLEMENTATION_PHASES = [
  {
    phase: 'Phase 1',
    title: '業務分析・要件定義',
    duration: '2-3週間',
    description: '現在の倉庫オペレーションを詳細に分析し、最適化ポイントを特定',
    icon: <MousePointer className="w-8 h-8" />,
    deliverables: ['現状業務フロー分析', 'WMS・機器の調査', '要件定義書作成'],
  },
  {
    phase: 'Phase 2',
    title: 'システム設計・開発',
    duration: '4-6週間',
    description: 'NetSuiteとWMSの連携システムを設計・開発',
    icon: <Code className="w-8 h-8" />,
    deliverables: ['システム設計書', 'API連携開発', 'UI/UX設計'],
  },
  {
    phase: 'Phase 3',
    title: '機器導入・連携テスト',
    duration: '3-4週間',
    description: 'ハンディターミナルなどの機器導入と連携テストを実施',
    icon: <Database className="w-8 h-8" />,
    deliverables: ['機器設定・テスト', 'データ連携確認', '動作検証'],
  },
  {
    phase: 'Phase 4',
    title: '本稼働・運用開始',
    duration: '継続的',
    description: '本番運用開始後の継続的な改善とサポートを提供',
    icon: <Rocket className="w-8 h-8" />,
    deliverables: ['スタッフトレーニング', '本稼働開始', '継続的改善サポート'],
  },
];

const WarehouseIntegration: React.FC = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsVisible(true);
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-orange-900/20"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Particle field */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Interactive cursor glow */}
        <div
          className="pointer-events-none fixed w-64 h-64 bg-gradient-radial from-amber-500/20 to-transparent rounded-full blur-3xl transition-all duration-200 z-0"
          style={{
            left: `${Math.max(0, Math.min(mousePosition.x - 128, window.innerWidth - 256))}px`,
            top: `${mousePosition.y - 128}px`,
          }}
        />
      </div>

      <ModernNavigationBar
        showBackButton={true}
        variant="page"
        onContactClick={openContactModal}
      />

      {/* Hero Section with Enhanced 3D Typography */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-xl rounded-full border border-amber-500/30 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Warehouse className="w-5 h-5 text-amber-400 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              物流・倉庫特化 統合ソリューション
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>

          {/* 3D Title */}
          <div className={`relative mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black">
              {/* 3D Shadow layers */}
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-amber-900/20 blur-sm transform translate-x-4 translate-y-4">
                倉庫統合の革新
              </div>
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-orange-900/20 blur-sm transform -translate-x-2 translate-y-2">
                倉庫統合の革新
              </div>
              <span className="relative bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient">
                倉庫統合の革新
              </span>
            </h1>
          </div>

          {/* Subtitle with animation */}
          <p className={`text-2xl md:text-3xl mb-4 text-gray-300 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            デジタル化で実現する物流最適化
          </p>

          {/* Animated feature rotator */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: 'スキャンシステム', icon: <Scan />, gradient: 'from-amber-400 to-orange-400' },
                { text: 'リアルタイム同期', icon: <Database />, gradient: 'from-orange-400 to-red-400' },
                { text: 'ロケーション管理', icon: <MapPin />, gradient: 'from-red-400 to-pink-400' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute flex items-center gap-4 transition-all duration-1000 ${activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient}`}>
                    {React.cloneElement(item.icon, { className: 'w-8 h-8 text-black' })}
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

          {/* Call to Action */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={openContactModal}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              無料診断を開始
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* Core Features Section */}
          <div className="space-y-20">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                革新的な倉庫統合機能
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                物流・倉庫業務をデジタル技術で革新し、効率性と精度を飛躍的に向上
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {CORE_FEATURES.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-amber-500/50 transition-all hover:scale-105 h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>

                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-amber-500/30">
                      <div className="text-amber-400">{feature.icon}</div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>

                    <ul className="space-y-2">
                      {feature.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Capabilities Grid */}
          <div className="space-y-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                高度な機能群
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                倉庫業務を革新する包括的ソリューション
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADVANCED_CAPABILITIES.map((capability, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredCapability(index)}
                  onMouseLeave={() => setHoveredCapability(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-xl blur-xl transition-all ${hoveredCapability === index ? 'opacity-40' : 'opacity-20'}`}></div>
                  <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition-all hover:scale-105 h-full">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-amber-100/10 to-orange-100/10 p-3 rounded-lg mr-4 border border-amber-500/20">
                        <div className="text-amber-400">{capability.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{capability.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics Section */}
          <div ref={statsRef} className="space-y-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                導入効果
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {IMPACT_METRICS.map((metric, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${metric.color} mb-4`}>
                      <TrendingUp className="w-10 h-10 text-black" />
                    </div>
                    <div className={`text-3xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{metric.label}</div>
                    <div className="text-sm text-gray-400">{metric.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Section */}
          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-xl rounded-3xl p-12 border border-amber-500/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-400/30 rounded-full text-sm font-semibold text-amber-200 mb-6">
                <Trophy className="w-4 h-4" />
                導入事例
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                成功事例
              </h2>
            </div>

            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 items-start mb-12">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">{CASE_STUDY.company}</h3>
                <p className="text-sm text-amber-200 mb-2">{CASE_STUDY.industry}</p>
                <p className="text-lg text-amber-200 font-semibold mb-6">{CASE_STUDY.headline}</p>
                <p className="text-gray-200 leading-relaxed mb-6">{CASE_STUDY.summary}</p>

                <div className="flex flex-wrap gap-3 text-sm text-gray-200 mb-8">
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/60 border border-amber-400/20 rounded-full">
                    <Building2 className="w-4 h-4 text-amber-300" />
                    <span>{CASE_STUDY.location}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/60 border border-amber-400/20 rounded-full">
                    <Warehouse className="w-4 h-4 text-amber-300" />
                    <span>{CASE_STUDY.employees}</span>
                  </div>
                </div>

                <button
                  onClick={openContactModal}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105 transition-all"
                >
                  <Rocket className="w-4 h-4" />
                  同様の成果を実現する
                </button>
              </div>

              <div className="bg-gray-900/70 border border-amber-400/20 rounded-2xl p-6">
                <div className="text-amber-300 mb-4">
                  <Quote className="w-8 h-8" />
                </div>
                <p className="text-gray-100 leading-relaxed italic mb-6">
                  {CASE_STUDY.quote.text}
                </p>
                <p className="text-sm text-gray-400">{CASE_STUDY.quote.author}</p>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-300 mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  {CASE_STUDY.results.before.title}
                </h4>
                <div className="space-y-4">
                  {CASE_STUDY.results.before.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-300">{metric.label}</span>
                      <span className={`font-bold ${metric.color}`}>{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-amber-300 mb-6 flex items-center gap-3">
                  <Trophy className="w-6 h-6" />
                  {CASE_STUDY.results.after.title}
                </h4>
                <div className="space-y-4">
                  {CASE_STUDY.results.after.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-300">{metric.label}</span>
                      <span className={`font-bold ${metric.color}`}>{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Roadmap */}
          <div className="space-y-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                導入ロードマップ
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                確実な成功を保証する段階的アプローチ
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hidden lg:block"></div>

              <div className="grid lg:grid-cols-4 gap-8 relative">
                {IMPLEMENTATION_PHASES.map((phase, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-amber-500/50 transition-all hover:scale-105 h-full">
                      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>

                      <div className="text-amber-400 mb-4">{phase.icon}</div>
                      <div className="text-amber-400 text-sm font-bold mb-2">{phase.phase}</div>
                      <h3 className="text-xl font-bold mb-2 text-white">{phase.title}</h3>
                      <p className="text-gray-400 mb-4">{phase.description}</p>

                      <div className="inline-flex items-center px-3 py-1 bg-amber-900/50 rounded-full mb-4">
                        <Clock className="w-4 h-4 mr-2 text-amber-400" />
                        <span className="text-sm text-amber-300">{phase.duration}</span>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-300">主要成果物:</h4>
                        <ul className="space-y-1">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-3 h-3 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-xs text-gray-400">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient">
            倉庫の未来を、今始めよう
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            デジタル統合で、物流業務の効率性と精度を飛躍的に向上
          </p>

          <div className="flex justify-center mb-16">
            <button
              onClick={openContactModal}
              className="px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              無料相談を開始する
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: '物流特化', icon: <Warehouse className="w-6 h-6" /> },
              { label: 'デジタル技術', icon: <Lightbulb className="w-6 h-6" /> },
              { label: '24/7サポート', icon: <HeartHandshake className="w-6 h-6" /> },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur rounded-full border border-gray-700">
                <div className="text-amber-400">{badge.icon}</div>
                <span className="text-sm text-gray-300">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default WarehouseIntegration;