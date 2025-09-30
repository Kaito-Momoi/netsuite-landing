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
import ContactModal from './components/ContactModal';
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
  {
    icon: <Code className="w-8 h-8" />,
    title: '高い開発力',
    description: 'SuiteScriptエキスパートが多数在籍。複雑な業務ロジックも堅実にシステム化',
    bulletPoints: ['高度なカスタマイズ開発', '複雑な業務フローの実装', '独自機能の開発'],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: '短納期',
    description: '独自の開発フレームワークとテンプレートで、開発スピードを大幅に短縮',
    bulletPoints: ['効率的な開発プロセス', '豊富なテンプレート活用', '迅速な納品'],
  },
];

const CASE_STUDY = {
  company: '株式会社グリーンハウス',
  headline: 'レガシーERPからNetSuiteへ基幹システムを移行し、柔軟でスピーディな成長基盤を構築',
  summary:
    '幅広い製品ラインを展開する電子機器メーカー。SAP ECC 6.0のEOSを機にNetSuiteへ刷新し、基幹業務・顧客管理・ワークフローを一体化。ガバナンス強化と迅速な経営判断を支える成長基盤を整備。',
  location: '〒150-0013 東京都渋谷区恵比寿1-19-15 ウノサワ東急ビル5階',
  employees: '100～249名',
  partner: '導入パートナー: 株式会社EvangSol',
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

// Agile Process Q&A
const AGILE_QA = [
  {
    question: 'アジャイル開発は「終わりが見えない」と聞きますが？',
    answer: 'EvangSolのアジャイル導入は、プロダクトビジョンとロードマップを最初に明確化し、MVP（最小実装製品）を定義することで、全体のゴールを可視化します。',
    icon: <Target className="w-8 h-8" />,
    details: ['プロダクトビジョンの共有', 'ロードマップの策定', 'MVPの明確な定義'],
  },
  {
    question: '各フェーズでは何を基準に進捗を管理しますか？',
    answer: '各スプリントで具体的なゴールと完了の定義を設定し、明確な成果物を提供します。',
    icon: <CheckCircle className="w-8 h-8" />,
    details: ['スプリント', '明確な完了基準', 'デモ可能な成果物'],
  },
  {
    question: 'どうやって成果を確認していきますか？',
    answer: '小さなリリースを積み重ね、各スプリントの終わりにデモを実施。ユーザーのフィードバックを即座に反映し、価値を継続的に提供します。',
    icon: <Rocket className="w-8 h-8" />,
    details: ['スプリントデモ', 'ユーザーフィードバック', '継続的な価値提供'],
  },
  {
    question: '進捗が見えにくくなることはありませんか？',
    answer: '定期的なふりかえり（レトロスペクティブ）で進捗と達成感を確認。常に「どこへ向かっていて、いまどこにいるのか」を可視化します。',
    icon: <BarChart3 className="w-8 h-8" />,
    details: ['進捗の可視化', '定期的なふりかえり', 'ベロシティ計測'],
  },
];

const NetSuiteUnified: React.FC = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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

  const openContactModal = useCallback(() => setIsContactModalOpen(true), []);
  const closeContactModal = useCallback(() => setIsContactModalOpen(false), []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-slate-50 to-indigo-600/10"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        {/* Particle field - removed */}

        {/* Interactive cursor glow - removed */}
      </div>

      <ModernNavigationBar
        showBackButton={false}
        variant="page"
        onContactClick={openContactModal}
      />

      {/* Hero Section with Enhanced 3D Typography */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 z-10 pt-32 pb-16 md:pt-40"
      >
        <div className="text-center max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 backdrop-blur-xl rounded-full border-2 border-blue-600/60 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              日本有数のNetSuite導入パートナー
            </span>
            <Sparkles className="w-5 h-5 text-blue-500" />
          </div>

          {/* 3D Title */}
          <div className={`relative mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent pb-6">
              NetSuite × EvangSol
            </h1>
          </div>

          {/* Subtitle with animation */}
          <p className={`text-2xl md:text-3xl mb-4 text-slate-700 font-medium transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            多彩な可能性を、現実のビジネスへ
          </p>

          {/* Animated feature rotator */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: '柔軟なカスタマイズ', icon: <Code />, gradient: 'from-blue-600 to-indigo-600' },
                { text: '完全クラウド対応', icon: <Cloud />, gradient: 'from-indigo-600 to-purple-600' },
                { text: 'AI機能搭載', icon: <Cpu />, gradient: 'from-sky-600 to-blue-600' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute flex items-center gap-4 transition-all duration-1000 ${activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg`}>
                    {React.cloneElement(item.icon, { className: 'w-8 h-8 text-white' })}
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
            className="mb-12 p-3 bg-slate-900/10 backdrop-blur rounded-full hover:bg-slate-900/20 border border-slate-300 transition-all"
            aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          {/* Call to Action */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://www.evangsol.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              EvangSol企業サイトへ
            </a>
          </div>

        </div>
      </section>

      {/* Main Content - All Sections in Scroll Flow */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* 1. NetSuite */}
          <div id="netsuite" className="space-y-20 scroll-mt-20">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  NetSuiteの実用的な機能
                </h2>
                <p className="text-xl text-slate-700 font-medium max-w-3xl mx-auto mb-12">
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
                      className="group relative bg-white backdrop-blur-xl rounded-2xl p-8 border-2 border-slate-300 hover:border-blue-600 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-slate-700">{feature.description}</p>
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
                    gradient: 'from-indigo-500 to-blue-500',
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
                    <div className={`absolute inset-0 bg-gradient-to-r ${tool.gradient} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                    <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border-2 border-slate-300 hover:border-blue-600 shadow-lg hover:shadow-xl transition-all h-full">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${tool.gradient} mb-6`}>
                        {tool.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
                      <p className="text-gray-800 mb-6">{tool.subtitle}</p>

                      <ul className="space-y-3">
                        {tool.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-slate-700 font-medium">{feature}</span>
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
                <h2 className="text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EvangSolの強み
                </h2>
                <p className="text-xl text-slate-700 font-medium max-w-3xl mx-auto mb-12">
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
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl blur-xl transition-all ${hoveredStrength === index ? 'opacity-30' : 'opacity-10'}`}></div>
                    <div className="relative bg-white backdrop-blur-xl rounded-2xl p-6 border-2 border-slate-300 hover:border-blue-600 shadow-lg hover:shadow-xl transition-all hover:scale-105 h-full">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <div className="text-white">{strength.icon}</div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3">{strength.title}</h3>
                      <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                        {strength.description}
                      </p>

                      {strength.bulletPoints && (
                        <ul className="space-y-2">
                          {strength.bulletPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-xs text-slate-700 font-medium">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Case Study Highlight */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-xl rounded-3xl p-12 border-2 border-blue-300 shadow-xl">
                <div className="grid lg:grid-cols-[1.6fr,1fr] gap-12 items-start">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border-2 border-blue-500 rounded-full text-sm font-bold text-blue-700 mb-6">
                      <Trophy className="w-4 h-4" />
                      導入実績
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{CASE_STUDY.company}</h3>
                    <p className="text-lg text-blue-700 font-bold mb-4">{CASE_STUDY.headline}</p>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                      {CASE_STUDY.summary}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-800">
                      <div className="flex items-center gap-2 px-3 py-2 bg-white border-2 border-slate-300 rounded-full shadow-md">
                        <Building2 className="w-4 h-4 text-blue-600" />
                        <span>{CASE_STUDY.location}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-white border-2 border-slate-300 rounded-full shadow-md">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span>{CASE_STUDY.employees}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-white border-2 border-slate-300 rounded-full shadow-md">
                        <HeartHandshake className="w-4 h-4 text-blue-600" />
                        <span>{CASE_STUDY.partner}</span>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href={CASE_STUDY.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-gray-900 font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 hover:scale-105 transition-all"
                      >
                        実績を見る
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <button
                        onClick={openContactModal}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-slate-900 font-bold rounded-full hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
                      >
                        <Rocket className="w-4 h-4" />
                        無料相談を依頼
                      </button>
                    </div>
                  </div>
                  <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-lg">
                    <div className="text-blue-600 mb-4">
                      <Quote className="w-8 h-8" />
                    </div>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed italic mb-6">
                      {CASE_STUDY.quote.text}
                    </p>
                    <p className="text-xs md:text-sm text-gray-800">{CASE_STUDY.quote.author}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {CASE_STUDY.highlights.map((highlight, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border-2 border-slate-300 shadow-lg">
                      <div className="text-blue-600 mb-4">{highlight.icon}</div>
                      <h4 className="text-lg font-bold text-slate-900 mb-3">{highlight.title}</h4>
                      <p className="text-sm text-slate-700 leading-relaxed">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
          </div>

          {/* 3. Challenges & Solutions */}
          <div id="matching" className="scroll-mt-20">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  課題とソリューション
                </h2>
                <p className="text-xl text-slate-700 font-medium max-w-3xl mx-auto">
                  ERP導入でよくある課題とEvangSolの解決策
                </p>
              </div>

              {/* Challenges and Solutions */}
              <div className="space-y-12">
                {/* Challenge 1: カスタマイズ性の制約 */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-3xl p-10 border-2 border-slate-300 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-red-500/20 rounded-xl">
                            <Settings className="w-8 h-8 text-red-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-red-600">課題 1: カスタマイズ性の制約</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          既存ERPでは内製でのカスタマイズ範囲が狭く、ユーザーが求める画面レイアウトの変更や分析切り口の追加に迅速に対応できず、外部ベンダー依存でコストや時間が増大。ERPの出力データをExcelに再入力して加工する非効率な作業が常態化。
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>外部ベンダー依存でコスト増大</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Excelへの二度手間作業</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>変更対応の遅延</span>
                          </li>
                        </ul>
                        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-sm text-red-900 leading-relaxed">
                          <span className="block font-semibold text-red-700 mb-2">事例</span>
                          年商300億円規模の消費財メーカーでは商品改定のたびに「新レイアウトの受注画面をすぐ反映してほしい」と営業部門から要望が寄せられるものの、外部ベンダーに依頼して実装完了まで3週間。その間はExcelでの仮運用が続き、生産計画部門が最新版の受注データを把握できず欠品が発生していました。
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-green-500/20 rounded-xl">
                            <CheckCircle className="w-8 h-8 text-green-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-green-600">EvangSolのソリューション</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          NetSuiteのセルフカスタマイズ機能を活用できるように設定し、SuiteSuccessのテンプレートを用いて300以上の標準レポートやダッシュボードを提供。
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>外部ベンダー依存の削減</span>
                          </li>
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Excel作業の完全排除</span>
                          </li>
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>柔軟な内製改修が可能</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge 2: 業務フローの分断 */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-3xl p-10 border-2 border-slate-300 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-red-500/20 rounded-xl">
                            <GitBranch className="w-8 h-8 text-red-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-red-600">課題 2: 業務フローの分断</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          受発注・在庫・請求はERP上で管理していたものの、申請・承認業務は別システムで行われており、業務全体が一気通貫で処理できない状態。
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>システム間の連携不足</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>承認プロセスの遅延</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>属人化した業務</span>
                          </li>
                        </ul>
                        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-sm text-red-900 leading-relaxed">
                          <span className="block font-semibold text-red-700 mb-2">事例</span>
                          直販と代理店を併用する産業機器商社では、返品や値引き申請がグループウェア経由の紙PDFで回覧され、承認完了まで平均5営業日。ERPに反映する担当者が出社していないと処理が止まり、月末は未処理案件が積み上がり顧客対応が遅延していました。
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-green-500/20 rounded-xl">
                            <CheckCircle className="w-8 h-8 text-green-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-green-600">EvangSolのソリューション</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          NetSuiteの承認ワークフロー機能を導入し、返品管理フローを統合。申請から承認までのリードタイムが従来の1/10以下に短縮。
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>リードタイム1/10以下</span>
                          </li>
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>属人化の解消</span>
                          </li>
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>スムーズな業務運営</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge 3: ガバナンスの不足 */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-3xl p-10 border-2 border-slate-300 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-red-500/20 rounded-xl">
                            <Shield className="w-8 h-8 text-red-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-red-600">課題 3: ガバナンスの不足</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          全社共通のCRMやSFA基盤がなく、顧客情報が部門ごとに分散して管理され、内部統制が不十分。
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>顧客情報の分散管理</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>内部統制の不備</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>監査対応の困難</span>
                          </li>
                        </ul>
                        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-sm text-red-900 leading-relaxed">
                          <span className="block font-semibold text-red-700 mb-2">事例</span>
                          複数事業部を抱えるITサービス企業では、営業部門がSFA、サポート部門が別CRM、経営企画はExcelで顧客管理を実施。どの部署がどの権限で情報にアクセスしているかを把握できず、J-SOX監査で「アクセスログを統合的に追跡できない」と指摘を受けました。
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-green-500/20 rounded-xl">
                            <CheckCircle className="w-8 h-8 text-green-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-green-600">EvangSolのソリューション</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          ERP領域を整備する初期フェーズを実行後、CRM/SFA統合を組み込む計画を提示。NetSuiteのアクセス制御や監査証跡機能を活用。
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>段階的な統合実装</span>
                          </li>
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>内部統制の強化</span>
                          </li>
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>顧客情報の一元管理</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge 4: 定型レポート依存 */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white backdrop-blur-xl rounded-3xl p-10 border-2 border-slate-300 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-red-500/20 rounded-xl">
                            <BarChart3 className="w-8 h-8 text-red-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-red-600">課題 4: 定型レポート依存とExcel加工</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          属人的なExcel業務が多く、迅速な経営判断を阻害。データの一貫性や正確性にも課題。
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>属人的なデータ加工</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>意思決定の遅延</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>データの不整合</span>
                          </li>
                        </ul>
                        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-sm text-red-900 leading-relaxed">
                          <span className="block font-semibold text-red-700 mb-2">事例</span>
                          全国展開するアパレル小売では、本部経理が毎月の売上報告を作成する際、店舗別・カテゴリ別の集計を担当者がExcelで加工。担当者が異動した月はマクロが動かず締め後3日間決算資料が用意できず、経営会議が延期されるトラブルが発生しました。
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-green-500/20 rounded-xl">
                            <CheckCircle className="w-8 h-8 text-green-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-green-600">EvangSolのソリューション</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          NetSuiteの標準BIツール、ダッシュボード、ロール別レポート配布機能を設定。監査証跡の自動記録を導入。
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Excel業務の大幅削減</span>
                          </li>
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>リアルタイム意思決定</span>
                          </li>
                          <li className="flex items-start">
                            <Star className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>データの一貫性確保</span>
                          </li>
                        </ul>
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
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    オリジナルソリューション
                  </span>
                </h2>
                <p className="text-xl text-slate-700 font-medium max-w-3xl mx-auto mb-12">
                  日本企業の課題を解決する、EvangSol独自開発のNetSuite拡張機能
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SOLUTIONS.map((solution, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(solution.path)}
                    className="group cursor-pointer relative bg-white backdrop-blur-xl rounded-2xl p-6 border-2 border-slate-300 hover:border-emerald-600 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"></div>

                    <div className="text-emerald-600 mb-4 group-hover:text-teal-600 transition-colors">
                      {solution.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-slate-900">{solution.title}</h4>
                    <p className="text-slate-700 text-sm mb-4">{solution.description}</p>
                    <div className="flex items-center text-emerald-600 text-sm font-bold">
                      詳細を見る
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>

          </div>

          {/* 5. Implementation Methodology */}
          <div className="space-y-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                導入方法論
              </h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
                EvangSolはアジャイル導入を核に、業務単位で優先度を再評価しながら短いサイクルで開発・レビュー・改善を繰り返します。
                変更への強さとコスト最適化、現場からのフィードバック循環を重視し、価値を早期に立ち上げます。
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-12">
              <table className="w-full bg-white/95 rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900">
                    <th className="px-6 py-4 text-left font-bold">観点</th>
                    <th className="px-6 py-4 text-left">パッケージ導入</th>
                    <th className="px-6 py-4 text-left bg-blue-600/20">アジャイル導入</th>
                    <th className="px-6 py-4 text-left">ウォーターフォール導入</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-bold text-gray-900">導入期間</td>
                    <td className="px-6 py-4 text-gray-800">短期（標準機能中心）</td>
                    <td className="px-6 py-4 bg-blue-50 text-gray-900 font-semibold">中期（優先度順に段階的リリース）</td>
                    <td className="px-6 py-4 text-gray-800">長期（全体要件を確定後に一括リリース）</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-gray-900">柔軟性</td>
                    <td className="px-6 py-4 text-gray-800">導入後に追加開発で対応</td>
                    <td className="px-6 py-4 bg-blue-50 text-gray-900 font-semibold">サイクルごとに変更・改善を取り込みやすい</td>
                    <td className="px-6 py-4 text-gray-800">要件変更に弱く、再計画の負荷が大きい</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-gray-900">主な価値</td>
                    <td className="px-6 py-4 text-gray-800">短期で標準運用を開始</td>
                    <td className="px-6 py-4 bg-blue-50 text-gray-900 font-semibold">早期に価値を検証しながら最適化を継続</td>
                    <td className="px-6 py-4 text-gray-800">理想像に合わせた統合を実現</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Agile Process Flow */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/95 rounded-2xl p-8 border border-gray-300/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl">
                    <Layers className="w-8 h-8 text-indigo-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">アジャイル導入の流れ</h3>
                </div>
                <p className="text-gray-800 mb-6">
                  施策ごとに優先度を設定し、要件定義→設定→レビュー→改善のループを構築。
                  短期間で成果物を可視化し、投資対効果を検証しながら範囲を拡張します。
                </p>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                    <span className="text-gray-800">ビジョン整理とロードマップ策定</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                    <span className="text-gray-800">サイクル単位の要件・設定・テスト</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                    <span className="text-gray-800">定例レビューでのフィードバック反映</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                    <span className="text-gray-800">リリース後の運用チューニングと定着支援</span>
                  </li>
                </ol>
              </div>

              <div className="bg-white/95 rounded-2xl p-8 border border-gray-300/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl">
                    <Target className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">適する案件タイプ</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">要件が進行中に磨き込まれる基幹刷新・段階的なモダナイゼーション</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">部門毎に優先度が異なるグローバル展開・国内外拠点の同期化</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">短期間で価値仮説を検証しながら、財務・販売・在庫領域を統合したい案件</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100/40 to-orange-100/40 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">アジャイル開発でよくある課題</h3>
              <p className="text-gray-800 text-lg">
                「終わりが見えない」アジャイル開発への不安を、EvangSolが以下の方法で解決します
              </p>
            </div>

            <div className="space-y-8">
              {AGILE_QA.map((qa, index) => (
                <div key={index} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-orange-100/30 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 border border-gray-300/50 hover:border-purple-600/50 transition-all">
                    <div className="grid md:grid-cols-[auto,1fr] gap-8">
                      <div className="flex items-start">
                        <div className="p-4 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-2xl">
                          <div className="text-purple-400">{qa.icon}</div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-purple-400">
                          Q: {qa.question}
                        </h3>
                        <p className="text-lg text-gray-800 leading-relaxed">
                          A: {qa.answer}
                        </p>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                          {qa.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-800">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Agile Benefits Summary */}
            <div className="relative mt-16">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 to-orange-100/40 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-12 border border-gray-300/50">
                <h3 className="text-3xl font-bold text-center mb-12 pb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  EvangSolのアジャイル導入の特徴
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-4">
                      <Target className="w-10 h-10 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">明確なゴール設定</h4>
                    <p className="text-gray-800">プロダクトビジョンとロードマップで全体像を可視化</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-2xl mb-4">
                      <Rocket className="w-10 h-10 text-pink-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">継続的な価値提供</h4>
                    <p className="text-gray-800">スプリントごとに動く成果物を提供し、早期に価値を実現</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl mb-4">
                      <BarChart3 className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">進捗の可視化</h4>
                    <p className="text-gray-800">常に現在地とゴールまでの距離を明確に共有</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      {/* Final CTA with Animation */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            未来のビジネスを、今始めよう
          </h2>
          <p className="text-xl text-slate-700 font-medium mb-12">
            NetSuite × EvangSolで、競争力を高める経営基盤を構築
          </p>

          <div className="flex justify-center">
            <button
              onClick={openContactModal}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              今すぐ無料相談
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { label: 'Oracle認定パートナー', icon: <Award className="w-6 h-6" /> },
              { label: 'ISO27001認証', icon: <Shield className="w-6 h-6" /> },
              { label: '24/7サポート', icon: <HeartHandshake className="w-6 h-6" /> },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white backdrop-blur rounded-full border-2 border-slate-300 shadow-md">
                <div className="text-blue-600">{badge.icon}</div>
                <span className="text-sm text-slate-700 font-medium">{badge.label}</span>
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

export default NetSuiteUnified;
