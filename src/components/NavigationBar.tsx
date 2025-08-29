import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NavigationProps } from '../types';

const NavigationBar: React.FC<NavigationProps> = React.memo(({ 
  showBackButton = true, 
  variant = 'page' 
}) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center cursor-pointer"
            >
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

          <div className="flex items-center space-x-6">
            <nav className="hidden lg:flex space-x-8">
              <button 
                onClick={() => navigate('/netsuite')} 
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                サービス
              </button>
              <button 
                onClick={() => navigate('/about')} 
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                会社概要
              </button>
              <button 
                onClick={() => navigate('/contact')} 
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                お問い合わせ
              </button>
            </nav>

            {showBackButton && variant === 'page' && (
              <button
                onClick={() => navigate(-1)}
                className="flex items-center px-6 py-2 text-slate-600 hover:text-sky-600 bg-slate-50 hover:bg-sky-50 rounded-full transition-all font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                戻る
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
});

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;