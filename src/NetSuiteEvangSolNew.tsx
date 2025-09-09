import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Globe, Server, Shield, TrendingUp, Clock, Users, AlertTriangle, Zap, BarChart3, Award, Lock, Layers, Database, X } from 'lucide-react';

const NetSuiteEvangSolNew: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理
    alert('お問い合わせを受け付けました。担当者より連絡させていただきます。');
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 固定ロゴヘッダー */}
      <div className="fixed top-0 left-0 z-50">
        <div className="p-4">
          <div className="flex items-center gap-6">
            {/* EvangSol ロゴ */}
            <img 
              src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
              alt="EvangSol" 
              className="h-12 w-auto"
            />
            {/* NetSuite Solution Provider ロゴ */}
            <img 
              src={`${process.env.PUBLIC_URL}/logo-oracle-netsuite-solution-provider.png`}
              alt="Oracle NetSuite Solution Provider" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto">
            {/* 信頼性バッジ */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20">
                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-sm font-semibold">Oracle NetSuite 公式パートナー</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20">
                <Lock className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm font-semibold">ISO/IEC 27001認証取得</span>
              </div>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                グローバル企業の複雑な要件を
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  NetSuiteで解決
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
                多拠点・多通貨・リアルタイム連結を実現するNetSuite OneWorld。<br />
                導入から開発、AWS連携まで一社完結でTCOを最適化
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl inline-flex items-center">
                  お問い合わせ
                  <ChevronRight className="ml-2" size={24} />
                </button>
                <a href="#proof" className="bg-white/10 backdrop-blur border-2 border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all inline-flex items-center">
                  事例・資料を受け取る
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 課題共感セクション */}
      <section id="pains" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
              大手企業のERP刷新でよくある課題
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              複数拠点・多通貨環境でのガバナンス統制にお悩みではありませんか？
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Globe className="text-red-500 mb-4" size={40} />
                <h3 className="font-bold text-lg mb-3 text-gray-900">グローバル統制の限界</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 海外拠点の可視化遅延</li>
                  <li>• IFRS対応の複雑化</li>
                  <li>• 本社統制の弱体化</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Layers className="text-red-500 mb-4" size={40} />
                <h3 className="font-bold text-lg mb-3 text-gray-900">分断されたシステム</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 基幹と承認WFの分離</li>
                  <li>• 部門別システム乱立</li>
                  <li>• データ整合性の欠如</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Server className="text-red-500 mb-4" size={40} />
                <h3 className="font-bold text-lg mb-3 text-gray-900">ETL/連携の複雑さ</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• WMS/EDI/EC連携コスト</li>
                  <li>• 高額なETLツール依存</li>
                  <li>• API管理の煩雑化</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <AlertTriangle className="text-red-500 mb-4" size={40} />
                <h3 className="font-bold text-lg mb-3 text-gray-900">移行リスク</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• SAP EOS対応の緊急性</li>
                  <li>• データ移行の失敗リスク</li>
                  <li>• 業務停止の懸念</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解決アプローチセクション */}
      <section id="solution" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                NetSuite × 外部連携 × 移行ノウハウで解決
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Oracle NetSuiteのOneWorld機能とAWSサーバーレス基盤により、
                大手企業の複雑な要件に対応しながらTCOを最適化します
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-10 rounded-2xl border border-blue-100">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Globe className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">OneWorld</h3>
                  <p className="text-sm text-gray-600">多拠点・多通貨・IFRS対応<br/>リアルタイム連結決算</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">AWSサーバーレス基盤</h3>
                  <p className="text-sm text-gray-600">Lambda/API Gateway<br/>ETLコスト50%削減</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Database className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">移行ノウハウ</h3>
                  <p className="text-sm text-gray-600">SAP/OBIC移行実績<br/>段階移行・並行稼働対応</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">自社アドオン</h3>
                  <p className="text-sm text-gray-600">自動入金消込<br/>日本商慣習対応</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EvangSolが選ばれる理由セクション */}
      <section id="reasons" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
              EvangSolが選ばれる理由
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              導入×開発×連携を一社完結できる唯一のNetSuiteパートナー
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">導入×開発×連携の一社完結</h3>
                    <p className="text-gray-400 text-sm">
                      コンサルから開発・運用まで自社エンジニアが一貫対応。責任所在が明確で、迅速な意思決定と変更対応が可能
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">OneWorld経験とグローバル対応</h3>
                    <p className="text-gray-400 text-sm">
                      多拠点・多通貨・IFRS対応の豊富な実績。リアルタイム連結決算とグループ間取引の自動相殺を実現
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">ISO/IEC 27001認証・公式パートナー</h3>
                    <p className="text-gray-400 text-sm">
                      情報セキュリティの国際規格認証取得。Oracle NetSuite公式パートナーとして最新機能とサポートを提供
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">AWSサーバーレス連携基盤</h3>
                    <p className="text-gray-400 text-sm">
                      Lambda/API Gateway活用でETLコスト50%削減。WMS/EDI/EC等の複雑な連携もスケーラブルに実現
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">SAP/OBIC/スクラッチ移行実績</h3>
                    <p className="text-gray-400 text-sm">
                      大手基幹システムからの移行ノウハウ蓄積。段階移行・並行稼働で業務停止リスクを最小化
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">日本商慣習対応アドオン</h3>
                    <p className="text-gray-400 text-sm">
                      自動入金消込、高度な承認ワークフロー等、日本企業特有の要件に対応した自社開発アドオンを提供
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 導入事例セクション */}
      <section id="proof" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
              Oracle NetSuite 公式掲載ユーザー事例
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              大手企業のSAPからNetSuiteへの移行成功事例をご紹介
            </p>
            
            {/* グリーンハウス事例カード */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">株式会社グリーンハウス様</h3>
                    <p className="text-blue-100">電子機器総合メーカー / 従業員205名 / 2024年9月本番稼働</p>
                  </div>
                  <Award className="text-yellow-400" size={48} />
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-900 flex items-center">
                      <AlertTriangle className="text-orange-500 mr-2" size={20} />
                      移行前の課題
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        SAP ECC 6.0の2027年末EOS対応が必要
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        基幹システムと申請・承認ワークフローが分断
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        返品管理プロセスの非効率性とガバナンス課題
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-900 flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      導入後の成果
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <strong>申請〜承認のリードタイムを1/10以下に短縮</strong>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        業務の属人化から脱却・部門別採算の集計実現
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        開発者・ユーザーの操作性が大幅向上
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    「返品管理プロセスをNetSuiteに統合することで、申請から承認までのリードタイムが従来の1/10以下に短縮され、
                    業務の効率化が実現しました」
                  </p>
                  <p className="text-right text-gray-600 font-semibold">
                    奥寺貴哉氏（取締役 兼 マーケティング担当執行役員）
                  </p>
                </div>

                {/* 出典表記 */}
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">
                    <strong>出典：</strong>Oracle NetSuite 公式（グリーンハウス様事例）
                    <a href="https://www.netsuite.co.jp/customer-testimonials/greenhouse-manufacturing.shtml" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-blue-600 hover:underline ml-2">
                      詳細はこちら →
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* その他実績 */}
            <div className="mt-12 p-8 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
                その他の導入実績
              </h3>
              <p className="text-center text-gray-600 mb-6">
                製造業、流通業、サービス業など多様な業界の大手企業様での導入実績がございます
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">年商300億+</p>
                  <p className="text-sm text-gray-600">製造業A社</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">拠点15カ国</p>
                  <p className="text-sm text-gray-600">商社B社</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">従業員1,000名</p>
                  <p className="text-sm text-gray-600">サービスC社</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">IFRS対応</p>
                  <p className="text-sm text-gray-600">上場企業D社</p>
                </div>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                ※詳細は個別相談時にご紹介いたします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表セクション */}
      <section id="compare" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
              他社との差別化ポイント
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              大手企業様の要件に対する対応力の違い
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <thead className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <tr>
                    <th className="p-4 text-left font-semibold">比較項目</th>
                    <th className="p-4 text-center font-semibold">一般的なERP導入会社</th>
                    <th className="p-4 text-center font-semibold">一般的な開発会社</th>
                    <th className="p-4 text-center font-semibold bg-blue-600">EvangSol</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="p-4 font-medium bg-gray-50">導入×開発×連携の一社完結</td>
                    <td className="p-4 text-center">×<br/><span className="text-xs text-gray-500">分業体制</span></td>
                    <td className="p-4 text-center">×<br/><span className="text-xs text-gray-500">開発のみ</span></td>
                    <td className="p-4 text-center bg-blue-50 font-bold text-blue-600">◎<br/><span className="text-xs text-gray-600">完全対応</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium bg-gray-50">OneWorld（グローバル統制）</td>
                    <td className="p-4 text-center">○<br/><span className="text-xs text-gray-500">対応可</span></td>
                    <td className="p-4 text-center">×<br/><span className="text-xs text-gray-500">経験なし</span></td>
                    <td className="p-4 text-center bg-blue-50 font-bold text-blue-600">◎<br/><span className="text-xs text-gray-600">豊富な実績</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium bg-gray-50">AWSサーバーレス連携基盤</td>
                    <td className="p-4 text-center">×<br/><span className="text-xs text-gray-500">非対応</span></td>
                    <td className="p-4 text-center">△<br/><span className="text-xs text-gray-500">限定的</span></td>
                    <td className="p-4 text-center bg-blue-50 font-bold text-blue-600">◎<br/><span className="text-xs text-gray-600">専門チーム</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium bg-gray-50">ISO/IEC 27001認証</td>
                    <td className="p-4 text-center">△<br/><span className="text-xs text-gray-500">一部取得</span></td>
                    <td className="p-4 text-center">△<br/><span className="text-xs text-gray-500">一部取得</span></td>
                    <td className="p-4 text-center bg-blue-50 font-bold text-blue-600">○<br/><span className="text-xs text-gray-600">取得済</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium bg-gray-50">Oracle NetSuite公式パートナー</td>
                    <td className="p-4 text-center">○<br/><span className="text-xs text-gray-500">一部</span></td>
                    <td className="p-4 text-center">×<br/><span className="text-xs text-gray-500">非パートナー</span></td>
                    <td className="p-4 text-center bg-blue-50 font-bold text-blue-600">○<br/><span className="text-xs text-gray-600">認定済</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium bg-gray-50">SAP/OBICからの移行実績</td>
                    <td className="p-4 text-center">△<br/><span className="text-xs text-gray-500">少数</span></td>
                    <td className="p-4 text-center">×<br/><span className="text-xs text-gray-500">非対応</span></td>
                    <td className="p-4 text-center bg-blue-50 font-bold text-blue-600">◎<br/><span className="text-xs text-gray-600">豊富</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50">日本商慣習対応アドオン</td>
                    <td className="p-4 text-center">×<br/><span className="text-xs text-gray-500">なし</span></td>
                    <td className="p-4 text-center">△<br/><span className="text-xs text-gray-500">限定的</span></td>
                    <td className="p-4 text-center bg-blue-50 font-bold text-blue-600">○<br/><span className="text-xs text-gray-600">自社開発</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">
              ◎：強み・実績豊富　○：対応可能　△：限定的　×：非対応
            </p>
          </div>
        </div>
      </section>

      {/* 最終CTAセクション */}
      <section id="cta" className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              貴社専用のNetSuite活用戦略を
              <br className="hidden sm:block" />
              ご提案
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-100">
              グローバル展開・システム統合・業務効率化の課題を<br />
              貴社の状況に合わせた最適解でご支援します
            </p>
            
            {/* 相談で得られるもの */}
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl mb-10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">無料相談で明確になること</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">課題の可視化</p>
                    <p className="text-sm text-gray-300">現状分析と改善優先順位の整理</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">投資価値の試算</p>
                    <p className="text-sm text-gray-300">TCO削減効果と導入メリットを数値化</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">実現への道筋</p>
                    <p className="text-sm text-gray-300">リスクを抑えた段階的な導入計画</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <button 
                 onClick={() => setShowContactForm(true)}
                 className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl inline-flex items-center">
                お問い合わせ
                <ChevronRight className="ml-2" size={24} />
              </button>
              <a href="#download" 
                 className="bg-white/10 backdrop-blur border-2 border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all inline-flex items-center">
                事例・資料を受け取る
              </a>
            </div>
            
            {/* フォーム項目の推奨 */}
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl max-w-3xl mx-auto">
              <p className="text-sm text-gray-300 mb-3">【より具体的なご提案のために】</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-white/10 px-4 py-3 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">企業規模</p>
                  <p className="text-sm font-semibold">拠点数・年商</p>
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">現在の課題</p>
                  <p className="text-sm font-semibold">システム・業務</p>
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">目標時期</p>
                  <p className="text-sm font-semibold">導入タイミング</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-2">
              <p className="text-sm text-gray-300">
                <span className="inline-flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  ISO/IEC 27001認証取得済み - 情報は厳重に管理いたします
                </span>
              </p>
              <p className="text-sm text-gray-300">
                ✓ 完全無料・強引な営業なし　✓ オンライン対応可　✓ 守秘義務厳守
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* メタ情報コメント */}
      {/* 
        title: "SAP/OBICからNetSuite移行 | EvangSol" (32文字以内)
        meta description: "大手企業のSAP/OBICからNetSuiteへの移行をリスクゼロで実現。導入×開発×連携を一社完結。OneWorld×AWSサーバーレス基盤でTCO50%削減。グリーンハウス様事例あり。無料相談30分。" (120文字)
      */}

      {/* お問い合わせフォームモーダル */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">無料相談お申し込み</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* 必須項目セクション */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-gray-900 border-b pb-2">必須項目</p>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="株式会社〇〇"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="sample@example.com"
                  />
                </div>
              </div>

              {/* 任意項目セクション */}
              <div className="space-y-4 pt-4">
                <p className="text-sm font-semibold text-gray-600 border-b pb-2">任意項目（より詳しいご提案のため）</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      部署名
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="経営企画部"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      導入希望時期
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">選択してください</option>
                      <option value="immediate">すぐに導入したい</option>
                      <option value="3months">3ヶ月以内</option>
                      <option value="6months">6ヶ月以内</option>
                      <option value="1year">1年以内</option>
                      <option value="undecided">未定・情報収集段階</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      拠点数
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">選択してください</option>
                      <option value="1">1拠点</option>
                      <option value="2-5">2-5拠点</option>
                      <option value="6-10">6-10拠点</option>
                      <option value="11-20">11-20拠点</option>
                      <option value="21+">21拠点以上</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      年商レンジ
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">選択してください</option>
                      <option value="<100">100億円未満</option>
                      <option value="100-300">100-300億円</option>
                      <option value="300-500">300-500億円</option>
                      <option value="500-1000">500-1000億円</option>
                      <option value="1000+">1000億円以上</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    現行基幹システム
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="SAP、OBIC、スクラッチなど"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    ご相談内容
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="NetSuite導入のご検討状況、課題、ご要望などをお聞かせください"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  id="privacy"
                  className="mt-1 mr-2"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  <a href="/privacy" target="_blank" className="text-blue-600 hover:underline">個人情報保護方針</a>に同意の上、送信します。
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-bold transition-all"
                >
                  送信する
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-all"
                >
                  キャンセル
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetSuiteEvangSolNew;