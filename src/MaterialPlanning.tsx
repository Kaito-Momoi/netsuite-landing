import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Database,
  TrendingUp,
  CheckCircle,
  Eye,
  AlertTriangle,
  Calculator,
  Truck,
  ArrowRight,
  Target,
  Settings,
  Zap
} from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import { Feature, StatItem } from './types';

const MaterialPlanning: React.FC = () => {
  const navigate = useNavigate();

  const features: Feature[] = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "リアルタイム可視化",
      description: "調達から生産、在庫まで資材の流れをダッシュボードで一元管理"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "最適発注量算出",
      description: "リードタイムと需要予測を考慮した最適発注量をAIが自動算出"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "アラートシステム",
      description: "資材不足や過剰在庫のリスクを事前検知し、即座にアラート通知"
    }
  ];

  const detailedFeatures: Feature[] = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "統合データ管理",
      description: "BOM、在庫、納期、コスト情報を一元管理し、正確な物料計算を実現"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "需要予測機能",
      description: "過去の実績データと市場トレンドを分析し、高精度な需要予測を生成"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "最適化アルゴリズム",
      description: "コスト、リードタイム、品質を総合的に考慮した最適調達計画を立案"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "サプライヤー管理",
      description: "サプライヤー別の納期実績管理と評価で調達を最適化"
    }
  ];

  const stats: StatItem[] = [
    { value: "30%", label: "調達コスト削減", description: "最適発注による削減" },
    { value: "50%", label: "在庫削減", description: "適正在庫の維持" },
    { value: "90%", label: "欠品防止", description: "事前アラートによる防止" },
    { value: "2倍", label: "計画精度向上", description: "データドリブンな計画" }
  ];

  const dashboardMetrics = [
    { metric: "在庫回転率", description: "資材別の回転率をリアルタイム表示" },
    { metric: "リードタイム分析", description: "サプライヤー別の納期実績を可視化" },
    { metric: "需要予測", description: "AIによる高精度な需要予測" },
    { metric: "コスト分析", description: "調達コストの推移と予実管理" },
    { metric: "品質指標", description: "サプライヤー別の品質実績" },
    { metric: "リスク評価", description: "供給リスクの早期発見" }
  ];

  const benefits = [
    { value: "30%", label: "調達コスト削減", description: "最適発注による削減" },
    { value: "50%", label: "在庫削減", description: "適正在庫の維持" },
    { value: "90%", label: "欠品防止", description: "事前アラートによる防止" },
    { value: "2倍", label: "計画精度向上", description: "データドリブンな計画" }
  ];

  const processFlow = [
    { step: "需要予測", description: "販売計画と連動した需要予測", icon: <BarChart3 className="w-6 h-6" /> },
    { step: "所要量計算", description: "BOMベースの所要量自動計算", icon: <Calculator className="w-6 h-6" /> },
    { step: "在庫確認", description: "現在庫と発注残の確認", icon: <Database className="w-6 h-6" /> },
    { step: "発注提案", description: "最適な発注量とタイミング提案", icon: <TrendingUp className="w-6 h-6" /> },
    { step: "発注実行", description: "承認後の自動発注処理", icon: <Truck className="w-6 h-6" /> }
  ];

  const caseStudies = [
    {
      industry: "自動車部品製造業 G社",
      challenge: "複雑なサプライチェーンの管理",
      result: "在庫回転率40%向上、調達コスト25%削減"
    },
    {
      industry: "電子機器製造業 H社",
      challenge: "部品の長納期による生産遅延",
      result: "納期遵守率95%達成、緊急調達90%削減"
    },
    {
      industry: "食品製造業 I社",
      challenge: "原材料の価格変動と在庫管理",
      result: "廃棄ロス70%削減、原価率5%改善"
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
              icon: <BarChart3 className="w-4 h-4 mr-2" />,
              text: "戦略的資材管理プラットフォーム",
              bgColor: "bg-gradient-to-r from-sky-100 to-blue-100",
              borderColor: "border border-sky-200",
              textColor: "text-sky-700 font-bold"
            }}
            title={
              <>
                <span className="text-slate-900 text-4xl md:text-5xl leading-tight">
                  資材計画の
                </span>
                <br />
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent text-4xl md:text-5xl font-black">
                  完全見える化
                </span>
              </>
            }
            description={
              <>
                <span className="text-lg text-slate-700">
                  AIパワーで資材計画を最適化し、コストと在庫を同時に減らす
                </span>
                <br />
                <span className="text-lg font-bold text-slate-900">
                  調達コスト<span className="font-black text-sky-600 text-xl">30%削減</span>、在庫<span className="font-black text-sky-600 text-xl">50%削減</span>を実現
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
            <p className="text-xl text-slate-600 font-medium">資材計画を科学的に最適化する革新的機能群</p>
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
            <p className="text-xl text-slate-600">資材計画を高度化する充実の機能群</p>
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
              { step: "STEP 1", title: "現状分析", description: "現在の資材管理プロセスと課題の把握", icon: <Target className="w-6 h-6" /> },
              { step: "STEP 2", title: "システム設計", description: "ダッシュボードとアルゴリズムの設計", icon: <Database className="w-6 h-6" /> },
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
          title={<>資材計画の見える化で<br />競争力を今すぐ強化しませんか？</>}
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

export default MaterialPlanning;