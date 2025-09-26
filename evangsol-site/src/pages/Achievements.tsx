import React from 'react'
import { motion } from 'framer-motion'
import { } from 'lucide-react'

type Achievement = {
  id: string
  year: number
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4'
  industry: string
  scale: string
  summary: string
  areas: Array<'要件' | '設計' | '開発' | '移行' | '保守'>
}

const achievements: Achievement[] = [
  {
    id: '2024-q2-cosmetics',
    year: 2024,
    quarter: 'Q2',
    industry: '化粧品メーカー',
    scale: '年商300億円規模 / 国内多拠点',
    summary: 'サーバーレス連携基盤でEC・倉庫・会計データを自動同期し、在庫・販路をリアルタイムに可視化。',
    areas: ['要件', '設計', '開発', '移行']
  },
  {
    id: '2024-q1-payment',
    year: 2024,
    quarter: 'Q1',
    industry: '決済代行プラットフォーム',
    scale: 'トランザクション月間1,000万件超',
    summary: '大量仕訳データの自動連携とエラー検知ワークフローを構築し、締め処理を半減。',
    areas: ['要件', '設計', '開発', '保守']
  },
  {
    id: '2023-q4-event',
    year: 2023,
    quarter: 'Q4',
    industry: 'イベントサービス',
    scale: 'OneWorld / 3か国展開',
    summary: '多通貨・多言語のOneWorld環境を整備し、海外拠点の統合損益管理と内部統制を強化。',
    areas: ['要件', '設計', '移行', '保守']
  },
  {
    id: '2023-q2-electronics',
    year: 2023,
    quarter: 'Q2',
    industry: '家電メーカー',
    scale: '主要量販店向けEDI連携',
    summary: 'EDIデータとNetSuiteを連携し、受注・在庫を一元管理。需要変動に応じた生産計画を迅速化。',
    areas: ['要件', '設計', '開発']
  },
  {
    id: '2022-q4-publishing',
    year: 2022,
    quarter: 'Q4',
    industry: '出版業',
    scale: '国内大手 / 1,500名規模',
    summary: 'OCIとシングルサインオンを実装し、販売管理・著者ロイヤリティの統合運用を実現。',
    areas: ['要件', '設計', '開発', '保守']
  },
  {
    id: '2022-q3-logistics',
    year: 2022,
    quarter: 'Q3',
    industry: '物流・小売',
    scale: 'AWS OMS × NetSuite',
    summary: 'サーバーレスOMSを構築し、倉庫/配送とNetSuiteの在庫・注文情報を常時同期。',
    areas: ['要件', '設計', '開発', '移行']
  },
  {
    id: '2021-q1-manufacturing',
    year: 2021,
    quarter: 'Q1',
    industry: '製造・流通',
    scale: 'SAP / OBIC7 リプレース',
    summary: 'グローバルバリューチェーンを再設計し、購買・在庫・会計をNetSuiteへ統合。',
    areas: ['要件', '設計', '開発', '移行', '保守']
  },
  {
    id: '2020-q4-industrial',
    year: 2020,
    quarter: 'Q4',
    industry: '産業用コンピュータ',
    scale: '海外親会社 IFRS 対応',
    summary: '親会社基準のIFRSレポーティングと日本子会社の会計を統合し、月次決算を自動化。',
    areas: ['要件', '設計', '開発']
  }
]

const quartersOrder: Record<Achievement['quarter'], number> = {
  Q1: 1,
  Q2: 2,
  Q3: 3,
  Q4: 4
}

const sortedAchievements = [...achievements].sort((a, b) => {
  if (a.year !== b.year) {
    return b.year - a.year
  }
  return quartersOrder[b.quarter] - quartersOrder[a.quarter]
})

const industries = Array.from(new Set(achievements.map((item) => item.industry)))
const areaOrder: Array<Achievement['areas'][number]> = ['要件', '設計', '開発', '移行', '保守']
const areas = Array.from(new Set(achievements.flatMap((item) => item.areas))).sort(
  (a, b) => areaOrder.indexOf(a) - areaOrder.indexOf(b)
)
const periods = Array.from(new Set(achievements.map((item) => `${item.year}`))).sort(
  (a, b) => Number(b) - Number(a)
)

const filterLabels = {
  ALL: 'すべて'
}

const caseStudy = {
  company: '株式会社グリーンハウス',
  headline: 'レガシーERPからNetSuiteへ刷新し、柔軟でスピーディな成長基盤を構築',
  summary:
    'SAP ECC 6.0のEOSを機にNetSuiteへ移行。基幹業務とワークフローを一体化し、返品管理プロセスのリードタイムを1/10以下へ短縮。営業部門の予実管理まで統合し継続的な改善を実現。',
  location: '東京都渋谷区 恵比寿',
  quote:
    '「返品管理プロセスをNetSuiteに統合することで、申請から承認までのリードタイムが従来の1/10以下に短縮され、業務の効率化が実現しました。営業部門の利益管理や予実管理も統合し、よりスムーズな改善に取り組んでいきます」',
  author: '株式会社グリーンハウス 取締役 兼 マーケティング担当執行役員 奥寺 貴哉 氏',
  highlights: [
    '承認リードタイムを1/10以下に短縮し、意思決定を高速化',
    '返品申請から承認までの業務フローをNetSuiteへ集約',
    '営業部門の利益・予実管理を統合し継続的な改善を支援'
  ]
}

const Achievements: React.FC = () => {
  const filteredAchievements = sortedAchievements

  return (
    <section className="achievements" style={{ paddingTop: '120px' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            <span className="section-label">Track Record</span>
            NetSuite導入・開発実績
          </h2>
          <p className="section-desc">
            製造・小売・サービスを中心に、大手企業の基幹刷新とグローバル展開を支援してきた事例です。主担当領域と成果を整理しています。
          </p>
        </motion.div>

        <motion.div
          className="case-highlight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="case-header">
            <span className="case-company">{caseStudy.company}</span>
            <h3>{caseStudy.headline}</h3>
            <p>{caseStudy.summary}</p>
          </div>
          <div className="case-content">
            <ul>
              {caseStudy.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="case-quote">
              <p>{caseStudy.quote}</p>
              <span>{caseStudy.author}</span>
            </div>
          </div>
        </motion.div>

        <div className="achievement-grid">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="achievement-meta">
                <span className="achievement-industry">{achievement.industry}</span>
                <span className="achievement-scale">{achievement.scale}</span>
              </div>
              <p className="achievement-summary">{achievement.summary}</p>
              <div className="achievement-areas">
                {achievement.areas.map((area) => (
                  <span key={`${achievement.id}-${area}`}>{area}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
