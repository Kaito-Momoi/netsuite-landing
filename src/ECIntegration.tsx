import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  Package,
  Zap,
  BarChart3,
  Database,
  ShoppingCart,
  TrendingUp,
  
  Award,
  ArrowUpRight,
  Layers,
  Network,
  Cpu,
  Rocket,
  CheckCircle,
  Shield,
  Building,
  GitMerge,
  Activity,
  Mail,
  ExternalLink,
} from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';

import { Feature } from './types';

// Core features
const CORE_FEATURES: Feature[] = [
  {
    icon: <Network className="w-10 h-10" />,
    title: 'オムニチャネル統合',
    description: '複数のECプラットフォームを一つのダッシュボードで完全統合管理',
    bulletPoints: ['全チャネル統合管理', 'リアルタイム同期', '統一インターフェース'],
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: 'AIインテリジェンス',
    description: 'AI が売れ筋商品を分析し、在庫配分を自動最適化',
    bulletPoints: ['売れ筋予測', '在庫自動配分', '価格最適化提案'],
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: 'リアルタイム処理',
    description: '受注から在庫更新まで、全プロセスをミリ秒単位で処理',
    bulletPoints: ['遅延ゼロ処理', '即時在庫反映', 'リアルタイム分析'],
  },
];

// Platform integrations with enhanced details
const PLATFORMS = [
  { name: 'Amazon', color: 'from-blue-600 to-indigo-600', features: ['FBA連携', 'セラーセントラル統合', 'Prime対応'] },
  { name: '楽天市場', color: 'from-blue-600 to-indigo-600', features: ['RMS完全対応', 'ポイント管理', 'イベント連携'] },
  { name: 'Yahoo!', color: 'from-blue-600 to-indigo-600', features: ['ストアAPI連携', 'PayPay対応', 'キャンペーン管理'] },
  { name: 'Shopify', color: 'from-blue-600 to-indigo-600', features: ['Admin API', 'Plus対応', 'アプリ連携'] },
  { name: 'BASE', color: 'from-blue-600 to-indigo-600', features: ['API完全対応', '決済連携', '配送管理'] },
  { name: 'STORES', color: 'from-blue-600 to-indigo-600', features: ['API連携', '在庫同期', '受注管理'] },
];

// Detailed capabilities
const CAPABILITIES = [
  {
    icon: <Database className="w-8 h-8" />,
    title: '統合データベース',
    description: '全ECチャネルの商品・顧客・受注データを一元管理',
  },
  {
    icon: <GitMerge className="w-8 h-8" />,
    title: '自動マッピング',
    description: 'SKU・商品コードの自動紐付けで運用負荷を削減',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'セキュリティ',
    description: 'OAuth2.0対応、暗号化通信で安全なデータ連携',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: '統合分析',
    description: 'チャネル横断の売上・在庫・顧客分析',
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: '在庫最適化',
    description: 'データ分析による需要予測と自動在庫配分',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '売上最大化',
    description: '価格戦略・在庫配分の自動最適化',
  },
];

// Success metrics
const SUCCESS_METRICS = [
  { value: '飛躍的な', label: '売上成長', sublabel: '導入後1年で達成' },
  { value: '劇的な', label: '業務効率化', sublabel: '手作業時間削減' },
  { value: '完全', label: '売り越し防止', sublabel: '在庫同期による実現' },
  { value: '大幅な', label: '利益率向上', sublabel: '最適化による改善' },
];



const ECIntegration: React.FC = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
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
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-cyan-50/90"></div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Network grid effect */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Interactive glow - Disabled for static design */}
        {/* <div
          className="pointer-events-none fixed w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 128}px`,
            top: `${mousePosition.y - 128}px`,
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
          <div className={`relative mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                ECデータ連携基盤
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-800">
              全ECチャネルを一つに統合
            </p>
          </div>

          {/* Animated Feature Carousel */}
          <div className="relative h-20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { text: '6大ECモール対応', icon: <Globe className="w-8 h-8" />, gradient: 'from-blue-600 to-indigo-600' },
                { text: 'リアルタイム連携', icon: <Zap className="w-8 h-8" />, gradient: 'from-indigo-600 to-teal-600' },
                { text: '完全自動同期', icon: <Cpu className="w-8 h-8" />, gradient: 'from-teal-600 to-cyan-600' },
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

      {/* Core Features */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              3つの革新的機能
            </h2>
            <p className="text-xl text-slate-900 font-bold max-w-3xl mx-auto">
              EC事業を次のステージへ導く最先端テクノロジー
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {CORE_FEATURES.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl blur-xl"></div>
                <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border-2 border-slate-300/50 h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 border-2 border-blue-400">
                    <div className="text-blue-600">{feature.icon}</div>
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

      {/* Platform Integration Showcase */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent via-cyan-50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              対応ECプラットフォーム
            </h2>
            <p className="text-xl text-slate-900 font-bold">
              主要ECモールを完全サポート
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLATFORMS.map((platform, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-2xl blur-xl opacity-20`}></div>
                <div className="relative bg-white backdrop-blur-xl rounded-2xl p-6 border-2 border-slate-300/50">
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.name}
                  </h3>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowUpRight className="w-4 h-4 text-slate-800 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-900 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              充実の機能群
            </h2>
            <p className="text-xl text-slate-900 font-bold">
              ECビジネスの成長を加速
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((capability, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-teal-600/10 rounded-2xl blur-xl opacity-0"></div>
                <div className="relative bg-white backdrop-blur-xl rounded-2xl p-6 border-2 border-slate-300/50">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mr-4 border-2 border-cyan-500/30">
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

      {/* Success Metrics */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-xl rounded-3xl p-12 border-2 border-cyan-500/20">
            <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              導入成果
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {SUCCESS_METRICS.map((metric, index) => (
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
          <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            ECビジネスの成長を
            <br />
            今すぐ加速させませんか？
          </h2>
          <p className="text-xl text-slate-900 font-bold mb-12">
            複雑なEC運営をシンプルに、そして強力に
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleContact}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
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

export default ECIntegration;