import React from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  Workflow,
  CircuitBoard,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Network
} from 'lucide-react'

const metrics = [
  {
    value: '42,000+',
    label: 'NetSuite利用企業',
    note: '世界中の成長企業が採用するクラウドERP基盤'
  },
  {
    value: '20年+',
    label: 'Oracle ERP導入経験',
    note: '業種横断で要件定義・設計・移行を伴走'
  },
  {
    value: 'ISO/IEC 27001',
    label: '情報セキュリティ認証',
    note: '国際基準で運用ガバナンスを徹底'
  }
]

const capabilityPillars = [
  {
    icon: <Workflow />,
    title: 'アジャイル導入フレーム',
    description: '短いイテレーションで優先度の高い業務領域から価値を創出し、現場との共創で改善を積み重ねます。'
  },
  {
    icon: <CircuitBoard />,
    title: '拡張と連携アーキテクチャ',
    description: 'NetSuiteとWMS・EC・基幹システムをAPI連携やサーバーレス基盤で結び、変化に強いデータモデルを構築します。'
  },
  {
    icon: <ShieldCheck />,
    title: '運用ガバナンスと品質管理',
    description: '要件・テスト・移行の各工程で品質指標を可視化し、リリース後も継続的なチューニングと保守を提供します。'
  }
]

const methodologyPrinciples = [
  'ビジネスゴールから逆算したバックログ構成と優先順位付け',
  'イテレーションごとにTo-Beシナリオ・設定差分・検証結果を開示',
  '業務部門と共通の受入基準を定義し、運用定着をゴールに据える'
]

const technologyEnablers = [
  'NetSuiteとWMS/EC、会計・サブスクリプション基盤の双方向連携',
  'SuiteSuccessテンプレートを基にした拡張可能な設定管理',
  'リアルタイムダッシュボードと自動アラートでKPIを可視化',
  '営業・在庫・サプライの一元化で現場の即時判断を支援'
]

const industryHighlights = [
  '情報サービス',
  '広告業',
  '保険業',
  '情報通信',
  '運送物流',
  '家電メーカー',
  '図書出版',
  '食品輸入販売',
  '化粧品メーカー',
  '決済代行プラットフォーム',
  'イベントサービス',
  'オーディオ機器輸入販売',
  '電子機器メーカー',
  '玩具メーカー',
  'FA総合メーカー',
  'アパレルメーカー',
  '菓子卸売総合商社',
  '高級ブランド品リセール',
  'コーヒー生豆輸入・販売',
  'コンサルティング業',
  '服飾繊維資材商社',
  '産業用コンピュータ開発・販売'
]

const Introduction: React.FC = () => {
  return (
    <section className="intro" style={{ paddingTop: '120px' }}>
      <div className="container">
        <motion.div
          className="section-header intro-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            <span className="section-label">Corporate Overview</span>
            株式会社EvangSol イントロダクション
          </h2>
          <p className="section-desc">
            NetSuiteソリューションプロバイダーとして、ERP/財務会計、CRM、Eコマースを単一のクラウド基盤で統合し、日本の法規制にもタイムリーに対応します。スタートアップや中堅企業のスピードある展開から、大規模グローバルプロジェクトまで幅広くご支援します。
          </p>
          <p className="section-desc emphasis">
            大手企業の全社最適にも応える<strong>拡張性・ガバナンス・運用性</strong>と、中堅・中小企業の俊敏な成長を促す柔軟さの両立を目指します。導入期間だけでなく、運用定着と継続的な改善までを伴走し、スケールに応じた成功モデルをご提案します。
          </p>
        </motion.div>

        <div className="intro-metrics">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="metric-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
              <p>{metric.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="intro-pillars">
          {capabilityPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="pillar-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="pillar-icon">
                {React.cloneElement(pillar.icon, { size: 28 })}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="intro-panels">
          <motion.div
            className="intro-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="panel-header">
              <span className="panel-icon">
                <Building2 size={24} />
              </span>
              <div>
                <h3>導入方法論（アジャイル中心）</h3>
                <p>価値の高い機能から優先的に着手し、変更要求を取り込みながら段階的に定着させます。</p>
              </div>
            </div>
            <ul>
              {methodologyPrinciples.map((item) => (
                <li key={item}>
                  <Sparkles size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="intro-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="panel-header">
              <span className="panel-icon">
                <Network size={24} />
              </span>
              <div>
                <h3>開発・運用技術</h3>
                <p>スケーラブルな拡張と運用自動化を前提に、NetSuiteの価値を最大化します。</p>
              </div>
            </div>
            <ul>
              {technologyEnablers.map((item) => (
                <li key={item}>
                  <BarChart3 size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="industry-list"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>対応業種・領域</h3>
          <ul>
            {industryHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction
