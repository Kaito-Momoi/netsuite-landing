import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Clock,
  Database,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Award,
  Sparkles,
  DollarSign,
  FileSearch,
  GitBranch,
  Cpu,
  Rocket,
  Brain,
  Play,
  Pause,
  Layers,
  Building,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import ContactModal from './components/ContactModal';
import { Feature } from './types';

// Main features with enhanced descriptions
const MAIN_FEATURES: Feature[] = [
  {
    icon: <Brain className="w-10 h-10" />,
    title: 'AI自動マッチング',
    description: '機械学習により、複雑な入金パターンも高精度で自動消込。学習により精度が向上',
    bulletPoints: ['99.5%の高精度マッチング', '複雑なパターン認識', '継続的な学習・改善'],
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'リアルタイム処理',
    description: '銀行APIと直接連携し、入金発生と同時に自動処理を開始。処理遅延ゼロを実現',
    bulletPoints: ['即時データ取得', '24/365稼働', '処理遅延ゼロ'],
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: '高度な可視化',
    description: 'リアルタイムダッシュボードで、消込状況・キャッシュフローを即座に把握',
    bulletPoints: ['リアルタイム更新', '多角的分析', 'アラート機能'],
  },
];

// Detailed capabilities
const CAPABILITIES = [
  {
    icon: <Database className="w-8 h-8" />,
    title: 'マルチバンク対応',
    description: '国内外の主要銀行フォーマットに完全対応。API連携で自動取込',
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: '高度なパターン認識',
    description: '請求書番号・金額・顧客名・入金日など複数条件での自動マッチング',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: '内部統制機能',
    description: '承認ワークフロー・監査ログ・権限管理で内部統制を強化',
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: 'ワークフロー自動化',
    description: '例外処理も含めた消込プロセス全体を自動化',
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'API連携',
    description: '他システムとのシームレスな連携でエンドツーエンド自動化',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '予測分析',
    description: '入金予測・キャッシュフロー予測で経営判断を支援',
  },
];

// Impact metrics
const IMPACT_METRICS = [
  { value: '劇的な', label: '作業時間削減', sublabel: '大幅な時間短縮を実現' },
  { value: '極めて高い', label: '精度達成', sublabel: 'ヒューマンエラーゼロ' },
  { value: '大幅な', label: 'コスト削減', sublabel: '人件費・残業代削減' },
  { value: '迅速な', label: '月次決算', sublabel: '締め後即日完了' },
];


// Success case study

const PaymentMatching: React.FC = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}></div>

        {/* Interactive glow */}
        <div
          className="pointer-events-none fixed w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
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
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-full border border-blue-500/30 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <DollarSign className="w-5 h-5 text-cyan-600 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              財務プロセス自動化ソリューション
            </span>
            <Sparkles className="w-5 h-5 text-cyan-600 animate-pulse" />
          </div>

          {/* Main Title with 3D effect */}
          <div className={`relative mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <div className="absolute inset-0 text-5xl md:text-7xl font-black text-blue-900/30 blur-sm transform translate-x-2 translate-y-2">
                入金消込ソリューション
              </div>
              <span className="relative bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                入金消込ソリューション
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700">
              AIが変える、経理業務の未来
            </p>
          </div>

          {/* Animated Feature Carousel */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: '99.9%の自動化率', icon: <Cpu className="w-8 h-8" />, gradient: 'from-blue-400 to-cyan-400' },
                { text: '処理時間95%削減', icon: <Clock className="w-8 h-8" />, gradient: 'from-cyan-400 to-teal-400' },
                { text: 'リアルタイム処理', icon: <Zap className="w-8 h-8" />, gradient: 'from-teal-400 to-green-400' },
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
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              デモを見る
            </button>
            <button
              onClick={() => navigate('/netsuite/solutions')}
              className="px-8 py-4 bg-gray-50 border border-blue-500/30 text-gray-900 font-bold text-lg rounded-full hover:bg-white hover:border-blue-400/60 transition-all duration-300"
            >
              ソリューション一覧へ
            </button>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              革新的な3つのコア機能
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              最先端テクノロジーで入金消込業務を完全自動化
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {MAIN_FEATURES.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-gray-300/50 hover:border-blue-400 transition-all hover:scale-105 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-500/30">
                    <div className="text-blue-600">{feature.icon}</div>
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

      {/* Capabilities Grid */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              包括的な機能群
            </h2>
            <p className="text-xl text-gray-600">
              入金消込のあらゆる課題を解決
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((capability, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCapability(index)}
                onMouseLeave={() => setHoveredCapability(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-teal-600/10 rounded-2xl blur-xl transition-all ${hoveredCapability === index ? 'opacity-40' : 'opacity-0'}`}></div>
                <div className="relative bg-white backdrop-blur-xl rounded-2xl p-6 border border-gray-300/50 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform border border-cyan-400">
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

      {/* Impact Metrics */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              導入効果
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {IMPACT_METRICS.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
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



      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            入金消込業務の自動化で
            <br />
            経理部門を戦略的組織へ
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            今すぐ始めれば、来月には効果を実感できます
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openContactModal}
              className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              無料デモを予約
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-gray-50 border border-blue-500/30 text-gray-900 font-bold text-lg rounded-full hover:bg-white hover:border-blue-400/60 transition-all duration-300"
            >
              資料請求
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { label: '導入企業500社以上', icon: <Building className="w-5 h-5" /> },
              { label: '満足度98%', icon: <Award className="w-5 h-5" /> },
              { label: '24時間サポート', icon: <Shield className="w-5 h-5" /> },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-50 backdrop-blur rounded-full border border-gray-300">
                <div className="text-cyan-600">{badge.icon}</div>
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

export default PaymentMatching;