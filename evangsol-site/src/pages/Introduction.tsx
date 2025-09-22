import React from 'react'
import { motion } from 'framer-motion'
import { Building, Shield, TrendingUp, Globe, Cpu, Sparkles } from 'lucide-react'

const Introduction: React.FC = () => {
  const agendaCards = [
    {
      icon: <Building />,
      title: '会社紹介',
      description: 'NetSuite導入支援・開発・保守をワンストップで提供。WMSやECサイトなど他システムとの自動連携も含めた総合提案が可能。',
      color: '#6366f1'
    },
    {
      icon: <Shield />,
      title: 'EvangSolの強み',
      description: '20年以上のOracle NetSuite導入経験を基に開発した短期導入ソリューション。バージョンロックフリー設計で常に最新版を利用可能。',
      color: '#8b5cf6'
    },
    {
      icon: <TrendingUp />,
      title: 'NetSuite導入・開発実績',
      description: 'SuiteSuccessを活用し最短3ヶ月での導入実績。スタートアップから上場企業まで幅広い規模に対応。',
      color: '#ec4899'
    },
    {
      icon: <Globe />,
      title: 'OneWorld導入実績',
      description: '世界33,000社以上が利用するNetSuiteを、複数拠点・通貨の統合管理に活用。リアルタイムな経営可視化を実現。',
      color: '#14b8a6'
    },
    {
      icon: <Cpu />,
      title: 'NetSuite自社ソリューション',
      description: 'AWSを活用したデータ連携基盤や入金自動消込など、実務課題を解決するテンプレート。',
      color: '#f97316'
    },
    {
      icon: <Sparkles />,
      title: '社名について',
      description: '「Solution」のEvangelistとして、グローバルERPソリューションを伝播する決意を表しています。',
      color: '#f59e0b'
    }
  ]

  return (
    <section className="solutions" style={{ paddingTop: '120px' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            <span className="section-label">Corporate Agenda</span>
            株式会社EvangSol 会社紹介
          </h2>
          <p className="section-desc">
            NetSuiteソリューションプロバイダーとして、ERP/財務会計、CRM、Eコマースを単一システムで提供。日本の法規制変更にも適時対応。
          </p>
        </motion.div>

        <div className="solutions-grid">
          {agendaCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="solution-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12)' }}
            >
              <div className="solution-icon" style={{ background: `linear-gradient(135deg, ${card.color}22, ${card.color}44)` }}>
                {React.cloneElement(card.icon, { style: { color: card.color } })}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Introduction