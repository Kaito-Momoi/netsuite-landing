import React from 'react'
import { motion } from 'framer-motion'
import { Server, RefreshCw, Workflow, Globe, Package, BarChart3, Database, FileText } from 'lucide-react'

const Solutions: React.FC = () => {
  const solutionShowcase = [
    {
      icon: <Server />,
      title: 'サーバーレスデータ連携基盤（AWS × NetSuite）',
      subtitle: '最新クラウド技術で実現する高信頼連携',
      description: '既存システムとNetSuiteを高信頼かつ柔軟に接続するための標準連携フレームワーク。AWSのサーバーレス技術を活用し、運用コストを最小化。',
      points: [
        '高価なETLツールを使わずコスト最適化を実現',
        'Amazon EventBridgeによる柔軟なスケジューリング',
        '項目定義のプロパティファイル化で変更管理を簡素化'
      ],
      benefits: 'インフラコストの大幅削減 / 高い可用性の実現 / 開発期間の短縮',
      color: '#f59e0b'
    },
    {
      icon: <RefreshCw />,
      title: '入金消込ソリューション',
      subtitle: 'AIが変える、経理業務の未来',
      description: '機械学習により複雑な入金パターンも高精度で自動消込。銀行APIと直接連携し、入金発生と同時に自動処理を開始。',
      points: [
        '高精度な自動マッチングを実現',
        '月間作業時間を大幅に削減',
        'リアルタイムダッシュボードで消込状況を可視化'
      ],
      benefits: '処理時間の劇的な削減 / 高い処理精度 / 運用コストの最適化',
      color: '#8b5cf6'
    },
    {
      icon: <Globe />,
      title: 'ECデータ連携基盤',
      subtitle: '全ECチャネルを一つに統合',
      description: '複数のECプラットフォームを一つのダッシュボードで完全統合管理。AIが売れ筋商品を分析し、在庫配分を自動最適化。',
      points: [
        'Amazon、楽天、Yahoo!、Shopify等の主要ECモール対応',
        'AIによる売れ筋予測と在庫自動配分',
        'リアルタイム在庫同期で売り越しゼロを実現'
      ],
      benefits: '売上の飛躍的成長 / 業務効率の大幅向上 / 利益率の改善',
      color: '#06b6d4'
    },
    {
      icon: <Package />,
      title: '業界特化OMS',
      subtitle: 'あなたの業界に、完璧な受注管理を',
      description: '製造・卸売・小売・商社など、各業界の商習慣を完全にシステム化。電話・FAX・メール・EDI・ECサイトの受注を一つのプラットフォームに統合。',
      points: [
        '業界別最適化テンプレートで即座に導入可能',
        'マルチチャネル受注の自動データ変換',
        'AIパターン認識による受注処理の自動化'
      ],
      benefits: '処理時間の大幅短縮 / 極めて高い処理精度 / 処理能力の飛躍的向上',
      color: '#10b981'
    },
    {
      icon: <BarChart3 />,
      title: '資材計画の見える化',
      subtitle: 'AI予測で実現する最適調達',
      description: '調達から生産、在庫まで資材の流れをダッシュボードで一元管理。リードタイムと需要予測を考慮した最適発注量をAIが自動算出。',
      points: [
        'リアルタイムで資材フローを完全可視化',
        'AI予測による最適発注量の自動算出',
        '予防的リスク検知と多段階アラート機能'
      ],
      benefits: '調達コストの削減 / 在庫の最適化 / 欠品リスクの最小化',
      color: '#f59e0b'
    },
    {
      icon: <Database />,
      title: 'ハンディ連携／WMS連携',
      subtitle: 'デジタル化で実現する物流最適化',
      description: 'ハンディターミナルでのスキャンにより高精度で正確な入出荷処理を実現。倉庫管理システムとNetSuiteをリアルタイムで同期。',
      points: [
        'バーコード・QRコードによる高精度保証',
        'NetSuiteとWMSの即座のデータ同期',
        'ピッキングルート最適化による作業効率向上'
      ],
      benefits: '在庫精度の向上 / 作業時間の短縮 / 誤出荷の削減',
      color: '#6366f1'
    },
    {
      icon: <FileText />,
      title: '在庫年齢表',
      subtitle: 'エージング分析で実現する在庫最適化',
      description: '在庫の滞留期間を自動計算し、経過日数別に分類・可視化。長期滞留在庫を自動検出し、廃棄リスクを事前にアラート。',
      points: [
        '滞留期間の自動計算と多段階分類',
        'デッドストックの予防的リスク検知',
        '在庫回転率分析と最適在庫水準の提案'
      ],
      benefits: '廃棄ロスの削減 / 在庫の最適化 / 回転率の向上',
      color: '#ec4899'
    }
  ]

  return (
    <section className="solutions" style={{ paddingTop: '120px' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            <span className="section-label">Solutions</span>
            自社ソリューション
          </h2>
          <p className="section-desc">
            豊富な導入経験をもとに、NetSuiteと外部システムの連携を支えるテンプレートやアドオンを取り揃えています。
          </p>
        </motion.div>

        <div className="solutions-grid">
          {solutionShowcase.map((solution, i) => (
            <motion.div
              key={solution.title}
              className="solution-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12)' }}
            >
              <div className="solution-icon" style={{ background: `linear-gradient(135deg, ${solution.color}22, ${solution.color}44)` }}>
                {React.cloneElement(solution.icon, { style: { color: solution.color } })}
              </div>
              <h3>{solution.title}</h3>
              {solution.subtitle && <div className="solution-subtitle">{solution.subtitle}</div>}
              <p>{solution.description}</p>
              <ul className="card-list">
                {solution.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {solution.benefits && (
                <div className="solution-benefits">
                  <strong>導入効果:</strong> {solution.benefits}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
