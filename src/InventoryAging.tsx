import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Calendar, BarChart3, Filter, Database, Target, Settings, Zap } from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import { Feature, StatItem } from './types';

const InventoryAging: React.FC = () => {
  const navigate = useNavigate();

  const features: Feature[] = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "経過日数分析",
      description: "在庫の滞留期間を自動計算し、経過日数別に分類・可視化"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "デッドストック検知",
      description: "長期滞留在庫を自動検出し、廃棄リスクを事前にアラート"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "回転率分析",
      description: "品目別・カテゴリ別の在庫回転率を分析し、最適在庫を提案"
    }
  ];

  const detailedFeatures: Feature[] = [
    {
      icon: <Filter className="w-6 h-6" />,
      title: "多角的分析",
      description: "倉庫別、カテゴリ別、サプライヤー別など多様な切り口で分析"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "リアルタイム監視",
      description: "在庫変動をリアルタイムで監視し、滞留状況を即座に把握"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "予測分析",
      description: "過去のデータから将来の滞留リスクを予測し、事前対策を提案"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "自動アラート",
      description: "設定した基準を超えた在庫を自動検知し、担当者にアラート通知"
    }
  ];

  const agingCategories = [
    { period: "0-30日", description: "適正在庫", color: "緑", action: "通常管理" },
    { period: "31-90日", description: "要注意", color: "黄", action: "販促検討" },
    { period: "91-180日", description: "警告", color: "橙", action: "値引き処分" },
    { period: "180日以上", description: "危険", color: "赤", action: "廃棄検討" }
  ];

  const stats: StatItem[] = [
    { value: "70%", label: "廃棄ロス削減", description: "早期対応による削減" },
    { value: "40%", label: "在庫削減", description: "適正在庫の維持" },
    { value: "2倍", label: "回転率向上", description: "滞留在庫の削減" },
    { value: "月次", label: "棚卸効率化", description: "データ活用による高速化" }
  ];

  // removed unused analysisMetrics and caseStudies arrays

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <NavigationBar showBackButton={true} variant="page" />


      {/* 3つの主要機能 */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
              在庫最適化を実現する革新的な分析機能群
            </h2>
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
            <p className="text-xl text-slate-600">在庫管理を高度化する充実の機能群</p>
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

      {/* エージング分類 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              エージング分類と対応策
            </h2>
            <p className="text-xl text-slate-600">在庫滞留期間に応じた段階的アプローチ</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {agingCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-slate-200 hover:border-sky-400">
                <div className={`w-full h-2 rounded-full mb-4 ${
                  index === 0 ? 'bg-green-500' :
                  index === 1 ? 'bg-yellow-500' :
                  index === 2 ? 'bg-orange-500' : 'bg-red-500'
                }`}></div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{category.period}</h3>
                <p className="text-sm text-slate-600 mb-1">状態: {category.description}</p>
                <p className="text-sm font-semibold text-sky-600">対応: {category.action}</p>
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
              { step: "STEP 1", title: "在庫分析", description: "現在の在庫状況と滞留パターンを分析", icon: <Target className="w-6 h-6" /> },
              { step: "STEP 2", title: "ルール設定", description: "エージング期間と対応アクションの定義", icon: <Database className="w-6 h-6" /> },
              { step: "STEP 3", title: "システム構築", description: "NetSuiteへの分析機能実装", icon: <Settings className="w-6 h-6" /> },
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
          title={<>在庫エージングで<br />経営効率を今すぐ改善しませんか？</>}
          description="詳細な情報や無料相談をご希望の方はお気軽にお問い合わせください"
          primaryButtonText="無料相談を予約する"
          primaryButtonAction={() => navigate('/contact')}
          secondaryButtonText="他のソリューションを見る"
          secondaryButtonAction={() => navigate('/netsuite/solutions')}
          gradient="from-sky-500 to-blue-600"
        />
      </section>

      <Footer />
    </div>
  );
};

export default InventoryAging;
