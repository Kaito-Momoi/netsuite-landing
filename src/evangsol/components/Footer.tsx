import React from 'react'
import { Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import EvangSolLogoWhite from '../EvangSol_logo - White.png'

const Footer: React.FC = () => {
  const partnershipBadges = [
    'AWSテクノロジーパートナー',
    'Quadientゴールドパートナー',
    'Oracleサービスプロバイダー',
    'NetSuiteソリューションプロバイダー'
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/">
              <div className="footer-logo">
                <img src={EvangSolLogoWhite} alt="EvangSol" className="footer-logo-img" />
              </div>
            </Link>
            <p>グローバルERPソリューションで企業成長を支援します。</p>
          </div>

          <div className="footer-links">
            <h4>サービス</h4>
            <Link to="/about">About</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/methodology">Methodology</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h4>パートナー情報</h4>
            {partnershipBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
            <span>ISMS（ISO/IEC 27001）認証取得</span>
          </div>

          <div className="footer-contact">
            <h4>お問い合わせ</h4>
            <div className="contact-item">
              <Phone size={16} />
              <span>03-6231-1328（営業推進部）</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>〒103-0023 東京都中央区日本橋本町4-15-11 市橋ビル6階</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 株式会社EvangSol. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">プライバシーポリシー</a>
            <a href="#">サイト利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
