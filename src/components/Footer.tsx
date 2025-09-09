import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t-2 border-slate-200 py-16 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
              alt="EvangSol"
              className="h-12 mb-4"
            />
            <p className="text-slate-700 text-base font-medium">Oracle NetSuite認定パートナー</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-900">コンテンツ</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate('/what-is-netsuite')}
                  className="text-base text-slate-700 hover:text-blue-600 hover:underline transition-all text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                >
                  NetSuiteとは
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/evangsol-strengths')}
                  className="text-base text-slate-700 hover:text-blue-600 hover:underline transition-all text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                >
                  EvangSolの強み
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/case-studies')}
                  className="text-base text-slate-700 hover:text-blue-600 hover:underline transition-all text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                >
                  導入事例
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-900">会社情報</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="text-base text-slate-700 hover:text-blue-600 hover:underline transition-all text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                >
                  ホーム
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="text-base text-slate-700 hover:text-blue-600 hover:underline transition-all text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                >
                  会社概要
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-900">お問い合わせ</h3>
            <div className="space-y-3">
              <p className="flex items-center text-base text-slate-700">
                <Mail className="w-5 h-5 mr-3 text-blue-600" aria-hidden="true" />
                <a
                  href="mailto:info@evangsol.co.jp"
                  className="font-medium hover:text-blue-600 hover:underline"
                >
                  info@evangsol.co.jp
                </a>
              </p>
              <p className="flex items-center text-base text-slate-700">
                <Clock className="w-5 h-5 mr-3 text-blue-600" aria-hidden="true" />
                <span className="font-medium">平日 9:00-18:00</span>
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-base"
                aria-label="お問い合わせフォームを開く"
              >
                お問い合わせフォームへ
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-slate-200 pt-8 mt-12">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <button
              onClick={() => navigate('/terms')}
              className="text-base text-slate-700 hover:text-blue-600 hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              ご利用条件
            </button>
            <span className="text-slate-400" aria-hidden="true">
              |
            </span>
            <button
              onClick={() => navigate('/security-privacy')}
              className="text-base text-slate-700 hover:text-blue-600 hover:underline transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              情報セキュリティ・個人情報保護
            </button>
          </div>
          <div className="text-center text-slate-700 text-base">
            <p>© 2025 EvangSol Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
