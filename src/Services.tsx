import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Settings, 
  Code, 
  Cloud, 
  Database, 
  Shield, 
  Users, 
  TrendingUp, 
  Layers,
  ArrowRight,
  CheckCircle,
  Briefcase,
  HeadphonesIcon,
  Globe,
  Package,
  RefreshCw,
  BarChart3
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import CTASection from './components/CTASection';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  link?: string;
}

const Services = () => {
  const navigate = useNavigate();

  const services: ServiceCard[] = [
    {
      id: 'implementation',
      title: 'NetSuite導入支援',
      description: 'お客様のビジネスプロセスを徹底分析し、NetSuiteの導入から稼働まで一貫してサポートします。',
      icon: <Settings className="w-8 h-8" />,
      features: [
        '業務要件定義・フィット＆ギャップ分析',
        'システム設計・環境構築',
        'データ移行・マスタ整備',
        'ユーザートレーニング'
      ]
    },
    {
      id: 'consulting',
      title: 'ビジネスコンサルティング',
      description: '業務プロセスの改善から組織変革まで、DXを成功に導く戦略的なアドバイスを提供します。',
      icon: <Briefcase className="w-8 h-8" />,
      features: [
        '業務プロセス最適化',
        'KPI設計・ダッシュボード構築',
        '組織変革支援',
        'ROI最大化提案'
      ]
    },
    {
      id: 'development',
      title: 'カスタマイズ開発',
      description: 'SuiteScript、SuiteFlowを活用し、お客様の業務に最適化されたシステムを構築します。',
      icon: <Code className="w-8 h-8" />,
      features: [
        'SuiteScript開発',
        'ワークフロー自動化',
        'カスタムレポート作成',
        'サードパーティ連携開発'
      ]
    },
    {
      id: 'cloud-integration',
      title: 'クラウド連携ソリューション',
      description: 'NetSuiteと各種クラウドサービスをシームレスに連携し、業務効率を最大化します。',
      icon: <Cloud className="w-8 h-8" />,
      features: [
        'EC/モール連携',
        '決済サービス連携',
        'WMS/TMS連携',
        'BI/分析ツール連携'
      ],
      link: '/ec-integration'
    },
    {
      id: 'data-migration',
      title: 'データ移行・統合',
      description: '既存システムからNetSuiteへの安全で確実なデータ移行を実現します。',
      icon: <Database className="w-8 h-8" />,
      features: [
        'データマッピング設計',
        'データクレンジング',
        '段階的移行対応',
        'データ検証・整合性確認'
      ]
    },
    {
      id: 'support',
      title: '保守・運用サポート',
      description: '導入後の安定稼働と継続的な改善をサポートし、システム価値を最大化します。',
      icon: <HeadphonesIcon className="w-8 h-8" />,
      features: [
        '24時間365日監視',
        'ヘルプデスク対応',
        '定期メンテナンス',
        'アップデート対応'
      ]
    }
  ];

  const industrySpecificSolutions = [
    {
      icon: <Package className="w-6 h-6" />,
      title: '製造業向け',
      description: 'MRP、生産管理、品質管理など製造業特有の要件に対応'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '小売・EC向け',
      description: 'オムニチャネル、在庫最適化、顧客管理を統合的に実現'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: '卸売・商社向け',
      description: '複雑な取引形態や与信管理、輸出入管理に対応'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'サービス業向け',
      description: 'プロジェクト管理、リソース管理、収益認識を最適化'
    }
  ];

  const processFlow = [
    { step: '01', title: 'ヒアリング', description: '現状の課題と要望を詳しくお伺いします' },
    { step: '02', title: '提案・見積', description: '最適なソリューションをご提案します' },
    { step: '03', title: '要件定義', description: '業務要件を詳細に定義します' },
    { step: '04', title: '開発・構築', description: 'システムの開発と環境構築を行います' },
    { step: '05', title: 'テスト・移行', description: 'テストとデータ移行を実施します' },
    { step: '06', title: '稼働・サポート', description: '本稼働後も継続的にサポートします' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Oracle NetSuite認定パートナー
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              サービス
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              NetSuiteの導入から運用まで、お客様のビジネス成長を
              <br className="hidden md:block" />
              ワンストップで支援する包括的なサービスを提供します
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '500+', label: 'プロジェクト実績' },
              { value: '98%', label: '顧客満足度' },
              { value: '3ヶ月', label: '最短導入期間' },
              { value: '24/365', label: 'サポート体制' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="text-3xl font-bold text-sky-600 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-sky-200 cursor-pointer"
                onClick={() => service.link && navigate(service.link)}
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <div className="flex items-center text-sky-600 font-semibold group-hover:text-sky-700">
                      詳細を見る
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specific Solutions */}
      <section className="py-16 px-4 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              業界特化ソリューション
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              各業界の特性を理解し、最適化されたNetSuiteソリューションを提供します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySpecificSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-sky-200"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 mb-4">
                  {solution.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{solution.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              導入プロセス
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              確実な導入を実現する6つのステップ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processFlow.map((process, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900">{process.title}</h3>
                    <p className="text-sm text-slate-600">{process.description}</p>
                  </div>
                </div>
                {index < processFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[3.5rem] w-full h-0.5 bg-gradient-to-r from-sky-200 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              選ばれる理由
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: '豊富な実績',
                description: '500社以上の導入実績から得た知見を活かし、最適なソリューションを提供'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: '専門チーム',
                description: 'NetSuite認定コンサルタントが多数在籍し、高品質なサービスを提供'
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: 'ワンストップ',
                description: '導入から運用まで一貫したサポートで、お客様の負担を最小限に'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Oracle NetSuiteで業務を変革しませんか？"
        description="20-25%の残業時間削減、40%の在庫回転率向上を実現"
        primaryButtonText="無料相談を申し込む"
        primaryButtonAction={() => navigate('/contact')}
        secondaryButtonText="資料請求"
        secondaryButtonAction={() => navigate('/contact')}
      />
      <Footer />
    </div>
  );
};

export default Services;