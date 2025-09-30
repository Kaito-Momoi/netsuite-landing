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
  Lightbulb,
  Award,
  HeartHandshake,
  Play,
  Pause,
  BarChart3,
  Truck,
  Star,
  Target,
  Settings,
  Quote,
  Wifi,
  Activity,
  Layers,
  Radio,
  Mail,
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
  { value: '極めて高い', label: '在庫精度', description: 'バーコード管理による精度向上', color: 'from-teal-400 to-cyan-400' },
  { value: '大幅な', label: '作業時間短縮', description: 'ピッキング効率の改善', color: 'from-cyan-400 to-blue-400' },
  { value: '劇的な', label: '誤出荷削減', description: 'スキャンによる検品強化', color: 'from-blue-400 to-indigo-400' },
  { value: 'リアルタイム', label: '在庫可視化', description: '即時の在庫情報更新', color: 'from-indigo-400 to-blue-400' },
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
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-white to-cyan-900/20"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
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
          className="pointer-events-none fixed w-64 h-64 bg-gradient-radial from-teal-500/20 to-transparent rounded-full blur-3xl transition-all duration-200 z-0"
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
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 backdrop-blur-xl rounded-full border-2 border-teal-500/30 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Warehouse className="w-5 h-5 text-indigo-600 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              物流・倉庫特化 統合ソリューション
            </span>
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          </div>

          {/* 3D Title */}
          <div className={`relative mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black">
              {/* 3D Shadow layers */}
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-teal-900/20 blur-sm transform translate-x-4 translate-y-4">
                倉庫統合の革新
              </div>
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-cyan-900/20 blur-sm transform -translate-x-2 translate-y-2">
                倉庫統合の革新
              </div>
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                倉庫統合の革新
              </span>
            </h1>
          </div>

          {/* Subtitle with animation */}
          <p className={`text-2xl md:text-3xl mb-4 text-slate-800 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            デジタル化で実現する物流最適化
          </p>

          {/* Animated feature rotator */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: 'スキャンシステム', icon: <Scan />, gradient: 'from-teal-400 to-cyan-400' },
                { text: 'リアルタイム同期', icon: <Database />, gradient: 'from-cyan-400 to-blue-400' },
                { text: 'ロケーション管理', icon: <MapPin />, gradient: 'from-blue-400 to-indigo-400' },
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
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                革新的な倉庫統合機能
              </h2>
              <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto mb-12">
                物流・倉庫業務をデジタル技術で革新し、効率性と精度を飛躍的に向上
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {CORE_FEATURES.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-2xl p-8 border-2 border-slate-300/50 hover:border-teal-500/50 transition-all hover:scale-105 h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"></div>

                    <div className="w-16 h-16 bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border-2 border-teal-500/30">
                      <div className="text-indigo-600">{feature.icon}</div>
                    </div>

                    <h3 className="text-xl font-black text-slate-950 mb-4">{feature.title}</h3>
                    <p className="text-slate-800 mb-6 leading-relaxed font-medium">{feature.description}</p>

                    <ul className="space-y-2">
                      {feature.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-900 font-medium">{point}</span>
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
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                高度な機能群
              </h2>
              <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto">
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
                  <div className={`absolute inset-0 bg-gradient-to-r from-teal-600/10 to-cyan-600/10 rounded-xl blur-xl transition-all ${hoveredCapability === index ? 'opacity-40' : 'opacity-20'}`}></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-xl p-6 border-2 border-slate-300/50 hover:border-teal-500/50 transition-all hover:scale-105 h-full">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-teal-100/10 to-cyan-100/10 p-3 rounded-lg mr-4 border-2 border-teal-500/20">
                        <div className="text-indigo-600">{capability.icon}</div>
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
              <h2 className="text-4xl font-black mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
                      <TrendingUp className="w-10 h-10 text-white" />
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
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            倉庫の未来を、今始めよう
          </h2>
          <p className="text-xl text-slate-900 font-bold mb-12">
            デジタル統合で、物流業務の効率性と精度を飛躍的に向上
          </p>

          <div className="flex justify-center mb-16">
            <button
              onClick={openContactModal}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              お問い合わせ
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: '物流特化', icon: <Warehouse className="w-6 h-6" /> },
              { label: 'デジタル技術', icon: <Lightbulb className="w-6 h-6" /> },
              { label: '24/7サポート', icon: <HeartHandshake className="w-6 h-6" /> },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white backdrop-blur rounded-full border-2 border-slate-300">
                <div className="text-indigo-600">{badge.icon}</div>
                <span className="text-sm text-slate-900 font-medium">{badge.label}</span>
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
