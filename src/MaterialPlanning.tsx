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
  BarChart3,
  Truck,
  Package,
  Star,
  Target,
  Settings,
  Quote,
  Mail,
  ExternalLink,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';


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
    description: 'リードタイムと需要予測を考慮した最適発注量を自動算出',
    bulletPoints: ['高度な予測アルゴリズム', '動的発注量調整', 'コスト最適化'],
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
  { value: '大幅な', label: '調達コスト削減', description: '最適発注による削減効果', color: 'from-emerald-600 to-teal-600' },
  { value: '劇的な', label: '在庫削減', description: '適正在庫の維持による削減', color: 'from-emerald-400 to-teal-400' },
  { value: '非常に高い', label: '欠品防止率', description: '事前アラートによる防止', color: 'from-teal-400 to-cyan-400' },
  { value: '飛躍的な', label: '計画精度向上', description: 'データドリブンな計画立案', color: 'from-cyan-400 to-blue-400' },
];



const MaterialPlanning: React.FC = () => {
  const navigate = useNavigate();
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleContact = () => { window.open('https://www.evangsol.co.jp/support', '_blank', 'noopener,noreferrer'); };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-white to-emerald-900/20"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        </div>

        {/* Particle field */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute"
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
          className="pointer-events-none fixed w-64 h-64 bg-gradient-radial from-green-500/20 to-transparent rounded-full blur-3xl z-0"
          style={{
            left: `${Math.max(0, Math.min(mousePosition.x - 128, window.innerWidth - 256))}px`,
            top: `${mousePosition.y - 128}px`,
          }}
        />
      </div>

      <ModernNavigationBar
        showBackButton={true}
        variant="solution"
        onContactClick={handleContact}
      />

      {/* Hero Section with Enhanced 3D Typography */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* 3D Title */}
          <div className={`relative mb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                資材計画の革新
              </span>
            </h1>
          </div>

          {/* Subtitle with animation */}
          <p className={`text-2xl md:text-3xl mb-4 text-slate-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            データ分析で実現する最適調達
          </p>

          {/* Animated feature rotator */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: 'リアルタイム可視化', icon: <Eye />, gradient: 'from-emerald-600 to-teal-600' },
                { text: '最適発注量算出', icon: <Calculator />, gradient: 'from-emerald-400 to-teal-400' },
                { text: '予防的アラート', icon: <AlertTriangle />, gradient: 'from-teal-400 to-cyan-400' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute flex items-center gap-4 ${activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
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


        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* Core Features Section */}
          <div className="space-y-20">
            <div className="text-center">
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                革新的な資材計画機能
              </h2>
              <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto mb-12">
                製造業の複雑な資材管理をデータ分析で最適化
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {CORE_FEATURES.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30"></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-2xl p-8 border-2 border-slate-300/50 h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-indigo-500"></div>

                    <div className="w-16 h-16 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mb-6 border-2 border-green-400">
                      <div className="text-emerald-600">{feature.icon}</div>
                    </div>

                    <h3 className="text-xl font-black text-slate-950 mb-4">{feature.title}</h3>
                    <p className="text-slate-800 mb-6 leading-relaxed font-medium">{feature.description}</p>

                    <ul className="space-y-2">
                      {feature.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
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
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                高度な機能群
              </h2>
              <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto">
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
                  <div className={`absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-xl blur-xl ${hoveredCapability === index ? 'opacity-40' : 'opacity-20'}`}></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-xl p-6 border-2 border-slate-300/50 h-full">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-green-100/10 to-emerald-100/10 p-3 rounded-lg mr-4 border-2 border-green-500/20">
                        <div className="text-emerald-600">{capability.icon}</div>
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
              <h2 className="text-4xl font-black mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                導入効果
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {IMPACT_METRICS.map((metric, index) => (
                <div
                  key={index}
                  className={`transform ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
            資材計画の未来を、今始めよう
          </h2>
          <p className="text-xl text-slate-900 font-bold mb-12">
            高度な予測と最適化で、製造業の競争力を飛躍的に向上
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleContact}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full flex items-center justify-center gap-3 group"
            >
              <Mail className="w-6 h-6" />
              <ExternalLink className="w-5 h-5" />
              お問い合わせ
            </button>
          </div>
        </div>
      </section>

      <ModernFooter />

      {/* Contact Modal */}
    </div>
  );
};

export default MaterialPlanning;
