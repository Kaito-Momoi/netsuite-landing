import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import EvangSolLogo from '../assets/EvangSol_logo.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'ホーム' },
    { path: '/introduction', label: '会社紹介' },
    { path: '/strengths', label: '強み' },
    { path: '/achievements', label: '実績' },
    { path: '/solutions', label: 'ソリューション' },
    { path: '/about', label: '会社概要' },
    { path: '/contact', label: 'お問い合わせ' }
  ]

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={EvangSolLogo} alt="EvangSol" className="logo-img" />
          </motion.div>
        </Link>

        <div className="nav-links desktop-nav">
          {navItems.map((item, i) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </motion.div>
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
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header