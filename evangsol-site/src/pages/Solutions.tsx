import React from 'react'
import { motion } from 'framer-motion'
import { Server, RefreshCw } from 'lucide-react'

const Solutions: React.FC = () => {
  const solutionShowcase = [
    {
      icon: <Server />,
      title: 'サーバーレスデータ連携基盤（AWS × NetSuite）',
      description: '既存システムとNetSuiteを高信頼かつ柔軟に接続するための標準連携フレームワーク。',
      points: [
        '高価なETLツールを使わずコスト最適化を実現',
        'Amazon EventBridgeによる柔軟なスケジューリング',
        '項目定義のプロパティファイル化で変更管理を簡素化'
      ],
      color: '#6366f1'
    },
    {
      icon: <RefreshCw />,
      title: '入金消込ソリューション（自動消込）',
      description: 'ネットバンキングCSVの取り込みから差分調整・仕訳生成までを自動化し、債権管理を効率化。',
      points: [
        'Suitelet画面で入金データを取り込み、即時にマッピング',
        '手数料や差分を自動で調整するカスタムロジック',
        '請求書情報と連動した入金データの自動作成・適用'
      ],
      color: '#8b5cf6'
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
            NetSuite自社ソリューション
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
              <p>{solution.description}</p>
              <ul className="card-list">
                {solution.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions