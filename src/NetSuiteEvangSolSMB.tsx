import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Package, Link, Shield, TrendingUp, Clock, Users, Calculator, Database, Zap, Award, AlertTriangle, X } from 'lucide-react';

const NetSuiteEvangSolSMB: React.FC = () => {
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
          <div className="flex items-center gap-4 lg:gap-6">
            {/* EvangSol ロゴ */}
            <img 
              src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`}
              alt="EvangSol" 
              className="h-10 lg:h-12 w-auto"
            />
            {/* NetSuite Solution Provider ロゴ */}
            <img 
              src={`${process.env.PUBLIC_URL}/logo-oracle-netsuite-solution-provider.png`}
              alt="Oracle NetSuite Solution Provider" 
              className="h-10 lg:h-12 w-auto"
            />
          </div>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="relative container mx-auto px-4 py-12 lg:py-20">
          <div className="max-w-5xl mx-auto">
            {/* 信頼性バッジ */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur rounded-full text-sm">
                <Award className="w-4 h-4 mr-1.5" />
                <span>Oracle NetSuite 公式パートナー</span>
              </div>
              <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur rounded-full text-sm">
                <Shield className="w-4 h-4 mr-1.5" />
                <span>ISO/IEC 27001認証</span>
              </div>
            </div>
            
            <div className="text-center">
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Excel脱却、在庫も粗利も見える化
                <br />
                <span className="text-yellow-300">
                  業務を止めずに導入できる
                </span>
                NetSuite
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-blue-50 max-w-3xl mx-auto">
                販売・在庫・会計をひとつに。最小構成から始めて段階的に拡張。<br />
                既存のECやWMSとも連携できるから、今の業務を止めません
              </p>
              <div className="flex justify-center items-center">
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-base lg:text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center">
                  お問い合わせ
                  <ChevronRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 課題共感セクション */}
      <section id="pains" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 text-gray-900">
              こんなお悩みありませんか？
            </h2>
            <p className="text-center text-gray-600 mb-10">
              バラバラのシステムで、数字が合わない。手作業が多くて、残業が減らない。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="text-red-500 mb-3">
                  <Package size={32} />
                </div>
                <h3 className="font-bold text-base mb-2 text-gray-900">Excel二重入力の限界</h3>
                <p className="text-sm text-gray-600">
                  販売管理とExcelの二重入力。月次締めに1週間かかる
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="text-red-500 mb-3">
                  <Database size={32} />
                </div>
                <h3 className="font-bold text-base mb-2 text-gray-900">販売・在庫・会計が分断</h3>
                <p className="text-sm text-gray-600">
                  システムがバラバラで、リアルタイムに数字が見えない
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="text-red-500 mb-3">
                  <Link size={32} />
                </div>
                <h3 className="font-bold text-base mb-2 text-gray-900">複数サービスの寄せ集め</h3>
                <p className="text-sm text-gray-600">
                  EC・WMS・会計ソフトの連携に毎月コストがかかる
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="text-red-500 mb-3">
                  <Calculator size={32} />
                </div>
                <h3 className="font-bold text-base mb-2 text-gray-900">在庫と粗利が見えない</h3>
                <p className="text-sm text-gray-600">
                  正確な在庫数と商品別の粗利がすぐに把握できない
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解決アプローチセクション */}
      <section id="solution" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                小さく始めて、確実に効果を出す
              </h2>
              <p className="text-lg text-gray-600">
                クイックスタート構成で、まず「手触りのある価値」を実感。<br />
                その後、必要に応じて段階的に機能を拡張できます
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Zap className="text-blue-600" size={28} />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">クイックスタート構成</h3>
                  <p className="text-xs text-gray-600">最小構成で3ヶ月導入<br/>すぐに効果を実感</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Link className="text-purple-600" size={28} />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">既存サービス連携</h3>
                  <p className="text-xs text-gray-600">EC・WMS連携テンプレ<br/>今の業務を止めない</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Calculator className="text-green-600" size={28} />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">自動入金消込</h3>
                  <p className="text-xs text-gray-600">自社開発アドオン<br/>経理作業を大幅削減</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <TrendingUp className="text-orange-600" size={28} />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">段階拡張</h3>
                  <p className="text-xs text-gray-600">将来の拠点追加・越境EC<br/>成長に合わせて拡張</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EvangSolが選ばれる理由セクション */}
      <section id="reasons" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10">
              EvangSolが選ばれる理由
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">短期導入の型がある</h3>
                    <p className="text-gray-300 text-sm">
                      中小企業向けのクイックスタートパッケージで最短3ヶ月導入。必要最小限の構成から始めて、確実に効果を出します
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">連携の安心感</h3>
                    <p className="text-gray-300 text-sm">
                      主要EC・WMS・会計ソフトとの連携テンプレートを保有。AWSサーバーレス基盤で連携コストも最小限に
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">運用が軽い</h3>
                    <p className="text-gray-300 text-sm">
                      専任IT担当不要。現場スタッフだけで日常運用可能。困った時は電話・メールでサポート
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">将来の拡張性</h3>
                    <p className="text-gray-300 text-sm">
                      拠点追加、越境EC、新事業にも対応。成長に合わせて段階的に機能追加できます
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl md:col-span-2">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">セキュリティ・認証の安心</h3>
                    <p className="text-gray-300 text-sm">
                      ISO/IEC 27001認証取得、Oracle NetSuite公式パートナー。大切な経営データを安心してお任せいただけます
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 導入事例セクション */}
      <section id="proof" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 text-gray-900">
              Oracle NetSuite 公式掲載ユーザー事例
            </h2>
            <p className="text-center text-gray-600 mb-10 text-lg">
              NetSuite導入成功事例をご紹介
            </p>
            
            {/* グリーンハウス事例カード */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">株式会社グリーンハウス様</h3>
                    <p className="text-blue-100">電子機器総合メーカー / 従業員205名 / 2024年9月本番稼働</p>
                  </div>
                  <Award className="text-yellow-400" size={40} />
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
                製造業、流通業、サービス業など多様な業界の中堅・中小企業様での導入実績がございます
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">製造業</p>
                  <p className="text-sm text-gray-600">年商50億円規模</p>
                  <p className="text-xs text-gray-500 mt-1">在庫最適化実現</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">卸売業</p>
                  <p className="text-sm text-gray-600">EC連携実現</p>
                  <p className="text-xs text-gray-500 mt-1">リードタイム50%短縮</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">サービス業</p>
                  <p className="text-sm text-gray-600">多拠点管理</p>
                  <p className="text-xs text-gray-500 mt-1">経理作業70%削減</p>
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
      <section id="compare" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-900">
              他社との違い
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="p-3 text-left text-sm">比較項目</th>
                    <th className="p-3 text-center text-sm">汎用ERP導入会社</th>
                    <th className="p-3 text-center text-sm">汎用開発会社</th>
                    <th className="p-3 text-center text-sm bg-blue-600">EvangSol</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b">
                    <td className="p-3 font-medium">導入・開発・連携の一社完結</td>
                    <td className="p-3 text-center">×</td>
                    <td className="p-3 text-center">×</td>
                    <td className="p-3 text-center bg-blue-50 font-bold text-blue-600">◎</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 font-medium">EC・WMS連携テンプレート</td>
                    <td className="p-3 text-center">△</td>
                    <td className="p-3 text-center">△</td>
                    <td className="p-3 text-center bg-blue-50 font-bold text-blue-600">◎</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">AWSサーバーレス基盤</td>
                    <td className="p-3 text-center">×</td>
                    <td className="p-3 text-center">△</td>
                    <td className="p-3 text-center bg-blue-50 font-bold text-blue-600">◎</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 font-medium">ISO/IEC 27001認証</td>
                    <td className="p-3 text-center">△</td>
                    <td className="p-3 text-center">△</td>
                    <td className="p-3 text-center bg-blue-50 font-bold text-blue-600">○</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Oracle公式パートナー</td>
                    <td className="p-3 text-center">△</td>
                    <td className="p-3 text-center">×</td>
                    <td className="p-3 text-center bg-blue-50 font-bold text-blue-600">○</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">中小企業向けパッケージ</td>
                    <td className="p-3 text-center">△</td>
                    <td className="p-3 text-center">×</td>
                    <td className="p-3 text-center bg-blue-50 font-bold text-blue-600">◎</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 mt-3 text-xs">
              ◎：強み・充実　○：対応可　△：限定的　×：非対応
            </p>
          </div>
        </div>
      </section>

      {/* 最終CTAセクション */}
      <section id="cta" className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">
              まずは費用感を知りたい方へ
            </h2>
            <p className="text-lg mb-10 text-blue-100">
              貴社の規模・業務に合わせた概算見積を無料でお出しします。<br />
              「うちの規模でも導入できる？」「今のシステムと連携できる？」<br />
              そんな疑問にもお答えします
            </p>
            
            {/* 無料見積で分かること */}
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">無料見積・相談で分かること</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <div className="text-left">
                    <p className="font-semibold">初期費用・月額費用</p>
                    <p className="text-blue-200">貴社規模に合わせた概算</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <div className="text-left">
                    <p className="font-semibold">導入スケジュール</p>
                    <p className="text-blue-200">最短3ヶ月の段階導入案</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <div className="text-left">
                    <p className="font-semibold">既存システム連携</p>
                    <p className="text-blue-200">EC・WMSとの連携方法</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAボタン */}
            <div className="flex justify-center items-center mb-8">
              <button 
                 onClick={() => setShowContactForm(true)}
                 className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center">
                まずは費用感を知る（無料見積）
                <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
            
            {/* 簡易フォーム項目 */}
            <div className="bg-white/5 backdrop-blur p-4 rounded-lg text-sm">
              <p className="text-blue-200 mb-2">【お問い合わせ時にお聞きする項目】</p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <span className="bg-white/10 px-3 py-1 rounded">会社名</span>
                <span className="bg-white/10 px-3 py-1 rounded">お名前</span>
                <span className="bg-white/10 px-3 py-1 rounded">メール</span>
                <span className="bg-white/10 px-3 py-1 rounded">電話番号</span>
                <span className="bg-white/10 px-3 py-1 rounded">従業員規模</span>
                <span className="bg-white/10 px-3 py-1 rounded">現行システム</span>
                <span className="bg-white/10 px-3 py-1 rounded">導入希望時期</span>
              </div>
            </div>
            
            <p className="mt-6 text-xs text-blue-200">
              ※無料見積・ご相談は完全無料。しつこい営業は一切いたしません。<br />
              ※個人情報はISO/IEC 27001に準拠して適切に管理いたします。
            </p>
          </div>
        </div>
      </section>

      {/* メタ情報コメント */}
      {/* 
        title: "NetSuite導入で脱Excel | EvangSol" (24文字)
        meta description: "中小企業のNetSuite導入を最短3ヶ月で実現。販売・在庫・会計を統合し、Excel二重入力から脱却。EC・WMS連携テンプレで業務を止めない導入。グリーンハウス様はリードタイム1/10短縮。無料見積受付中。" (104文字)
      */}

      {/* お問い合わせフォームモーダル */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">無料見積・ご相談</h3>
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
                <p className="text-sm font-semibold text-gray-900 border-b pb-2">必須項目（これだけでOK！）</p>
                
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
                <p className="text-sm font-semibold text-gray-600 border-b pb-2">任意項目（より正確な見積のため）</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      従業員規模
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">選択してください</option>
                      <option value="1-20">1-20名</option>
                      <option value="21-50">21-50名</option>
                      <option value="51-100">51-100名</option>
                      <option value="101-300">101-300名</option>
                      <option value="301+">301名以上</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      年商規模
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">選択してください</option>
                      <option value="<10">10億円未満</option>
                      <option value="10-30">10-30億円</option>
                      <option value="30-50">30-50億円</option>
                      <option value="50-100">50-100億円</option>
                      <option value="100+">100億円以上</option>
                    </select>
                  </div>
                </div>

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

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    現在お使いのシステム
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Excel、弥生、freee、販売管理システムなど"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    お困りごと・ご相談内容
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="現在の課題、NetSuiteに期待すること、気になる点など"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  id="privacy-smb"
                  className="mt-1 mr-2"
                />
                <label htmlFor="privacy-smb" className="text-sm text-gray-600">
                  <a href="/privacy" target="_blank" className="text-blue-600 hover:underline">個人情報保護方針</a>に同意の上、送信します。
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 rounded-lg font-bold transition-all"
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

export default NetSuiteEvangSolSMB;