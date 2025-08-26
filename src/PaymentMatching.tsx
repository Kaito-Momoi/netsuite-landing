import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Clock,
  Target,
  Database,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  RefreshCw,
  Settings
} from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import { Feature, StatItem } from './types';

const PaymentMatching: React.FC = () => {
  const navigate = useNavigate();

  const features: Feature[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "自動マッチング",
      description: "AIを活用した高精度な自動マッチング機能により、手作業を最小限に抑えます"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "リアルタイム処理",
      description: "銀行データとの連携により、入金情報をリアルタイムで処理・消込が可能です"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "可視化レポート",
      description: "消込状況や未消込残高を一目で把握できるダッシュボードを提供します"
    }
  ];

  const detailedFeatures: Feature[] = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "銀行データ自動取込",
      description: "複数の銀行フォーマットに対応し、自動でデータを取り込みます"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "高精度マッチング",
      description: "請求書番号、金額、顧客名など複数の条件で自動マッチング"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "処理時間短縮",
      description: "従来の手作業と比較して80%以上の時間削減を実現"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "内部統制強化",
      description: "承認ワークフローと監査ログで内部統制を強化"
    }
  ];

  const stats: StatItem[] = [
    { value: "80%", label: "処理時間削減", description: "手作業からの自動化による効率化" },
    { value: "99.5%", label: "マッチング精度", description: "AI技術による高精度な突合" },
    { value: "50%", label: "コスト削減", description: "人件費と作業時間の大幅削減" },
    { value: "0.01%", label: "エラー率", description: "ヒューマンエラーをほぼゼロに" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <NavigationBar showBackButton={true} variant="page" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 to-blue-300/40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-200/30 to-blue-300/30 rounded-full filter blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <HeroSection 
            badge={{
              icon: <RefreshCw className="w-4 h-4 mr-2" />,
              text: "入金消込自動化",
              bgColor: "bg-gradient-to-r from-sky-100 to-blue-100",
              borderColor: "border border-sky-200",
              textColor: "text-sky-700 font-bold"
            }}
            title={
              <>
                <span className="text-slate-900 text-4xl md:text-5xl leading-tight">
                  手作業の入金消込から
                </span>
                <br />
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent text-4xl md:text-5xl font-black">
                  完全自動化へ
                </span>
              </>
            }
            description={
              <>
                <span className="text-lg text-slate-700">
                  銀行データと売掛金の自動突合により
                </span>
                <br />
                <span className="text-lg font-bold text-slate-900">
                  経理業務の<span className="font-black text-sky-600 text-xl">80%削減</span>を実現
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
      </section>

      {/* 3つの主要機能 */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
              3つの<span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">主要機能</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">手作業を完全自動化する革新的な機能群</p>
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
            <p className="text-xl text-slate-600">業務効率を最大化する充実の機能群</p>
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
              { step: "STEP 1", title: "現状分析", description: "業務フローと課題の把握", icon: <Target className="w-6 h-6" /> },
              { step: "STEP 2", title: "設計", description: "最適なマッチングルール設計", icon: <Database className="w-6 h-6" /> },
              { step: "STEP 3", title: "実装", description: "NetSuiteへの設定と連携構築", icon: <Settings className="w-6 h-6" /> },
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
          title={<>入金消込業務を<br />今すぐ効率化しませんか？</>}
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

export default PaymentMatching;