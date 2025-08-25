import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart3, Clock, Database, TrendingUp, CheckCircle, Phone, Mail, Eye, AlertTriangle, Calculator, Truck } from 'lucide-react';

const MaterialPlanning = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "リアルタイム可視化",
      description: "調達から生産、在庫まで資材の流れをダッシュボードで一元管理。"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "最適発注量算出",
      description: "リードタイムと需要予測を考慮した最適な発注量を自動計算。"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "事前アラート機能",
      description: "資材不足や過剰在庫のリスクを事前に検知し、アラート通知。"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "サプライヤー管理",
      description: "サプライヤー別の納期実績管理と評価により、調達を最適化。"
    }
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
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => navigate('/')} 
                className="flex items-center cursor-pointer"
              >
                <img 
                  src="/EvangSol_logo.png" 
                  alt="EvangSol"
                  className="h-12"
                />
              </button>
              <span className="text-xs text-slate-600 border-l border-slate-300 ml-3 pl-3">Oracle NetSuite認定パートナー</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigate('/')}
                className="text-slate-700 hover:text-sky-500 transition-colors font-medium flex items-center cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                ホームに戻る
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 border border-sky-300 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 mr-2 text-sky-600" />
              <span className="text-sm text-sky-700 font-semibold">戦略的資材管理プラットフォーム</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              資材計画の見える化
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              調達から生産、在庫管理まで、資材の流れを可視化するダッシュボードを提供します。
              リードタイムを考慮した最適発注量の算出、サプライヤー別の納期管理、
              資材不足の事前アラートなど、戦略的な資材計画を支援します。
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            こんな課題を解決します
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">資材の在庫状況が把握できず、欠品や過剰在庫が発生</p>
                  <p className="text-slate-600 text-sm mt-1">リアルタイムの在庫可視化ができていない</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">適切な発注タイミングと数量が分からない</p>
                  <p className="text-slate-600 text-sm mt-1">経験と勘に頼った発注で無駄が発生</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">サプライヤーの納期遅延により生産計画に影響</p>
                  <p className="text-slate-600 text-sm mt-1">納期管理が属人化し、リスク管理が不十分</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">調達コストの削減余地が見えない</p>
                  <p className="text-slate-600 text-sm mt-1">データに基づいた戦略的な調達ができていない</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dashboard Metrics Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            ダッシュボード機能
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dashboardMetrics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mr-3">
                    <Eye className="w-5 h-5 text-sky-600" />
                  </div>
                  <h3 className="font-bold text-slate-900">{item.metric}</h3>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            資材計画プロセス
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
              {processFlow.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center flex-1">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-3 text-sky-600">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.step}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                  {index < processFlow.length - 1 && (
                    <ArrowLeft className="hidden md:block absolute right-0 transform translate-x-1/2 rotate-180 w-6 h-6 text-sky-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            主な機能
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-sky-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sky-400 to-blue-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            導入効果
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{benefit.value}</div>
                <div className="text-white/90 font-semibold mb-1">{benefit.label}</div>
                <div className="text-white/70 text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            導入事例
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-sky-600 mb-3">{study.industry}</h3>
                <div className="mb-4">
                  <p className="text-sm text-slate-500 mb-1">課題</p>
                  <p className="text-slate-700">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">成果</p>
                  <p className="text-slate-900 font-semibold">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            導入プロセス
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900">現状分析</h3>
              </div>
              <p className="text-slate-600 ml-11">現在の資材管理プロセスと課題を分析（約1週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900">システム設計</h3>
              </div>
              <p className="text-slate-600 ml-11">ダッシュボードとKPI設定（約2週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900">データ連携</h3>
              </div>
              <p className="text-slate-600 ml-11">既存システムとのデータ連携構築（約3週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900">アルゴリズム調整</h3>
              </div>
              <p className="text-slate-600 ml-11">発注量算出ロジックの最適化（約2週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  5
                </div>
                <h3 className="text-lg font-bold text-slate-900">運用開始</h3>
              </div>
              <p className="text-slate-600 ml-11">本番運用とモニタリング開始</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            データドリブンな資材管理で競争力を強化
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            調達コストの削減と生産の安定化を実現します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              無料相談を予約
            </button>
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-white hover:bg-slate-50 border-2 border-sky-400 text-sky-600 rounded-full font-semibold text-lg transition-all flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              ソリューション一覧へ
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="/EvangSol_logo.png" 
                alt="EvangSol"
                className="h-10 mb-4"
              />
              <p className="text-slate-600 text-sm">
                Oracle NetSuite認定パートナー
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">サービス</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-sky-500 transition-colors">導入支援</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">カスタマイズ開発</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">運用サポート</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">会社情報</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <button 
                    onClick={() => navigate('/')}
                    className="hover:text-sky-500 transition-colors"
                  >
                    ホーム
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/about')}
                    className="hover:text-sky-500 transition-colors"
                  >
                    会社概要
                  </button>
                </li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">採用情報</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">お問い合わせ</h3>
              <div className="space-y-2 text-slate-600 text-sm">
                <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-sky-500" />03-6231-1328</p>
                <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-sky-500" />info@evangsol.co.jp</p>
                <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-sky-500" />平日 9:00-18:00</p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors w-full"
                >
                  お問い合わせフォームへ
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-slate-600 text-sm">
            <p>© 2025 EvangSol Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MaterialPlanning;