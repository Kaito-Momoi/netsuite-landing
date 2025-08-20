import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Send, User, Building, MessageSquare, CheckCircle, Clock } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで実際のフォーム送信処理を行う
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // 3秒後にフォームをリセット
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => navigate('/')} 
                className="flex items-center cursor-pointer"
              >
                <img 
                  src="/EvangSol_logo.png" 
                  alt="EvangSol"
                  className="h-12"
                />
              </button>
              <span className="text-xs text-slate-600 border-l border-slate-300 ml-3 pl-3">Oracle NetSuite Solution Provider</span>
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
              お問い合わせ
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              NetSuiteソリューションプロバイダーとして、ERP導入支援から他システムとの連携まで、
              幅広くご提案いたします。お気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">お電話でのお問い合わせ</h3>
                  <p className="text-2xl font-bold text-sky-600">03-6231-1328</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                お急ぎの場合は、お電話にてお問い合わせください。
                <br />営業時間：平日 9:00-18:00
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">メールでのお問い合わせ</h3>
                  <p className="text-lg font-medium text-sky-600">info@evangsol.co.jp</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                24時間受付可能です。
                <br />2営業日以内にご返信いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">お問い合わせフォーム</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  送信完了しました
                </h3>
                <p className="text-slate-600">
                  お問い合わせありがとうございます。
                  <br />担当者より2営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="山田 太郎"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      会社名
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="株式会社〇〇"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="example@company.co.jp"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      電話番号
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="03-1234-5678"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="">選択してください</option>
                    <option value="netsuite">NetSuite導入相談</option>
                    <option value="system">システム連携相談</option>
                    <option value="support">運用サポート</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="お問い合わせ内容をご記入ください。WMS（倉庫管理システム）やECサイトとの連携など、具体的なご要望がございましたら、詳しくお聞かせください。"
                    />
                  </div>
                </div>

                <div className="bg-sky-50 rounded-lg p-4">
                  <p className="text-sm text-slate-600">
                    ※ お問い合わせ内容を確認後、担当者よりご連絡させていただきます。
                    <br />
                    ※ お急ぎの場合は、お電話（03-6231-1328）にてお問い合わせください。
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-sky-500/25 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  送信する
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Services Info */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            サービス内容
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-slate-700 mb-6 leading-relaxed">
              NetSuiteソリューションプロバイダーとして、ERP以外にも多くのシステム開発プロジェクトに携わってまいりました。
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">NetSuite導入支援</h3>
                  <p className="text-slate-600 text-sm">
                    要件定義から導入、運用まで一貫してサポートいたします
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">システム連携</h3>
                  <p className="text-slate-600 text-sm">
                    WMS（倉庫管理システム）、ECサイトなど他システムとの自動連携を実現します
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">幅広いご提案</h3>
                  <p className="text-slate-600 text-sm">
                    お客様のビジネスに最適なソリューションをご提案いたします
                  </p>
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

export default Contact;