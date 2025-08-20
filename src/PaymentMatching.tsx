import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Users,
  Database,
  Shield,
  Zap,
  BarChart3
} from 'lucide-react';

const PaymentMatching: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900 mr-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              戻る
            </button>
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                EvangSol
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            入金消込ソリューション
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NetSuiteの標準機能を活用した効率的な入金消込プロセスで、
            経理業務の自動化と精度向上を実現します
          </p>
        </div>

        {/* 特徴カード */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">自動マッチング</h3>
            <p className="text-gray-600">
              AIを活用した高精度な自動マッチング機能により、手作業を最小限に抑えます
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">リアルタイム処理</h3>
            <p className="text-gray-600">
              銀行データとの連携により、入金情報をリアルタイムで処理・消込が可能です
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">可視化レポート</h3>
            <p className="text-gray-600">
              消込状況や未消込残高を一目で把握できるダッシュボードを提供します
            </p>
          </div>
        </div>

        {/* 機能詳細 */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Database className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">銀行データ自動取込</h4>
                <p className="text-gray-600">
                  複数の銀行フォーマットに対応し、自動でデータを取り込みます
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">高精度マッチング</h4>
                <p className="text-gray-600">
                  請求書番号、金額、顧客名など複数の条件で自動マッチング
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">処理時間短縮</h4>
                <p className="text-gray-600">
                  従来の手作業と比較して80%以上の時間削減を実現
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">内部統制強化</h4>
                <p className="text-gray-600">
                  承認ワークフローと監査ログで内部統制を強化
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 導入効果 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">導入効果</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">80%</div>
              <p className="text-blue-100">処理時間削減</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.5%</div>
              <p className="text-blue-100">マッチング精度</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <p className="text-blue-100">コスト削減</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            入金消込業務を効率化しませんか？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            詳細な資料や無料相談をご希望の方はお気軽にお問い合わせください
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              お問い合わせ
            </button>
            <button
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              資料ダウンロード
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMatching;