import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Mail } from 'lucide-react'
import ContactModal from '../components/ContactModal'

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="cta" style={{ paddingTop: '120px', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 style={{ color: 'white' }}>NetSuiteプロジェクトのご相談はEvangSolへ</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.25rem', lineHeight: '1.8' }}>
              営業推進部が課題を丁寧にヒアリングし、最適な導入・開発プランをご提案します。
            </p>

            <div className="contact-details" style={{
              margin: '3rem 0',
              fontSize: '1.15rem',
              color: 'white'
            }}>
              <div style={{
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem'
              }}>
                <Phone size={22} color="white" />
                <span style={{ color: 'white', fontWeight: '500' }}>03-6231-1328（営業推進部）</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                marginBottom: '2rem'
              }}>
                <MapPin size={22} color="white" />
                <span style={{ color: 'white', fontWeight: '400' }}>
                  〒103-0023 東京都中央区日本橋本町4-15-11 市橋ビル6階
                </span>
              </div>

              {/* Google Maps Embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '100%',
                  maxWidth: '800px',
                  margin: '0 auto',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5585!2d139.77476!3d35.6951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEEvangSol!5e0!3m2!1sja!2sjp!4v1703123456789!5m2!1sja!2sjp&q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%97%A5%E6%9C%AC%E6%A9%8B%E6%9C%AC%E7%94%BA4-15-11+%E5%B8%82%E6%A9%8B%E3%83%93%E3%83%AB6%E9%9A%8E+%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEEvangSol"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="株式会社EvangSol Office Location"
                />
              </motion.div>
            </div>

            <div className="cta-buttons" style={{ gap: '1.5rem' }}>
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}
              >
                <Mail size={20} />
                お問い合わせフォーム
              </motion.button>

              <motion.a
                href="tel:0362311328"
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '2px solid white',
                  color: 'white',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Phone size={20} />
                電話で問い合わせる
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Contact