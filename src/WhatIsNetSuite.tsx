import React, { useCallback, useState, useEffect } from 'react';
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
  Settings,
  Calculator,
  ShoppingCart,
  Truck,
  Factory,
  Store,
  Briefcase,
  Code,
  Sparkles,
  AlertTriangle,
  Zap,
  Shield,
  Database,
  Cpu,
  Workflow,
  PenTool,
  Network,
  Layers,
  GitBranch,
  MousePointer,
  Award,
  Rocket,
  ChevronRight,
  Play,
  Pause,
  Activity,
  Infinity,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import { Feature } from './types';

// Hoisted constants to avoid re-allocations on re-render
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

const INDUSTRIES = [
  { name: '製造業', icon: <Factory className="w-6 h-6" /> },
  { name: '小売業', icon: <Store className="w-6 h-6" /> },
  { name: '卸売業', icon: <Truck className="w-6 h-6" /> },
  { name: 'サービス業', icon: <Briefcase className="w-6 h-6" /> },
  { name: 'IT・ソフトウェア', icon: <Globe className="w-6 h-6" /> },
] as const;

const WhatIsNetSuite: React.FC = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const goStrengths = useCallback(() => navigate('/evangsol-strengths'), [navigate]);
  const goContact = useCallback(() => navigate('/contact'), [navigate]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
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

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        {/* Interactive cursor light */}
        <div
          className="pointer-events-none absolute w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl transition-all duration-200"
          style={{
            left: `${mousePosition.x - 128}px`,
            top: `${mousePosition.y - 128}px`,
          }}
        />
      </div>

      <ModernNavigationBar showBackButton={false} variant="page" />

      {/* Hero Section with 3D effect */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div
          className="text-center max-w-6xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-full border border-blue-500/30 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                世界No.1クラウドERP
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              NetSuite
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-300">
              の革新的な強み
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            独自のビジネスモデルに寄り添う
            <span className="text-cyan-400 font-bold">無限の柔軟性</span>
          </p>

          {/* Animated feature showcase */}
          <div className="relative h-32 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { icon: <Code />, text: 'カスタマイズ無限大', color: 'from-purple-400 to-pink-400' },
                { icon: <Cloud />, text: 'クラウドネイティブ', color: 'from-blue-400 to-cyan-400' },
                { icon: <Rocket />, text: 'AI機能搭載', color: 'from-green-400 to-emerald-400' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-1000 ${activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${item.color}`}>
                      {React.cloneElement(item.icon, { className: 'w-8 h-8 text-black' })}
                    </div>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Play/Pause control */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mb-12 p-2 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => document.getElementById('customization')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <MousePointer className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              カスタマイズ力を見る
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={goStrengths}
              className="px-8 py-4 bg-gray-800/50 backdrop-blur text-white font-bold rounded-full border border-gray-600 hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Zap className="w-6 h-6 text-yellow-400" />
              EvangSolの強みを見る
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Customization Power */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              あなたの業務に合わせて自由自在にカスタマイズ
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              企業独自のプロセスや商習慣をそのままシステム化。運用負担を大幅に削減
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Code className="w-12 h-12 text-orange-600" />,
                title: 'SuiteScript',
                description: 'JavaScriptベースのスクリプト言語で複雑な業務ロジックを実装',
                features: ['イベントトリガー', 'スケジュール実行', 'REST API連携'],
              },
              {
                icon: <Settings className="w-12 h-12 text-orange-600" />,
                title: 'SuiteFlow',
                description: 'ドラッグ&ドロップでワークフローを視覚的に設計',
                features: ['承認フロー', '自動通知', '条件分岐'],
              },
              {
                icon: <Globe className="w-12 h-12 text-orange-600" />,
                title: 'SuiteTalk',
                description: 'WebサービスAPIで外部システムとシームレスに連携',
                features: ['SOAP/REST API', 'リアルタイム同期', 'データ一括処理'],
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div className="mb-6">{tool.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{tool.title}</h3>
                <p className="text-slate-600 mb-6">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                カスタマイズで実現できること
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {[
                  { title: '独自の承認フロー', desc: '日本企業特有の稟議・決裁プロセス' },
                  { title: '特殊な価格計算', desc: '複雑なリベートや数量割引' },
                  { title: '業界固有の帳票', desc: 'フォーマットや項目を自由に設計' },
                  { title: '既存システム連携', desc: 'APIであらゆるシステムと接続' },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4">
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                カスタマイズ性が高い = 開発力が重要
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
                NetSuiteのポテンシャルを最大限引き出すには、
                <span className="font-bold text-slate-900">
                  高度な開発スキルを持つパートナー選び
                </span>
                が成功の鍵
              </p>
              <div className="text-sm bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 rounded-full inline-block mb-8">
                <span className="font-semibold text-orange-700">
                  ✨ 2024年最新：AI・機械学習機能が大幅強化され、カスタマイズの可能性がさらに拡大
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                {[
                  {
                    icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
                    title: '開発力が乏しい場合',
                    items: ['標準機能で妥協', '手作業が残る', '効果が限定的'],
                  },
                  {
                    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
                    title: '開発力が高い場合',
                    items: ['業務に完全フィット', '完全自動化', 'ROI最大化'],
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                    title: '結果の違い',
                    items: ['導入コスト50%削減', '運用工数80%削減', '生産性200%向上'],
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                    <ul className="space-y-2">
                      {item.items.map((point, idx) => (
                        <li key={idx} className="text-sm text-slate-600">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Link to EvangSol Strengths */}
              <div className="mt-12">
                <button
                  onClick={goStrengths}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  NetSuiteとEvangSolの親和性を見る
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">NetSuiteの主要機能</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              企業の成長に必要なすべての機能を統合プラットフォームで提供
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-500/30">
                  <div className="text-blue-400">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">業界別ソリューション</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              各業界の特性に最適化された機能を提供
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 text-center hover:border-sky-400 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="font-bold text-slate-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">NetSuiteの実績</h2>
            <p className="text-xl opacity-90">世界中の企業から信頼される理由</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '38,000+', label: '導入企業数' },
              { number: '220+', label: '対応国・地域' },
              { number: '27', label: '対応言語' },
              { number: '190+', label: '対応通貨' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Benefits with 2024 Updates - Futuristic Design */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-3xl blur-3xl animate-pulse"></div>

            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-12 border border-green-500/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur rounded-full border border-green-500/30 mb-6">
                    <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
                    <span className="font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      2024年最新アップデート
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-8">
                    クラウドERPの<span className="text-green-400">革命的メリット</span>
                  </h3>

                  <div className="space-y-4">
                    {[
                      { icon: <Database />, title: '初期投資ゼロ', desc: 'サーバー不要で即導入', color: 'text-blue-400' },
                      { icon: <Activity />, title: '自動アップデート', desc: '常に最新機能を利用可能', color: 'text-cyan-400' },
                      { icon: <Cpu />, title: 'AI機能統合', desc: '生成AIで業務自動化', color: 'text-purple-400' },
                      { icon: <Globe />, title: 'どこでもアクセス', desc: 'モバイル完全対応', color: 'text-green-400' },
                      { icon: <Shield />, title: '災害対策', desc: '99.99%の可用性保証', color: 'text-orange-400' },
                      { icon: <Infinity />, title: '無限のスケーラビリティ', desc: '成長に合わせて拡張', color: 'text-pink-400' },
                    ].map((item, index) => (
                      <div key={index} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                        <div className={`p-2 rounded-lg bg-gray-800/50 ${item.color} group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-white mb-1">{item.title}</div>
                          <div className="text-sm text-gray-400">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  {/* 3D Card Effect */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/50 to-blue-500/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-cyan-500/30 transform hover:scale-105 transition-all duration-500">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl"></div>
                        </div>
                        <Cloud className="w-20 h-20 text-cyan-400 mx-auto mb-6 relative z-10 animate-float" />
                      </div>

                      <h4 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                        Oracle Cloud Infrastructure
                      </h4>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">99.99%</div>
                          <div className="text-xs text-gray-500">稼働率</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">24/7</div>
                          <div className="text-xs text-gray-500">サポート</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-400">∞</div>
                          <div className="text-xs text-gray-500">拡張性</div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-600/20 to-amber-600/20 backdrop-blur rounded-xl p-4 border border-orange-500/30">
                        <p className="text-sm font-bold text-orange-400 text-center flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          日本市場向け最適化完了
                        </p>
                        <p className="text-xs text-orange-300 text-center mt-1">2024年7月リリース</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Style */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
            NetSuiteで業務を変革しませんか？
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            EvangSolは豊富な導入実績と技術力で、お客様のNetSuite導入を成功に導きます
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={goStrengths}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              EvangSolの強みを見る
            </button>
            <button
              onClick={goContact}
              className="px-10 py-5 bg-gray-800/50 backdrop-blur text-white font-bold text-lg rounded-full border border-gray-600 hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Globe className="w-6 h-6" />
              お問い合わせ
            </button>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
};

export default WhatIsNetSuite;
