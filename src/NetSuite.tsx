import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  Clock,
  Users,
  Globe,
  Package,
  Building2,
  Award,
  CheckCircle,
  Trophy,
  AlertCircle,
  TrendingUp,
  DollarSign,
  UserCheck,
  ChevronDown,
  BarChart,
  Server,
  Sparkles,
  Settings,
  Download,
  Phone,
  Mail,
  Calendar,
  PieChart,
  GitBranch,
  Search,
  Cpu,
  Activity,
  ArrowUpRight,
  BadgeCheck,
  ClipboardCheck,
  Puzzle,
  ShieldCheck,
  UserPlus,
  X,
  Star,
  Target,
  Zap,
  Shield,
  ChevronRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';

const NetSuite = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openFaqCategory, setOpenFaqCategory] = useState<string>('general');

  // 経営・事業における課題
  const businessIssues = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: '事業成長・変化への追随',
      description: 'スタートアップから大企業まで、事業の成長・縮小・変化への追随が困難',
      problems: ['システムの拡張性不足', '業務変更への柔軟性欠如', 'グローバル展開の制約'],
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: '業務効率化・データ品質向上',
      description: 'データの分断、手作業による非効率、データ品質の問題',
      problems: ['部門間の情報分断', 'エクセル管理の限界', 'データの重複・不整合'],
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: '財務状況の即時把握・決算早期化',
      description: 'リアルタイムな経営情報の不足、決算の遅延',
      problems: ['月次決算の遅れ', '経営数値の可視化不足', '予実管理の困難さ'],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'ガバナンス強化・海外展開',
      description: '内部統制の強化、グローバル展開への対応',
      problems: ['内部統制の不備', '多通貨・多言語対応', '海外子会社管理'],
    },
  ];

  // ERP導入における課題
  const erpImplementationIssues = [
    {
      phase: '業務確認・製品デモ',
      icon: <Search className="w-5 h-5" />,
      challenges: [
        '製品機能と業務要件のミスマッチ',
        'デモ環境での検証不足',
        '投資対効果の不明確さ',
      ],
    },
    {
      phase: '要件定義・Fit&Gap',
      icon: <ClipboardCheck className="w-5 h-5" />,
      challenges: [
        '現行業務の可視化不足',
        '標準機能とのギャップ把握',
        'カスタマイズ範囲の肥大化',
      ],
    },
    {
      phase: '環境構築・設定',
      icon: <Server className="w-5 h-5" />,
      challenges: [
        '複雑な初期設定',
        'マスタデータの整備',
        'システム連携の設計',
      ],
    },
    {
      phase: 'カスタマイズ・追加開発',
      icon: <Cpu className="w-5 h-5" />,
      challenges: [
        '開発コストの増大',
        '保守性の低下',
        'アップグレードへの影響',
      ],
    },
    {
      phase: '検証・トレーニング',
      icon: <UserPlus className="w-5 h-5" />,
      challenges: [
        'テストシナリオの不足',
        'ユーザー教育の不徹底',
        '運用ルールの未整備',
      ],
    },
    {
      phase: '業務・システム運用',
      icon: <Settings className="w-5 h-5" />,
      challenges: [
        '運用負荷の増大',
        'トラブル対応の遅延',
        '継続的な改善の停滞',
      ],
    },
  ];

  // NetSuiteの主要機能
  const netsuiteCapabilities = [
    {
      category: 'ERP/財務会計',
      icon: <DollarSign className="w-6 h-6" />,
      features: [
        '総勘定元帳',
        '売掛・買掛管理',
        '固定資産管理',
        '予算管理',
        '連結会計',
        'プロジェクト会計',
      ],
    },
    {
      category: 'CRM/営業支援',
      icon: <UserCheck className="w-6 h-6" />,
      features: [
        'リード管理',
        '商談管理',
        '見積・受注管理',
        'マーケティング自動化',
        'カスタマーサポート',
        'セールスフォース自動化',
      ],
    },
    {
      category: '在庫・SCM',
      icon: <Package className="w-6 h-6" />,
      features: [
        '在庫管理',
        '購買管理',
        '需要計画',
        '倉庫管理',
        'サプライチェーン管理',
        'ロット・シリアル管理',
      ],
    },
    {
      category: 'Eコマース',
      icon: <Globe className="w-6 h-6" />,
      features: [
        'B2B/B2Cサイト構築',
        'マルチチャネル管理',
        'オンライン決済',
        'SEO最適化',
        'プロモーション管理',
        'モバイル対応',
      ],
    },
    {
      category: 'HCM/人事管理',
      icon: <Users className="w-6 h-6" />,
      features: [
        '従業員情報管理',
        '勤怠管理',
        '給与計算',
        '採用管理',
        'パフォーマンス評価',
        'タレント管理',
      ],
    },
    {
      category: 'BI/レポーティング',
      icon: <BarChart className="w-6 h-6" />,
      features: [
        'リアルタイムダッシュボード',
        'カスタムレポート',
        'KPI管理',
        '予実分析',
        'データ可視化',
        'アドホック分析',
      ],
    },
  ];

  // EvangSolが選ばれる理由
  const whyEvangSol = [
    {
      number: '01',
      title: 'NetSuite導入・運用サポート実績',
      description: '500社以上の導入実績と豊富なノウハウ',
      details: [
        '業界別ベストプラクティスの蓄積',
        '複雑な要件への対応力',
        '迅速な問題解決能力',
      ],
      icon: <Award className="w-10 h-10" />,
    },
    {
      number: '02',
      title: '情シス支援専門企業としての支援力',
      description: '情報システム部門の業務を包括的にサポート',
      details: [
        'ITガバナンス構築支援',
        'セキュリティポリシー策定',
        'IT資産管理の最適化',
      ],
      icon: <ShieldCheck className="w-10 h-10" />,
    },
    {
      number: '03',
      title: '実業務を理解した要件整理・機能実現力',
      description: '現場目線での業務分析と最適化提案',
      details: [
        '業務フロー可視化',
        'プロセス改善提案',
        '段階的な移行計画',
      ],
      icon: <Puzzle className="w-10 h-10" />,
    },
    {
      number: '04',
      title: 'システム全体視点での提案と構築・開発力',
      description: 'NetSuiteを中心とした全体最適化',
      details: [
        'システム間連携設計',
        'API開発・実装',
        'マイクロサービス構築',
      ],
      icon: <GitBranch className="w-10 h-10" />,
    },
  ];

  // 導入パターン
  const implementationPatterns = [
    {
      name: 'Fit to Standard',
      description: '標準機能最大活用型',
      timeline: '3-4ヶ月',
      cost: '¥',
      features: [
        'NetSuite標準機能に業務を合わせる',
        '最小限のカスタマイズ',
        '短期間での導入',
        '低コストでの実現',
      ],
      recommended: '中小企業・スタートアップ',
    },
    {
      name: 'Fit & Gap',
      description: 'バランス重視型',
      timeline: '5-8ヶ月',
      cost: '¥¥',
      features: [
        '標準機能をベースに必要な部分をカスタマイズ',
        'コアプロセスは維持',
        '段階的な導入',
        'コストと機能のバランス',
      ],
      recommended: '中堅企業・成長企業',
      popular: true,
    },
    {
      name: 'Full Customization',
      description: '完全カスタマイズ型',
      timeline: '9-12ヶ月',
      cost: '¥¥¥',
      features: [
        '既存業務プロセスを完全再現',
        '高度なカスタマイズ',
        '独自機能の開発',
        '完全な要件実現',
      ],
      recommended: '大企業・特殊業界',
    },
  ];

  // お客様の声
  const customerVoices = [
    {
      company: '製造業A社',
      industry: '電子機器製造',
      size: '従業員 2,000名',
      challenge: '複数拠点の在庫管理と原価計算の統合',
      solution: 'NetSuiteで全拠点の在庫をリアルタイム管理',
      results: [
        '在庫回転率 40% 向上',
        '原価計算の精度 95% 達成',
        '月次決算 10日 → 3日に短縮',
      ],
      testimonial: 'NetSuite導入により、グローバルでの在庫最適化と正確な原価管理が実現しました。',
    },
    {
      company: '小売業B社',
      industry: 'アパレル小売',
      size: '従業員 500名',
      challenge: 'ECと店舗の在庫・売上の一元管理',
      solution: 'オムニチャネル統合プラットフォーム構築',
      results: [
        'EC売上 150% 成長',
        '在庫欠品率 80% 削減',
        '顧客満足度 30% 向上',
      ],
      testimonial: 'ECと実店舗のシームレスな連携により、顧客体験が大幅に向上しました。',
    },
    {
      company: 'サービス業C社',
      industry: 'ITサービス',
      size: '従業員 300名',
      challenge: 'プロジェクト収益性の可視化',
      solution: 'プロジェクト会計とリソース管理の導入',
      results: [
        'プロジェクト利益率 25% 改善',
        'リソース稼働率 85% 達成',
        '請求漏れ ゼロ化',
      ],
      testimonial: 'プロジェクトの収益性がリアルタイムで把握でき、経営判断のスピードが格段に上がりました。',
    },
  ];

  // FAQ
  const faqCategories = {
    general: {
      title: 'NetSuite全般',
      questions: [
        {
          q: 'NetSuiteとは何ですか？',
          a: 'NetSuiteは、Oracle社が提供する世界No.1のクラウドERPです。1998年に世界初のクラウドERPとして誕生し、現在41,000社以上の企業が利用しています。',
        },
        {
          q: 'どのような企業に適していますか？',
          a: 'スタートアップから大企業まで幅広く対応可能です。特に、成長企業、グローバル展開企業、業務効率化を目指す企業に最適です。',
        },
        {
          q: '費用はどのくらいかかりますか？',
          a: 'ユーザー数、使用モジュール、カスタマイズ範囲により異なりますが、月額20万円〜利用可能です。詳細は個別にご相談ください。',
        },
      ],
    },
    implementation: {
      title: '導入について',
      questions: [
        {
          q: '導入期間はどのくらいですか？',
          a: '標準的な導入で3-6ヶ月、カスタマイズが多い場合は6-12ヶ月程度です。段階的導入も可能です。',
        },
        {
          q: 'データ移行は大変ですか？',
          a: '専門チームがデータ移行ツールを使用して安全に移行します。過去データの整理から移行後の検証まで包括的にサポートします。',
        },
        {
          q: '既存システムとの連携は可能ですか？',
          a: 'はい、可能です。APIやファイル連携により、様々なシステムとの連携実績があります。',
        },
      ],
    },
    support: {
      title: 'サポート',
      questions: [
        {
          q: '導入後のサポート体制は？',
          a: '24時間365日の監視体制と、専任のカスタマーサクセスチームによる手厚いサポートを提供します。',
        },
        {
          q: 'トレーニングは受けられますか？',
          a: '管理者向け、エンドユーザー向けの各種トレーニングプログラムを用意しています。オンサイト、オンライン両方対応可能です。',
        },
        {
          q: 'カスタマイズの追加は可能ですか？',
          a: '導入後も継続的な機能追加・改善が可能です。月次の定例会で要望をヒアリングし、計画的に実装します。',
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - HiBlead style */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50 opacity-70"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Partner Badges - HiBlead style */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="inline-flex items-center px-5 py-2.5 bg-white rounded-full shadow-md border border-gray-100">
              <Award className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">Oracle NetSuite Alliance Partner</span>
            </div>
            <div className="inline-flex items-center px-5 py-2.5 bg-white rounded-full shadow-md border border-gray-100">
              <Trophy className="w-5 h-5 text-amber-500 mr-2" />
              <span className="text-sm font-semibold text-gray-700">2024 Partner Award 受賞</span>
            </div>
            <div className="inline-flex items-center px-5 py-2.5 bg-white rounded-full shadow-md border border-gray-100">
              <Star className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">導入実績500社以上</span>
            </div>
          </div>

          {/* Main Title - HiBlead typography */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-green-600">「NetSuite」</span>
              <span className="text-gray-900">で</span>
              <br />
              <span className="text-gray-900">企業DXと</span>
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                ガバナンス強化
              </span>
              <span className="text-gray-900">を実現</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-medium">
              情シス支援エキスパートがクラウドERP導入から
              <br className="hidden sm:block" />
              情シス業務運用まで包括支援！
            </p>

            {/* CTA Buttons - HiBlead style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center px-10 py-4 bg-green-600 text-white rounded-full text-lg font-bold shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                資料ダウンロード
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center px-10 py-4 bg-gray-800 text-white rounded-full text-lg font-bold shadow-lg hover:bg-gray-900 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                お問い合わせ
              </button>
            </div>
          </div>

          {/* Stats Grid - HiBlead style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            {[
              { value: '41,000+', label: '導入企業数', sublabel: '全世界' },
              { value: '27', label: '対応言語', sublabel: 'グローバル対応' },
              { value: '190+', label: '対応通貨', sublabel: '多通貨対応' },
              { value: '99.98%', label: '稼働率', sublabel: '高可用性' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISSUES 01: 経営・事業における課題 - HiBlead style */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider">ISSUES 01</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              経営・事業における課題
            </h2>
            <p className="text-xl text-gray-600">
              こんな経営課題を抱えていませんか？
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600">
                  {issue.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{issue.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{issue.description}</p>
                <ul className="space-y-2">
                  {issue.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-500">
                      <X className="w-3 h-3 mr-2 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISSUES 02: ERP導入における課題 - HiBlead style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full shadow-sm mb-6">
              <AlertCircle className="w-4 h-4 mr-2 text-orange-500" />
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">ISSUES 02</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ERP導入における課題
            </h2>
            <p className="text-xl text-gray-600">
              各フェーズで発生する導入課題を解決します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {erpImplementationIssues.map((issue, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mr-4 text-green-600">
                    {issue.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{issue.phase}</h3>
                </div>
                <ul className="space-y-3">
                  {issue.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <AlertCircle className="w-4 h-4 mr-2 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NetSuite Solution - HiBlead style */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-green-600" />
              <span className="text-sm font-bold text-green-600 uppercase tracking-wider">SOLUTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              NetSuiteが全ての課題を解決
            </h2>
            <p className="text-xl text-gray-600">
              世界初のクラウドERP（1998年〜）として蓄積されたノウハウ
            </p>
          </div>

          {/* NetSuite機能マップ - HiBlead grid style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {netsuiteCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mr-4 text-green-600">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{capability.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="w-3.5 h-3.5 mr-2 text-green-500 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EvangSol - HiBlead style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              EvangSolが選ばれる理由
            </h2>
            <p className="text-xl text-gray-600">
              NetSuite導入成功の鍵は、パートナー選びにあります
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyEvangSol.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-green-600">
                    {reason.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-5xl font-black text-gray-100 mb-3">{reason.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{reason.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{reason.description}</p>
                    <ul className="space-y-2">
                      {reason.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Patterns - HiBlead style */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              導入パターンと費用
            </h2>
            <p className="text-xl text-gray-600">
              貴社の状況に合わせた最適な導入方法をご提案
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {implementationPatterns.map((pattern, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 ${pattern.popular ? 'ring-2 ring-green-500' : 'border border-gray-100'}`}>
                {pattern.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                      人気プラン
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pattern.name}</h3>
                  <p className="text-gray-600 mb-6">{pattern.description}</p>
                  
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-gray-400 mb-2 mx-auto" />
                      <div className="text-sm font-bold text-gray-700">{pattern.timeline}</div>
                      <div className="text-xs text-gray-500">導入期間</div>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl font-bold text-green-600">{pattern.cost}</span>
                      <div className="text-xs text-gray-500">価格帯</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pattern.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-gray-100">
                    <span className="text-xs font-medium text-gray-500">推奨企業</span>
                    <p className="text-sm font-bold text-gray-900 mt-1">{pattern.recommended}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-gray-700 mb-6">
              月額<span className="text-4xl font-bold text-green-600 mx-2">20万円</span>から利用可能
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full text-lg font-bold shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              詳細な費用を確認する
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Customer Voices - HiBlead style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              お客様の声
            </h2>
            <p className="text-xl text-gray-600">
              NetSuite導入で成果を実現した企業様の事例
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerVoices.map((voice, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold">{voice.company}</h3>
                      <p className="text-green-100 text-sm mt-1">{voice.industry}</p>
                    </div>
                    <Building2 className="w-8 h-8 text-green-200" />
                  </div>
                  <p className="text-sm text-green-100 mt-2">{voice.size}</p>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full mb-3">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      課題
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">{voice.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full mb-3">
                      <Target className="w-3 h-3 mr-1" />
                      ソリューション
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">{voice.solution}</p>
                  </div>

                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3">
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                      成果
                    </span>
                    <ul className="space-y-2">
                      {voice.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span className="font-semibold">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      "{voice.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - HiBlead style */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              よくあるご質問
            </h2>
          </div>

          {/* FAQ Category Tabs - HiBlead style */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(faqCategories).map((category) => (
              <button
                key={category}
                onClick={() => setOpenFaqCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                  openFaqCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                }`}
              >
                {faqCategories[category as keyof typeof faqCategories].title}
              </button>
            ))}
          </div>

          {/* FAQ Items - HiBlead style */}
          <div className="space-y-4">
            {openFaqCategory && faqCategories[openFaqCategory as keyof typeof faqCategories].questions.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openFaqIndex === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaqIndex === index && (
                  <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - HiBlead style */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            NetSuiteで次世代の経営基盤を構築
          </h2>
          <p className="text-xl text-green-100 mb-10">
            まずは無料相談から。貴社に最適なプランをご提案します
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-600 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              資料ダウンロード
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white rounded-full text-lg font-bold shadow-xl hover:bg-gray-800 hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calendar className="w-5 h-5 mr-2" />
              無料相談を予約
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span className="font-medium">相談無料</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span className="font-medium">オンライン対応可</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span className="font-medium">最短1営業日で回答</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar - HiBlead style */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <a href="tel:03-1234-5678" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">03-1234-5678</span>
            </a>
            <a href="mailto:info@evangsol.com" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-medium">info@evangsol.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-400" />
              <span className="font-medium">平日 9:00-18:00</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NetSuite;