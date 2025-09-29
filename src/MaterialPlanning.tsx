import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Factory,
  Wrench,
  Gauge,
  Eye,
  Calculator,
  AlertTriangle,
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
  Database,
  Lightbulb,
  Award,
  HeartHandshake,
  Play,
  Pause,
  BarChart3,
  Truck,
  Package,
  Star,
  Target,
  Settings,
  Quote,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import ContactModal from './components/ContactModal';

// Core Features for Material Planning
const CORE_FEATURES = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'リアルタイム可視化',
    description: '調達から生産、在庫まで資材の流れをダッシュボードで一元管理',
    bulletPoints: ['資材フローの完全可視化', 'リアルタイム状況把握', '部門横断ダッシュボード'],
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: '最適発注量算出',
    description: 'リードタイムと需要予測を考慮した最適発注量をAIが自動算出',
    bulletPoints: ['AI予測アルゴリズム', '動的発注量調整', 'コスト最適化'],
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: 'アラートシステム',
    description: '資材不足や過剰在庫のリスクを事前検知し、即座にアラート通知',
    bulletPoints: ['予防的リスク検知', '多段階アラート', 'カスタマイズ可能閾値'],
  },
];

// Advanced Capabilities
const ADVANCED_CAPABILITIES = [
  {
    icon: <Database className="w-6 h-6" />,
    title: '統合データ管理',
    description: 'BOM、在庫、納期、コスト情報を一元管理し、正確な物料計算を実現',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: '需要予測機能',
    description: '過去の実績データと市場トレンドを分析し、高精度な需要予測を生成',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: '最適化アルゴリズム',
    description: 'コスト、リードタイム、品質を総合的に考慮した最適調達計画を立案',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'サプライヤー管理',
    description: 'サプライヤー別の納期実績管理と評価で調達を最適化',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'パフォーマンス分析',
    description: '資材調達の効率性とコスト削減効果を継続的に監視・分析',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'ワークフロー自動化',
    description: '承認プロセスと発注手続きを自動化し、業務効率を向上',
  },
];

// Impact Metrics
const IMPACT_METRICS = [
  { value: '大幅な', label: '調達コスト削減', description: '最適発注による削減効果', color: 'from-green-400 to-emerald-400' },
  { value: '劇的な', label: '在庫削減', description: '適正在庫の維持による削減', color: 'from-emerald-400 to-teal-400' },
  { value: '非常に高い', label: '欠品防止率', description: '事前アラートによる防止', color: 'from-teal-400 to-cyan-400' },
  { value: '飛躍的な', label: '計画精度向上', description: 'データドリブンな計画立案', color: 'from-cyan-400 to-blue-400' },
];



const MaterialPlanning: React.FC = () => {
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
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-white to-emerald-900/20"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
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
              <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Interactive cursor glow */}
        <div
          className="pointer-events-none fixed w-64 h-64 bg-gradient-radial from-green-500/20 to-transparent rounded-full blur-3xl transition-all duration-200 z-0"
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
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-xl rounded-full border border-green-400 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Factory className="w-5 h-5 text-green-600 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              製造業特化 資材計画ソリューション
            </span>
            <Sparkles className="w-5 h-5 text-cyan-600 animate-pulse" />
          </div>

          {/* 3D Title */}
          <div className={`relative mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black">
              {/* 3D Shadow layers */}
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-green-900/20 blur-sm transform translate-x-4 translate-y-4">
                資材計画の革新
              </div>
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-emerald-900/20 blur-sm transform -translate-x-2 translate-y-2">
                資材計画の革新
              </div>
              <span className="relative bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                資材計画の革新
              </span>
            </h1>
          </div>

          {/* Subtitle with animation */}
          <p className={`text-2xl md:text-3xl mb-4 text-gray-700 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            AI予測で実現する最適調達
          </p>

          {/* Animated feature rotator */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: 'リアルタイム可視化', icon: <Eye />, gradient: 'from-green-400 to-emerald-400' },
                { text: '最適発注量算出', icon: <Calculator />, gradient: 'from-emerald-400 to-teal-400' },
                { text: '予防的アラート', icon: <AlertTriangle />, gradient: 'from-teal-400 to-cyan-400' },
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
            className="mb-12 p-3 bg-gray-100 backdrop-blur rounded-full hover:bg-gray-200 transition-all"
            aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          {/* Call to Action */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={openContactModal}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
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
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                革新的な資材計画機能
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                製造業の複雑な資材管理をAIとデータ分析で最適化
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {CORE_FEATURES.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-2xl p-8 border border-gray-300/50 hover:border-green-500/50 transition-all hover:scale-105 h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>

                    <div className="w-16 h-16 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-green-400">
                      <div className="text-green-600">{feature.icon}</div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                    <ul className="space-y-2">
                      {feature.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{point}</span>
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
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                高度な機能群
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                資材管理を革新する包括的ソリューション
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
                  <div className={`absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-xl blur-xl transition-all ${hoveredCapability === index ? 'opacity-40' : 'opacity-20'}`}></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-xl p-6 border border-gray-300/50 hover:border-green-500/50 transition-all hover:scale-105 h-full">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-green-100/10 to-emerald-100/10 p-3 rounded-lg mr-4 border border-green-500/20">
                        <div className="text-green-600">{capability.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{capability.description}</p>
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
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
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
                    <div className="text-lg font-bold text-gray-900 mb-1">{metric.label}</div>
                    <div className="text-sm text-gray-600">{metric.description}</div>
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
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
            資材計画の未来を、今始めよう
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            AI予測と最適化で、製造業の競争力を飛躍的に向上
          </p>

          <div className="flex justify-center mb-16">
            <button
              onClick={openContactModal}
              className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              無料相談を開始する
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: '製造業特化', icon: <Factory className="w-6 h-6" /> },
              { label: 'AI予測技術', icon: <Lightbulb className="w-6 h-6" /> },
              { label: '24/7サポート', icon: <HeartHandshake className="w-6 h-6" /> },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-50/50 backdrop-blur rounded-full border border-gray-300">
                <div className="text-green-600">{badge.icon}</div>
                <span className="text-sm text-gray-700">{badge.label}</span>
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

export default MaterialPlanning;
