import React, { useState, useEffect } from 'react';

const ModernFooter: React.FC = React.memo(() => {

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
            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="mb-6 space-y-4">
                  <img
                    src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
                    alt="EvangSol"
                    className="h-12 w-auto"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/NS24_Partner-Lockups_Solution-Provider_Black.png`}
                    alt="Oracle NetSuite Solution Provider"
                    className="h-10 w-auto"
                  />
                </div>
                <p className="text-slate-700 mb-2 leading-relaxed font-medium">
                  NetSuiteの無限の可能性を、圧倒的な開発力で現実に。
                </p>
                <p className="text-slate-700 leading-relaxed font-medium">
                  日本企業のDXを成功に導くパートナーです。
                </p>
                <p className="text-slate-600 text-sm mt-6">
                  © 2025 EvangSol Inc. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

ModernFooter.displayName = 'ModernFooter';

export default ModernFooter;
