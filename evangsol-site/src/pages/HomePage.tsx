import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3])

  return (
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
          株式会社EvangSolは、イノベーションとテクノロジーを融合し、ビジネスプロセスの最適化を通じて柔軟で持続可能なERP運用を実現します。
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
            <Link to="/achievements" className="btn btn-secondary">
              実績を確認する
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HomePage