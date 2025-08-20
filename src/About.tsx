import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Users, Calendar, Building, Globe, Briefcase, CreditCard, Clock } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  
  const companyInfo = [
    { label: '会社名', value: 'EvangSol Co., Ltd.', icon: <Building className="w-5 h-5" /> },
    { label: '資本金', value: '4,000万円', icon: <CreditCard className="w-5 h-5" /> },
    { label: '代表取締役', value: '小山 敏行 (Toshiyuki Koyama)', icon: <Users className="w-5 h-5" /> },
    { label: '設立', value: '2005年5月', icon: <Calendar className="w-5 h-5" /> },
    { label: '所在地', value: '〒103-0023 東京都中央区日本橋本町4-15-11 一橋ビル6F', icon: <MapPin className="w-5 h-5" /> },
    { label: '電話番号', value: '03-6231-1328', icon: <Phone className="w-5 h-5" /> },
    { label: 'FAX', value: '03-6231-1348', icon: <Phone className="w-5 h-5" /> },
    { label: 'メール', value: 'info@evangsol.co.jp', icon: <Mail className="w-5 h-5" /> },
    { label: 'URL', value: 'https://www.evangsol.co.jp', icon: <Globe className="w-5 h-5" /> },
  ];

  const services = [
    'ERP導入支援',
    'アドオン開発',
    'メンテナンスサポート',
    'システムコンサルティング',
    'ソリューションSIサービス',
    '保守・運用サービス'
  ];

  const memberships = [
    '東京商工会議所（会員番号：C2862590）',
    '関東ITソフトウェア健康保険組合'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <button onClick={() => navigate('/')} className="flex items-center cursor-pointer">
                <img 
                  src="/EvangSol_logo.png" 
                  alt="EvangSol"
                  className="h-12"
                />
              </button>
              <span className="text-xs text-slate-600 border-l border-slate-300 ml-3 pl-3">Oracle NetSuite Partner</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigate('/')}
                className="text-slate-700 hover:text-sky-500 transition-colors font-medium flex items-center cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                ホームに戻る
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Company Profile
            </h1>
            <p className="text-xl text-slate-600">
              2005年設立以来、システムコンサルティングからソリューションまで
            </p>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white">企業情報</h2>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                {companyInfo.map((item, index) => (
                  <div key={index} className="flex items-start border-b border-slate-100 pb-4 last:border-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sky-100 text-sky-600 mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                      <div className="text-lg text-slate-900 font-medium">
                        {item.label === 'URL' ? (
                          <a href={item.value} className="text-sky-600 hover:text-sky-700 transition-colors">
                            {item.value}
                          </a>
                        ) : item.label === 'メール' ? (
                          <a href={`mailto:${item.value}`} className="text-sky-600 hover:text-sky-700 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* TDB Company Code */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center">
                  <span className="text-sm text-slate-500 mr-2">TDB企業コード:</span>
                  <span className="text-lg font-medium text-slate-900">974053657</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="py-16 px-4 bg-sky-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            加入団体
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              {memberships.map((membership, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">{membership}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            事業内容
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                    <Briefcase className="w-4 h-4 text-sky-600" />
                  </div>
                  <span className="text-slate-800 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            アクセス
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7799!2d139.77679!3d35.68958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d0d0d0d0d%3A0x0!2s%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%97%A5%E6%9C%AC%E6%A9%8B%E6%9C%AC%E7%94%BA4-15-11!5e0!3m2!1sja!2sjp!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            <div className="text-center">
              <p className="text-slate-700 mb-2 font-semibold">
                EvangSol Co., Ltd.
              </p>
              <p className="text-slate-700 mb-2">
                〒103-0023 東京都中央区日本橋本町4-15-11
              </p>
              <p className="text-slate-700 mb-4">
                一橋ビル6F
              </p>
              <div className="flex justify-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1 text-sky-500" />
                  <span>03-6231-1328</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1 text-sky-500" />
                  <span>03-6231-1348 (FAX)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="/EvangSol_logo.png" 
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
                <li><a href="#" className="hover:text-sky-500 transition-colors">導入コンサルティング</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">カスタマイズ開発</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">運用サポート</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">会社情報</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <button 
                    onClick={() => navigate('/')}
                    className="hover:text-sky-500 transition-colors"
                  >
                    ホーム
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/about')}
                    className="hover:text-sky-500 transition-colors"
                  >
                    会社概要
                  </button>
                </li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">採用情報</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">お問い合わせ</h3>
              <div className="space-y-2 text-slate-600 text-sm">
                <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-sky-500" />03-6231-1328</p>
                <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-sky-500" />info@evangsol.co.jp</p>
                <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-sky-500" />平日 9:00-18:00</p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors w-full"
                >
                  お問い合わせフォームへ
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-slate-600 text-sm">
            <p>© 2025 EvangSol Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;