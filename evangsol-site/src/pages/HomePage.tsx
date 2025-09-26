import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Workflow, Target, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'

const evangelistPrinciples = [
  {
    icon: <Workflow size={28} />,
    title: '現場主導の改善を後押しするアジャイル導入',
    description: '短いイテレーションで優先度を見直し、現場の声を反映した運用プロセスを構築します。'
  },
  {
    icon: <Target size={28} />,
    title: '事業ゴールから逆算したKPI設計',
    description: '経営指標と現場指標をつなぎ、意思決定に直結するダッシュボードと受入基準を設計します。'
  },
  {
    icon: <Layers3 size={28} />,
    title: '変化に強い拡張アーキテクチャの設計',
    description: 'NetSuiteと周辺システムを連携し、将来の拡張や組織変更にも耐えるデータモデルを提供します。'
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
            <span className="hero-line-1">NetSuiteソリューションの伝道者として</span>
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
            株式会社EvangSolは、アジャイル導入と拡張アーキテクチャのノウハウを融合し、価値創出までを伴走するNetSuiteパートナーです。
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

      <section className="evangelist">
        <div className="container">
          <motion.div
            className="evangelist-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Partner</h2>
            <p>
              私たちはNetSuiteのパートナーとして、導入後の運用と継続的な価値創出まで伴走します。
            </p>
          </motion.div>

          <div className="evangelist-grid">
            {evangelistPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="evangelist-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="evangelist-icon">{principle.icon}</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
