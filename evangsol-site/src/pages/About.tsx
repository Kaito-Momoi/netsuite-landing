import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  const companyInfo = [
    { label: '社名', value: '株式会社EvangSol（エバンソル）' },
    { label: '設立', value: '2019年7月' },
    { label: '資本金', value: '4,000万円' },
    { label: '事業内容', value: 'ERP導入支援・アドオン開発・保守サポート' },
    { label: '代表取締役', value: '小山 敏幸（元株式会社野村総合研究所 常務執行役員）' },
    { label: '取締役社長', value: '王 大隆（Oracle日本、中国のERP技術職を経て現職）' },
    { label: '所在地', value: '〒103-0023 東京都中央区日本橋本町4-15-11 市橋ビル6階' }
  ]

  return (
    <section className="solutions company-overview" style={{ paddingTop: '120px' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            <span className="section-label">About</span>
            会社概要
          </h2>
        </motion.div>

        <div className="company-info-grid">
          <motion.div
            className="info-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3>基本情報</h3>
            <dl className="info-table">
              {companyInfo.map((item) => (
                <React.Fragment key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </React.Fragment>
              ))}
            </dl>
          </motion.div>

          <motion.div
            className="info-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>社名に込めた想い</h3>
            <p>
              「EvangSol」は「Solution」のEvangelist（伝道師）を意味し、グローバルなERPソリューションの伝道者としてお客様の企業価値向上に貢献するという決意を表しています。
            </p>
            <p>
              イノベーションとテクノロジーを融合し、ビジネスプロセスの最適化を通じて、より効率的で柔軟性のあるERPソリューションを提供し続けます。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About