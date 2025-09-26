import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import './App.css'

const AppLayout: React.FC = () => {
  const { shouldAnimate } = useAnimationControl()
  const { scrollYProgress } = useScroll()
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <MotionConfig reducedMotion={shouldAnimate ? 'never' : 'always'}>
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
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </MotionConfig>
  )
}

const App: React.FC = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <BrowserRouter basename={basePath === '' ? undefined : basePath}>
      <AnimationProvider>
        <AppLayout />
      </AnimationProvider>
    </BrowserRouter>
  )
}

export default App
