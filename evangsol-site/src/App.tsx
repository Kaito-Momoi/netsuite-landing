import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Introduction from './pages/Introduction'
import Strengths from './pages/Strengths'
import Achievements from './pages/Achievements'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

const App: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <Router>
      <div className="app">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scaleProgress }}
        />

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage/" element={<HomePage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/strengths" element={<Strengths />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
