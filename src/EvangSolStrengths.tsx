import React, { useCallback, useState, useEffect, useRef } from 'react';
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
  Rocket,
  Shield,
  Heart,
  Award,
  Sparkles,
  GitBranch,
  Database,
  Cpu,
  Layers,
  Activity,
  TrendingUp,
  Target,
  Infinity,
  MousePointer,
  HeartHandshake,
  Globe,
  ChevronRight,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
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
  const [scrollY, setScrollY] = useState(0);
  const [activeStrength, setActiveStrength] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const goContact = useCallback(() => navigate('/contact'), [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if stats section is visible
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
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-500/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>

        {/* Interactive glow */}
        <div
          className="pointer-events-none absolute w-96 h-96 bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
      </div>

      <ModernNavigationBar showBackButton={false} variant="page" />

      {/* Hero Section with 3D Typography */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div
          className="text-center max-w-7xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-xl rounded-full border border-orange-500/30 mb-8">
            <Trophy className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              日本最高峰のNetSuiteパートナー
            </span>
          </div>

          {/* Main Title with 3D Effect */}
          <div className="relative mb-12">
            <h1 className="text-6xl md:text-8xl font-black">
              {/* Background text for 3D effect */}
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-orange-900/30 blur-sm transform translate-x-2 translate-y-2">
                EvangSol
              </div>
              <span className="relative bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                EvangSol
              </span>
            </h1>
            <div className="text-3xl md:text-5xl font-bold mt-4">
              <span className="text-gray-300">×</span>
              <span className="ml-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                NetSuite
              </span>
            </div>
          </div>

          {/* Animated equation */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="text-2xl font-bold text-gray-400">=</div>
            <div className="text-2xl md:text-3xl font-black">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                最強の組み合わせ
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed">
            <span className="text-orange-400 font-bold">NetSuiteの高いカスタマイズ性</span>を
            <span className="text-red-400 font-bold">圧倒的な開発力</span>で
            100%活用
          </p>

          {/* Stats Grid with Animation */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: '50+', label: '導入実績', icon: <Award />, delay: 0 },
              { value: '100%', label: '満足度', icon: <Heart />, delay: 0.1 },
              { value: '24/7', label: 'サポート', icon: <Shield />, delay: 0.2 },
              { value: '2拠点', label: '全国対応', icon: <Building2 />, delay: 0.3 },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${stat.delay}s` }}
              >
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-orange-900/50 to-red-900/50 mb-4">
                  <div className="text-orange-400">
                    {React.cloneElement(stat.icon, { className: 'w-8 h-8' })}
                  </div>
                </div>
                <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Interactive Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* NetSuite Card */}
            <div
              className="group relative cursor-pointer"
              onMouseEnter={() => setActiveStrength(0)}
              onMouseLeave={() => setActiveStrength(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                    <Cloud className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">NetSuiteの強み</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">無限のカスタマイズ性</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">強力な開発ツール</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">柔軟なAPI連携</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Synergy Card - Center, Emphasized */}
            <div
              className="group relative cursor-pointer transform lg:scale-110"
              onMouseEnter={() => setActiveStrength(1)}
              onMouseLeave={() => setActiveStrength(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-orange-600/30 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-orange-900/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-transparent bg-clip-padding"
                   style={{ backgroundImage: 'linear-gradient(to right bottom, rgba(147, 51, 234, 0.3), rgba(251, 146, 60, 0.3)), linear-gradient(to right bottom, #111, #111)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-spin-slow">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    相乗効果
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0 animate-pulse" />
                    <span className="font-bold text-white">業務に100%フィット</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0 animate-pulse" />
                    <span className="font-bold text-white">運用負荷80%削減</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0 animate-pulse" />
                    <span className="font-bold text-white">ROI 250%以上</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* EvangSol Card */}
            <div
              className="group relative cursor-pointer"
              onMouseEnter={() => setActiveStrength(2)}
              onMouseLeave={() => setActiveStrength(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30 hover:border-orange-400/60 transition-all hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:-rotate-12 transition-transform">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400">EvangSolの強み</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">高度な開発技術</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">日本企業の理解</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">迅速な実装力</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
            <button
              onClick={goContact}
              className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              無料相談を始める
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="px-10 py-5 bg-gray-800/50 backdrop-blur text-white font-bold text-lg rounded-full border border-gray-600 hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Trophy className="w-6 h-6 text-yellow-400" />
              導入事例を見る
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Core Strengths - Futuristic Design */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              EvangSolの開発力が選ばれる<span className="text-orange-400">5つの理由</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              圧倒的な技術力でNetSuiteのポテンシャルを最大限引き出します
            </p>
          </div>

          {/* Custom Strengths Grid with 5 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {STRENGTHS.map((strength) => (
              <div
                key={strength.title}
                className="group relative bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 overflow-hidden hover:scale-105"
              >
                {/* Gradient bar at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>

                <div className="p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-orange-500/30">
                    <div className="text-orange-400">{strength.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3">{strength.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {strength.description}
                  </p>

                  {/* Bullet points */}
                  {strength.bulletPoints && (
                    <ul className="space-y-2">
                      {strength.bulletPoints.map((point) => (
                        <li key={point} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{point}</span>
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

      {/* Unique Solutions - Dark Theme */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              EvangSol<span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">オリジナルソリューション</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              日本企業の商習慣に合わせて独自開発した、NetSuite拡張ソリューション
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution) => (
              <div
                key={solution.title}
                className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer hover:scale-105"
                onClick={() => navigate(solution.path)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-orange-500/30">
                  <div className="text-orange-400">{solution.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 mb-4">{solution.description}</p>
                <div className="flex items-center text-orange-400 font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process - Timeline Style */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">確実な導入プロセス</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              段階的なアプローチで、リスクを最小限に抑えながら確実に導入
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="relative">
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-500/0 -z-10"></div>
                )}
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all hover:scale-105">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-orange-900/30 text-orange-400 rounded-full text-sm font-semibold border border-orange-500/30">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Style */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            NetSuite導入をご検討中ですか？
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            豊富な実績と高度な技術力を持つEvangSolが、貴社のDXを成功に導きます
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={goContact}
              className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <HeartHandshake className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              お問い合わせ
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
};

export default React.memo(EvangSolStrengths);
// If desired, we could wrap with React.memo to avoid rerenders:
// export default React.memo(EvangSolStrengths);
