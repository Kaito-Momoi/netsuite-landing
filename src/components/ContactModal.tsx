import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  X,
  Mail,
  Phone,
  Building,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  Loader,
  Globe,
  Calendar,
  Clock,
  AlertCircle,
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    type: 'consultation', // consultation, demo, support
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // バリデーション関数
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'お名前を入力してください';
    }

    if (!formData.company.trim()) {
      errors.company = '会社名を入力してください';
    }

    if (!formData.email.trim()) {
      errors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = '有効なメールアドレスを入力してください';
    }

    if (!formData.message.trim()) {
      errors.message = 'お問い合わせ内容を入力してください';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // バリデーション
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS設定確認
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey ||
          serviceId === 'your_service_id' ||
          templateId === 'your_template_id' ||
          publicKey === 'your_public_key') {
        // EmailJSが設定されていない場合は、デモモードで動作
        console.warn('EmailJS is not configured. Running in demo mode.');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form data (demo mode):', formData);
      } else {
        // EmailJS初期化
        emailjs.init(publicKey);

        // お問い合わせタイプの日本語変換
        const typeLabels: Record<string, string> = {
          consultation: '導入相談',
          demo: 'デモ依頼',
          support: 'サポート',
        };

        // EmailJSでメール送信
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_company: formData.company,
            from_email: formData.email,
            from_phone: formData.phone || '未入力',
            message: formData.message,
            contact_type: typeLabels[formData.type] || formData.type,
            to_email: process.env.REACT_APP_CONTACT_EMAIL || 'info@evangsol.jp',
          }
        );
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
          type: 'consultation',
        });
        setValidationErrors({});
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setIsSubmitting(false);
      setError('送信に失敗しました。しばらくしてから再度お試しください。');

      // エラー表示を5秒後に消す
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // 入力時にエラーをクリア
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-gray-200 shadow-2xl animate-slideUp">
        {/* Background decoration */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl"></div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="relative p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">お問い合わせ</h2>
            <p className="text-gray-600">
              NetSuite導入に関するご相談・お見積りは無料です
            </p>
          </div>

          {/* Quick contact options */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: 'consultation', label: '導入相談', icon: <MessageSquare className="w-4 h-4" /> },
              { value: 'demo', label: 'デモ依頼', icon: <Globe className="w-4 h-4" /> },
              { value: 'support', label: 'サポート', icon: <Clock className="w-4 h-4" /> },
            ].map(option => (
              <button
                key={option.value}
                onClick={() => setFormData(prev => ({ ...prev, type: option.value }))}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  formData.type === option.value
                    ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-400 text-blue-700'
                    : 'bg-gray-50 border-gray-300 text-gray-600 hover:border-gray-400'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  {option.icon}
                  <span className="text-sm font-medium">{option.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-11 pr-4 py-3 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        validationErrors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:border-blue-500 focus:bg-gray-50'
                      }`}
                      placeholder="山田 太郎"
                    />
                  </div>
                  {validationErrors.name && (
                    <p className="mt-1 text-xs text-red-600">{validationErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-11 pr-4 py-3 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        validationErrors.company
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:border-blue-500 focus:bg-gray-50'
                      }`}
                      placeholder="株式会社サンプル"
                    />
                  </div>
                  {validationErrors.company && (
                    <p className="mt-1 text-xs text-red-600">{validationErrors.company}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-11 pr-4 py-3 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        validationErrors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:border-blue-500 focus:bg-gray-50'
                      }`}
                      placeholder="sample@example.com"
                    />
                  </div>
                  {validationErrors.email && (
                    <p className="mt-1 text-xs text-red-600">{validationErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-gray-50 transition-all duration-300"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={`w-full pl-11 pr-4 py-3 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${
                      validationErrors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:bg-gray-50'
                    }`}
                    placeholder="NetSuite導入について相談したい内容をご記入ください"
                  />
                </div>
                {validationErrors.message && (
                  <p className="mt-1 text-xs text-red-600">{validationErrors.message}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    送信する
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex p-4 bg-green-500/20 rounded-full mb-4">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">送信完了しました</h3>
              <p className="text-gray-600">
                お問い合わせありがとうございます。<br />
                担当者より2営業日以内にご連絡いたします。
              </p>
            </div>
          )}

          {/* Footer info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                営業時間: 平日 9:00-18:00
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@evangsol.jp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;