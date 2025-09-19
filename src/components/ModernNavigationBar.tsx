import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Menu,
  X,
  Globe,
  Rocket,
  Sparkles,
  ChevronRight,
  Home,
  Mail,
  Code,
  Cloud,
  Zap
} from 'lucide-react';
import { NavigationProps } from '../types';

const ModernNavigationBar: React.FC<NavigationProps> = React.memo(
  ({ showBackButton = true, variant = 'page' }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
      {
        path: '/',
        label: 'ホーム',
        icon: <Home className="w-4 h-4" />,
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        path: '/what-is-netsuite',
        label: 'NetSuiteとは',
        icon: <Cloud className="w-4 h-4" />,
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        path: '/evangsol-strengths',
        label: 'EvangSolの強み',
        icon: <Rocket className="w-4 h-4" />,
        gradient: 'from-orange-500 to-red-500'
      },
      {
        path: '/netsuite-unified',
        label: '統合ページ',
        icon: <Zap className="w-4 h-4" />,
        gradient: 'from-purple-500 to-orange-500',
        special: true
      },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
      <>
        {/* Main Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled
              ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3'
              : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm py-5'
          }`}
          role="navigation"
          aria-label="メインナビゲーション"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => navigate('/')}
                  className="group flex items-center gap-3 relative"
                  aria-label="ホームページへ戻る"
                >
                  <div className="relative">
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-black rounded-lg p-2 border border-white/20">
                      <img
                        src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
                        alt="EvangSol"
                        className="h-10 relative z-10"
                      />
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-white font-bold text-lg tracking-wider">
                      EvangSol
                    </div>
                    <div className="text-xs bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent font-medium">
                      Oracle NetSuite Partner
                    </div>
                  </div>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-2 ml-8" role="menubar">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => navigate(item.path)}
                      onMouseEnter={() => setHoveredItem(item.path)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`relative px-5 py-2.5 rounded-xl transition-all duration-300 ${
                        item.special
                          ? 'bg-gradient-to-r from-purple-600/20 to-orange-600/20 border border-purple-500/30 hover:border-purple-400/60'
                          : ''
                      }`}
                      role="menuitem"
                    >
                      {/* Hover effect background */}
                      {hoveredItem === item.path && !item.special && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl"></div>
                      )}

                      {/* Active indicator */}
                      {isActive(item.path) && (
                        <div className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r ${item.gradient}`}></div>
                      )}

                      <span className={`relative flex items-center gap-2 font-medium ${
                        isActive(item.path)
                          ? 'text-white'
                          : item.special
                            ? 'bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent'
                            : 'text-gray-300 hover:text-white'
                      }`}>
                        {item.icon}
                        {item.label}
                        {item.special && (
                          <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
                        )}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-4">
                {/* CTA Button */}
                <button
                  onClick={() => navigate('/contact')}
                  className="hidden sm:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 group"
                  role="menuitem"
                >
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  お問い合わせ
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Back Button */}
                {showBackButton && variant === 'page' && location.pathname !== '/' && (
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center px-4 py-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10"
                    aria-label="前のページに戻る"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
                    <span className="hidden sm:inline">戻る</span>
                  </button>
                )}

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="メニューを開く"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-x-0 top-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl">
            <div className="pt-24 px-6 pb-6">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-purple-600/20 to-orange-600/20 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    {item.special && (
                      <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse ml-auto" />
                    )}
                  </button>
                ))}

                {/* Mobile Contact Button */}
                <button
                  onClick={() => {
                    navigate('/contact');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                >
                  <Mail className="w-5 h-5" />
                  お問い合わせ
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 h-1">
          <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-gradient"
               style={{ width: `${scrolled ? '100%' : '0%'}`, transition: 'width 0.3s ease' }}></div>
        </div>
      </>
    );
  }
);

ModernNavigationBar.displayName = 'ModernNavigationBar';

export default ModernNavigationBar;