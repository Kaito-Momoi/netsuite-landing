import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`} 
              alt="EvangSol"
              className="h-10 mb-4"
            />
            <p className="text-slate-600 text-sm">
              Oracle NetSuite認定パートナー
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-slate-900">サービス</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <button 
                  onClick={() => navigate('/#services')}
                  className="hover:text-sky-500 transition-colors text-left"
                >
                  導入支援
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/#services')}
                  className="hover:text-sky-500 transition-colors text-left"
                >
                  カスタマイズ開発
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/#services')}
                  className="hover:text-sky-500 transition-colors text-left"
                >
                  運用サポート
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-slate-900">会社情報</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <button 
                  onClick={() => navigate('/')}
                  className="hover:text-sky-500 transition-colors text-left"
                >
                  ホーム
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/about')}
                  className="hover:text-sky-500 transition-colors text-left"
                >
                  会社概要
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-slate-900">お問い合わせ</h3>
            <div className="space-y-2 text-slate-600 text-sm">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-sky-500" />
                03-6231-1328
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-sky-500" />
                info@evangsol.co.jp
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-sky-500" />
                平日 9:00-18:00
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors w-full"
              >
                お問い合わせフォームへ
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            <button 
              onClick={() => navigate('/terms')}
              className="text-slate-600 hover:text-sky-500 transition-colors"
            >
              ご利用条件
            </button>
            <span className="text-slate-400">|</span>
            <button 
              onClick={() => navigate('/security-privacy')}
              className="text-slate-600 hover:text-sky-500 transition-colors whitespace-nowrap"
            >
              情報セキュリティ・個人情報保護
            </button>
          </div>
          <div className="text-center text-slate-600 text-sm">
            <p>© 2025 EvangSol Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;