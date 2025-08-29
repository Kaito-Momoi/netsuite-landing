import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Database,
  CheckCircle,
  Package,
  Scan,
  MapPin,
  Smartphone,
  Target,
  Settings,
  Zap
} from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import { Feature, StatItem } from './types';

const WarehouseIntegration: React.FC = () => {
  const navigate = useNavigate();

  const features: Feature[] = [
    {
      icon: <Scan className="w-8 h-8" />,
      title: "スキャンシステム",
      description: "ハンディターミナルでのスキャンにより99.9%の精度で正確な入出荷処理を実現"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "リアルタイム同期",
      description: "倉庫管理システムとNetSuiteをリアルタイムで同期し、在庫精度99.9%を達成"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "ロケーション管理",
      description: "倉庫内の棚番地管理でピッキング時間6割短縮を実現"
    }
  ];

  const detailedFeatures: Feature[] = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "多様なデバイス対応",
      description: "ハンディターミナル、タブレット、音声ピッキングなど多様なデバイスに対応"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "高精度ピッキング",
      description: "バーコード・QRコードスキャンで誤出荷率を0.01%以下に抑制"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "モバイル対応",
      description: "スマートフォンやタブレットでの作業が可能、場所を選ばない柔軟性"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "WMS連携",
      description: "主要WMSベンダーとの標準連携で既存システムを活用"
    }
  ];

  const stats: StatItem[] = [
    { value: "99.9%", label: "在庫精度", description: "バーコード管理による精度向上" },
    { value: "60%", label: "作業時間短縮", description: "ピッキング効率の改善" },
    { value: "80%", label: "誤出荷削減", description: "スキャンによる検品強化" },
    { value: "リアルタイム", label: "在庫可視化", description: "即時の在庫情報更新" }
  ];

  const operations = [
    { operation: "入荷", tasks: ["入荷予定照会", "検品処理", "入庫指示", "ロケーション登録"] },
    { operation: "出荷", tasks: ["出荷指示確認", "ピッキングリスト", "検品・梱包", "出荷確定"] },
    { operation: "棚卸", tasks: ["棚卸指示", "実地棚卸", "差異確認", "在庫調整"] },
    { operation: "移動", tasks: ["ロケーション移動", "倉庫間移動", "返品処理", "在庫振替"] }
  ];

  const integrationSystems = [
    { name: "主要WMS", description: "国内主要WMSとの標準連携" },
    { name: "ハンディターミナル", description: "各種メーカー対応" },
    { name: "RFID", description: "RFIDタグ読み取り対応" },
    { name: "自動倉庫", description: "AS/RS連携可能" },
    { name: "音声ピッキング", description: "音声認識システム対応" },
    { name: "AGV/AMR", description: "搬送ロボット連携" }
  ];

  // removed unused caseStudies

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <NavigationBar showBackButton={true} variant="page" />


      {/* 3つの主要機能 */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
              倉庫作業をスマート化する革新的ソリューション
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100">
                  <div className="bg-gradient-to-br from-sky-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 詳細機能 */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              主な機能
            </h2>
            <p className="text-xl text-slate-600">倉庫業務を革新する充実の機能群</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-sky-400">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-3 rounded-lg mr-4">
                    <div className="text-sky-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応業務プロセス */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              対応業務プロセス
            </h2>
            <p className="text-xl text-slate-600">全ての倉庫業務を包括的にサポート</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operations.map((op, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-slate-200 hover:border-sky-400">
                <h3 className="text-lg font-bold mb-4 text-slate-900 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-sky-600" />
                  {op.operation}
                </h3>
                <ul className="space-y-2">
                  {op.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 連携システム */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              連携可能システム
            </h2>
            <p className="text-xl text-slate-600">主要ベンダーとの標準連携で既存システムを活用</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {integrationSystems.map((system, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center border border-slate-200 hover:border-sky-400">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{system.name}</h3>
                <p className="text-sm text-slate-600">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入効果 Stats Section */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 relative overflow-hidden">
        <StatsSection 
          title="導入効果"
          stats={stats}
          variant="gradient"
        />
      </section>

      {/* プロセスフロー */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              導入プロセス
            </h2>
            <p className="text-xl text-slate-600">スムーズな導入と確実な運用開始</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "STEP 1", title: "業務分析", description: "現在の倉庫オペレーションと課題の把握", icon: <Target className="w-6 h-6" /> },
              { step: "STEP 2", title: "機器選定", description: "ハンディターミナル等の機器選定", icon: <Database className="w-6 h-6" /> },
              { step: "STEP 3", title: "連携構築", description: "WMSとNetSuiteのシステム連携", icon: <Settings className="w-6 h-6" /> },
              { step: "STEP 4", title: "運用開始", description: "トレーニングとサポート", icon: <Zap className="w-6 h-6" /> }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 border border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-4 mx-auto">
                    <div className="text-white">
                      {process.icon}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-sky-600 mb-2">{process.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-slate-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <CTASection
          title={<>倉庫作業のデジタル化で<br />物流を今すぐ革新しませんか？</>}
          description="詳細な情報や無料相談をご希望の方はお気軽にお問い合わせください"
          primaryButtonText="無料相談を予約する"
          primaryButtonAction={() => navigate('/contact')}
          secondaryButtonText="他のソリューションを見る"
          secondaryButtonAction={() => navigate('/netsuite/solutions')}
          gradient="from-sky-500 to-blue-600"
        />
      </section>

      <Footer />
    </div>
  );
};

export default WarehouseIntegration;
