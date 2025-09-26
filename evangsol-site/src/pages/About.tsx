import React from 'react'
import { motion } from 'framer-motion'

const companyInfo = [
  { label: '社名', value: '株式会社EvangSol（エバンソル）' },
  { label: '設立', value: '2019年7月' },
  { label: '資本金', value: '4,000万円' },
  { label: '事業内容', value: 'ERP導入支援・アドオン開発・保守サポート' },
  { label: '代表取締役', value: '小山 敏幸' },
  { label: '所在地', value: '〒103-0023 東京都中央区日本橋本町4-15-11 市橋ビル6階' }
]

const ceoMessage = {
  heading: 'CEO Message',
  body: [
    'EvangSolは、NetSuiteを中心としたクラウドERPでお客様の経営基盤を支える専門チームです。課題が複雑な場合でも地道に向き合い、現場に根ざした改善を重ねて価値をお届けします。',
    'これからもお客様とともに変化を楽しみ、スピードと品質の両立にこだわった支援を続けていきます。'
  ],
  author: '代表取締役 小山 敏幸'
}

const About: React.FC = () => {
  return (
    <section className="company" style={{ paddingTop: '120px' }}>
      <div className="container">
        <motion.div
          className="simple-about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">About</span>
          <h2>Company Overview</h2>
          <p className="section-desc">
            NetSuiteを中心にERP導入・開発・運用を担う専門チームとして、業種や規模を問わずお客様の成長を支援しています。
          </p>
        </motion.div>

        <motion.div
          className="basic-info"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Basic Info</h3>
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
          className="ceo-message"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>{ceoMessage.heading}</h3>
          {ceoMessage.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="ceo-author">{ceoMessage.author}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
