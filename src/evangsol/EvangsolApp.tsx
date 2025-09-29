import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Introduction from './pages/Introduction'
import Strengths from './pages/Strengths'
import Achievements from './pages/Achievements'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import Methodology from './pages/Methodology'
import { AnimationProvider, useAnimationControl } from './contexts/AnimationContext'
import './Evangsol.css'

const EvangsolLayout: React.FC = () => {
  const { shouldAnimate } = useAnimationControl()
  const { scrollYProgress } = useScroll()
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <MotionConfig reducedMotion={shouldAnimate ? 'never' : 'always'}>
      <div className="evangsol-app">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scaleProgress }}
        />

        <Header />

        <Routes>
          <Route path="/evangsol" element={<HomePage />} />
          <Route path="/evangsol/homepage" element={<HomePage />} />
          <Route path="/evangsol/introduction" element={<Introduction />} />
          <Route path="/evangsol/strengths" element={<Strengths />} />
          <Route path="/evangsol/achievements" element={<Achievements />} />
          <Route path="/evangsol/solutions" element={<Solutions />} />
          <Route path="/evangsol/methodology" element={<Methodology />} />
          <Route path="/evangsol/about" element={<About />} />
          <Route path="/evangsol/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </MotionConfig>
  )
}

const EvangsolApp: React.FC = () => {
  return (
    <AnimationProvider>
      <EvangsolLayout />
    </AnimationProvider>
  )
}

export default EvangsolApp