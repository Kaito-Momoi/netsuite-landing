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
  Zap,
  Hexagon,
  Activity
} from 'lucide-react';
import { NavigationProps } from '../types';

const ModernNavigationBar: React.FC<NavigationProps> = React.memo(
  ({ showBackButton = true, variant = 'page', onContactClick }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [activeGlow, setActiveGlow] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('/');

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);

        // Calculate scroll progress
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(progress, 100));

        // Determine active section based on actual section positions
        const scrollPosition = window.scrollY + 150; // Offset for header + some margin

        // Check each section's position
        const sections = [
          { id: 'hero', name: 'home' },
          { id: 'netsuite', name: 'netsuite' },
          { id: 'evangsol', name: 'evangsol' },
          { id: 'matching', name: 'matching' },
          { id: 'solutions', name: 'solutions' }
        ];

        let currentSection = 'home';

        for (const section of sections) {
          const element = section.id === 'hero' ? document.querySelector('.min-h-screen') : document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const top = rect.top + window.scrollY;

            if (scrollPosition >= top) {
              currentSection = section.name;
            }
          }
        }

        setActiveSection(currentSection);
      };

      // Trigger active glow animation
      const glowInterval = setInterval(() => {
        setActiveGlow(prev => !prev);
      }, 3000);

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(glowInterval);
      };
    }, []);

    const navItems = [
      {
        label: 'ホーム',
        icon: <Home className="w-3 h-3" />,
        gradient: 'from-purple-500 to-pink-500',
        section: 'home'
      },
      {
        label: 'NetSuite',
        icon: <Cloud className="w-3 h-3" />,
        gradient: 'from-orange-500 to-red-500',
        section: 'netsuite'
      },
      {
        label: 'EvangSol',
        icon: <Rocket className="w-3 h-3" />,
        gradient: 'from-blue-500 to-cyan-500',
        section: 'evangsol'
      },
      {
        label: 'マッチング',
        icon: <Zap className="w-3 h-3" />,
        gradient: 'from-purple-500 to-orange-500',
        section: 'matching'
      },
      {
        label: 'ソリューション',
        icon: <Sparkles className="w-3 h-3" />,
        gradient: 'from-green-500 to-emerald-500',
        section: 'solutions'
      },
    ];

    const isActive = (item: any) => {
      // Check if the current section matches
      return activeSection === item.section;
    };

    const handleNavClick = (item: any) => {
      if (item.section === 'home') {
        // Scroll to top for home
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Scroll to specific section
        const element = document.getElementById(item.section);
        if (element) {
          const yOffset = -80; // Offset for fixed header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    return (
      <>
        {/* Futuristic Progress Bar - At Top */}
        <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-black/20">
          <div
            className="h-full relative overflow-hidden"
            style={{ width: `${scrollProgress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 animate-gradient-x"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled
              ? 'bg-black/95 backdrop-blur-2xl border-b border-white/5 py-2 shadow-2xl shadow-purple-900/20 top-1'
              : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-md py-4 top-1'
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
                    {/* Hexagon frame with animated border */}
                    <div className="absolute -inset-2">
                      <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-xl blur-lg transition-all duration-1000 ${
                        activeGlow ? 'opacity-100 scale-110' : 'opacity-50 scale-100'
                      }`}></div>
                    </div>
                    <div className="relative bg-black/90 backdrop-blur-xl rounded-xl p-2 border border-transparent overflow-hidden"
                         style={{
                           background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.95) 100%)',
                           borderImage: 'linear-gradient(135deg, rgba(168,85,247,0.5), rgba(251,146,60,0.5)) 1'
                         }}>
                      {/* Animated scan line */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent -translate-y-full animate-scan"></div>
                      <img
                        src={`${process.env.PUBLIC_URL}/EvangSol_logo - White.png`}
                        alt="EvangSol"
                        className="h-10 relative z-10"
                      />
                    </div>
                  </div>
                  <div className="hidden sm:block relative">
                    <div className="text-white font-black text-lg tracking-wide relative">
                      <span className="relative z-10">EvangSol</span>
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-gradient-x"></div>
                    </div>
                    <div className="text-[10px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold tracking-wider mt-0.5 animate-gradient-x">
                      ORACLE NETSUITE PARTNER
                    </div>
                  </div>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1 ml-6" role="menubar">
                  {navItems.map((item, index) => (
                    <button
                      key={item.section}
                      onClick={() => handleNavClick(item)}
                      onMouseEnter={() => setHoveredItem(item.section)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`relative px-4 py-2 rounded-xl transition-all duration-300 group/nav hover:bg-white/5`}
                      role="menuitem"
                    >
                      {/* Futuristic hover effect */}
                      {hoveredItem === item.section && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl"></div>
                          <div className="absolute inset-0 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover/nav:translate-x-[200%] transition-transform duration-1000"></div>
                          </div>
                        </>
                      )}

                      {/* Active indicator with glow */}
                      {isActive(item) && (
                        <>
                          <div className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r ${item.gradient}`}></div>
                          <div className={`absolute inset-x-0 -bottom-1 h-4 bg-gradient-to-r ${item.gradient} blur-xl opacity-50`}></div>
                        </>
                      )}

                      <span className={`relative flex items-center gap-1.5 text-sm font-medium whitespace-nowrap ${
                        isActive(item)
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}>
                        {item.icon}
                        <span className="text-xs">{item.label}</span>
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-4">
                {/* Futuristic CTA Button */}
                <button
                  onClick={() => onContactClick ? onContactClick() : navigate('/contact')}
                  className="hidden sm:flex items-center gap-2 px-6 py-3 relative overflow-hidden rounded-full font-bold transition-all duration-500 group"
                  role="menuitem"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 animate-gradient-x"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Button content */}
                  <div className="relative flex items-center gap-2 text-white">
                    <div className="relative">
                      <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      <div className="absolute inset-0 bg-white/50 blur-md group-hover:animate-ping"></div>
                    </div>
                    <span>お問い合わせ</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Edge glow */}
                  <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
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
                {navItems.map((item, index) => (
                  <button
                    key={item.section}
                    onClick={() => {
                      handleNavClick(item);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                      isActive(item)
                        ? 'bg-gradient-to-r from-purple-600/20 to-orange-600/20 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}

                {/* Mobile Contact Button */}
                <button
                  onClick={() => {
                    if (onContactClick) {
                      onContactClick();
                    } else {
                      navigate('/contact');
                    }
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

      </>
    );
  }
);

ModernNavigationBar.displayName = 'ModernNavigationBar';

export default ModernNavigationBar;