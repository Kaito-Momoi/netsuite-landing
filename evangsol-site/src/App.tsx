import React from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import {
  Zap, Shield, Globe, Cpu, Users, ArrowRight,
  Check, Star, Mail, Phone, MapPin, ChevronDown,
  Sparkles, Target, Rocket, Brain, Layers, TrendingUp
} from 'lucide-react'
import './App.css'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3])

  return (
    <div className="app">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scaleProgress }}
      />

      <header className="header">
        <nav className="nav">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="logo-icon" />
            <span>EvangSol</span>
          </motion.div>

          <div className="nav-links desktop-nav">
            {['ソリューション', 'サービス', '事例', '会社概要', 'お問い合わせ'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {['ソリューション', 'サービス', '事例', '会社概要', 'お問い合わせ'].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="hero">
        <div className="hero-bg">
          <div className="floating-shapes">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`shape shape-${i + 1}`}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="hero-content"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-line-1">革新的なテクノロジーで</span>
            <span className="hero-line-2">
              <span className="gradient-text">未来</span>を創造する
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            DXの実現から新規事業創出まで、お客様のあらゆるチャレンジを支援
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>ソリューションを見る</span>
              <ArrowRight />
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              資料請求
            </motion.button>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown />
          </motion.div>
        </motion.div>
      </section>

      <section className="solutions" id="ソリューション">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              <span className="section-label">Solutions</span>
              革新的なソリューション
            </h2>
            <p className="section-desc">
              最先端技術と深い業界知識を融合し、お客様の課題を解決
            </p>
          </motion.div>

          <div className="solutions-grid">
            {[
              {
                icon: <Brain />,
                title: 'AI・機械学習',
                desc: '最新のAI技術を活用し、業務効率化と意思決定の高度化を実現',
                color: '#6366f1'
              },
              {
                icon: <Layers />,
                title: 'クラウド移行',
                desc: 'セキュアで柔軟なクラウド環境への移行を包括的にサポート',
                color: '#8b5cf6'
              },
              {
                icon: <Shield />,
                title: 'セキュリティ',
                desc: 'ゼロトラストアーキテクチャで企業資産を完全保護',
                color: '#ec4899'
              },
              {
                icon: <Rocket />,
                title: 'DXコンサルティング',
                desc: 'デジタル変革を戦略立案から実装まで一貫支援',
                color: '#f97316'
              },
              {
                icon: <Globe />,
                title: 'グローバル展開',
                desc: '世界規模でのシステム統合とローカライズ支援',
                color: '#14b8a6'
              },
              {
                icon: <Target />,
                title: 'データ分析',
                desc: 'ビッグデータを活用した予測分析と戦略的インサイト',
                color: '#f59e0b'
              }
            ].map((solution, i) => (
              <motion.div
                key={solution.title}
                className="solution-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0, 0, 0, 0.12)" }}
              >
                <div className="solution-icon" style={{ background: `linear-gradient(135deg, ${solution.color}22, ${solution.color}44)` }}>
                  {React.cloneElement(solution.icon, { style: { color: solution.color } })}
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.desc}</p>
                <motion.a
                  href="#"
                  className="solution-link"
                  whileHover={{ x: 5 }}
                >
                  詳細を見る <ArrowRight size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <motion.div
            className="feature-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="feature-text">
              <h2 className="feature-title">
                なぜEvangSolが選ばれるのか
              </h2>
              <div className="feature-list">
                {[
                  '業界トップクラスの技術力と20年以上の実績',
                  '24/365の充実したサポート体制',
                  '大手企業500社以上の導入実績',
                  'ISO27001認証取得の高セキュリティ',
                  'アジャイル開発による迅速な対応'
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
                { value: '500+', label: '導入企業数' },
                { value: '99.9%', label: 'システム稼働率' },
                { value: '24/7', label: 'サポート体制' },
                { value: '50+', label: '専門エンジニア' }
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

      <section className="testimonials" id="事例">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              <span className="section-label">Case Studies</span>
              導入事例
            </h2>
          </motion.div>

          <div className="testimonials-grid">
            {[
              {
                company: '大手製造業A社',
                content: 'AI導入により生産効率が40%向上。予知保全システムで故障率を80%削減できました。',
                author: 'CTO',
                rating: 5
              },
              {
                company: '金融機関B社',
                content: 'セキュリティ強化と同時に運用コストを30%削減。迅速な対応に感謝しています。',
                author: '情報システム部長',
                rating: 5
              },
              {
                company: '小売業C社',
                content: 'クラウド移行により、新サービス展開のスピードが3倍に。売上も20%増加しました。',
                author: 'CEO',
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.company}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <div className="testimonial-header">
                  <h4>{testimonial.company}</h4>
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <p className="testimonial-author">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>ビジネスの未来を、今始めましょう</h2>
            <p>専門コンサルタントが最適なソリューションをご提案します</p>
            <div className="cta-buttons">
              <motion.button
                className="btn btn-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                今すぐ相談する
              </motion.button>
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                資料ダウンロード
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer" id="お問い合わせ">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <Sparkles />
                <span>EvangSol</span>
              </div>
              <p>革新的なテクノロジーで未来を創造</p>
              <div className="social-links">
                {['twitter', 'linkedin', 'facebook'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social[0].toUpperCase()}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <h4>ソリューション</h4>
              <a href="#">AI・機械学習</a>
              <a href="#">クラウド移行</a>
              <a href="#">セキュリティ</a>
              <a href="#">DXコンサルティング</a>
            </div>

            <div className="footer-links">
              <h4>会社情報</h4>
              <a href="#">会社概要</a>
              <a href="#">採用情報</a>
              <a href="#">ニュース</a>
              <a href="#">パートナー</a>
            </div>

            <div className="footer-contact">
              <h4>お問い合わせ</h4>
              <div className="contact-item">
                <Phone size={16} />
                <span>03-1234-5678</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@evangsol.jp</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>東京都千代田区丸の内1-1-1</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 株式会社EvangSol. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">プライバシーポリシー</a>
              <a href="#">利用規約</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App