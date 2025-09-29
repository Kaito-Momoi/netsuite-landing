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
        label: 'Home',
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
        label: 'Matching',
        icon: <Zap className="w-3 h-3" />,
        gradient: 'from-purple-500 to-orange-500',
        section: 'matching'
      },
      {
        label: 'Solutions',
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
        <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200">
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
              ? 'bg-white/95 backdrop-blur-2xl border-b border-gray-200 py-2 shadow-lg top-1'
              : 'bg-gradient-to-b from-white/80 via-white/40 to-transparent backdrop-blur-md py-4 top-1'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <div className="flex items-center">
                <button
                  onClick={() => navigate('/')}
                  className="group flex items-center gap-3 relative"
                  aria-label="Return to home page"
                >
                  <div className="relative">
                    {/* Hexagon frame with animated border */}
                    <div className="absolute -inset-2">
                      <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-xl blur-lg transition-all duration-1000 ${
                        activeGlow ? 'opacity-100 scale-110' : 'opacity-50 scale-100'
                      }`}></div>
                    </div>
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-xl p-2 border border-gray-200 overflow-hidden">
                      {/* Animated scan line */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent -translate-y-full animate-scan"></div>
                      <img
                        src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
                        alt="EvangSol"
                        className="h-10 relative z-10"
                      />
                    </div>
                  </div>
                </button>
              </div>

              {/* Center/Right Section with Navigation and Contact */}
              <div className="flex items-center gap-4 ml-auto">
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1" role="menubar">
                  {navItems.map((item, index) => (
                    <button
                      key={item.section}
                      onClick={() => handleNavClick(item)}
                      onMouseEnter={() => setHoveredItem(item.section)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`relative px-4 py-2 rounded-xl transition-all duration-300 group/nav hover:bg-gray-100`}
                      role="menuitem"
                    >
                      {/* Futuristic hover effect */}
                      {hoveredItem === item.section && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl"></div>
                          <div className="absolute inset-0 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent -skew-x-12 translate-x-[-200%] group-hover/nav:translate-x-[200%] transition-transform duration-1000"></div>
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
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}>
                        {item.icon}
                        <span className="text-xs">{item.label}</span>
                      </span>
                    </button>
                  ))}
                </nav>

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
                    <span>Contact Us</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Edge glow */}
                  <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
                </button>

                {/* Back Button */}
                {showBackButton && variant === 'page' && location.pathname !== '/' && (
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 backdrop-blur-sm border border-gray-300"
                    aria-label="Go back to previous page"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
                    <span className="hidden sm:inline">Back</span>
                  </button>
                )}

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Open menu"
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
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl">
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
                        ? 'bg-gradient-to-r from-purple-100 to-orange-100 text-gray-900'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
                  Contact Us
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
