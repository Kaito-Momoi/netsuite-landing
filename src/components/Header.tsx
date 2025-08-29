import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBackButton = false }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <button onClick={() => navigate('/')} className="flex items-center cursor-pointer">
                <img
                  src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
                  alt="EvangSol"
                  className="h-12"
                />
              </button>
              <span className="text-xs text-slate-600 border-l border-slate-300 ml-3 pl-3">
                Oracle NetSuite認定パートナー
              </span>
            </div>

            {!showBackButton ? (
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => navigate('/what-is-netsuite')}
                  className="text-slate-700 hover:text-sky-500 transition-colors font-medium cursor-pointer"
                >
                  NetSuiteとは
                </button>
                <button
                  onClick={() => navigate('/evangsol-strengths')}
                  className="text-slate-700 hover:text-sky-500 transition-colors font-medium cursor-pointer"
                >
                  EvangSolの強み
                </button>
                <button
                  onClick={() => navigate('/case-studies')}
                  className="text-slate-700 hover:text-sky-500 transition-colors font-medium cursor-pointer"
                >
                  導入事例
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="text-slate-700 hover:text-sky-500 transition-colors font-medium cursor-pointer"
                >
                  会社概要
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-2.5 bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-sky-500/25"
                >
                  無料相談
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => navigate('/')}
                  className="text-slate-700 hover:text-sky-500 transition-colors font-medium flex items-center cursor-pointer"
                >
                  ホームに戻る
                </button>
              </div>
            )}

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && !showBackButton && (
        <div className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => {
                navigate('/what-is-netsuite');
                setIsMenuOpen(false);
              }}
              className="text-2xl text-slate-700 hover:text-sky-500"
            >
              NetSuiteとは
            </button>
            <button
              onClick={() => {
                navigate('/evangsol-strengths');
                setIsMenuOpen(false);
              }}
              className="text-2xl text-slate-700 hover:text-sky-500 transition-colors font-medium"
            >
              EvangSolの強み
            </button>
            <a href="#solutions" className="text-2xl text-slate-700 hover:text-sky-500">
              ソリューション
            </a>
            <button
              onClick={() => {
                navigate('/case-studies');
                setIsMenuOpen(false);
              }}
              className="text-2xl text-slate-700 hover:text-sky-500"
            >
              導入事例
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-2xl text-slate-700 hover:text-sky-500"
            >
              会社概要
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-white rounded-full font-semibold"
            >
              無料相談
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
