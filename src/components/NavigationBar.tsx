import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NavigationProps } from '../types';

const NavigationBar: React.FC<NavigationProps> = React.memo(
  ({ showBackButton = true, variant = 'page' }) => {
    const navigate = useNavigate();

    return (
      <nav
        className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200"
        role="navigation"
        aria-label="メインナビゲーション"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/')}
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2"
                aria-label="ホームページへ戻る"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
                  alt="EvangSol"
                  className="h-12"
                />
              </button>
              <span className="text-sm text-slate-700 font-medium border-l-2 border-slate-300 ml-4 pl-4">
                Oracle NetSuite認定パートナー
              </span>
            </div>

            <div className="flex items-center gap-4">
              <nav className="hidden lg:flex items-center gap-2" role="menubar">
                <button
                  onClick={() => navigate('/what-is-netsuite')}
                  className="px-4 py-2 text-base text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                  role="menuitem"
                >
                  NetSuiteとは
                </button>
                <button
                  onClick={() => navigate('/evangsol-strengths')}
                  className="px-4 py-2 text-base text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                  role="menuitem"
                >
                  EvangSolの強み
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-4 py-2 text-base text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  role="menuitem"
                >
                  お問い合わせ
                </button>
              </nav>

              {showBackButton && variant === 'page' && (
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center px-5 py-2.5 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="前のページに戻る"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
                  戻る
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
);

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
