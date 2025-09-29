import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              zIndex: 9998
            }}
          />
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '600px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '24px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
              zIndex: 9999,
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{ padding: '2rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem'
              }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  margin: 0
                }}>
                  お問い合わせ
                </h2>
                <button
                  onClick={onClose}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <X size={24} color="white" />
                </button>
              </div>

              {!isSubmitted ? (
                <>
                  <div style={{
                    background: 'rgba(14, 165, 233, 0.1)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '2rem',
                    border: '1px solid rgba(14, 165, 233, 0.3)'
                  }}>
                    <p style={{
                      color: 'white',
                      fontSize: '1.1rem',
                      margin: '0 0 1.5rem 0',
                      lineHeight: '1.8'
                    }}>
                      NetSuiteプロジェクトのご相談はEvangSolへ。営業推進部が課題を丁寧にヒアリングし、最適な導入・開発プランをご提案します。
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Phone size={20} color="#0ea5e9" />
                        <a
                          href="tel:0362311328"
                          style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '1.05rem'
                          }}
                        >
                          03-6231-1328（営業推進部）
                        </a>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <MapPin size={20} color="#0ea5e9" />
                        <span style={{ color: 'white', fontSize: '1.05rem' }}>
                          〒103-0023 東京都中央区日本橋本町4-15-11 市橋ビル6階
                        </span>
                      </div>
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: 'grid',
                      gap: '1.5rem',
                      margin: '0 auto',
                      maxWidth: '720px',
                      width: '100%'
                    }}
                  >
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                          gap: '1rem'
                        }}
                      >
                        <input
                          type="text"
                          name="name"
                          placeholder="お名前 *"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            padding: '0.75rem',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                        />
                        <input
                          type="text"
                          name="company"
                          placeholder="会社名"
                          value={formData.company}
                          onChange={handleChange}
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            padding: '0.75rem',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                          gap: '1rem'
                        }}
                      >
                        <input
                          type="email"
                          name="email"
                          placeholder="メールアドレス *"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            padding: '0.75rem',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="電話番号"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            padding: '0.75rem',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>

                      <textarea
                        name="message"
                        placeholder="お問い合わせ内容 *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          padding: '0.75rem',
                          color: 'white',
                          fontSize: '1rem',
                          outline: 'none',
                          transition: 'all 0.3s ease',
                          resize: 'vertical'
                        }}
                      />

                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            flex: 1
                          }}
                        >
                          <Send size={20} />
                          送信する
                        </motion.button>

                        <motion.button
                          type="button"
                          onClick={onClose}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            flex: 1
                          }}
                        >
                          キャンセル
                        </motion.button>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  style={{
                    textAlign: 'center',
                    padding: '3rem 2rem',
                    background: 'rgba(34, 197, 94, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <CheckCircle size={80} color="#22c55e" style={{ margin: '0 auto 1.5rem' }} />
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '1rem'
                  }}>
                    送信完了しました！
                  </h3>
                  <p style={{
                    color: '#e2e8f0',
                    fontSize: '1.1rem',
                    lineHeight: '1.6'
                  }}>
                    お問い合わせありがとうございます。<br />
                    営業推進部より2営業日以内にご連絡させていただきます。
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactModal
