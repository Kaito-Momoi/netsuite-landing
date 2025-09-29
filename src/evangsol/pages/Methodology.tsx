import React from 'react'
import { motion } from 'framer-motion'
import { RefreshCcw, Layers, Target, ClipboardCheck, Users } from 'lucide-react'

const Methodology: React.FC = () => {
  const comparisonItems = [
    {
      title: 'パッケージ導入（SuiteSuccess）',
      detail: '初期構築を短期・低コストで進行し、個別要件は導入後に順次調整。標準機能中心の運用を前提にしたプラン。'
    },
    {
      title: 'アジャイル導入',
      detail: '優先順位に沿って短いサイクルを繰り返し、ソリューションを段階的に提供。変更要求や現場フィードバックに迅速に対応。'
    },
    {
      title: 'ウォーターフォール導入',
      detail: '要件凍結後に段階的な工程を進めるため全体像を描きやすい一方、中途変更への柔軟性は限定的で長期化しやすい。'
    }
  ]

  const deliverables = [
    '各サイクルでTo-Be構成図やプロセスフローなどの中間成果物を提示',
    '実機ベースのハンズオン検証と現場ヒアリングの反映をセットで実施',
    '最終成果物は運用イメージを前提に、移行・教育計画と合わせてリリース'
  ]

  const suitableProjects = [
    '要件が進行中に磨き込まれる基幹刷新・段階的なモダナイゼーション',
    '部門毎に優先度が異なるグローバル展開・国内外拠点の同期化',
    '短期間で価値仮説を検証しながら、財務・販売・在庫領域を統合したい案件'
  ]

  const comparisonTable = [
    {
      aspect: '導入期間',
      package: '短期（標準機能中心）',
      agile: '中期（優先度順に段階的リリース）',
      waterfall: '長期（全体要件を確定後に一括リリース）'
    },
    {
      aspect: '柔軟性',
      package: '導入後に追加開発で対応',
      agile: 'サイクルごとに変更・改善を取り込みやすい',
      waterfall: '要件変更に弱く、再計画の負荷が大きい'
    },
    {
      aspect: '主な価値',
      package: '短期で標準運用を開始',
      agile: '早期に価値を検証しながら最適化を継続',
      waterfall: '理想像に合わせた統合を実現'
    },
    {
      aspect: 'リスクコントロール',
      package: '初期コストを抑えつつ段階的に拡張',
      agile: '各サイクルでレビューしリスクを分散',
      waterfall: '終盤での手戻りリスクが高い'
    }
  ]

  return (
    <section className="methodology" style={{ paddingTop: '120px' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            <span className="section-label">Implementation</span>
            導入方法論
          </h2>
          <p className="section-desc">
            EvangSolはアジャイル導入を核に、業務単位で優先度を再評価しながら短いサイクルで開発・レビュー・改善を繰り返します。変更への強さとコスト最適化、現場からのフィードバック循環を重視し、価値を早期に立ち上げます。
          </p>
        </motion.div>

        <div className="methodology-grid">
          <div className="methodology-table-wrapper">
            <table className="methodology-table">
              <thead>
                <tr>
                  <th scope="col">観点</th>
                  <th scope="col">パッケージ導入</th>
                  <th scope="col" className="agile">アジャイル導入</th>
                  <th scope="col">ウォーターフォール導入</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row) => (
                  <tr key={row.aspect}>
                    <th scope="row">{row.aspect}</th>
                    <td>{row.package}</td>
                    <td className="agile">{row.agile}</td>
                    <td>{row.waterfall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            className="methodology-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="card-icon gradient-indigo">
              <RefreshCcw />
            </div>
            <h3>アジャイル導入の流れ</h3>
            <p>
              施策ごとに優先度を設定し、要件定義→設定→レビュー→改善のループを構築。短期間で成果物を可視化し、投資対効果を検証しながら範囲を拡張します。
            </p>
            <ul>
              <li>1. ビジョン整理とロードマップ策定</li>
              <li>2. サイクル単位の要件・設定・テスト</li>
              <li>3. 定例レビューでのフィードバック反映</li>
              <li>4. リリース後の運用チューニングと定着支援</li>
            </ul>
          </motion.div>

          <motion.div
            className="methodology-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-icon gradient-purple">
              <Layers />
            </div>
            <h3>他手法との比較（要点）</h3>
            <ul>
              {comparisonItems.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="methodology-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-icon gradient-amber">
              <ClipboardCheck />
            </div>
            <h3>成果物の考え方</h3>
            <ul>
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="methodology-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="card-icon gradient-teal">
              <Target />
            </div>
            <h3>適する案件タイプ</h3>
            <ul>
              {suitableProjects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="quote">
              <Users />
              <p>
                導入期間や成果物の定義、進行管理の工夫点はプロジェクトごとに明確化し、現場メンバーと経営層の双方が意思決定できる状態を整えます。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Methodology
