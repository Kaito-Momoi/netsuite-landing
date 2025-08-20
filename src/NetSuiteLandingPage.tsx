import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, ArrowRight, Menu, X, Phone, Mail, Clock, Users, TrendingUp, Settings, Globe, Shield, Zap, Database, BarChart3, Package, FileText, Layers, Building2, Truck, Calculator, RefreshCw, Sparkles, Award, Target } from 'lucide-react';

const NetSuiteLandingPage = () => {
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
      title: "導入コンサルティング",
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
    { number: "500+", label: "導入実績", suffix: "社", icon: <Award className="w-6 h-6" /> },
    { number: "98", label: "顧客満足度", suffix: "%", icon: <Sparkles className="w-6 h-6" /> },
    { number: "24/7", label: "サポート体制", suffix: "", icon: <Shield className="w-6 h-6" /> },
    { number: "5", label: "平均導入期間", suffix: "ヶ月", icon: <Target className="w-6 h-6" /> }
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
                src="/api/placeholder/150/50" 
                alt="EvangSol"
                className="h-10"
              />
              <span className="text-xs text-slate-600 border-l border-slate-300 ml-3 pl-3">Oracle NetSuite Solution Provider</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-700 hover:text-sky-500 transition-colors font-medium">サービス</a>
              <a href="#solutions" className="text-slate-700 hover:text-sky-500 transition-colors font-medium">ソリューション</a>
              <a href="#cases" className="text-slate-700 hover:text-sky-500 transition-colors font-medium">導入事例</a>
              <a href="#about" className="text-slate-700 hover:text-sky-500 transition-colors font-medium">会社概要</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-sky-500/25">
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
            <a href="#about" className="text-2xl text-slate-700 hover:text-sky-500">会社概要</a>
            <button className="px-8 py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-white rounded-full font-semibold">
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
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 border border-sky-300 rounded-full mb-6">
              <Zap className="w-4 h-4 mr-2 text-sky-600" />
              <span className="text-sm text-sky-700 font-semibold">中小企業のDXを加速</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                NetSuiteで実現する
              </span>
              <br />
              <span className="text-slate-800">
                次世代経営基盤
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              クラウドERPの導入から運用まで、豊富な経験と専門知識で
              <br />貴社のビジネス成長を全面サポート
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-sky-500/40 flex items-center justify-center">
                導入相談を始める
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white hover:bg-slate-50 border-2 border-sky-400 text-sky-600 rounded-full font-semibold text-lg transition-all">
                資料ダウンロード
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-sky-50/50">
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
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-sky-50 border border-slate-200 hover:border-sky-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400/10 to-blue-400/10 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative p-8">
                    <div className="text-sky-500 mb-4 group-hover:scale-110 transition-transform">{solution.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-sky-600 transition-colors">{solution.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{solution.description}</p>
                    <div className="mt-4 flex items-center text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-semibold">詳細を見る</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 px-4 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              導入事例
            </h2>
            <p className="text-xl text-slate-600">500社以上の導入実績から、貴社に最適な事例をご紹介</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { industry: "製造業", company: "A社", result: "在庫回転率40%向上", icon: <Building2 className="w-8 h-8" />, color: "from-blue-400 to-blue-500" },
              { industry: "商社", company: "B社", result: "業務効率化により残業50%削減", icon: <Truck className="w-8 h-8" />, color: "from-sky-400 to-sky-500" },
              { industry: "小売業", company: "C社", result: "売上予測精度30%改善", icon: <Package className="w-8 h-8" />, color: "from-cyan-400 to-cyan-500" }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-sky-400 transition-all hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${study.color} text-white mb-4`}>
                  {study.icon}
                </div>
                <div className="text-sm text-sky-600 font-semibold mb-2">{study.industry}</div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{study.company}</h3>
                <p className="text-slate-700 mb-4 font-medium">{study.result}</p>
                <button className="text-sky-500 hover:text-sky-600 transition-colors flex items-center font-semibold">
                  詳細を読む
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-r from-sky-400 to-blue-500">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            NetSuite導入で、ビジネスを次のステージへ
          </h2>
          <p className="text-xl text-white/90 mb-8">
            まずは無料相談から。貴社の課題をお聞かせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-sky-600 hover:bg-slate-50 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              無料相談を予約
            </button>
            <button className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center">
              <Mail className="mr-2 w-5 h-5" />
              資料請求
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
                src="/api/placeholder/150/50" 
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
                <li><a href="#" className="hover:text-sky-500 transition-colors">会社概要</a></li>
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

export default NetSuiteLandingPage;