import React, { useState, useEffect } from 'react';
import {
  Globe, Shield, TrendingUp, Database, Zap, BarChart3,
  CheckCircle, ArrowLeft, ArrowRight, Cloud, RefreshCw, DollarSign,
  Users, Building2, Layers, Award, Target, Clock,
  Package, Settings, ChevronRight, Sparkles, Code,
  Wrench, Rocket, Lightbulb, Puzzle, GitBranch,
  Phone, FileText, Server, Lock, Cpu, Activity, Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NetSuiteFeatures = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const netsuiteCore = {
    customization: {
      title: "圧倒的なカスタマイズ性",
      subtitle: "SuiteCloudプラットフォーム",
      features: [
        {
          name: "SuiteScript 2.0",
          desc: "JavaScriptベースで自由にビジネスロジックを実装。サーバーサイド・クライアントサイド両対応"
        },
        {
          name: "SuiteFlow",
          desc: "ドラッグ&ドロップで複雑な承認ワークフローや自動処理を視覚的に構築"
        },
        {
          name: "SuiteBuilder",
          desc: "プログラミング不要でフォーム、フィールド、レコードをカスタマイズ"
        },
        {
          name: "SuiteTalk (Web Services)",
          desc: "REST/SOAP APIによる完全な外部システム連携"
        },
        {
          name: "SuiteAnalytics",
          desc: "リアルタイムBI機能で経営ダッシュボードを自由に作成"
        }
      ]
    },
    integration: {
      title: "完全統合プラットフォーム",
      modules: [
        { name: "財務会計", features: ["総勘定元帳", "買掛・売掛管理", "固定資産"] },
        { name: "販売管理", features: ["見積・受注", "在庫管理", "出荷管理"] },
        { name: "購買管理", features: ["発注管理", "仕入先管理", "承認ワークフロー"] },
        { name: "CRM", features: ["顧客管理", "営業支援", "マーケティング"] },
        { name: "Eコマース", features: ["B2B/B2C対応", "マルチサイト", "在庫連動"] },
        { name: "人事管理", features: ["従業員管理", "勤怠", "経費精算"] }
      ]
    },
    cloud: {
      title: "真のクラウドアーキテクチャ",
      advantages: [
        {
          title: "マルチテナント型",
          desc: "全顧客が同一バージョンを利用し、運用コストを最小化"
        },
        {
          title: "自動アップデート",
          desc: "年2回の機能更新で常に最新技術を享受"
        },
        {
          title: "グローバル対応",
          desc: "217カ国、190通貨、27言語、50カ国税制に標準対応"
        },
        {
          title: "無限のスケーラビリティ",
          desc: "10名から10,000名規模まで同一システムで対応"
        }
      ]
    }
  };

  const netsuiteAdvantages = [
    {
      category: "vs 外資系クラウドERP",
      icon: <Globe className="w-6 h-6" />,
      advantages: [
        "最初から100%クラウド設計（オンプレミスからの移行ではない）",
        "単一のコードベースで全機能統合（モジュール間の連携不要）",
        "カスタマイズとバージョンアップの両立が可能",
        "Oracle社の信頼性とサポート体制"
      ]
    },
    {
      category: "vs 国内クラウドERP",
      icon: <Shield className="w-6 h-6" />,
      advantages: [
        "フロントオフィスからバックオフィスまで完全カバー",
        "真のグローバル対応（単なる多言語表示ではない）",
        "エンタープライズレベルのセキュリティと可用性",
        "豊富なAPIとカスタマイズオプション"
      ]
    },
    {
      category: "vs オンプレミスERP",
      icon: <Server className="w-6 h-6" />,
      advantages: [
        "初期投資ゼロ、インフラ管理不要",
        "災害対策・BCP対応が標準装備",
        "リモートワーク完全対応",
        "IT人員の戦略業務へのシフト可能"
      ]
    }
  ];

  const suiteSuccess = {
    title: "SuiteSuccess - 業界別ベストプラクティス",
    description: "20年以上の導入実績から生まれた業界特化型導入手法",
    industries: [
      {
        name: "製造業",
        features: ["BOM管理", "MRP", "品質管理", "原価計算"],
        timeline: "6-9ヶ月"
      },
      {
        name: "商社・卸売",
        features: ["多段階価格", "与信管理", "直送", "リベート"],
        timeline: "4-6ヶ月"
      },
      {
        name: "小売・EC",
        features: ["POS連携", "在庫最適化", "顧客分析", "オムニチャネル"],
        timeline: "3-6ヶ月"
      },
      {
        name: "サービス業",
        features: ["プロジェクト管理", "リソース管理", "請求管理", "収益認識"],
        timeline: "3-4ヶ月"
      }
    ]
  };

  const evangsolValue = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "NetSuite認定開発力",
      points: [
        "SuiteCloud認定デベロッパー多数在籍",
        "500社以上の導入・カスタマイズ実績",
        "日本の商習慣に精通した開発"
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "独自ソリューション",
      points: [
        "入金消込自動化（消込率99.5%）",
        "EC多店舗統合管理",
        "WMS/ハンディ連携"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "伴走型サポート",
      points: [
        "導入から運用まで一貫支援",
        "24時間365日サポート体制",
        "内製化支援プログラム"
      ]
    }
  ];

  const roi = {
    immediate: [
      { metric: "40-60%", label: "受注処理効率向上" },
      { metric: "70%", label: "決算期間短縮" },
      { metric: "99.9%", label: "在庫精度向上" }
    ],
    longterm: [
      { metric: "30%", label: "運用コスト削減" },
      { metric: "50%", label: "IT管理工数削減" },
      { metric: "2倍", label: "ビジネス成長速度" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/20 to-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/')}
                className="flex items-center cursor-pointer"
              >
                <img src="/EvangSol_logo.png" alt="EvangSol" className="h-12" />
              </button>
              <span className="text-xs text-slate-600 border-l border-slate-300 ml-3 pl-3">
                Oracle NetSuite Solution Provider
              </span>
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 via-transparent to-blue-100/30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 border border-sky-300 rounded-full mb-6">
              <Award className="w-4 h-4 mr-2 text-sky-600" />
              <span className="text-sm text-sky-700 font-semibold">世界No.1 クラウドERP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                NetSuite
              </span>
              の革新的な強み
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              31,000社以上が選ぶ理由 - 圧倒的なカスタマイズ性、
              完全統合、真のクラウドが実現する次世代経営基盤
            </p>
            <p className="text-lg text-slate-500 mt-4">
              EvangSolが提供する専門的な導入・開発支援
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-sky-600">31,000+</div>
              <div className="text-slate-600 mt-1">導入企業数</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-sky-600">217</div>
              <div className="text-slate-600 mt-1">国・地域</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-sky-600">27</div>
              <div className="text-slate-600 mt-1">言語対応</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-sky-600">1998</div>
              <div className="text-slate-600 mt-1">創業年</div>
            </div>
          </div>
        </div>
      </section>

      {/* NetSuite Core Feature 1: Integration */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            {netsuiteCore.integration.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {netsuiteCore.integration.modules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <Database className="w-5 h-5 text-sky-600 mr-2" />
                  {module.name}
                </h3>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">単一データベースの威力</h3>
            <p className="text-slate-600 mb-6">
              すべてのモジュールが同一のデータベースを参照。
              リアルタイムでデータが連携し、二重入力や不整合が発生しません。
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600">0秒</div>
                <div className="text-sm text-slate-600">データ連携時間</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600">100%</div>
                <div className="text-sm text-slate-600">データ整合性</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600">360°</div>
                <div className="text-sm text-slate-600">顧客ビュー</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NetSuite Core Feature 2: Customization */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              {netsuiteCore.customization.title}
            </h2>
            <p className="text-xl text-sky-600 font-semibold">
              {netsuiteCore.customization.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {netsuiteCore.customization.features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-sky-50 rounded-xl p-6 border border-sky-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <Cpu className="w-5 h-5 text-sky-600 mr-2" />
                  {feature.name}
                </h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">なぜNetSuiteのカスタマイズ性が優れているのか</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2 flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  アップデート保護
                </h4>
                <p className="text-white/90 text-sm">
                  カスタマイズとコア機能が分離。バージョンアップ後もカスタマイズは維持される
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  開発生産性
                </h4>
                <p className="text-white/90 text-sm">
                  標準的なJavaScriptで開発可能。特殊な言語の習得不要で即戦力化
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  柔軟性
                </h4>
                <p className="text-white/90 text-sm">
                  UI、ワークフロー、データモデルまであらゆる要素をカスタマイズ可能
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NetSuite Core Feature 3: Cloud Architecture */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            {netsuiteCore.cloud.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {netsuiteCore.cloud.advantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border border-blue-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <Cloud className="w-6 h-6 text-blue-600 mr-2" />
                  {advantage.title}
                </h3>
                <p className="text-slate-600">{advantage.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Oracle社による堅牢なインフラ</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">99.98%</div>
                <div className="text-white/80 text-sm">稼働率</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-white/80 text-sm">監視体制</div>
              </div>
              <div>
                <div className="text-3xl font-bold">SOC2</div>
                <div className="text-white/80 text-sm">セキュリティ認証</div>
              </div>
              <div>
                <div className="text-3xl font-bold">自動</div>
                <div className="text-white/80 text-sm">バックアップ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            NetSuiteの競合優位性
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {netsuiteAdvantages.map((comparison, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  {comparison.icon}
                  <span className="ml-2">{comparison.category}</span>
                </h3>
                <ul className="space-y-3">
                  {comparison.advantages.map((advantage, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SuiteSuccess */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              {suiteSuccess.title}
            </h2>
            <p className="text-xl text-slate-600">
              {suiteSuccess.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suiteSuccess.industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-sky-50 rounded-xl p-6 border border-sky-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{industry.name}</h3>
                <ul className="space-y-2 mb-4">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <ArrowRight className="w-4 h-4 text-sky-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-sky-200">
                  <span className="text-sm font-semibold text-sky-600">
                    導入期間: {industry.timeline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            実証されたROI
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center">
                <Activity className="w-8 h-8 text-sky-500 mr-3" />
                即効性のある効果
              </h3>
              <div className="space-y-4">
                {roi.immediate.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-slate-200 pb-3">
                    <span className="text-slate-700">{item.label}</span>
                    <span className="text-2xl font-bold text-sky-600">{item.metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3" />
                長期的な価値
              </h3>
              <div className="space-y-4">
                {roi.longterm.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-white/30 pb-3">
                    <span className="text-white/90">{item.label}</span>
                    <span className="text-2xl font-bold">{item.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EvangSol Value Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              EvangSolが提供する付加価値
            </h2>
            <p className="text-lg text-slate-600">
              NetSuiteの強力な基盤を、日本企業に最適化して実装
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {evangsolValue.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <ul className="space-y-2">
                  {value.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-400 to-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            世界最高のERPで、ビジネスを変革
          </h2>
          <p className="text-xl text-white/90 mb-8">
            NetSuiteの革新的な機能と、EvangSolの専門的な導入支援で
            貴社の成長を加速させます
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-sky-600 hover:bg-slate-50 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              NetSuite導入相談
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              お問い合わせ
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

export default NetSuiteFeatures;

