import React from 'react'
import { motion } from 'framer-motion'

const Achievements: React.FC = () => {
  const industryHighlights = [
    '情報サービス',
    '広告業',
    '保険業',
    '情報通信',
    '運送物流',
    '家電メーカー',
    '図書出版',
    '食品輸入販売',
    '化粧品メーカー',
    '決済代行プラットフォーム',
    'イベントサービス',
    'オーディオ機器輸入販売',
    '電子機器メーカー',
    '玩具メーカー',
    'FA総合メーカー',
    'アパレルメーカー',
    '菓子卸売総合商社',
    '高級ブランド品リセール',
    'コーヒー生豆輸入・販売',
    'コンサルティング業',
    '服飾繊維資材商社',
    '産業用コンピュータ開発・販売'
  ]

  const projectHighlights = [
    '大手量販店EDIとNetSuiteを自動連携した家電メーカー案件',
    'OCIとシングルサインオンを実現した出版業向け基盤構築',
    'AWS上でOMS外部システムを構築し、在庫・注文を常時連携',
    'サーバーレス連携基盤で各種データを自動同期した化粧品メーカー',
    '大量仕訳データを自動連携する決済代行プラットフォーム',
    'OneWorldを3ヵ国で導入しグローバル管理を実現したイベントサービス',
    'SAPやOBIC7からのリプレースを支援した製造・流通業',
    '台湾親会社のIFRS対応を支援した産業用コンピュータ企業',
    '海外Roll-inや多拠点展開を支援した輸入販売・商社案件'
  ]

  const oneWorldPoints = [
    '本社と海外子会社を同一インスタンスで統合管理',
    'リアルタイムに内外の経営情報をモニタリング',
    '子会社ごとの基礎通貨設定で会計処理を効率化',
    '業務データの可視化・集計でガバナンスを強化'
  ]

  const timelineMilestones = [
    '2005年：EvangTech創業（業務基幹システム／Webサービス開発）',
    '2016年：ERP事業部発足（NetSuite導入・カスタマイズ開発開始）',
    '2019年：株式会社EvangSol設立（ERP導入・開発・保守を担う）',
    '2023年：NetSuiteソリューションプロバイダー契約を締結'
  ]

  const partnershipBadges = [
    'AWSテクノロジーパートナー',
    'Quadientゴールドパートナー',
    'Oracleサービスプロバイダー',
    'NetSuiteソリューションプロバイダー',
    'ISMS（ISO/IEC 27001:2013, JIS Q 27001:2014）認証取得'
  ]

  return (
    <section className="testimonials" style={{ paddingTop: '120px' }}>
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
        </motion.div>

        <div className="testimonials-grid achievements-grid">
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="testimonial-header">
              <h4>対応業種・領域</h4>
            </div>
            <ul className="achievement-list columns">
              {industryHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="testimonial-header">
              <h4>代表的な導入プロジェクト</h4>
            </div>
            <ul className="achievement-list">
              {projectHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="testimonial-header">
              <h4>OneWorld導入実績</h4>
            </div>
            <ul className="achievement-list">
              {oneWorldPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="testimonial-header">
              <h4>沿革・パートナーシップ</h4>
            </div>
            <ul className="achievement-list">
              {timelineMilestones.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="tag-list">
              {partnershipBadges.map((badge) => (
                <span key={badge} className="tag">{badge}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Achievements