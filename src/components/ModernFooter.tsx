import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Twitter,
  Linkedin,
  Github,
  ArrowUpRight,
  Sparkles,
  Heart,
  Zap,
  Shield,
  Award,
  ChevronRight,
  Send,
  CheckCircle,
  ExternalLink,
  Building2,
  Clock,
  Users,
  Code,
  Rocket
} from 'lucide-react';

const ModernFooter: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  const footerLinks: {
    products: Array<{ label: string; path: string; icon: React.ReactElement }>;
    company: Array<{ label: string; path?: string; href?: string; external?: boolean; icon: React.ReactElement }>;
    resources: Array<{ label: string; path?: string; href?: string; external?: boolean; icon: React.ReactElement }>;
  } = {
    products: [
      { label: 'NetSuite ERP', path: '/what-is-netsuite', icon: <Globe className="w-3 h-3" /> },
      { label: '入金消込ソリューション', path: '/solutions/payment-matching', icon: <CheckCircle className="w-3 h-3" /> },
      { label: 'EC統合', path: '/solutions/ec-integration', icon: <Zap className="w-3 h-3" /> },
      { label: '業界別OMS', path: '/solutions/industry-oms', icon: <Shield className="w-3 h-3" /> },
    ],
    company: [
      { label: 'EvangSolについて', href: 'https://kaito-momoi.github.io/netsuite-landing/evangsol-site-deploy/index.html', external: true, icon: <Building2 className="w-3 h-3" /> },
    ],
    resources: [
      { label: 'セキュリティ', path: '/security-privacy', icon: <Shield className="w-3 h-3" /> },
      { label: '利用規約', path: '/terms', icon: <Globe className="w-3 h-3" /> },
    ],
  };


  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  // Animated particles
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <footer className="relative bg-slate-50 text-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-slate-100"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-transparent to-indigo-200/30"></div>

        {/* Animated particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-slate-400/30 rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b-2 border-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 backdrop-blur-xl rounded-3xl p-12 border-2 border-slate-300 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  最新情報をお届け
                </h3>
                <p className="text-slate-700 font-medium">
                  NetSuiteの最新アップデートや成功事例をメールでお送りします
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 bg-white backdrop-blur border-2 border-slate-300 rounded-full text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-600 shadow-md transition-all"
                  />
                  {subscribed && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <CheckCircle className="w-6 h-6 text-green-400 animate-bounce" />
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:shadow-xl hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                >
                  {subscribed ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      登録完了
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      購読する
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* Main Footer Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-lg opacity-30"></div>
                    <div className="relative bg-white rounded-xl p-3 border-2 border-slate-300 shadow-md">
                      <img
                        src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
                        alt="EvangSol"
                        className="h-8"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed font-medium">
                  NetSuiteの無限の可能性を、圧倒的な開発力で現実に。
                  日本企業のDXを成功に導くパートナーです。
                </p>

              </div>

              {/* Contact Info */}
              <div className="space-y-3 mt-8">
                <a
                  href="mailto:info@evangsol.jp"
                  className="flex items-center gap-3 text-slate-700 hover:text-blue-600 font-medium transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  info@evangsol.jp
                </a>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <Phone className="w-5 h-5" />
                  <span>電話: 03-6231-1328</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <Phone className="w-5 h-5" />
                  <span>FAX: 03-6231-1348</span>
                </div>
                <div className="flex items-start gap-3 text-slate-700 font-medium">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p>東京オフィス・札幌オフィス</p>
                    <p className="text-xs mt-1">全国対応可能</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                企業情報
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.path || link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredLink(link.href!)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors group"
                      >
                        <span className={`transition-all ${hoveredLink === link.href ? 'text-blue-600' : ''}`}>
                          {link.icon}
                        </span>
                        {link.label}
                        <ArrowUpRight className={`w-3 h-3 transition-all ${
                          hoveredLink === link.href ? 'translate-x-1 -translate-y-1 opacity-100' : 'opacity-0'
                        }`} />
                      </a>
                    ) : (
                      <button
                        onClick={() => navigate(link.path!)}
                        onMouseEnter={() => setHoveredLink(link.path!)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors group"
                      >
                        <span className={`transition-all ${hoveredLink === link.path ? 'text-blue-600' : ''}`}>
                          {link.icon}
                        </span>
                        {link.label}
                        <ChevronRight className={`w-3 h-3 transition-all ${
                          hoveredLink === link.path ? 'translate-x-1 opacity-100' : 'opacity-0'
                        }`} />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                リソース
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.path || link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredLink(link.href!)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors group"
                      >
                        <span className={`transition-all ${hoveredLink === link.href ? 'text-blue-600' : ''}`}>
                          {link.icon}
                        </span>
                        {link.label}
                        <ArrowUpRight className={`w-3 h-3 transition-all ${
                          hoveredLink === link.href ? 'translate-x-1 -translate-y-1 opacity-100' : 'opacity-0'
                        }`} />
                      </a>
                    ) : (
                      <button
                        onClick={() => navigate(link.path!)}
                        onMouseEnter={() => setHoveredLink(link.path!)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors group"
                      >
                        <span className={`transition-all ${hoveredLink === link.path ? 'text-blue-600' : ''}`}>
                          {link.icon}
                        </span>
                        {link.label}
                        <ChevronRight className={`w-3 h-3 transition-all ${
                          hoveredLink === link.path ? 'translate-x-1 opacity-100' : 'opacity-0'
                        }`} />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Scroll to Top Only */}
      <div className="relative border-t-2 border-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-600 rounded-full hover:border-indigo-600 shadow-md hover:shadow-lg transition-all hover:scale-110 group"
              aria-label="ページトップへ戻る"
            >
              <svg className="w-5 h-5 text-blue-600 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for Trophy icon (if not available in lucide-react)
const Trophy: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l-2 5l9-11h-5l2-5l-9 11z" />
  </svg>
);

export default ModernFooter;