import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, Clock, Shield, Database, TrendingUp, CheckCircle, Phone, Mail, ShoppingCart, Package, Zap, BarChart } from 'lucide-react';

const ECIntegration = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "マルチチャネル対応",
      description: "Amazon、楽天、Shopify、Yahoo!ショッピングなど主要ECプラットフォームに対応。"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "リアルタイム連携",
      description: "受注データを即座に取り込み、在庫情報をリアルタイムで各ECサイトに反映。"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "在庫一元管理",
      description: "複数チャネルの在庫を一元管理し、売り越しリスクを排除。"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "出荷プロセス自動化",
      description: "受注から出荷指示、配送状況の更新まで一連のプロセスを自動化。"
    }
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
              <span className="text-xs text-slate-600 border-l border-slate-300 ml-3 pl-3">Oracle NetSuite Partner</span>
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
              <Globe className="w-4 h-4 mr-2 text-sky-600" />
              <span className="text-sm text-sky-700 font-semibold">マルチチャネル統合プラットフォーム</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              ECデータ連携基盤
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              複数のECプラットフォームとNetSuiteをシームレスに統合する連携基盤です。
              Amazon、楽天、Shopifyなど主要ECサイトの受注データをリアルタイムで自動取込み。
              在庫の一元管理により、マルチチャネル展開における業務効率を最大化します。
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
                  <p className="text-slate-700 font-medium">複数のECサイトの管理画面を個別に操作している</p>
                  <p className="text-slate-600 text-sm mt-1">各サイトごとの管理で作業が煩雑化し、ミスが発生しやすい状態</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">在庫の売り越しによるクレームが発生している</p>
                  <p className="text-slate-600 text-sm mt-1">リアルタイム在庫管理ができず、機会損失や顧客満足度低下</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">受注データの手動入力に時間がかかる</p>
                  <p className="text-slate-600 text-sm mt-1">データ転記作業による業務効率の低下と人的エラーのリスク</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">各チャネルの売上分析が困難</p>
                  <p className="text-slate-600 text-sm mt-1">データが分散しており、統合的な分析ができない</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            対応ECプラットフォーム
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{platform.logo}</div>
                <h3 className="font-bold text-slate-900 mb-2">{platform.name}</h3>
                <p className="text-xs text-slate-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-sky-50">
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

      {/* System Architecture */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            システム構成
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">ECプラットフォーム</h3>
                <p className="text-sm text-slate-600">各ECサイトのAPIと連携し、受注・在庫データを取得</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">連携基盤</h3>
                <p className="text-sm text-slate-600">データ変換・マッピング処理を行い、NetSuiteへ連携</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">NetSuite</h3>
                <p className="text-sm text-slate-600">統合されたデータで在庫管理・受注処理・分析を実行</p>
              </div>
            </div>
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
                <h3 className="text-lg font-bold text-slate-900">要件定義・現状分析</h3>
              </div>
              <p className="text-slate-600 ml-11">利用中のECプラットフォームと業務フローを分析（約1週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900">API連携設定</h3>
              </div>
              <p className="text-slate-600 ml-11">各ECプラットフォームのAPI接続と認証設定（約2週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900">データマッピング</h3>
              </div>
              <p className="text-slate-600 ml-11">商品・在庫・受注データのマッピング設定（約2週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900">テスト運用</h3>
              </div>
              <p className="text-slate-600 ml-11">実データでのテスト運用と調整（約1週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  5
                </div>
                <h3 className="text-lg font-bold text-slate-900">本番稼働</h3>
              </div>
              <p className="text-slate-600 ml-11">本番環境での運用開始と継続サポート</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            ECビジネスの成長を加速させる統合プラットフォーム
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            複数のECチャネルを一元管理し、業務効率を最大化します。
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

export default ECIntegration;