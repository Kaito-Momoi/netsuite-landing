import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Database, Clock, Shield, Smartphone, TrendingUp, CheckCircle, Phone, Mail, Package, Scan, MapPin, BarChart } from 'lucide-react';

const WarehouseIntegration = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Scan className="w-6 h-6" />,
      title: "バーコード/QRスキャン",
      description: "ハンディターミナルでのスキャンによる正確な入出荷処理を実現。"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "ロケーション管理",
      description: "倉庫内の棚番地管理により、ピッキング作業を最適化。"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "リアルタイム在庫同期",
      description: "WMSとNetSuiteの在庫データをリアルタイムで同期。"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "モバイル対応",
      description: "スマートフォンやタブレットでも倉庫作業が可能。"
    }
  ];

  const operations = [
    { operation: "入荷", tasks: ["入荷予定照会", "検品処理", "入庫指示", "ロケーション登録"] },
    { operation: "出荷", tasks: ["出荷指示確認", "ピッキングリスト", "検品・梱包", "出荷確定"] },
    { operation: "棚卸", tasks: ["棚卸指示", "実地棚卸", "差異確認", "在庫調整"] },
    { operation: "移動", tasks: ["ロケーション移動", "倉庫間移動", "返品処理", "在庫振替"] }
  ];

  const benefits = [
    { value: "99.9%", label: "在庫精度", description: "バーコード管理による精度向上" },
    { value: "60%", label: "作業時間短縮", description: "ピッキング効率の改善" },
    { value: "80%", label: "誤出荷削減", description: "スキャンによる検品強化" },
    { value: "リアルタイム", label: "在庫可視化", description: "即時の在庫情報更新" }
  ];

  const integrationSystems = [
    { name: "主要WMS", description: "国内主要WMSとの標準連携" },
    { name: "ハンディターミナル", description: "各種メーカー対応" },
    { name: "RFID", description: "RFIDタグ読み取り対応" },
    { name: "自動倉庫", description: "AS/RS連携可能" },
    { name: "音声ピッキング", description: "音声認識システム対応" },
    { name: "AGV/AMR", description: "搬送ロボット連携" }
  ];

  const caseStudies = [
    {
      industry: "物流企業 J社",
      challenge: "複数倉庫の在庫管理が煩雑",
      result: "在庫差異99%削減、作業効率50%向上"
    },
    {
      industry: "EC事業者 K社",
      challenge: "出荷ミスによるクレーム多発",
      result: "誤出荷率0.01%以下、顧客満足度20%向上"
    },
    {
      industry: "製造業 L社",
      challenge: "棚卸作業に膨大な時間",
      result: "棚卸時間70%短縮、月次棚卸の実現"
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
              <button 
                onClick={() => navigate('/contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-sky-500/25"
              >
                お問い合わせ
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
              <Database className="w-4 h-4 mr-2 text-sky-600" />
              <span className="text-sm text-sky-700 font-semibold">倉庫業務デジタル化ソリューション</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              ハンディ連携／WMS連携
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              倉庫管理システムやハンディターミナルとNetSuiteをリアルタイム連携させ、
              在庫管理の精度を向上させます。バーコード・QRコードスキャンによる入出荷処理、
              棚卸作業の効率化、ロケーション管理の最適化により、物流業務の生産性を大幅に改善します。
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
                  <p className="text-slate-700 font-medium">手書き伝票による入出荷管理でミスが多発</p>
                  <p className="text-slate-600 text-sm mt-1">転記ミスや記入漏れによる在庫差異</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">ピッキング作業に時間がかかり出荷が遅延</p>
                  <p className="text-slate-600 text-sm mt-1">商品の場所が分からず倉庫内を探し回る</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">棚卸作業で倉庫業務が停止</p>
                  <p className="text-slate-600 text-sm mt-1">月次・年次棚卸に膨大な時間と人員が必要</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">在庫情報のタイムラグで販売機会を損失</p>
                  <p className="text-slate-600 text-sm mt-1">実在庫とシステム在庫の乖離</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            対応業務プロセス
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operations.map((op, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-4 text-slate-900 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-sky-600" />
                  {op.operation}
                </h3>
                <ul className="space-y-2">
                  {op.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Systems Section */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            連携可能システム
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {integrationSystems.map((system, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{system.name}</h3>
                <p className="text-sm text-slate-600">{system.description}</p>
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
                <h3 className="text-lg font-bold text-slate-900">倉庫業務分析</h3>
              </div>
              <p className="text-slate-600 ml-11">現在の倉庫オペレーションと課題を詳細分析（約1週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900">機器選定・調達</h3>
              </div>
              <p className="text-slate-600 ml-11">ハンディターミナル等の機器選定と調達（約2週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900">システム連携開発</h3>
              </div>
              <p className="text-slate-600 ml-11">WMS/ハンディとNetSuiteの連携構築（約3週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900">現場テスト</h3>
              </div>
              <p className="text-slate-600 ml-11">実際の倉庫でのテスト運用と調整（約1週間）</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold mr-3">
                  5
                </div>
                <h3 className="text-lg font-bold text-slate-900">本番稼働・教育</h3>
              </div>
              <p className="text-slate-600 ml-11">現場スタッフへの教育と本番運用開始（約1週間）</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            倉庫業務のデジタル化で物流を最適化
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            在庫差異を最小化し、物流業務の生産性を大幅に改善します。
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

export default WarehouseIntegration;