import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  Cloud,
  BarChart3,
  Package,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calculator,
  ShoppingCart,
  Code,
  Sparkles,
  Trophy,
  Building2,
  Zap,
  Clock,
  Shield,
  Rocket,
  Target,
  Database,
  Lightbulb,
  Award,
  HeartHandshake,
  Infinity,
  MousePointer,
  PenTool,
  Workflow,
  Network,
  ChevronRight,
  Quote,
  Star,
  Heart,
  Play,
  Pause,
  Cpu,
  GitBranch,
  Layers,
  Settings,
  Box,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import { SOLUTIONS } from './constants/features';
import { Feature } from './types';

// NetSuite Core Features
const CORE_FEATURES: Feature[] = [
  {
    icon: <Calculator className="w-8 h-8" />,
    title: '財務会計',
    description: 'リアルタイムの財務レポートと多通貨対応で、グローバルビジネスを支援',
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: '在庫管理',
    description: '複数拠点の在庫をリアルタイムで把握し、適正在庫を維持',
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: '受注管理',
    description: '受注から出荷まで一元管理し、顧客満足度を向上',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'CRM',
    description: '顧客情報を一元化し、営業活動を効率化',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Eコマース',
    description: 'B2B/B2C両方に対応したオムニチャネル展開',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'BI・分析',
    description: '経営ダッシュボードでKPIをリアルタイムに可視化',
  },
];

// EvangSol Strengths
const STRENGTHS: Feature[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: '高い開発力',
    description: 'SuiteScriptエキスパートが多数在籍。複雑な業務ロジックも堅実にシステム化',
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

const CASE_STUDY = {
  company: '株式会社グリーンハウス',
  headline: 'レガシーERPからNetSuiteへ基幹システムを移行し、柔軟でスピーディな成長基盤を構築',
  summary:
    '幅広い製品ラインを展開する電子機器メーカー。SAP ECC 6.0のEOSを機にNetSuiteへ刷新し、基幹業務・顧客管理・ワークフローを一体化。ガバナンス強化と迅速な経営判断を支える成長基盤を整備。',
  location: '〒150-0013 東京都渋谷区恵比寿1-19-15 ウノサワ東急ビル5階',
  employees: '100～249名',
  partner: '導入パートナー: 株式会社EvangSol（エバンソル）',
  link: 'https://www.netsuite.co.jp/customer-testimonials/greenhouse-manufacturing.shtml',
  quote: {
    text: '「返品管理プロセスをNetSuiteに統合することで、申請から承認までのリードタイムが従来の1/10以下に短縮され、業務の効率化が実現しました。さらに、営業部門の利益管理や予実管理も追加で統合することで、属人化された業務から脱却し、よりスムーズな作業環境を実現するなど、継続的な改善に取り組んでいきます」',
    author: '株式会社グリーンハウス 取締役 兼 マーケティング担当執行役員 奥寺 貴哉 氏',
  },
  highlights: [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '承認リードタイムを1/10以下に短縮',
      description: '返品管理の申請〜承認をNetSuiteに統合し、スピーディな意思決定を実現。',
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: '基幹業務とワークフローを一体化',
      description: '受発注から申請・承認のプロセスをクラウド上で集約し、属人化を解消。',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '経営の可視化と継続的改善',
      description: '営業部門の利益・予実管理をNetSuiteで統合し、継続的な改善と成長を支援。',
    },
  ],
};

// Process Steps
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'ヒアリング・要件定義',
    description: '現状の業務プロセスを分析し、最適な導入計画を策定',
    duration: '1-2ヶ月',
    icon: <MousePointer className="w-8 h-8" />,
  },
  {
    step: '02',
    title: 'システム設計・構築',
    description: 'NetSuiteの設定とカスタマイズ開発を実施',
    duration: '2-3ヶ月',
    icon: <Code className="w-8 h-8" />,
  },
  {
    step: '03',
    title: 'データ移行・テスト',
    description: '既存システムからのデータ移行と動作検証',
    duration: '1-2ヶ月',
    icon: <Database className="w-8 h-8" />,
  },
  {
    step: '04',
    title: '本稼働・サポート',
    description: '本番稼働後も継続的な改善サポートを提供',
    duration: '∞',
    icon: <Rocket className="w-8 h-8" />,
  },
];

const NetSuiteUnified: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredStrength, setHoveredStrength] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

  const goContact = useCallback(() => navigate('/contact'), [navigate]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
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
          className="pointer-events-none absolute w-64 h-64 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl transition-all duration-200"
          style={{
            left: `${mousePosition.x - 128}px`,
            top: `${mousePosition.y - 128}px`,
          }}
        />
      </div>

      <ModernNavigationBar showBackButton={false} variant="page" />

      {/* Hero Section with Enhanced 3D Typography */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-orange-600/20 backdrop-blur-xl rounded-full border border-purple-500/30 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              日本有数のNetSuite導入パートナー
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>

          {/* 3D Title */}
          <div className={`relative mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black">
              {/* 3D Shadow layers */}
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-purple-900/20 blur-sm transform translate-x-4 translate-y-4">
                NetSuite × EvangSol
              </div>
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-orange-900/20 blur-sm transform -translate-x-2 translate-y-2">
                NetSuite × EvangSol
              </div>
              <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                NetSuite × EvangSol
              </span>
            </h1>
          </div>

          {/* Subtitle with animation */}
          <p className={`text-2xl md:text-3xl mb-4 text-gray-300 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            多彩な可能性を、現実のビジネスへ
          </p>

          {/* Animated feature rotator */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: '柔軟なカスタマイズ', icon: <Code />, gradient: 'from-purple-400 to-pink-400' },
                { text: '完全クラウド対応', icon: <Cloud />, gradient: 'from-blue-400 to-cyan-400' },
                { text: 'AI機能搭載', icon: <Cpu />, gradient: 'from-green-400 to-emerald-400' },
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
              onClick={goContact}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-orange-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              今すぐ始める
            </button>
          </div>

        </div>
      </section>

      {/* Main Content - All Sections in Scroll Flow */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* 1. NetSuite */}
          <div id="netsuite" className="space-y-20 scroll-mt-20">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  NetSuiteの実用的な機能
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                  世界トップクラスのクラウドERPが提供する、幅広い拡張性
                </p>
              </div>

              {/* Core Modules Grid */}
              <div>
                <h3 className="text-3xl font-bold text-center mb-12">モジュール一覧</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CORE_FEATURES.map((feature, index) => (
                    <div
                      key={index}
                      className="group relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all hover:scale-105"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-orange-500/30">
                        <div className="text-orange-400">{feature.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customization Tools with Enhanced Design */}
              <div>
                <h3 className="text-3xl font-bold text-center mb-12">NetSuiteのカスタマイズ性</h3>
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: <PenTool className="w-12 h-12" />,
                    title: 'SuiteScript',
                    subtitle: 'JavaScriptベース開発',
                    features: ['完全なカスタムロジック', 'イベントドリブン処理', 'API統合'],
                    gradient: 'from-violet-500 to-purple-500',
                  },
                  {
                    icon: <Workflow className="w-12 h-12" />,
                    title: 'SuiteFlow',
                    subtitle: 'ビジュアルワークフロー',
                    features: ['ドラッグ&ドロップ設計', '複雑な承認フロー', '自動化処理'],
                    gradient: 'from-blue-500 to-cyan-500',
                  },
                  {
                    icon: <Network className="w-12 h-12" />,
                    title: 'SuiteTalk',
                    subtitle: 'Web Services API',
                    features: ['SOAP/REST対応', 'リアルタイム連携', 'バッチ処理'],
                    gradient: 'from-emerald-500 to-teal-500',
                  },
                ].map((tool, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${tool.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all h-full">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${tool.gradient} mb-6`}>
                        {tool.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
                      <p className="text-gray-400 mb-6">{tool.subtitle}</p>

                      <ul className="space-y-3">
                        {tool.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
                </div>
              </div>
          </div>

          {/* 2. EvangSol */}
          <div id="evangsol" className="space-y-20 scroll-mt-20">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  EvangSolの強み
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                  技術力と情熱で、NetSuiteの価値を引き出します
                </p>
              </div>

              {/* Strengths Grid with Interactive Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {STRENGTHS.map((strength, index) => (
                  <div
                    key={index}
                    className="group relative"
                    onMouseEnter={() => setHoveredStrength(index)}
                    onMouseLeave={() => setHoveredStrength(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl transition-all ${hoveredStrength === index ? 'opacity-40' : 'opacity-20'}`}></div>
                    <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all hover:scale-105 h-full">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>

                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-blue-500/30">
                        <div className="text-blue-400">{strength.icon}</div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3">{strength.title}</h3>
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        {strength.description}
                      </p>

                      {strength.bulletPoints && (
                        <ul className="space-y-2">
                          {strength.bulletPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start">
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

              {/* Case Study Highlight */}
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/20">
                <div className="grid lg:grid-cols-[1.6fr,1fr] gap-12 items-start">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-400/30 rounded-full text-sm font-semibold text-orange-200 mb-6">
                      <Trophy className="w-4 h-4" />
                      導入実績
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{CASE_STUDY.company}</h3>
                    <p className="text-lg text-orange-200 font-semibold mb-4">{CASE_STUDY.headline}</p>
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6">
                      {CASE_STUDY.summary}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-200">
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/60 border border-orange-400/20 rounded-full">
                        <Building2 className="w-4 h-4 text-orange-300" />
                        <span>{CASE_STUDY.location}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/60 border border-orange-400/20 rounded-full">
                        <Users className="w-4 h-4 text-orange-300" />
                        <span>{CASE_STUDY.employees}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/60 border border-orange-400/20 rounded-full">
                        <HeartHandshake className="w-4 h-4 text-orange-300" />
                        <span>{CASE_STUDY.partner}</span>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href={CASE_STUDY.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 hover:scale-105 transition-all"
                      >
                        実績を見る
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <button
                        onClick={goContact}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/70 border border-orange-400/30 text-white font-bold rounded-full hover:border-orange-400/60 hover:bg-gray-900/90 transition-all"
                      >
                        <Rocket className="w-4 h-4" />
                        無料相談を依頼
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-900/70 border border-orange-400/20 rounded-2xl p-6">
                    <div className="text-orange-300 mb-4">
                      <Quote className="w-8 h-8" />
                    </div>
                    <p className="text-sm md:text-base text-gray-100 leading-relaxed italic mb-6">
                      {CASE_STUDY.quote.text}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400">{CASE_STUDY.quote.author}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {CASE_STUDY.highlights.map((highlight, index) => (
                    <div key={index} className="bg-gray-900/60 rounded-xl p-6 border border-gray-700/50">
                      <div className="text-orange-300 mb-4">{highlight.icon}</div>
                      <h4 className="text-lg font-bold text-white mb-3">{highlight.title}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
          </div>

          {/* 3. Perfect Match */}
          <div id="matching" className="scroll-mt-20">
              {/* Perfect Match Section with Animation */}
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  理想的なマッチング
                </h2>

                {/* Key Benefits */}
                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                  {[
                    { label: 'グローバル展開', description: '世界中の企業が信頼', icon: <Globe />, delay: 0, color: 'from-orange-400 to-red-400' },
                    { label: '豊富な実績', description: '多数の成功事例', icon: <Award />, delay: 0.1, color: 'from-blue-400 to-cyan-400' },
                    { label: '高い満足度', description: '継続的な改善サポート', icon: <Heart />, delay: 0.2, color: 'from-pink-400 to-rose-400' },
                    { label: '業務効率化', description: '大幅な生産性向上', icon: <TrendingUp />, delay: 0.3, color: 'from-green-400 to-emerald-400' },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className={`transform transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${benefit.delay}s` }}
                    >
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-4`}>
                        {React.cloneElement(benefit.icon, { className: 'w-10 h-10 text-white' })}
                      </div>
                      <div className={`text-2xl font-black bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2`}>
                        {benefit.label}
                      </div>
                      <div className="text-sm text-gray-400">{benefit.description}</div>
                    </div>
                  ))}
                </div>

                {/* Interactive Comparison Cards */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* NetSuite Card */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30 hover:border-orange-400/60 transition-all hover:scale-105 h-full">
                      <Cloud className="w-16 h-16 text-orange-400 mb-6" />
                      <h3 className="text-2xl font-bold text-orange-400 mb-4">NetSuite</h3>
                      <p className="text-gray-400 mb-6">世界No.1クラウドERP</p>
                      <ul className="space-y-3 text-left">
                        {['高いカスタマイズ性', 'グローバル標準機能', '継続的アップデート'].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Synergy Card */}
                  <div className="group relative transform lg:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-orange-600/30 rounded-3xl blur-2xl animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-orange-900/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-transparent bg-clip-padding h-full"
                         style={{ backgroundImage: 'linear-gradient(to right bottom, rgba(147, 51, 234, 0.3), rgba(251, 146, 60, 0.3)), linear-gradient(to right bottom, #111, #111)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
                      <Zap className="w-16 h-16 text-yellow-400 mb-6 animate-pulse" />
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
                        相乗効果
                      </h3>
                      <p className="text-gray-300 font-bold mb-6">信頼できる組み合わせ</p>
                      <ul className="space-y-3 text-left">
                        {[
                          { label: '業務効率の大幅向上', icon: <Star /> },
                          { label: '開発期間の短縮', icon: <Star /> },
                          { label: '高いROIを実現', icon: <Star /> },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            {React.cloneElement(item.icon, { className: 'w-5 h-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0 animate-pulse' })}
                            <span className="font-bold text-white">{item.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* EvangSol Card */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all hover:scale-105 h-full">
                      <Code className="w-16 h-16 text-blue-400 mb-6" />
                      <h3 className="text-2xl font-bold text-blue-400 mb-4">EvangSol</h3>
                      <p className="text-gray-400 mb-6">開発特化型パートナー</p>
                      <ul className="space-y-3 text-left">
                        {['高い開発力', '日本企業への理解', '迅速な実装'].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Comparison Section */}
              <div className="relative mt-20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-orange-900/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50">
                  <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    EvangSol × NetSuiteが選ばれる理由
                  </h3>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
                        <Lightbulb className="w-8 h-8" />
                        高い開発力
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        NetSuiteの柔軟なカスタマイズ機能を、EvangSolの技術力でしっかり活用。
                        SuiteScript、SuiteFlow、SuiteTalkを駆使し、あなたの業務に適合するシステムを構築します。
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: '豊富な', sublabel: '開発実績' },
                          { label: '高い', sublabel: '満足度' },
                          { label: '充実の', sublabel: 'サポート' },
                        ].map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-xl font-bold text-orange-400">{metric.label}</div>
                            <div className="text-sm text-gray-400">{metric.sublabel}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-orange-400 flex items-center gap-3">
                        <Target className="w-8 h-8" />
                        日本市場への最適化
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        日本独自の商習慣、複雑な承認フロー、特殊な帳票要件。
                        これらすべてをNetSuiteで実現できるのは、日本企業を深く理解したEvangSolだからこそ。
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: '全国対応', sublabel: '東京・札幌' },
                          { label: '豊富な', sublabel: '経験' },
                          { label: '高い', sublabel: '成長性' },
                        ].map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-xl font-bold text-purple-400">{metric.label}</div>
                            <div className="text-sm text-gray-400">{metric.sublabel}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* 4. Solutions */}
          <div id="solutions" className="space-y-20 scroll-mt-20">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    オリジナルソリューション
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                  日本企業の課題を解決する、EvangSol独自開発のNetSuite拡張機能
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SOLUTIONS.map((solution, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(solution.path)}
                    className="group cursor-pointer relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all hover:scale-105"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>

                    <div className="text-green-400 mb-4 group-hover:text-emerald-400 transition-colors">
                      {solution.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">{solution.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                    <div className="flex items-center text-green-400 text-sm font-semibold">
                      詳細を見る
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>

          </div>

          {/* 5. Process Timeline */}
          <div className="space-y-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            導入プロセス
          </h2>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hidden lg:block"></div>

            <div className="grid lg:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((process, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all hover:scale-105">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {process.step}
                    </div>
                    <div className="text-purple-400 mb-4">{process.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                    <p className="text-gray-400 mb-4">{process.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-purple-900/50 rounded-full">
                      <Clock className="w-4 h-4 mr-2 text-purple-400" />
                      <span className="text-sm text-purple-300">{process.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Final CTA with Animation */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
            未来のビジネスを、今始めよう
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            NetSuite × EvangSolで、競争力を高める経営基盤を構築
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={goContact}
              className="px-10 py-5 bg-gradient-to-r from-purple-500 to-orange-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              今すぐ無料相談
            </button>
            <a
              href={CASE_STUDY.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gray-800/50 backdrop-blur text-white font-bold text-lg rounded-full border border-gray-600 hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300"
            >
              <Trophy className="w-6 h-6" />
              実績を見る
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { label: 'Oracle認定パートナー', icon: <Award className="w-6 h-6" /> },
              { label: 'ISO27001認証', icon: <Shield className="w-6 h-6" /> },
              { label: '24/7サポート', icon: <HeartHandshake className="w-6 h-6" /> },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur rounded-full border border-gray-700">
                <div className="text-yellow-400">{badge.icon}</div>
                <span className="text-sm text-gray-300">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
};

export default NetSuiteUnified;
