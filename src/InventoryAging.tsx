import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  AlertTriangle,
  BarChart3,
  Filter,
  Database,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Trophy,
  Building2,
  Clock,
  Shield,
  Rocket,
  Lightbulb,
  Award,
  HeartHandshake,
  Play,
  Pause,
  Star,
  Target,
  Settings,
  Quote,
  Package,
  Activity,
  TrendingDown,
  Eye,
  Layers,
  Mail,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import ContactModal from './components/ContactModal';

// Core Features for Inventory Aging
const CORE_FEATURES = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: '経過日数分析',
    description: '在庫の滞留期間を自動計算し、経過日数別に分類・可視化',
    bulletPoints: ['自動滞留期間計算', '多段階分類システム', 'ビジュアル化ダッシュボード'],
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: 'デッドストック検知',
    description: '長期滞留在庫を自動検出し、廃棄リスクを事前にアラート',
    bulletPoints: ['予防的リスク検知', 'カスタマイズ可能閾値', '多段階アラート'],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: '回転率分析',
    description: '品目別・カテゴリ別の在庫回転率を分析し、最適在庫を提案',
    bulletPoints: ['詳細回転率分析', '最適在庫水準提案', 'パフォーマンス追跡'],
  },
];

// Advanced Capabilities
const ADVANCED_CAPABILITIES = [
  {
    icon: <Filter className="w-6 h-6" />,
    title: '多角的分析',
    description: '倉庫別、カテゴリ別、サプライヤー別など多様な切り口で分析',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'リアルタイム監視',
    description: '在庫変動をリアルタイムで監視し、滞留状況を即座に把握',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: '予測分析',
    description: '過去のデータから将来の滞留リスクを予測し、事前対策を提案',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: '自動アラート',
    description: '設定した基準を超えた在庫を自動検知し、担当者にアラート通知',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'ABC分析連携',
    description: '在庫重要度と滞留期間を組み合わせた高度な分析機能',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: '可視化レポート',
    description: '経営層向けの戦略的レポートと現場向けのアクションレポートを自動生成',
  },
];

// Impact Metrics
const IMPACT_METRICS = [
  { value: '大幅な', label: '廃棄ロス削減', description: '早期対応による削減効果', color: 'from-blue-400 to-indigo-400' },
  { value: '劇的な', label: '在庫削減', description: '適正在庫の維持による削減', color: 'from-indigo-400 to-blue-400' },
  { value: '飛躍的な', label: '回転率向上', description: '滞留在庫の削減による改善', color: 'from-teal-400 to-cyan-400' },
  { value: '迅速な', label: '棚卸効率化', description: 'データ活用による高速化', color: 'from-cyan-400 to-blue-400' },
];


// Aging Categories
const AGING_CATEGORIES = [
  {
    period: '0-30日',
    description: '適正在庫',
    color: 'from-emerald-600 to-teal-600',
    action: '通常管理',
    bgColor: 'bg-green-500/20 border-green-400'
  },
  {
    period: '31-90日',
    description: '要注意',
    color: 'from-cyan-400 to-teal-400',
    action: '販促検討',
    bgColor: 'bg-cyan-500/20 border-cyan-500/30'
  },
  {
    period: '91-180日',
    description: '警告',
    color: 'from-cyan-400 to-teal-400',
    action: '値引き処分',
    bgColor: 'bg-cyan-500/20 border-cyan-400'
  },
  {
    period: '180日以上',
    description: '危険',
    color: 'from-blue-400 to-indigo-400',
    action: '廃棄検討',
    bgColor: 'bg-blue-500/20 border-blue-500/30'
  },
];


const InventoryAging: React.FC = () => {
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
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-white to-cyan-900/20"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
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
              <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Interactive cursor glow */}
        <div
          className="pointer-events-none fixed w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl transition-all duration-200 z-0"
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
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-full border-2 border-blue-500/30 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Package className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              在庫最適化 特化ソリューション
            </span>
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          </div>

          {/* 3D Title */}
          <div className={`relative mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black">
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                在庫分析の革新
              </span>
            </h1>
          </div>

          {/* Subtitle with animation */}
          <p className={`text-2xl md:text-3xl mb-4 text-slate-800 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            エージング分析で実現する在庫最適化
          </p>

          {/* Animated feature rotator */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: '経過日数分析', icon: <Calendar />, gradient: 'from-blue-400 to-indigo-400' },
                { text: 'デッドストック検知', icon: <AlertTriangle />, gradient: 'from-indigo-400 to-blue-400' },
                { text: '回転率分析', icon: <BarChart3 />, gradient: 'from-teal-400 to-cyan-400' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute flex items-center gap-4 transition-all duration-1000 ${activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient}`}>
                    {React.cloneElement(item.icon, { className: 'w-8 h-8 text-white' })}
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

      {/* Main Content */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* Core Features Section */}
          <div className="space-y-20">
            <div className="text-center">
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                革新的な在庫エージング機能
              </h2>
              <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto mb-12">
                在庫の滞留状況をデータドリブンで分析し、戦略的な在庫最適化を実現
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {CORE_FEATURES.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-2xl p-8 border-2 border-slate-300/50 hover:border-blue-500/50 transition-all hover:scale-105 h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500"></div>

                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border-2 border-blue-500/30">
                      <div className="text-blue-600">{feature.icon}</div>
                    </div>

                    <h3 className="text-xl font-black text-slate-950 mb-4">{feature.title}</h3>
                    <p className="text-slate-800 mb-6 leading-relaxed font-medium">{feature.description}</p>

                    <ul className="space-y-2">
                      {feature.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-900 font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aging Categories Section */}
          <div className="space-y-20">
            <div className="text-center">
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                エージング分類と対応策
              </h2>
              <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto mb-12">
                在庫滞留期間に応じた段階的アプローチで効果的な在庫管理を実現
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {AGING_CATEGORIES.map((category, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className={`relative ${category.bgColor} backdrop-blur-xl rounded-xl p-6 border hover:scale-105 transition-all h-full`}>
                    <div className={`w-full h-2 rounded-full mb-4 bg-gradient-to-r ${category.color}`}></div>

                    <h3 className="text-xl font-bold mb-3 text-slate-900">{category.period}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-slate-900 font-medium">状態: <span className="font-semibold">{category.description}</span></p>
                      <p className="text-sm text-slate-900 font-medium">対応: <span className="font-semibold">{category.action}</span></p>
                    </div>

                    <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-xs font-bold`}>
                      {category.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Capabilities Grid */}
          <div className="space-y-20">
            <div className="text-center">
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                高度な機能群
              </h2>
              <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto">
                在庫管理を革新する包括的ソリューション
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
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl blur-xl transition-all ${hoveredCapability === index ? 'opacity-40' : 'opacity-20'}`}></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-xl p-6 border-2 border-slate-300/50 hover:border-blue-500/50 transition-all hover:scale-105 h-full">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-red-100/10 to-rose-100/10 p-3 rounded-lg mr-4 border-2 border-red-500/20">
                        <div className="text-blue-600">{capability.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{capability.title}</h3>
                        <p className="text-sm text-slate-900 font-medium leading-relaxed font-medium">{capability.description}</p>
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
              <h2 className="text-4xl font-black mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
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
                      <TrendingDown className="w-10 h-10 text-white" />
                    </div>
                    <div className={`text-3xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-lg font-bold text-slate-900 mb-1">{metric.label}</div>
                    <div className="text-sm text-slate-900 font-medium">{metric.description}</div>
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
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            在庫最適化の未来を、今始めよう
          </h2>
          <p className="text-xl text-slate-900 font-bold mb-12">
            エージング分析で、在庫効率と収益性を飛躍的に向上
          </p>

          <div className="flex justify-center">
            <button
              onClick={openContactModal}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              お問い合わせ
            </button>
          </div>
        </div>
      </section>

      <ModernFooter />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default InventoryAging;
