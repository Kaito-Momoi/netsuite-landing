import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Menu,
  X,
  Rocket,
  Sparkles,
  ChevronRight,
  Home,
  Mail,
  Cloud,
  Zap,
  Building
} from 'lucide-react';
import { NavigationProps, NavItem } from '../types';
import { LAYOUT } from '../constants/layout';

const ModernNavigationBar: React.FC<NavigationProps> = React.memo(
  ({ showBackButton = true, variant = 'page', onContactClick }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const navItems: NavItem[] = [
      {
        label: 'ホーム',
        icon: <Home className="w-3 h-3" />,
        gradient: 'from-blue-500 to-teal-500',
        section: 'home'
      },
      {
        label: 'EvangSolの強み',
        icon: <Rocket className="w-3 h-3" />,
        gradient: 'from-blue-500 to-cyan-500',
        section: 'evangsol'
      },
      {
        label: 'NetSuiteについて',
        icon: <Cloud className="w-3 h-3" />,
        gradient: 'from-cyan-500 to-teal-500',
        section: 'netsuite'
      },
      {
        label: 'よくある質問',
        icon: <Zap className="w-3 h-3" />,
        gradient: 'from-blue-500 to-cyan-500',
        section: 'matching'
      },
      {
        label: '独自開発アドオン',
        icon: <Sparkles className="w-3 h-3" />,
        gradient: 'from-green-500 to-emerald-500',
        section: 'solutions'
      },
      {
        label: '会社概要',
        icon: <Building className="w-3 h-3" />,
        gradient: 'from-indigo-500 to-purple-500',
        section: 'about',
        isExternal: true,
        url: 'https://www.evangsol.co.jp'
      },
    ];

    const isActive = (item: NavItem): boolean => {
      // Check if the current section matches
      return activeSection === item.section;
    };

    const handleNavClick = (item: NavItem): void => {
      try {
        if (item.isExternal && item.url) {
          // Open external URL in new tab
          const newWindow = window.open(item.url, '_blank', 'noopener,noreferrer');
          if (!newWindow) {
            console.error(`Failed to open external link: ${item.url}. Please check popup blocker settings.`);
          }
        } else if (item.section === 'home') {
          // Scroll to top for home
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Scroll to specific section
          const element = document.getElementById(item.section);
          if (!element) {
            console.warn(`Section "${item.section}" not found in the document.`);
            return;
          }
          const y = element.getBoundingClientRect().top + window.pageYOffset + LAYOUT.SECTION_OFFSET;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } catch (error) {
        console.error('Navigation error occurred:', error);
      }
    };

    return (
      <>
        {/* Futuristic Progress Bar - At Top */}
        <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-slate-200">
          <div
            className="h-full relative overflow-hidden"
            style={{ width: `${scrollProgress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled
              ? 'bg-slate-50/95 backdrop-blur-2xl border-b-2 border-slate-300 py-2 shadow-lg top-1'
              : 'bg-gradient-to-b from-slate-50/90 via-slate-50/50 to-transparent backdrop-blur-md py-4 top-1'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <div className="flex items-center">
                <a
                  href="https://www.evangsol.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 relative"
                  aria-label="Visit EvangSol corporate website"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
                    alt="EvangSol"
                    className="h-10"
                  />
                </a>
              </div>

              {/* Center/Right Section with Navigation and Contact */}
              <div className="flex items-center gap-4 ml-auto">
                {/* Desktop Navigation - Only show for landing and main pages */}
                {variant !== 'solution' && (
                  <nav className="hidden lg:flex items-center gap-1" role="menubar">
                    {navItems.map((item) => (
                      <button
                        key={item.section}
                        onClick={() => handleNavClick(item)}
                        onMouseEnter={() => setHoveredItem(item.section)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`relative px-4 py-2 rounded-xl transition-all duration-300 group/nav hover:bg-slate-100`}
                        role="menuitem"
                      >
                        {/* Futuristic hover effect */}
                        {hoveredItem === item.section && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl"></div>
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent -skew-x-12 translate-x-[-200%] group-hover/nav:translate-x-[200%] transition-transform duration-1000"></div>
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

                        <span className={`relative flex items-center gap-1.5 text-sm font-bold whitespace-nowrap ${
                          isActive(item)
                            ? 'text-slate-900'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}>
                          {item.icon}
                          <span className="text-xs">{item.label}</span>
                        </span>
                      </button>
                    ))}
                  </nav>
                )}

                {/* Futuristic CTA Button */}
                <button
                  onClick={() => onContactClick ? onContactClick() : navigate('/contact')}
                  className="flex items-center gap-2 px-3 lg:px-6 py-3 relative overflow-hidden rounded-full font-bold transition-all duration-500 group"
                  role="menuitem"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Button content */}
                  <div className="relative flex items-center gap-2 text-white">
                    <div className="relative">
                      <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      <div className="absolute inset-0 bg-white/50 blur-md group-hover:animate-ping"></div>
                    </div>
                    <span className="hidden lg:inline">お問い合わせ</span>
                    <ChevronRight className="hidden lg:block w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Edge glow */}
                  <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
                </button>

                {/* Back Button */}
                {showBackButton && variant === 'page' && location.pathname !== '/' && (
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all duration-300 backdrop-blur-sm border-2 border-slate-300"
                    aria-label="Go back to previous page"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
                    <span className="hidden sm:inline">戻る</span>
                  </button>
                )}

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}>
          {/* Backdrop overlay */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
          {/* Menu content */}
          <div className="absolute inset-x-0 top-0 bg-white shadow-2xl">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center px-6 py-4 border-b border-slate-200">
              {/* EvangSol Logo - left side */}
              <div className="flex-1">
                <img
                  src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
                  alt="EvangSol"
                  className="h-10"
                />
              </div>
              {/* Empty space in center */}
              <div className="flex-1"></div>
              {/* Close Button - right side matching hamburger position */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="px-6 pb-6 pt-4">
              <nav className="space-y-2">
                {variant !== 'solution' && navItems.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => {
                      handleNavClick(item);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                      isActive(item)
                        ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient}`}>
                      {item.icon}
                    </span>
                    <span className="font-bold">{item.label}</span>
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
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
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
