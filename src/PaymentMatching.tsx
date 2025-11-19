import React, { useState, useEffect } from 'react';
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
  
  DollarSign,
  FileSearch,
  GitBranch,
  Cpu,
  Rocket,
  Brain,
  Layers,
  Building,
  Mail,
  ExternalLink,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import { Feature } from './types';

// Main features with enhanced descriptions
const MAIN_FEATURES: Feature[] = [
  {
    icon: <Brain className="w-10 h-10" />,
    title: 'スマート自動マッチング',
    description: 'ルールベースエンジンにより、複雑な入金パターンも高精度で自動突合。継続的な最適化で精度が向上',
    bulletPoints: ['債権データと高精度のマッチング', '消費税や手数料誤差の認識', '顧客に紐づく仕訳も連携'],
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: '定期バッチ処理',
    description: 'アカウントアグリゲーションサービスと直接連携し、定時刻や定期的に入金データの自動処理を開始',
    bulletPoints: ['定期的なデータ取得', '24/365稼働', 'データ取得～消込まで自動化'],
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: '多様な運用に対応',
    description: '各企業の多様な会計処理に柔軟に対応し、経理業務をソリューションに集約',
    bulletPoints: ['全国銀行協会フォーマット(全銀データ)対応', '入金データに対する個別仕訳作成', '入金状況チェック一時保存機能'],
  },
];

// Detailed capabilities
const CAPABILITIES = [
  {
    icon: <Database className="w-8 h-8" />,
    title: 'マルチバンク対応',
    description: '全国銀行協会フォーマット(全銀データ)に完全対応。地方銀行フォーマットにも対応可能',
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: '各種サービスと自動連携',
    description: 'アカウントアグリゲーションサービスとAPI連携し、自動で入金から消込までを実現',
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: 'バーチャル口座対応',
    description: '不特定多数の顧客や複数口座を割り当てる取引先向けのバーチャル口座(仮想口座)にも対応',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '過入金時の柔軟な対応',
    description: '企業の要件に応じて過入金の取り扱いに対応(前受金、未割当て入金データ等)',
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: '複数担当者による作業を想定',
    description: '複数人で経理処理を行う際も作業範囲の割り当てや重複作業時の動作などを想定した設計',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: '多様な企業形態に対応',
    description: '自社口座や連結会社毎の入金管理することや、取引先(親子顧客)の債権集約も設定可能',
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
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleContact = () => {
    window.open('https://www.evangsol.co.jp/support', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}></div>

        {/* Interactive glow - Disabled for static design */}
        {/* <div
          className="pointer-events-none fixed w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        /> */}
      </div>

      <ModernNavigationBar
        showBackButton={true}
        variant="solution"
        onContactClick={handleContact}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title with 3D effect */}
          <div className="relative mb-8 opacity-100 translate-y-0">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                入金消込ソリューション
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-800">
              自動化が変える、経理業務の未来
            </p>
          </div>

          {/* Feature Display - Static */}
          <div className="relative h-20 mb-12">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600">
                  <div className="text-white"><Cpu className="w-8 h-8" /></div>
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  高度な自動化を実現
                </span>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Main Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              革新的な3つのコア機能
            </h2>
            <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto">
              最先端テクノロジーで入金消込業務を完全自動化
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {MAIN_FEATURES.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border-2 border-slate-300/50 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 border-2 border-blue-500/30">
                    <div className="text-blue-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-4">{feature.title}</h3>
                  <p className="text-slate-800 mb-6">{feature.description}</p>
                  {feature.bulletPoints && (
                    <ul className="space-y-3">
                      {feature.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-slate-800">{point}</span>
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
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              包括的な機能群
            </h2>
            <p className="text-xl text-slate-900 font-bold">
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
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-teal-600/10 rounded-2xl blur-xl opacity-0"></div>
                <div className="relative bg-white backdrop-blur-xl rounded-2xl p-6 border-2 border-slate-300/50">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mr-4 border-2 border-cyan-400">
                      <div className="text-blue-600">{capability.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{capability.title}</h3>
                      <p className="text-sm text-slate-900 font-medium">{capability.description}</p>
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
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 backdrop-blur-xl rounded-3xl p-12 border-2 border-blue-500/20">
            <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              導入効果
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {IMPACT_METRICS.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-slate-900 font-medium">{metric.sublabel}</div>
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
          <p className="text-xl text-slate-900 font-bold mb-12">
            今すぐ始めれば、来月には効果を実感できます
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleContact}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full flex items-center gap-3 group"
            >
              <Mail className="w-6 h-6" />
              お問い合わせ
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
};

export default PaymentMatching;