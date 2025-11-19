import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import ModernNavigationBar from './components/ModernNavigationBar';
import ModernFooter from './components/ModernFooter';
import ErrorBoundary from './components/ErrorBoundary';
import CoreFeaturesSection from './sections/CoreFeaturesSection';
import StrengthsSection from './sections/StrengthsSection';
import CaseStudySection from './sections/CaseStudySection';
import AgileProcessSection from './sections/AgileProcessSection';
import SolutionsSection from './sections/SolutionsSection';
import { SOLUTIONS } from './constants/features';
import { LAYOUT } from './constants/layout';

/**
 * NetSuite Unified Landing Page
 * Main landing page showcasing NetSuite features, EvangSol strengths, and solutions
 */
const NetSuiteUnified: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, LAYOUT.CAROUSEL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Memoize contact click handler to prevent unnecessary re-renders
  const handleContactClick = useCallback(() => {
    try {
      const newWindow = window.open('https://www.evangsol.co.jp/support', '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        console.error('Failed to open contact page. Please check popup blocker settings.');
      }
    } catch (error) {
      console.error('Error opening contact page:', error);
    }
  }, []);

  // Memoize featured solutions to prevent recalculation on every render
  const featuredSolutions = useMemo(() => SOLUTIONS.slice(0, 6), []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
        {/* Multi-layered Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-slate-50 to-indigo-600/10"></div>

          {/* Animated mesh gradient */}
          <div className="absolute inset-0 opacity-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 left-20 w-72 h-72 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
        </div>

        <ModernNavigationBar
          showBackButton={false}
          variant="page"
          onContactClick={handleContactClick}
        />

        {/* Hero Section with Enhanced 3D Typography */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center px-4 z-10 pt-32 pb-16 md:pt-40"
        >
          <div className="text-center max-w-6xl mx-auto">
            {/* Premium Badge */}
            <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 backdrop-blur-xl rounded-full border-2 border-blue-600/60 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                NetSuite Partner
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  NetSuite
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-2xl -z-10"></div>
              </span>
              <br />
              <span className="text-slate-900">導入支援のプロ</span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-xl md:text-3xl text-slate-700 mb-12 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              日本企業の複雑な業務要件を、
              <br className="hidden md:block" />
              <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                圧倒的な開発力
              </span>
              で実現する
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button
                onClick={handleContactClick}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all overflow-hidden"
              >
                <span className="relative z-10">無料相談を申し込む</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById('solutions');
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.pageYOffset + LAYOUT.SECTION_OFFSET;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg border-2 border-slate-300 hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all"
              >
                ソリューションを見る
              </button>
            </div>

            {/* Feature Carousel */}
            <div className="mt-20 relative h-20">
              <div className="flex items-center justify-center gap-3">
                {[
                  { icon: '⚡', text: '最短3ヶ月で稼働' },
                  { icon: '🏭', text: '製造業に特化' },
                  { icon: '🌏', text: 'グローバル対応' },
                ][activeFeature] && (
                  <div className="flex items-center gap-4 animate-fade-in">
                    <div className="text-4xl">
                      {[
                        { icon: '⚡', text: '最短3ヶ月で稼働' },
                        { icon: '🏭', text: '製造業に特化' },
                        { icon: '🌏', text: 'グローバル対応' },
                      ][activeFeature].icon}
                    </div>
                    <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {[
                        { icon: '⚡', text: '最短3ヶ月で稼働' },
                        { icon: '🏭', text: '製造業に特化' },
                        { icon: '🌏', text: 'グローバル対応' },
                      ][activeFeature].text}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <CoreFeaturesSection />

        {/* Strengths Section */}
        <StrengthsSection />

        {/* Case Study Section */}
        <CaseStudySection />

        {/* Agile Process Section */}
        <AgileProcessSection />

        {/* Solutions Section */}
        <SolutionsSection solutions={featuredSolutions} />

        {/* Footer */}
        <ModernFooter />
      </div>
    </ErrorBoundary>
  );
};

export default NetSuiteUnified;
