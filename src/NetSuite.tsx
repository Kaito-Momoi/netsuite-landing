import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, ArrowRight, Menu, X, Phone, Mail, Clock, Users, TrendingUp, Settings, Globe, Shield, Zap, Database, BarChart3, Package, FileText, Layers, Building2, Truck, Calculator, RefreshCw, Sparkles, Award, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NetSuite = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "入金消込ソリューション",
      description: "銀行口座や決済サービスの入金データを自動取得し、売掛金との突合を効率化"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "ECデータ連携基盤",
      description: "各種ECサイトやモール、決済サービスとNetSuiteをシームレスに連携"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "業界特化OMS",
      description: "製造、小売、商社など業界の特性に合わせた受注管理システムを提供"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "資材計画の見える化",
      description: "需要予測や生産計画と連動し、資材の発注・在庫状況をリアルタイムに可視化"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "ハンディ連携／WMS連携",
      description: "倉庫内の入出庫、棚卸、ピッキング作業をハンディ端末やWMSと連動"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "在庫年齢表",
      description: "在庫品目ごとの滞留期間を分析し、デッドストックのリスクを可視化"
    }
  ];

  const services = [
    {
      icon: <Settings className="w-12 h-12" />,
      title: "導入支援",
      description: "要件定義から導入まで、貴社に最適な設計をご提案",
      features: ["業務分析", "要件定義", "プロジェクト管理"]
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "カスタマイズ開発",
      description: "SuiteScriptやワークフローで業務に合わせた機能拡張",
      features: ["SuiteScript開発", "ワークフロー構築", "API連携"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "データ移行支援",
      description: "既存システムからの安全で確実なデータ移行",
      features: ["移行計画策定", "マスタ整備", "データクレンジング"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "運用・保守サポート",
      description: "導入後の安定運用と継続的な改善をサポート",
      features: ["ヘルプデスク", "トレーニング", "運用改善提案"]
    }
  ];

  const stats = [
    { number: "3", label: "最短導入期間", suffix: "ヶ月", icon: <Target className="w-6 h-6" /> },
    { number: "20-25", label: "残業時間削減", suffix: "%", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "0.01", label: "出荷ミス率", suffix: "%以下", icon: <Award className="w-6 h-6" /> },
    { number: "40", label: "在庫回転率向上", suffix: "%", icon: <Sparkles className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              {/* Logo Image */}
              <img 
                src="/EvangSol_logo.png" 
                alt="EvangSol"
                className="h-12"
              />
              <span className="text-xs text-slate-600 border-l border-slate-300 ml-3 pl-3">Oracle NetSuite認定パートナー</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-700 hover:text-sky-500 transition-colors font-medium">サービス</a>
              <a href="#solutions" className="text-slate-700 hover:text-sky-500 transition-colors font-medium">ソリューション</a>
              <a href="#cases" className="text-slate-700 hover:text-sky-500 transition-colors font-medium">導入事例</a>
              <button 
                onClick={() => navigate('/about')}
                className="text-slate-700 hover:text-sky-500 transition-colors font-medium cursor-pointer"
              >
                会社概要
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-sky-500/25"
              >
                無料相談
              </button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#services" className="text-2xl text-slate-700 hover:text-sky-500">サービス</a>
            <a href="#solutions" className="text-2xl text-slate-700 hover:text-sky-500">ソリューション</a>
            <a href="#cases" className="text-2xl text-slate-700 hover:text-sky-500">導入事例</a>
            <button 
              onClick={() => navigate('/about')}
              className="text-2xl text-slate-700 hover:text-sky-500"
            >
              会社概要
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-white rounded-full font-semibold"
            >
              無料相談
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-transparent to-blue-100/40"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-sky-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 border border-sky-200 rounded-full mb-6">
              <Zap className="w-4 h-4 mr-2 text-sky-600" />
              <span className="text-sm text-sky-700 font-semibold">Oracle NetSuiteソリューションプロバイダー</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
              <span className="text-slate-800">
                最短3ヶ月で導入完了
              </span>
              <br />
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                20年の実績で実現する
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              グループ会社EvangTech（2005年設立）の豊富な導入経験により
              <br /><span className="font-bold text-slate-800">業界標準の半分以下の期間</span>でNetSuite導入を実現
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-8 max-w-2xl mx-auto border border-sky-200">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  <span className="font-semibold text-slate-700">40,000社以上の導入実績</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  <span className="font-semibold text-slate-700">200以上の国と地域で利用</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  <span className="font-semibold text-slate-700">ISO 27001認証取得</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-sky-500/40 flex items-center justify-center"
              >
                無料相談を予約する
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button onClick={() => navigate('/features')} className="px-8 py-4 bg-white hover:bg-slate-50 border-2 border-sky-400 text-sky-600 rounded-full font-semibold text-lg transition-all">
                NetSuiteの強みとは？
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3 text-sky-500">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-sky-600">
                  {stat.number}<span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-slate-600 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Core Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              EvangSolが選ばれる<span className="text-sky-600">3つの理由</span>
            </h2>
            <p className="text-xl text-slate-600">NetSuite導入支援のプロフェッショナル集団</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-sky-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">最短3ヶ月で導入完了</h3>
              <p className="text-slate-600 mb-4">
                SuiteSuccess手法を活用し、業界標準の半分以下の期間で確実に導入。豊富な経験により、スピーディーな立ち上げを実現します。
              </p>
              <div className="bg-sky-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-sky-700">通常6-12ヶ月 → 3-5ヶ月に短縮</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">サーバーレス技術で連携</h3>
              <p className="text-slate-600 mb-4">
                AWS連携基盤により、WMS・ECサイト・EDIなど多様なシステムとの自動連携を実現。コスト効率と拡張性を両立します。
              </p>
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-emerald-700">手作業ゼロ・ミス削減・効率向上</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">20年以上の専門知識</h3>
              <p className="text-slate-600 mb-4">
                グループ会社EvangTechとの連携により、Oracle技術とシステム開発の両方に精通したスペシャリスト集団がサポート。
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-purple-700">ISO 27001認証取得済み</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              導入プロセス<span className="text-sky-600">（最短3ヶ月）</span>
            </h2>
            <p className="text-xl text-slate-600">明確なステップで確実な導入を実現</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-200 via-sky-400 to-blue-500 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative">
              {[
                {
                  step: "STEP 1",
                  title: "ヒアリング",
                  duration: "1週間",
                  description: "現状の課題と要件を詳細に把握",
                  icon: <Users className="w-8 h-8" />,
                  color: "from-sky-400 to-sky-500"
                },
                {
                  step: "STEP 2", 
                  title: "要件定義",
                  duration: "2-3週間",
                  description: "業務フローの分析と最適な設計",
                  icon: <FileText className="w-8 h-8" />,
                  color: "from-sky-500 to-blue-500"
                },
                {
                  step: "STEP 3",
                  title: "開発・設定",
                  duration: "4-6週間",
                  description: "カスタマイズと各種設定の実装",
                  icon: <Settings className="w-8 h-8" />,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: "STEP 4",
                  title: "データ移行",
                  duration: "2-3週間",
                  description: "既存データの安全な移行",
                  icon: <Database className="w-8 h-8" />,
                  color: "from-blue-600 to-indigo-600"
                },
                {
                  step: "STEP 5",
                  title: "運用開始",
                  duration: "継続サポート",
                  description: "トレーニングと本番稼働",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-indigo-600 to-purple-600"
                }
              ].map((process, index) => (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mb-4 mx-auto`}>
                      <div className="text-white">
                        {process.icon}
                      </div>
                    </div>
                    <div className="text-sm font-bold text-sky-600 mb-2">{process.step}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h3>
                    <div className="text-sm text-orange-600 font-semibold mb-3">{process.duration}</div>
                    <p className="text-sm text-slate-600">{process.description}</p>
                  </div>
                  
                  {/* Connector dot for desktop */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-sky-500 rounded-full z-20"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">なぜ3ヶ月で導入できるのか？</h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">SuiteSuccess手法</p>
                    <p className="text-xs text-slate-600">Oracleの迅速導入メソッド</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">20年の経験</p>
                    <p className="text-xs text-slate-600">蓄積されたノウハウ</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">専門チーム</p>
                    <p className="text-xs text-slate-600">各分野のエキスパート</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              提供サービス
            </h2>
            <p className="text-xl text-slate-600">導入から運用まで、ワンストップでサポート</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-sky-400 transition-all hover:transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                  <div className="text-sky-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <Check className="w-4 h-4 mr-2 text-sky-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              業界特化ソリューション
            </h2>
            <p className="text-xl text-slate-600">貴社の業界・業務に最適化された専門ソリューション</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {solutions.map((solution, index) => (
    <div 
      key={index} 
      className="group cursor-pointer"
      onClick={() => {
        const routes = [
          '/solutions/payment-matching',
          '/solutions/ec-integration', 
          '/solutions/industry-oms',
          '/solutions/material-planning',
          '/solutions/warehouse-integration',
          '/solutions/inventory-aging'
        ];
        navigate(routes[index]);
      }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-sky-50 border border-slate-200 hover:border-sky-400 transition-all duration-300 shadow-lg hover:shadow-xl p-6">
        <div className="text-sky-500 mb-4">{solution.icon}</div>
        <h3 className="text-xl font-bold mb-2 text-slate-900">{solution.title}</h3>
        <p className="text-slate-600 text-sm">{solution.description}</p>
        <div className="mt-4 inline-flex items-center text-sky-600 font-semibold">
          詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Trust Building Section with Numbers */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              数字で見る導入効果
            </h2>
            <p className="text-xl text-slate-300">実際の導入企業様で実現した成果</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-sky-400 mb-2">20-25%</div>
              <div className="text-white text-lg font-semibold mb-2">残業時間削減</div>
              <div className="text-slate-400 text-sm">月末売上処理業務の均一化により実現</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2">0.01%</div>
              <div className="text-white text-lg font-semibold mb-2">出荷ミス率</div>
              <div className="text-slate-400 text-sm">1万個に1個以下の誤配送率を達成</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-sky-400 mb-2">40%</div>
              <div className="text-white text-lg font-semibold mb-2">在庫回転率向上</div>
              <div className="text-slate-400 text-sm">リアルタイム在庫管理で最適化</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-2">3ヶ月</div>
              <div className="text-white text-lg font-semibold mb-2">最短導入期間</div>
              <div className="text-slate-400 text-sm">業界標準の半分以下で稼働開始</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <p className="text-white text-lg mb-6">
              中堅・中小企業のERP導入において、高額な初期投資を抑えながら<br />
              大企業並みのシステム環境を構築可能です
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              導入効果を詳しく聞く
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 px-4 bg-gradient-to-b from-white to-sky-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              業界別導入事例
            </h2>
            <p className="text-xl text-slate-600">製造業、小売業、サービス業など幅広い業界での成功実績</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                industry: "製造業", 
                company: "精密機器メーカーA社", 
                challenge: "複数拠点の在庫管理が煩雑",
                result: "在庫回転率40%向上・リードタイム50%短縮", 
                icon: <Building2 className="w-8 h-8" />, 
                color: "from-blue-400 to-blue-500" 
              },
              { 
                industry: "小売・商社", 
                company: "アパレル商社B社", 
                challenge: "ECと実店舗の在庫連携が困難",
                result: "残業時間50%削減・売上10%向上", 
                icon: <Truck className="w-8 h-8" />, 
                color: "from-sky-400 to-sky-500" 
              },
              { 
                industry: "サービス業", 
                company: "IT企業C社", 
                challenge: "プロジェクト収支の可視化が不十分",
                result: "収益性30%改善・請求漏れゼロ化", 
                icon: <Package className="w-8 h-8" />, 
                color: "from-cyan-400 to-cyan-500" 
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-sky-400 transition-all hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${study.color} text-white mb-4`}>
                  {study.icon}
                </div>
                <div className="text-sm text-sky-600 font-semibold mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{study.company}</h3>
                <div className="mb-4">
                  <p className="text-sm text-slate-500 mb-2">【課題】</p>
                  <p className="text-sm text-slate-700 mb-3">{study.challenge}</p>
                  <p className="text-sm text-slate-500 mb-2">【成果】</p>
                  <p className="text-slate-800 font-semibold">{study.result}</p>
                </div>
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-sky-500 hover:text-sky-600 transition-colors flex items-center font-semibold"
                >
                  詳細を聞く
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for Lead Nurturing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              よくあるご質問
            </h2>
            <p className="text-xl text-slate-600">NetSuite導入に関する疑問にお答えします</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "導入費用はどのくらいかかりますか？",
                a: "企業規模や導入範囲により異なりますが、クラウド型のため初期投資を大幅に抑えられます。詳細は無料相談でご案内いたします。"
              },
              {
                q: "既存システムからのデータ移行は可能ですか？",
                a: "はい、可能です。マスタ整備からデータクレンジングまで、安全で確実なデータ移行をサポートいたします。"
              },
              {
                q: "導入後のサポート体制は？",
                a: "24/7のヘルプデスク、定期的なトレーニング、運用改善提案など、導入後も継続的にサポートいたします。"
              },
              {
                q: "カスタマイズはどの程度可能ですか？",
                a: "SuiteScriptやワークフローを活用し、貴社独自の業務プロセスに合わせた柔軟なカスタマイズが可能です。"
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start">
                  <span className="text-sky-500 mr-3">Q.</span>
                  {item.q}
                </h3>
                <p className="text-slate-700 ml-7">
                  <span className="text-sky-500 mr-3">A.</span>
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              その他のご質問はこちら
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <Clock className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm text-white font-semibold">平均回答時間：1営業日以内</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            今すぐ無料相談で<br />貴社に最適な導入プランをご提案
          </h2>
          <p className="text-xl text-white/90 mb-8">
            20年以上の経験を持つ専門家が、貴社の課題を解決します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-white text-sky-600 hover:bg-slate-50 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              無料相談を予約する
            </button>
            <button 
              className="px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              資料請求
            </button>
          </div>
          <p className="text-white/80 text-sm mt-6">
            ※ご相談は無料です。お気軽にお問い合わせください。
          </p>
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
                    onClick={() => navigate('/about')}
                    className="hover:text-sky-500 transition-colors"
                  >
                    会社概要
                  </button>
                </li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">採用情報</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">お知らせ</a></li>
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

export default NetSuite;