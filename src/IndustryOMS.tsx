import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Clock, Shield, Database, TrendingUp, CheckCircle, Phone, Mail, Building2, Truck, ShoppingBag, Factory, Settings, BarChart3 } from 'lucide-react';

const IndustryOMS = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "業界別カスタマイズ",
      description: "製造業、卸売業、小売業など、各業界の商習慣に完全対応したワークフロー。"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "受注一元管理",
      description: "電話、FAX、メール、ECサイトなど全チャネルの受注を一元管理。"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "在庫自動引当",
      description: "リアルタイム在庫確認と自動引当により、確実な納期回答を実現。"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "与信管理連携",
      description: "取引先の与信状況を自動チェックし、リスクを最小化。"
    }
  ];

  const industries = [
    {
      icon: <Factory className="w-8 h-8" />,
      name: "製造業",
      features: [
        "BOM（部品表）管理",
        "ロット管理・トレーサビリティ",
        "納期回答自動化",
        "カスタム製品対応"
      ]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      name: "卸売業",
      features: [
        "多段階価格設定",
        "仕切価格管理",
        "リベート計算",
        "直送手配管理"
      ]
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      name: "小売業",
      features: [
        "店舗在庫連携",
        "セット商品管理",
        "ポイント連携",
        "予約販売管理"
      ]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      name: "商社",
      features: [
        "輸入業務管理",
        "為替管理",
        "コミッション計算",
        "三国間貿易対応"
      ]
    }
  ];

  const benefits = [
    { value: "70%", label: "受注処理時間削減", description: "自動化による効率化" },
    { value: "99%", label: "受注精度", description: "ミスのない処理実現" },
    { value: "2倍", label: "処理能力向上", description: "同じ人員でより多くの受注" },
    { value: "即時", label: "在庫確認", description: "リアルタイム在庫照会" }
  ];

  const workflow = [
    { step: "受注", description: "マルチチャネル受注取込", icon: <Package className="w-6 h-6" /> },
    { step: "在庫確認", description: "自動在庫引当・納期確認", icon: <Database className="w-6 h-6" /> },
    { step: "与信確認", description: "取引先与信チェック", icon: <Shield className="w-6 h-6" /> },
    { step: "出荷指示", description: "倉庫への出荷指示", icon: <Truck className="w-6 h-6" /> },
    { step: "請求", description: "自動請求書発行", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  const caseStudies = [
    {
      industry: "電子部品製造業 D社",
      challenge: "複雑な納期管理と在庫引当",
      result: "納期回答時間90%短縮、在庫回転率30%向上"
    },
    {
      industry: "食品卸売業 E社",
      challenge: "賞味期限管理と配送ルート最適化",
      result: "廃棄ロス60%削減、配送効率40%改善"
    },
    {
      industry: "アパレル小売業 F社",
      challenge: "シーズン商品の在庫管理",
      result: "売り切り率85%達成、在庫削減30%"
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
              <span className="text-sm text-sky-700 font-semibold">業界別最適化システム</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              業界特化OMS<br />
              <span className="text-2xl md:text-3xl">（受注管理システム）</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              業界特有の商習慣や業務フローに完全対応した受注管理システムを構築します。
              製造業、卸売業、小売業など、各業界の要件に最適化されたワークフローを実装し、
              受注から出荷、請求までの一連のプロセスを自動化します。
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
                  <p className="text-slate-700 font-medium">汎用システムでは業界特有の商習慣に対応できない</p>
                  <p className="text-slate-600 text-sm mt-1">標準機能では不足し、カスタマイズコストが膨大に</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">受注処理に時間がかかり、納期回答が遅い</p>
                  <p className="text-slate-600 text-sm mt-1">手動での在庫確認や与信チェックで業務が停滞</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">受注ミスによる出荷間違いやクレームが発生</p>
                  <p className="text-slate-600 text-sm mt-1">複雑な受注条件の管理ミスによる顧客満足度低下</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">受注状況の可視化ができていない</p>
                  <p className="text-slate-600 text-sm mt-1">リアルタイムでの受注状況把握が困難</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            業界別ソリューション
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-sky-600">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            受注処理フロー
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
              {workflow.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center flex-1">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-3 text-sky-600">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.step}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                  {index < workflow.length - 1 && (
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
                <h3 className="text-lg font-bold text-slate-900">業務分析・要件定義</h3>
              </div>
              <p className="text-slate-600 ml-11">現行の受注業務フローと業界特有の要件を詳細に分析（約2週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900">システム設計</h3>
              </div>
              <p className="text-slate-600 ml-11">業界別テンプレートをベースにカスタマイズ設計（約3週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900">開発・カスタマイズ</h3>
              </div>
              <p className="text-slate-600 ml-11">業界特有機能の実装とワークフロー構築（約4週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900">データ移行・テスト</h3>
              </div>
              <p className="text-slate-600 ml-11">既存データの移行と受注処理テスト（約2週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  5
                </div>
                <h3 className="text-lg font-bold text-slate-900">トレーニング・本番稼働</h3>
              </div>
              <p className="text-slate-600 ml-11">ユーザートレーニングと本番環境での運用開始（約1週間）</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            貴社の業界に最適化された受注管理を実現
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            業界特有の商習慣に完全対応し、受注業務を劇的に効率化します。
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

export default IndustryOMS;