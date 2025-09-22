import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section className="cta" style={{ paddingTop: '120px', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>NetSuiteプロジェクトのご相談はEvangSolへ</h2>
          <p>営業推進部が課題を丁寧にヒアリングし、最適な導入・開発プランをご提案します。</p>

          <div className="contact-details" style={{ margin: '3rem 0', fontSize: '1.1rem' }}>
            <div className="contact-item" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone size={20} />
              <span style={{ marginLeft: '0.5rem' }}>03-6231-1328（営業推進部）</span>
            </div>
            <div className="contact-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={20} />
              <span style={{ marginLeft: '0.5rem' }}>〒103-0023 東京都中央区日本橋本町4-15-11 市橋ビル6階</span>
            </div>
          </div>

          <div className="cta-buttons">
            <motion.a
              href="tel:0362311328"
              className="btn btn-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              電話で問い合わせる
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact