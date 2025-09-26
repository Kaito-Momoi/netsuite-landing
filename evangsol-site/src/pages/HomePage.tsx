import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Code, Zap, Trophy, Building2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const strengths = [
  {
    icon: <Code />,
    title: '高い開発力',
    description: 'SuiteScriptエキスパートが多数在籍。複雑な業務ロジックも堅実にシステム化',
    bulletPoints: ['高度なカスタマイズ開発', '複雑な業務フローの実装', '独自機能の開発']
  },
  {
    icon: <Zap />,
    title: '高速開発・短納期',
    description: '独自の開発フレームワークとテンプレートで、開発スピードを大幅に短縮',
    bulletPoints: ['効率的な開発プロセス', '豊富なテンプレート活用', '迅速な納品']
  },
  {
    icon: <Trophy />,
    title: '日本企業特有の要件に精通',
    description: '稟議・承認フロー、特殊な帳票、複雑な価格計算などに完全対応',
    bulletPoints: ['日本の商習慣に精通', '複雑な承認フロー対応', '特殊な帳票作成']
  },
  {
    icon: <Building2 />,
    title: '全国対応拠点',
    description: '東京・札幌に活動拠点を構え、近隣企業様との対面でのやり取りが可能',
    bulletPoints: ['東京・札幌の2拠点体制', '対面サポート可能', '認識齟齬なく円滑な進行']
  },
  {
    icon: <Users />,
    title: 'グループ総合力',
    description: 'グループ会社EvangTechとの連携によるワンストップサービス',
    bulletPoints: ['システム開発からERP導入まで', 'ワンストップ対応', '総合的なIT支援']
  }
]

const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3])

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="floating-shapes">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`shape shape-${i + 1}`}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
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
            <span className="hero-line-1">社会に新しい可能性を広げる提唱者として</span>
            <span className="hero-line-2">
              <span className="gradient-text">グローバル成長</span>を加速するパートナー
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            株式会社EvangSolは、導入と拡張アーキテクチャの知見で、企業の成長と価値創出を加速するNetSuiteパートナーです。
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about" className="btn btn-primary">
                <span>会社概要を見る</span>
                <ArrowRight />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/methodology" className="btn btn-secondary">
                導入方法論を知る
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="strengths">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              <span className="section-label">Strengths</span>
              EvangSolの強み
            </h2>
            <p className="section-desc">
              技術力と情熱で、NetSuiteの価値を最大限に引き出します
            </p>
          </motion.div>

          <div className="strengths-grid">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                className="strength-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="strength-icon">{strength.icon}</div>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
                <ul className="strength-points">
                  {strength.bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
