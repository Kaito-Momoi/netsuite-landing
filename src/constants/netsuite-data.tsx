import React from 'react';
import {
  Globe,
  Cloud,
  BarChart3,
  Package,
  Users,
  TrendingUp,
  CheckCircle,
  Calculator,
  Code,
  Trophy,
  Building2,
  Zap,
  Clock,
  Shield,
  Rocket,
  Target,
  Award,
  Workflow,
  GitBranch,
  Settings,
} from 'lucide-react';
import { Feature } from '../types';

/**
 * NetSuite Core Features - 主要モジュール
 */
export const CORE_FEATURES: Feature[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'CRM / SFA',
    description: '見込み客から商談、受注まで営業活動を一元管理し、ERPと完全連動する顧客管理システム',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '販売・債権管理',
    description: '受注から出荷、請求、入金まで販売プロセス全体を管理し、売上・在庫・原価を常に一致させる',
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: '購買・債務管理',
    description: '発注から入荷、支払までの購買プロセスを自動化し、内部統制を強化',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'プロジェクト管理',
    description: '工事・開発などのプロジェクトの工数・経費・仕入をリアルタイムで集計し、進捗と収支を可視化',
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: '在庫管理',
    description: '複数倉庫や多拠点の在庫を高精度で管理し、需要計画や生産計画と連動',
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: '生産管理',
    description: '多様な製造方式に対応し、生産計画から製造工程、原価管理まで一元管理',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'MRP（需要管理）',
    description: '需要予測に基づいて部材手配や生産計画を自動計算し、在庫過多・欠品を防止',
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: '財務会計',
    description: '業務取引から仕訳の大部分を自動生成し、早期決算と経理業務の省力化を実現',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: '複数会社管理',
    description: 'グローバル展開企業向けに多通貨・複数会社・連結決算を標準機能で対応',
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'ワークフロー',
    description: '承認ルートや業務フローをプログラミング不要で設定し、業務を自動化',
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: '従業員経費管理',
    description: 'モバイルでの経費申請から承認、精算まで一元管理し、プロジェクト原価や会計と自動連携',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'BI・分析',
    description: '営業・在庫・経理データをリアルタイムに可視化し、経営ダッシュボードで迅速な意思決定を支援',
  },
];

/**
 * EvangSol Strengths
 */
export const STRENGTHS: Feature[] = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: '製造業特化の豊富な実績',
    description: '電子機器、消費財、産業機器など製造業への導入実績多数。業界特有の複雑な生産管理・BOM・原価計算要件に対応',
    bulletPoints: ['製造業導入実績多数', '複雑な生産管理フロー', 'BOM・原価管理に精通'],
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: 'SAP・OBIC等からのリプレイス実績',
    description: 'SAP ECC、OBIC7など大規模レガシーERPからの移行を多数支援。データ移行からユーザートレーニングまで一貫サポート',
    bulletPoints: ['SAP・OBIC移行実績', 'データ移行の高い成功率', '段階的な移行計画'],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'OneWorld対応・海外拠点連携',
    description: 'NetSuite OneWorldで多国籍企業の統合基盤を構築。海外子会社とリアルタイム連携し、グローバル経営を支援',
    bulletPoints: ['グローバル展開企業向け', '多通貨・多言語対応', 'リアルタイム連結'],
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: '日本企業特有の要件に精通',
    description: '海外製パッケージを、日本の商習慣に完全適合。稟議・承認フロー、特殊な帳票、複雑な価格計算など日本特有の要件を実現',
    bulletPoints: ['日本の商習慣を熟知', '稟議・承認フロー構築', '特殊帳票・計算ロジック'],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: '東京×札幌 最適なハイブリッド体制',
    description: 'グローバル企業との実績豊富な東京本社のノウハウを、札幌拠点から道内企業様へ。日常的なサポートは道内で完結、高度な技術支援は東京からもバックアップ。地元の安心感と、大手の信頼性を両立。',
    bulletPoints: ['東京本社のノウハウ活用', '札幌拠点で道内完結', '地元×大手の両立'],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'グループ総合力',
    description: 'グループ会社EvangTechとの連携により、Webシステム開発からERP導入まで対応。システム全体をワンストップで支援',
    bulletPoints: ['Web開発〜ERP導入', 'ワンストップ対応', 'グループ総合力活用'],
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: '高い開発力',
    description: 'SuiteScriptエキスパートが多数在籍し、高度なカスタマイズを実現。複雑な業務ロジックも堅実にシステム化',
    bulletPoints: ['SuiteScript開発力', '複雑な業務フロー実装', '独自機能の開発'],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: '短納期',
    description: '独自開発のフレームワークとテンプレートを活用し、開発スピードを大幅短縮。スピーディな価値提供を実現',
    bulletPoints: ['独自フレームワーク', '豊富なテンプレート', '迅速な価値提供'],
  },
];

/**
 * Case Study Data
 */
export const CASE_STUDY = {
  company: '株式会社グリーンハウス',
  headline: 'レガシーERPからNetSuiteへ基幹システムを移行し、柔軟でスピーディな成長基盤を構築',
  summary:
    '幅広い製品ラインを展開する電子機器メーカー。SAP ECC 6.0のEOSを機にNetSuiteへ刷新し、基幹業務・顧客管理・ワークフローを一体化。ガバナンス強化と迅速な経営判断を支える成長基盤を整備。',
  location: '東京都',
  employees: '100～249名',
  partner: '導入パートナー: 株式会社EvangSol',
  link: 'https://www.netsuite.co.jp/customer-testimonials/greenhouse-manufacturing.shtml',
  quote: {
    text: '「返品管理プロセスをNetSuiteに統合することで、申請から承認までのリードタイムが従来の1/10以下に短縮され、業務の効率化が実現しました。さらに、営業部門の利益管理や予実管理も追加で統合することで、属人化された業務から脱却し、よりスムーズな作業環境を実現するなど、継続的な改善に取り組んでいきます」',
    author: '株式会社グリーンハウス\n取締役 兼マーケティング担当執行役員 様より',
  },
  highlights: [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '承認リードタイムを1/10以下に短縮',
      description: '返品管理の申請〜承認をNetSuiteに統合し、スピーディな意思決定を実現。',
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: '基幹業務とワークフローを一体化',
      description: '受発注から申請・承認のプロセスをクラウド上で集約し、属人化を解消。',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '経営の可視化と継続的改善',
      description: '営業部門の利益・予実管理をNetSuiteで統合し、継続的な改善と成長を支援。',
    },
  ],
};

/**
 * Agile Process Q&A
 */
export const AGILE_QA = [
  {
    question: 'アジャイル導入は「終わりが見えない」と聞きますが？',
    answer: 'EvangSolのアジャイル導入は、実現したい業務の姿と導入スケジュールを最初に明確化し、まず稼働させる業務範囲を定義することで、全体のゴールを可視化します。',
    icon: <Target className="w-8 h-8" />,
    details: ['実現したい業務の姿の共有', '導入スケジュールの策定', 'まず稼働させる業務範囲の明確な定義'],
  },
  {
    question: '各フェーズでは何を基準に進捗を管理しますか？',
    answer: '各短期開発サイクルで具体的なゴールと完了の定義を設定し、明確な成果物を提供します。',
    icon: <CheckCircle className="w-8 h-8" />,
    details: ['短期開発サイクル', '明確な完了基準', 'デモ可能な成果物'],
  },
  {
    question: '進捗が見えにくくなりませんか？',
    answer: '定期的なふりかえりで進捗と達成感を確認。常に「どこへ向かっていて、いまどこにいるのか」を可視化します。',
    icon: <Rocket className="w-8 h-8" />,
    details: ['進捗の可視化', '定期的なふりかえり', 'ベロシティ計測'],
  },
];
