import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Users,
  Calendar,
  Building,
  Globe,
  CreditCard,
  Award,
  Shield,
  CheckCircle,
  Briefcase,
} from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const About: React.FC = () => {
  const navigate = useNavigate();

  const companyInfo = [
    { label: '会社名', value: 'EvangSol Co., Ltd.', icon: <Building className="w-5 h-5" /> },
    { label: '資本金', value: '4,000万円', icon: <CreditCard className="w-5 h-5" /> },
    {
      label: '代表取締役',
      value: '小山 敏行 (Toshiyuki Koyama)',
      icon: <Users className="w-5 h-5" />,
    },
    { label: '設立', value: '2005年5月', icon: <Calendar className="w-5 h-5" /> },
    {
      label: '所在地',
      value: '〒103-0023 東京都中央区日本橋本町4-15-11 一橋ビル6F',
      icon: <MapPin className="w-5 h-5" />,
    },
    { label: 'メール', value: 'info@evangsol.co.jp', icon: <Mail className="w-5 h-5" /> },
    { label: 'URL', value: 'https://www.evangsol.co.jp', icon: <Globe className="w-5 h-5" /> },
  ];

  const services = [
    '導入支援',
    'カスタマイズ開発',
    '運用サポート',
    'システムコンサルティング',
    'ソリューションSIサービス',
    'データ移行支援',
  ];

  const memberships = ['東京商工会議所（会員番号：C2862590）', '関東ITソフトウェア健康保険組合'];

  const goContact = useCallback(() => navigate('/contact'), [navigate]);
  const goNetSuite = useCallback(() => navigate('/netsuite'), [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <NavigationBar showBackButton={true} variant="page" />

      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">会社概要</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              2005年設立以来、システムコンサルティングからNetSuite導入までワンストップでサポート
            </p>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">企業情報</h2>
            <p className="text-xl text-slate-600">確かな実績と信頼の企業プロフィール</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Building className="w-6 h-6 mr-2" />
                会社詳細
              </h3>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                {companyInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start border-b border-slate-100 pb-4 last:border-0"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sky-100 text-sky-600 mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                      <div className="text-lg text-slate-900 font-medium">
                        {item.label === 'URL' ? (
                          <a
                            href={item.value}
                            className="text-sky-600 hover:text-sky-700 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : item.label === 'メール' ? (
                          <a
                            href={`mailto:${item.value}`}
                            className="text-sky-600 hover:text-sky-700 transition-colors"
                          >
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

      {/* Services & Memberships Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900">
            サービス・加入団体
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12">提供サービスと所属団体</p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:border-sky-400 transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">提供サービス</h3>
              </div>
              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:border-sky-400 transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">認定・加入団体</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Oracle NetSuite認定パートナー</span>
                </div>
                {memberships.map((membership) => (
                  <div key={membership} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{membership}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">アクセス</h2>
            <p className="text-xl text-slate-600">東京都心の好立地でお客様をお待ちしております</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7799!2d139.77679!3d35.68958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d0d0d0d0d%3A0x0!2s%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%97%A5%E6%9C%AC%E6%A9%8B%E6%9C%AC%E7%94%BA4-15-11!5e0!3m2!1sja!2sjp!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
                title="EvangSol オフィス所在地 - 東京都中央区日本橋本町"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-sky-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">住所</p>
                  <p className="text-slate-700">
                    〒103-0023
                    <br />
                    東京都中央区日本橋本町4-15-11
                    <br />
                    一橋ビル6F
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Building className="w-5 h-5 text-sky-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">最寄り駅</p>
                  <p className="text-slate-700">
                    地下鉄神田駅・小伝馬町駅から徒歩5分
                    <br />
                    JR神田駅から徒歩7分
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 flex justify-center">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-sky-500" />
                <a href="mailto:info@evangsol.co.jp" className="text-sky-600 hover:text-sky-700 transition-colors">
                  info@evangsol.co.jp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <CTASection
          title={<>NetSuite導入をご検討の方へ</>}
          description="20年の経験と実績で、貴社のDXを成功に導きます"
          primaryButtonText="無料相談を予約する"
          primaryButtonAction={goContact}
          secondaryButtonText="NetSuiteの詳細を見る"
          secondaryButtonAction={goNetSuite}
          gradient="from-sky-500 to-blue-600"
        />
      </section>

      <Footer />
    </div>
  );
};

export default About;
