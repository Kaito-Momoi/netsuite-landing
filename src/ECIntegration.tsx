import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  CheckCircle,
  ShoppingCart,
  Package,
  Zap,
  BarChart3,
  ArrowRight,
  Database,
  Target,
  Settings
} from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import { Feature, StatItem } from './types';

const ECIntegration: React.FC = () => {
  const navigate = useNavigate();

  const features: Feature[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "リアルタイム連携",
      description: "受注データを即座に取り込み、在庫情報をリアルタイムで各ECサイトに反映"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "在庫一元管理",
      description: "複数チャネルの在庫を一元管理し、売り越しリスクを完全排除"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "自動化プロセス",
      description: "受注から出荷、配送状況の更新まで一連のプロセスを完全自動化"
    }
  ];

  const detailedFeatures: Feature[] = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "マルチチャネル対応",
      description: "Amazon、楽天、Shopify、Yahoo!ショッピングなど主要ECプラットフォームに対応"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "高精度マッピング",
      description: "商品マスタと受注データの自動マッピングで正確な連携を実現"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "売上分析統合",
      description: "複数チャネルの売上を統合し、統一的な売上分析とレポート作成"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "柔軟な設定管理",
      description: "EC特有の商品情報や価格設定を個別に管理・制御"
    }
  ];

  const stats: StatItem[] = [
    { value: "60%", label: "業務効率向上", description: "受注処理時間の大幅削減" },
    { value: "99.9%", label: "在庫精度", description: "リアルタイム在庫同期" },
    { value: "80%", label: "売り越し削減", description: "在庫管理の最適化" },
    { value: "30%", label: "売上向上", description: "機会損失の削減効果" }
  ];

  const platforms = [
    { name: "Amazon", logo: "🛒", description: "Amazon Seller Central API完全対応" },
    { name: "楽天", logo: "🏪", description: "楽天RMS API連携" },
    { name: "Shopify", logo: "🛍️", description: "Shopify Admin API統合" },
    { name: "Yahoo!", logo: "🏬", description: "Yahoo!ショッピング API対応" },
    { name: "BASE", logo: "📦", description: "BASE API連携" },
    { name: "その他", logo: "➕", description: "カスタムAPI開発対応" }
  ];

  const benefits = [
    { value: "60%", label: "業務効率向上", description: "受注処理時間の大幅削減" },
    { value: "99.9%", label: "在庫精度", description: "リアルタイム在庫同期" },
    { value: "24/7", label: "自動処理", description: "365日稼働の自動化" },
    { value: "30%", label: "売上向上", description: "機会損失の削減効果" }
  ];

  const caseStudies = [
    {
      industry: "アパレル企業 A社",
      challenge: "複数ECサイトの在庫管理が煩雑",
      result: "在庫回転率40%向上、欠品率80%削減"
    },
    {
      industry: "化粧品企業 B社",
      challenge: "受注処理に1日3時間以上",
      result: "受注処理時間90%削減、月間60時間の工数削減"
    },
    {
      industry: "食品企業 C社",
      challenge: "売り越しによるクレーム多発",
      result: "売り越しゼロ達成、顧客満足度20%向上"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <NavigationBar showBackButton={true} variant="page" />

        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 to-blue-300/40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-200/30 to-blue-300/30 rounded-full filter blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <HeroSection 
            badge={{
              icon: <Globe className="w-4 h-4 mr-2" />,
              text: "マルチチャネル統合プラットフォーム",
              bgColor: "bg-gradient-to-r from-sky-100 to-blue-100",
              borderColor: "border border-sky-200",
              textColor: "text-sky-700 font-bold"
            }}
            title={
              <>
                <span className="text-slate-900 text-4xl md:text-5xl leading-tight">
                  ECマルチチャネルの
                </span>
                <br />
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent text-4xl md:text-5xl font-black">
                  完全統合を実現
                </span>
              </>
            }
            description={
              <>
                <span className="text-lg text-slate-700">
                  Amazon、楽天、Shopifyなど主要ECサイトを統合管理
                </span>
                <br />
                <span className="text-lg font-bold text-slate-900">
                  売上機会損失を<span className="font-black text-sky-600 text-xl">ゼロ</span>にする統合プラットフォーム
                </span>
              </>
            }
            actions={
              <>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="group px-8 py-4 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 hover:from-sky-600 hover:via-blue-600 hover:to-sky-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-sky-500/40 flex items-center justify-center"
                  >
                    今すぐ導入相談
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </button>
                  <button 
                    onClick={() => navigate('/netsuite')} 
                    className="group px-8 py-4 bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-sky-500 text-sky-700 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center">
                      NetSuiteトップへ戻る
                    </span>
                  </button>
                </div>
              </>
            }
          />
        </div>

      {/* 3つの主要機能 */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
              3つの<span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">主要機能</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">ECマルチチャネル展開を成功に導く革新的な機能群</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100">
                  <div className="bg-gradient-to-br from-sky-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 詳細機能 */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              主な機能
            </h2>
            <p className="text-xl text-slate-600">ECビジネスを最大化する充実の機能群</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-sky-400">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-3 rounded-lg mr-4">
                    <div className="text-sky-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応プラットフォーム */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              対応ECプラットフォーム
            </h2>
            <p className="text-xl text-slate-600">主要ECサイトを包括的にサポート</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center border border-slate-200 hover:border-sky-400">
                <div className="text-4xl mb-3">{platform.logo}</div>
                <h3 className="font-bold text-slate-900 mb-2">{platform.name}</h3>
                <p className="text-xs text-slate-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入効果 Stats Section */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 relative overflow-hidden">
        <StatsSection 
          title="導入効果"
          stats={stats}
          variant="gradient"
        />
      </section>

      {/* プロセスフロー */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              導入プロセス
            </h2>
            <p className="text-xl text-slate-600">スムーズな導入と確実な運用開始</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "STEP 1", title: "現状分析", description: "ECサイトと業務フローの把握", icon: <Target className="w-6 h-6" /> },
              { step: "STEP 2", title: "API連携", description: "各ECプラットフォーム接続設定", icon: <Database className="w-6 h-6" /> },
              { step: "STEP 3", title: "データ統合", description: "NetSuiteへのデータ連携構築", icon: <Settings className="w-6 h-6" /> },
              { step: "STEP 4", title: "運用開始", description: "トレーニングとサポート", icon: <Zap className="w-6 h-6" /> }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 border border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-4 mx-auto">
                    <div className="text-white">
                      {process.icon}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-sky-600 mb-2">{process.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-slate-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <CTASection
          title={<>ECビジネスの成長を<br />今すぐ加速させませんか？</>}
          description="詳細な情報や無料相談をご希望の方はお気軽にお問い合わせください"
          primaryButtonText="無料相談を予約する"
          primaryButtonAction={() => navigate('/contact')}
          secondaryButtonText="他のソリューションを見る"
          secondaryButtonAction={() => navigate('/netsuite#solutions')}
          gradient="from-sky-500 to-blue-600"
        />
      </section>

      <Footer />
    </div>
  );
};

export default ECIntegration;