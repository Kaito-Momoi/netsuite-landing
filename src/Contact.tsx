import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, Send, User, Building, MessageSquare, CheckCircle, Clock, HeadphonesIcon } from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 実際のAPIエンドポイントに送信する場合はここを変更
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      // 
      // if (!response.ok) {
      //   throw new Error('送信に失敗しました');
      // }
      
      // 現在はデモ用として、ローカルストレージに保存
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      console.log('Form submitted successfully:', formData);
      setIsSubmitted(true);
      
      // 5秒後にフォームをリセット
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
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('送信中にエラーが発生しました。お電話でお問い合わせください。');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <NavigationBar showBackButton={true} variant="page" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 to-blue-300/40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-200/30 to-blue-300/30 rounded-full filter blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <HeroSection
            badge={{
              icon: <MessageSquare className="w-4 h-4 mr-2" />,
              text: "無料相談受付中",
              bgColor: "bg-gradient-to-r from-sky-100 to-blue-100",
              borderColor: "border border-sky-200",
              textColor: "text-sky-700 font-bold"
            }}
            title={
              <>
                <span className="text-slate-900 text-4xl md:text-5xl leading-tight">
                  お問い合わせ
                </span>
                <br />
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent text-4xl md:text-5xl font-black">
                  お気軽にご相談ください
                </span>
              </>
            }
            description={
              <>
                <span className="text-lg text-slate-700">
                  Oracle NetSuite認定パートナーとして
                </span>
                <br />
                <span className="text-lg font-bold text-slate-900">
                  <span className="font-black text-sky-600 text-xl">ERP導入支援</span>から他システムとの連携まで、幅広くご提案
                </span>
              </>
            }
          />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              お問い合わせ方法
            </h2>
            <p className="text-xl text-slate-600">お客様のご都合に合わせてお選びください</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:border-sky-400 transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-sky-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">お電話でのお問い合わせ</h3>
                    <p className="text-2xl font-black text-sky-600">03-6231-1328</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-slate-600 font-medium">お急ぎの場合におすすめ</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-sky-600 mr-2" />
                    <span className="text-sm text-slate-600 font-medium">営業時間：平日 9:00-18:00</span>
                  </div>
                  <div className="flex items-center">
                    <HeadphonesIcon className="w-5 h-5 text-sky-600 mr-2" />
                    <span className="text-sm text-slate-600 font-medium">専門スタッフが対応</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:border-sky-400 transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">メールでのお問い合わせ</h3>
                    <p className="text-lg font-bold text-cyan-600">info@evangsol.co.jp</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-slate-600 font-medium">24時間受付可能</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-cyan-600 mr-2" />
                    <span className="text-sm text-slate-600 font-medium">2営業日以内にご返信</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-cyan-600 mr-2" />
                    <span className="text-sm text-slate-600 font-medium">詳細なご相談が可能</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              お問い合わせフォーム
            </h2>
            <p className="text-xl text-slate-600">以下のフォームからお気軽にお問い合わせください</p>
          </div>
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:border-sky-400 transition-all">
            
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
                        className="w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 hover:border-sky-400 transition-colors"
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
                        className="w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 hover:border-sky-400 transition-colors"
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
                        className="w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 hover:border-sky-400 transition-colors"
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
                        className="w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 hover:border-sky-400 transition-colors"
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
                    className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 hover:border-sky-400 transition-colors"
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
                      className="w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 hover:border-sky-400 transition-colors resize-none"
                      placeholder="お問い合わせ内容をご記入ください。WMS（倉庫管理システム）やECサイトとの連携など、具体的なご要望がございましたら、詳しくお聞かせください。"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-slate-700 space-y-2">
                      <p className="font-medium">お問い合わせ内容を確認後、担当者よりご連絡させていただきます。</p>
                      <p>お急ぎの場合は、お電話（<span className="font-bold text-sky-600">03-6231-1328</span>）にてお問い合わせください。</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 hover:from-sky-600 hover:via-blue-600 hover:to-sky-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-2xl hover:shadow-sky-500/40 flex items-center justify-center text-lg relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <span className="relative flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    送信する
                  </span>
                </button>
              </form>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              サービス内容
            </h2>
            <p className="text-xl text-slate-600">Oracle NetSuite認定パートナーとしての幅広いサポート</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:border-sky-400 transition-all">
            <p className="text-lg text-slate-700 mb-8 leading-relaxed text-center">
              Oracle NetSuite認定パートナーとして、ERP以外にも多くのシステム開発プロジェクトに携わってまいりました。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group">
                <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-4 rounded-xl mb-4 transition-all group-hover:shadow-lg">
                  <div className="bg-gradient-to-br from-sky-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">NetSuite導入支援</h3>
                <p className="text-slate-600 text-sm text-center leading-relaxed">
                  要件定義から導入、運用まで一貫してサポートいたします
                </p>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-4 rounded-xl mb-4 transition-all group-hover:shadow-lg">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">システム連携</h3>
                <p className="text-slate-600 text-sm text-center leading-relaxed">
                  WMS（倉庫管理システム）、ECサイトなど他システムとの自動連携を実現します
                </p>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-xl mb-4 transition-all group-hover:shadow-lg">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">幅広いご提案</h3>
                <p className="text-slate-600 text-sm text-center leading-relaxed">
                  お客様のビジネスに最適なソリューションをご提案いたします
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;