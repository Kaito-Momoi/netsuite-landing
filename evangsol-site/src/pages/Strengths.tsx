import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const Strengths: React.FC = () => {
  return (
    <section className="features" style={{ paddingTop: '120px' }}>
      <div className="container">
        <motion.div
          className="feature-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="feature-text">
            <h2 className="feature-title">
              EvangSolの強み
            </h2>
            <p>
              システム開発会社EvangTechのERP事業部門を独立させた専門企業。20年以上のOracle NetSuite導入経験と、アプリケーション開発のノウハウを兼ね備え、迅速かつ高品質なERP導入を実現。SuiteSuccessを活用し、3ヶ月での導入実績もあり。
            </p>
            <p>
              お客様のニーズに寄り添った柔軟な対応力と継続的なパートナーシップを重視。バージョンロックフリー設計のNetSuiteにより、カスタマイズを行っても常に最新版を利用でき、日本の法規制変更にもタイムリーに対応。
            </p>
            <div className="feature-list">
              {[
                'NetSuite導入とWMS/ECサイト等の外部システム連携をワンストップで提供',
                'SuiteSuccessを活用した最短3ヶ月でのスピード導入',
                'ダッシュボードによるリアルタイムな業務可視化・分析',
                'パイプライン分析によるマーケティング活動の可視化',
                '営業担当者がリアルタイムに在庫確認可能な環境構築'
              ].map((item, i) => (
                <motion.div
                  key={item}
                  className="feature-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Check className="feature-check" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="feature-stats">
            {[
              { value: '2019', label: '設立' },
              { value: '4,000万円', label: '資本金' },
              { value: 'Oracle', label: 'NetSuiteソリューションプロバイダー' },
              { value: 'ISO/IEC 27001', label: 'ISMS認証取得' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Strengths