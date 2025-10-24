import React, { useState, useEffect } from 'react';
import {
  CheckCircle,
  Clock,
  Database,
  Shield,
  GitBranch,
  Settings,
  Link,
  Sliders,
  Save,
  TrendingUp,
  Brain,
  Mail,
  Users,
  DollarSign,
  ShoppingCart,
  FilePlus,
  ExternalLink,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import { Feature } from './types';

// Main features with enhanced descriptions
const MAIN_FEATURES: Feature[] = [
  {
    icon: <Link className="w-10 h-10" />,
    title: '業務自動化サポート',
    description: '紙の申請書は不要。NetSuite内で申請から承認、データ反映まで全て完結。承認証跡はNetSuiteで記録、閲覧可能',
    bulletPoints: ['ペーパーレス化によるコスト削減', '承認後の自動処理',  '承認証跡の保護'],
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: '統合申請プラットフォーム',
    description: '一つの画面から様々な申請が可能。申請対象を自由に選択でき、業務に応じた最適な申請フローを実現',
    bulletPoints: ['複数申請の一元管理', '直感的な操作画面', '申請タイプの柔軟選択'],
  },
  {
    icon: <GitBranch className="w-10 h-10" />,
    title: '柔軟な承認ワークフロー',
    description: '承認経路はカスタムレコードで設定・管理。NetSuite標準の承認WFをGUIで設定する必要なし',
    bulletPoints: ['動的な承認ルート', '条件分岐対応', '代理承認機能'],
  },
];

// Detailed capabilities
const CAPABILITIES = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: '申請タイプ選択',
    description: 'ヘッダのみの簡易申請から明細部を使用した詳細申請まで柔軟に対応',
  },
  {
    icon: <Sliders className="w-8 h-8" />,
    title: 'カスタマイズ対応',
    description: '申請に必要なヘッダ情報や明細情報の項目は自由に追加・変更可能',
  },
  {
    icon: <Save className="w-8 h-8" />,
    title: '保存タイミング制御',
    description: '申請データの保存時に他のマスタやトランザクションデータと区別して管理',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'セキュリティ機能',
    description: 'ロールベースの承認制御と完全な監査証跡で内部統制を強化',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'データ一元管理',
    description: 'NetSuiteの各種データと完全連携し、データ整合性を確保',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '分析・レポート',
    description: '申請状況の可視化と詳細な分析レポートで業務改善をサポート',
  },
];

// Use cases
const USE_CASES = [
  { icon: <DollarSign className="w-6 h-6" />, title: '経費精算申請', description: '出張費、交際費、備品購入など' },
  { icon: <ShoppingCart className="w-6 h-6" />, title: '購買申請', description: '物品購入、サービス調達など' },
  { icon: <Users className="w-6 h-6" />, title: 'マスタ登録申請', description: '顧客マスタ、仕入先マスタなど' },
  { icon: <FilePlus className="w-6 h-6" />, title: 'カスタム申請', description: '業務特有の申請フォーム' },
];

const GeneralApplicationSolution: React.FC = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50"></div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}></div>

        {/* Interactive glow */}
        <div
          className="pointer-events-none fixed w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
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
          <div className={`relative mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                汎用申請ソリューション
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-800">
              あらゆる申請業務を一元化し、効率的なワークフローを実現
            </p>
          </div>

          {/* Animated Feature Carousel */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: '迅速な申請・承認フロー', icon: <Clock className="w-8 h-8" />, gradient: 'from-purple-600 to-indigo-600' },
                { text: 'シンプルな導入・運用', icon: <Settings className="w-8 h-8" />, gradient: 'from-indigo-400 to-blue-400' },
                { text: '安全・確実なデータ連携', icon: <Shield className="w-8 h-8" />, gradient: 'from-blue-400 to-cyan-400' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute flex items-center gap-4 transition-all duration-1000 ${activeFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient}`}>
                    <div className="text-white">{item.icon}</div>
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

      {/* Main Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              革新的な3つのコア機能
            </h2>
            <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto">
              最先端テクノロジーで申請業務を完全自動化
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {MAIN_FEATURES.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border-2 border-slate-300/50 hover:border-purple-400 transition-all hover:scale-105 h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border-2 border-purple-500/30">
                    <div className="text-purple-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-4">{feature.title}</h3>
                  <p className="text-slate-800 mb-6 flex-grow">{feature.description}</p>
                  {feature.bulletPoints && (
                    <ul className="space-y-3 mt-auto">
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
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              包括的な機能群
            </h2>
            <p className="text-xl text-slate-900 font-bold">
              申請業務のあらゆる課題を解決
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
                <div className={`absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 rounded-2xl blur-xl transition-all ${hoveredCapability === index ? 'opacity-40' : 'opacity-0'}`}></div>
                <div className="relative bg-white backdrop-blur-xl rounded-2xl p-6 border-2 border-slate-300/50 hover:border-indigo-500/50 transition-all">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform border-2 border-indigo-400">
                      <div className="text-purple-600">{capability.icon}</div>
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

      {/* Use Cases Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              活用シーン
            </h2>
            <p className="text-xl text-slate-900 font-bold">
              様々な申請業務に対応
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {USE_CASES.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white backdrop-blur-xl rounded-2xl p-6 border-2 border-slate-300/50 hover:border-purple-500/50 transition-all hover:scale-105 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-2 border-purple-300">
                      <div className="text-purple-600">{useCase.icon}</div>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">{useCase.title}</h3>
                    <p className="text-sm text-slate-700">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            汎用申請ソリューションで
            <br />
            業務効率を最大化
          </h2>
          <p className="text-xl text-slate-900 font-bold mb-12">
            今すぐ始めれば、来月には効果を実感できます
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleContact}
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
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

export default GeneralApplicationSolution;