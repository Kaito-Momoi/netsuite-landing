import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Globe,
  ArrowUpRight,
  Zap,
  Shield,
  ChevronRight,
  Building2
} from 'lucide-react';

const ModernFooter: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);


  const footerLinks: {
    products: Array<{ label: string; path: string; icon: React.ReactElement }>;
    company: Array<{ label: string; path?: string; href?: string; external?: boolean; icon: React.ReactElement }>;
  } = {
    products: [
      { label: 'NetSuite ERP', path: '/what-is-netsuite', icon: <Globe className="w-3 h-3" /> },
      { label: '入金消込ソリューション', path: '/solutions/payment-matching', icon: <Zap className="w-3 h-3" /> },
      { label: 'EC統合', path: '/solutions/ec-integration', icon: <Zap className="w-3 h-3" /> },
      { label: '業界別OMS', path: '/solutions/industry-oms', icon: <Shield className="w-3 h-3" /> },
    ],
    company: [
      { label: 'EvangSolについて', href: 'https://www.evangsol.co.jp/about', external: true, icon: <Building2 className="w-3 h-3" /> },
      { label: 'お問い合わせ', href: 'https://www.evangsol.co.jp/support', external: true, icon: <Mail className="w-3 h-3" /> },
    ],
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



      {/* Main Footer Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="mb-6">
                  <img
                    src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
                    alt="EvangSol"
                    className="h-12 w-auto"
                  />
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
          </div>
        </div>
      </div>
    </footer>
  );
});

ModernFooter.displayName = 'ModernFooter';

export default ModernFooter;
