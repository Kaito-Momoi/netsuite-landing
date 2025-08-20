import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Clock, Shield, Database, TrendingUp, CheckCircle, Phone, Mail, AlertTriangle, Calendar, BarChart3, Filter } from 'lucide-react';

const InventoryAging = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "経過日数分析",
      description: "在庫の滞留期間を自動計算し、経過日数別に分類・可視化。"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "デッドストック検知",
      description: "長期滞留在庫を自動検出し、廃棄リスクを事前にアラート。"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "回転率分析",
      description: "品目別・カテゴリ別の在庫回転率を分析し、最適在庫を提案。"
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "多角的分析",
      description: "倉庫別、カテゴリ別、サプライヤー別など多様な切り口で分析。"
    }
  ];

  const agingCategories = [
    { period: "0-30日", description: "適正在庫", color: "緑", action: "通常管理" },
    { period: "31-90日", description: "要注意", color: "黄", action: "販促検討" },
    { period: "91-180日", description: "警告", color: "橙", action: "値引き処分" },
    { period: "180日以上", description: "危険", color: "赤", action: "廃棄検討" }
  ];

  const benefits = [
    { value: "70%", label: "廃棄ロス削減", description: "早期対応による削減" },
    { value: "40%", label: "在庫削減", description: "適正在庫の維持" },
    { value: "2倍", label: "回転率向上", description: "滞留在庫の削減" },
    { value: "月次", label: "棚卸効率化", description: "データ活用による高速化" }
  ];

  const analysisMetrics = [
    { metric: "在庫金額推移", description: "経過日数別の在庫金額を時系列で表示" },
    { metric: "カテゴリ分析", description: "商品カテゴリ別の滞留状況を可視化" },
    { metric: "ABC分析連携", description: "売上貢献度と滞留期間のクロス分析" },
    { metric: "季節性分析", description: "シーズン商品の適正在庫期間管理" },
    { metric: "廃棄予測", description: "廃棄リスクの高い在庫を事前予測" },
    { metric: "機会損失分析", description: "在庫切れによる販売機会損失を算出" }
  ];

  const caseStudies = [
    {
      industry: "食品卸売業 M社",
      challenge: "賞味期限管理と廃棄ロスの増大",
      result: "廃棄ロス80%削減、在庫回転率50%向上"
    },
    {
      industry: "アパレル小売業 N社",
      challenge: "シーズン商品の在庫管理",
      result: "売り切り率90%達成、値引きロス60%削減"
    },
    {
      industry: "電子部品商社 O社",
      challenge: "陳腐化リスクの高い在庫管理",
      result: "デッドストック70%削減、キャッシュフロー改善"
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
              <span className="text-xs text-slate-600 border-l border-slate-300 ml-3 pl-3">Oracle NetSuite Solution Provider</span>
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
              <Package className="w-4 h-4 mr-2 text-sky-600" />
              <span className="text-sm text-sky-700 font-semibold">在庫最適化ソリューション</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              在庫エージング分析
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              在庫の滞留期間を可視化し、デッドストックのリスクを早期に発見します。
              経過日数別の在庫分析により、廃棄ロスの削減と在庫回転率の向上を実現。
              適切なタイミングでの処分判断により、キャッシュフローを改善します。
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
                  <p className="text-slate-700 font-medium">在庫の滞留状況が把握できず、廃棄ロスが発生</p>
                  <p className="text-slate-600 text-sm mt-1">どの商品がどれくらい滞留しているか不明</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">デッドストックが倉庫スペースを圧迫</p>
                  <p className="text-slate-600 text-sm mt-1">売れない在庫が場所を占有し、保管コストが増大</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">適切な処分タイミングが判断できない</p>
                  <p className="text-slate-600 text-sm mt-1">値引きや廃棄の判断基準が不明確</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">在庫評価が適切に行えない</p>
                  <p className="text-slate-600 text-sm mt-1">財務諸表への影響を正確に把握できない</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Aging Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            エージング分類と対応策
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {agingCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
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

      {/* Analysis Metrics Section */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            分析機能
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {analysisMetrics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-5 h-5 text-sky-600" />
                  </div>
                  <h3 className="font-bold text-slate-900">{item.metric}</h3>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
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
                <h3 className="text-lg font-bold text-slate-900">在庫分析</h3>
              </div>
              <p className="text-slate-600 ml-11">現在の在庫状況と滞留パターンを分析（約1週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900">ルール設定</h3>
              </div>
              <p className="text-slate-600 ml-11">エージング期間と対応アクションのルール定義（約1週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900">システム構築</h3>
              </div>
              <p className="text-slate-600 ml-11">分析ダッシュボードとレポート機能の実装（約2週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900">アラート設定</h3>
              </div>
              <p className="text-slate-600 ml-11">自動通知とワークフローの設定（約1週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  5
                </div>
                <h3 className="text-lg font-bold text-slate-900">運用開始</h3>
              </div>
              <p className="text-slate-600 ml-11">トレーニングと本番運用スタート</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            在庫の見える化で経営を改善
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            滞留在庫を削減し、キャッシュフローを改善します。
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
                <li><a href="#" className="hover:text-sky-500 transition-colors">導入コンサルティング</a></li>
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

export default InventoryAging;
