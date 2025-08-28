import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Package,
  ShoppingCart,
  Factory,
  TrendingUp,
  Users,
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Award,
  BarChart3,
  Zap,
  Globe
} from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import { StatItem } from './types';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  industryIcon: React.ReactNode;
  challenge: string;
  solution: string[];
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  technologies: string[];
}

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();

  const caseStudies: CaseStudy[] = [
    {
      id: 'manufacturing-a',
      company: '大手製造業 A社',
      industry: '製造業',
      industryIcon: <Factory className="w-6 h-6" />,
      challenge: '複数拠点の在庫管理と生産計画の非効率性により、在庫過多と欠品が同時発生',
      solution: [
        'NetSuiteのグローバル在庫管理機能を導入',
        'リアルタイム生産計画システムの構築',
        'AIベースの需要予測エンジン実装',
        '拠点間在庫自動振替システムの開発'
      ],
      results: [
        { metric: '在庫回転率', value: '45%', improvement: '向上' },
        { metric: '欠品率', value: '75%', improvement: '削減' },
        { metric: '在庫保管コスト', value: '30%', improvement: '削減' },
        { metric: '納期遵守率', value: '99.5%', improvement: '達成' }
      ],
      testimonial: {
        text: 'NetSuite導入により、グローバルな在庫可視化が実現し、適正在庫の維持が可能になりました。',
        author: '山田太郎',
        position: 'SCM部門長'
      },
      technologies: ['NetSuite ERP', 'AI需要予測', 'IoT連携', 'カスタムダッシュボード']
    },
    {
      id: 'retail-b',
      company: 'アパレル小売 B社',
      industry: '小売・EC',
      industryIcon: <ShoppingCart className="w-6 h-6" />,
      challenge: 'オムニチャネル展開における在庫管理の複雑化と顧客データの分断',
      solution: [
        'NetSuiteとECプラットフォームの完全統合',
        '統合顧客データベースの構築',
        'オムニチャネル在庫管理システムの導入',
        'AIレコメンドエンジンの実装'
      ],
      results: [
        { metric: 'EC売上', value: '60%', improvement: '増加' },
        { metric: '顧客単価', value: '35%', improvement: '向上' },
        { metric: '在庫効率', value: '50%', improvement: '改善' },
        { metric: '顧客満足度', value: '92%', improvement: '到達' }
      ],
      testimonial: {
        text: '店舗とECの在庫が完全に統合され、どこからでも全在庫にアクセスできるようになりました。',
        author: '佐藤花子',
        position: 'オムニチャネル推進責任者'
      },
      technologies: ['NetSuite SuiteCommerce', 'POS連携', 'MA連携', 'BI分析']
    },
    {
      id: 'wholesale-c',
      company: '商社 C社',
      industry: '卸売・商社',
      industryIcon: <Building2 className="w-6 h-6" />,
      challenge: '複雑な輸出入管理と多通貨取引における為替リスク管理の課題',
      solution: [
        'NetSuite OneWorldによるグローバル管理',
        '多通貨自動換算システムの構築',
        '輸出入書類自動生成システム',
        'コンプライアンス管理機能の強化'
      ],
      results: [
        { metric: '業務処理時間', value: '70%', improvement: '削減' },
        { metric: '為替損失', value: '40%', improvement: '削減' },
        { metric: '書類作成時間', value: '80%', improvement: '短縮' },
        { metric: 'コンプライアンス違反', value: 'ゼロ', improvement: '達成' }
      ],
      technologies: ['NetSuite OneWorld', '為替自動ヘッジ', '貿易管理', 'EDI連携']
    },
    {
      id: 'food-d',
      company: '食品製造 D社',
      industry: '食品業界',
      industryIcon: <Package className="w-6 h-6" />,
      challenge: '賞味期限管理の複雑化とトレーサビリティの確保が困難',
      solution: [
        'ロット管理・賞味期限管理システムの導入',
        'QRコードによるトレーサビリティ実現',
        'HACCP対応の品質管理機能実装',
        '自動アラート機能の開発'
      ],
      results: [
        { metric: '廃棄ロス', value: '65%', improvement: '削減' },
        { metric: 'リコール対応時間', value: '90%', improvement: '短縮' },
        { metric: '品質管理精度', value: '99.9%', improvement: '達成' },
        { metric: '監査対応工数', value: '50%', improvement: '削減' }
      ],
      testimonial: {
        text: '完全なトレーサビリティの実現により、品質問題への対応速度が劇的に向上しました。',
        author: '鈴木一郎',
        position: '品質保証部長'
      },
      technologies: ['NetSuite WMS', 'IoTセンサー', 'ブロックチェーン', 'HACCP対応']
    },
    {
      id: 'service-e',
      company: 'ITサービス E社',
      industry: 'サービス業',
      industryIcon: <Users className="w-6 h-6" />,
      challenge: 'プロジェクト収益性の可視化不足と請求漏れの多発',
      solution: [
        'プロジェクト管理機能の全面導入',
        '工数自動集計システムの構築',
        '請求自動化ワークフローの実装',
        'リアルタイム収益性分析ダッシュボード'
      ],
      results: [
        { metric: 'プロジェクト利益率', value: '25%', improvement: '向上' },
        { metric: '請求漏れ', value: '95%', improvement: '削減' },
        { metric: '月次決算時間', value: '60%', improvement: '短縮' },
        { metric: 'キャッシュフロー', value: '40%', improvement: '改善' }
      ],
      technologies: ['NetSuite PSA', 'タイムトラッキング', '自動請求', 'プロジェクト分析']
    },
    {
      id: 'pharma-f',
      company: '製薬会社 F社',
      industry: '医薬品',
      industryIcon: <Globe className="w-6 h-6" />,
      challenge: 'GMP/GDP準拠の複雑な規制対応と品質管理体制の構築',
      solution: [
        'GMP対応の品質管理システム導入',
        'GDP準拠の物流管理機能実装',
        '電子署名・監査証跡システム',
        'バリデーション管理機能の構築'
      ],
      results: [
        { metric: '規制違反リスク', value: '100%', improvement: '解消' },
        { metric: '監査準備時間', value: '75%', improvement: '削減' },
        { metric: '品質逸脱', value: '80%', improvement: '削減' },
        { metric: '文書管理効率', value: '3倍', improvement: '向上' }
      ],
      testimonial: {
        text: 'NetSuiteによる統合管理で、厳格な規制要件を確実にクリアできるようになりました。',
        author: '高橋美咲',
        position: 'QA責任者'
      },
      technologies: ['NetSuite Life Sciences', 'GMP/GDP対応', '電子署名', 'CSV対応']
    }
  ];

  const overallStats: StatItem[] = [
    { value: '500+', label: '導入企業数', description: '様々な業界での実績' },
    { value: '98%', label: '顧客満足度', description: '高い評価を維持' },
    { value: '40%', label: '平均効率改善', description: '業務効率の大幅向上' },
    { value: '3ヶ月', label: '平均導入期間', description: 'スピーディな立ち上げ' }
  ];

  const industries = [
    { name: '製造業', count: '150+', icon: <Factory className="w-5 h-5" /> },
    { name: '小売・EC', count: '120+', icon: <ShoppingCart className="w-5 h-5" /> },
    { name: '卸売・商社', count: '80+', icon: <Building2 className="w-5 h-5" /> },
    { name: '食品', count: '60+', icon: <Package className="w-5 h-5" /> },
    { name: 'サービス', count: '50+', icon: <Users className="w-5 h-5" /> },
    { name: '医薬品', count: '40+', icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <NavigationBar showBackButton={true} variant="page" />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-200/40 to-blue-300/40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-200/30 to-blue-300/30 rounded-full filter blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <HeroSection 
            badge={{
              icon: <Award className="w-4 h-4 mr-2" />,
              text: "500社以上の導入実績",
              bgColor: "bg-gradient-to-r from-amber-100 to-yellow-100",
              borderColor: "border border-amber-200",
              textColor: "text-amber-700 font-bold"
            }}
            title={
              <>
                <span className="text-slate-900 text-4xl md:text-5xl leading-tight">
                  NetSuite導入による
                </span>
                <br />
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent text-4xl md:text-5xl font-black">
                  ビジネス変革の実例
                </span>
              </>
            }
            description={
              <>
                <span className="text-lg text-slate-700">
                  業界をリードする企業様の成功事例をご紹介
                </span>
                <br />
                <span className="text-lg font-bold text-slate-900">
                  平均<span className="font-black text-sky-600 text-xl">40%</span>の業務効率改善を実現
                </span>
              </>
            }
            actions={
              <>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="group px-8 py-4 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 hover:from-sky-600 hover:via-blue-600 hover:to-sky-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-sky-500/40 flex items-center justify-center"
                  >
                    導入相談を申し込む
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </button>
                  <button 
                    onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group px-8 py-4 bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-sky-500 text-sky-700 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center">
                      事例を詳しく見る
                    </span>
                  </button>
                </div>
              </>
            }
          />
        </div>
      </div>

      {/* Overall Stats */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 relative overflow-hidden">
        <StatsSection 
          title="導入実績"
          stats={overallStats}
          variant="gradient"
        />
      </section>

      {/* Industry Distribution */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              業界別導入実績
            </h2>
            <p className="text-xl text-slate-600">あらゆる業界でNetSuiteが選ばれています</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center border border-slate-200 hover:border-sky-400">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="text-sky-600">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{industry.name}</h3>
                <p className="text-2xl font-bold text-sky-600">{industry.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 px-4 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              導入事例詳細
            </h2>
            <p className="text-xl text-slate-600">実際の課題解決と成果をご紹介</p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:border-sky-400 transition-all">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                        {caseStudy.industryIcon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{caseStudy.company}</h3>
                        <p className="text-sm text-slate-600">{caseStudy.industry}</p>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-sky-600">
                      #{index + 1}
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-red-500" />
                      課題
                    </h4>
                    <p className="text-slate-700 bg-red-50 rounded-lg p-4 border border-red-200">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-sky-500" />
                      ソリューション
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2 text-green-500" />
                      導入効果
                    </h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                          <div className="text-sm text-slate-600 mb-1">{result.metric}</div>
                          <div className="text-2xl font-bold text-green-600">{result.value}</div>
                          <div className="text-sm font-semibold text-green-700">{result.improvement}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">導入技術</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {caseStudy.testimonial && (
                    <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl text-sky-500">"</div>
                        <div className="flex-1">
                          <p className="text-slate-700 italic mb-3">{caseStudy.testimonial.text}</p>
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                              {caseStudy.testimonial.author[0]}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{caseStudy.testimonial.author}</p>
                              <p className="text-sm text-slate-600">{caseStudy.testimonial.position}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              成功の要因
            </h2>
            <p className="text-xl text-slate-600">NetSuite導入を成功に導く3つのポイント</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: '経験豊富な導入チーム',
                description: '500社以上の導入実績から得た知見を活かし、お客様に最適なソリューションを提供'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: '段階的な導入アプローチ',
                description: 'スモールスタートから始め、確実に成果を出しながら拡張していく戦略的アプローチ'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: '継続的なサポート体制',
                description: '導入後も24/365のサポート体制で、システムの安定稼働と継続的な改善を支援'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <CTASection
          title={<>お客様の成功事例を<br />詳しくお聞きになりませんか？</>}
          description="業界別の詳細な導入事例や費用対効果について、個別にご説明いたします"
          primaryButtonText="無料相談を申し込む"
          primaryButtonAction={() => navigate('/contact')}
          secondaryButtonText="資料をダウンロード"
          secondaryButtonAction={() => navigate('/contact')}
          gradient="from-sky-500 to-blue-600"
        />
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;