import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Clock, Shield, Database, CheckCircle, Phone, Building2, Truck, ShoppingBag, Factory, Settings, BarChart3, ArrowLeft, Target, Zap } from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import { FeatureGrid } from './components/FeatureCard';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { Feature } from './types';

const IndustryOMS = () => {
  const navigate = useNavigate();

  const features: Feature[] = [
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

  const detailedFeatures: Feature[] = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "マルチチャネル受注",
      description: "電話、FAX、メール、ECサイト、EDIなど複数チャネルからの受注を一元管理。"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "在庫リアルタイム管理",
      description: "複数拠点の在庫をリアルタイムで確認し、最適な引当を自動実行。"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "与信・審査機能",
      description: "取引先の与信限度額を自動チェックし、リスクのある受注を事前に検知。"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "配送管理連携",
      description: "配送会社のシステムと連携し、出荷指示から配送追跡まで一元管理。"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "売上分析",
      description: "受注データをリアルタイムで分析し、売上予測や在庫最適化を支援。"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "自動請求処理",
      description: "受注から請求書発行まで自動化し、請求漏れや遅延を防止。"
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


  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <NavigationBar showBackButton={true} variant="page" />

      <HeroSection
        badge={{
          icon: <Package className="w-4 h-4 mr-2" />,
          text: "業界別最適化システム",
          bgColor: "bg-sky-100",
          borderColor: "border border-sky-300",
          textColor: "text-sky-700"
        }}
        title="業界特化OMS（受注管理システム）"
        description="業界特有の商習慣や業務フローに完全対応した受注管理システムを構築します。製造業、卸売業、小売業など、各業界の要件に最適化されたワークフローを実装し、受注から出荷、請求までの一連のプロセスを自動化します。"
      />

      {/* 3つの主要機能 */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
              3つの<span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">主要機能</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">業界特化で実現する受注業務の完全自動化</p>
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
            <p className="text-xl text-slate-600">受注業務を効率化する充実の機能群</p>
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

      {/* 業界別ソリューション */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              業界別ソリューション
            </h2>
            <p className="text-xl text-slate-600">各業界の特性に合わせた最適化ソリューション</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-slate-200 hover:border-sky-400">
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

      {/* 導入効果 */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">導入効果</h2>
            <p className="text-xl opacity-90">数値で見る業務改善の実績</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{benefit.value}</div>
                <div className="text-lg font-semibold mb-1">{benefit.label}</div>
                <div className="text-sm opacity-80">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
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
              { step: "STEP 1", title: "業務分析", description: "現行の受注業務フローと課題の把握", icon: <Target className="w-6 h-6" /> },
              { step: "STEP 2", title: "システム設計", description: "業界特化機能の設計とカスタマイズ", icon: <Database className="w-6 h-6" /> },
              { step: "STEP 3", title: "実装・テスト", description: "NetSuiteへの実装と受注処理テスト", icon: <Settings className="w-6 h-6" /> },
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
          title={<>業界特化OMSで<br />受注業務を今すぐ革新しませんか？</>}
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

export default IndustryOMS;