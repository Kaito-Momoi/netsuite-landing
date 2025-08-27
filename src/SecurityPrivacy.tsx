import React from 'react';
import Footer from './components/Footer';
import { Shield, Lock, FileText, Users, Mail, Phone } from 'lucide-react';

const SecurityPrivacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`} alt="EvangSol" className="h-10" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">情報セキュリティ・個人情報保護について</h1>

        {/* 基本方針 */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 mr-3 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-600">基本方針</h2>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              エバンテック株式会社（以下「当社」といいます）は、お客様の個人情報および企業情報の重要性を認識し、
              情報セキュリティの確保と個人情報の適切な保護を経営の最重要課題の一つとして位置づけています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              当社は、情報セキュリティマネジメントシステム（ISMS）を構築・運用し、
              ISO/IEC 27001:2022の認証を取得することで、国際基準に準拠した情報管理体制を維持しています。
            </p>
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 情報セキュリティ方針 */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Lock className="w-6 h-6 mr-3 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-600">情報セキュリティ方針</h2>
          </div>
          
          <div className="space-y-4">
            <div className="pl-6">
              <h3 className="text-lg font-semibold mb-2">1. 情報セキュリティ管理体制</h3>
              <p className="text-gray-700 leading-relaxed">
                代表取締役 小山利之を最高責任者として、情報セキュリティマネジメントシステムを確立し、
                継続的な改善活動を実施しています。
              </p>
            </div>

            <div className="pl-6">
              <h3 className="text-lg font-semibold mb-2">2. リスク管理</h3>
              <p className="text-gray-700 leading-relaxed">
                情報資産に対するリスクアセスメントを定期的に実施し、識別されたリスクに対して
                適切な管理策を講じることで、セキュリティインシデントの予防に努めています。
              </p>
            </div>

            <div className="pl-6">
              <h3 className="text-lg font-semibold mb-2">3. 法令遵守</h3>
              <p className="text-gray-700 leading-relaxed">
                情報セキュリティに関する法令、規制、契約上のセキュリティ義務を遵守し、
                コンプライアンス体制を維持します。
              </p>
            </div>

            <div className="pl-6">
              <h3 className="text-lg font-semibold mb-2">4. 教育・訓練</h3>
              <p className="text-gray-700 leading-relaxed">
                全従業員に対して定期的な情報セキュリティ教育を実施し、
                セキュリティ意識の向上と知識の習得を図っています。
              </p>
            </div>

            <div className="pl-6">
              <h3 className="text-lg font-semibold mb-2">5. 事業継続管理</h3>
              <p className="text-gray-700 leading-relaxed">
                重大なセキュリティインシデント発生時においても、事業を継続できる体制を構築し、
                定期的な訓練と見直しを実施しています。
              </p>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 個人情報保護方針 */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 mr-3 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-600">個人情報保護方針</h2>
          </div>
          
          <div className="space-y-4">
            <div className="pl-6">
              <h3 className="text-lg font-semibold mb-2">1. 個人情報の収集</h3>
              <p className="text-gray-700 leading-relaxed">
                個人情報の収集にあたっては、利用目的を明確にし、その目的の達成に必要な範囲内で、
                適法かつ公正な手段により収集します。
              </p>
            </div>

            <div className="pl-6">
              <h3 className="text-lg font-semibold mb-2">2. 個人情報の利用</h3>
              <p className="text-gray-700 leading-relaxed">
                収集した個人情報は、あらかじめ明示した利用目的の範囲内でのみ利用し、
                目的外利用が生じないよう適切な管理を実施します。
              </p>
            </div>

            <div className="pl-6">
              <h3 className="text-lg font-semibold mb-2">3. 個人情報の提供</h3>
              <p className="text-gray-700 leading-relaxed">
                法令に基づく場合を除き、ご本人の同意を得ることなく、
                個人情報を第三者に提供することはありません。
              </p>
            </div>

            <div className="pl-6">
              <h3 className="text-lg font-semibold mb-2">4. 個人情報の管理</h3>
              <p className="text-gray-700 leading-relaxed">
                個人情報の正確性を保ち、安全に管理するために、不正アクセス、紛失、破壊、
                改ざん及び漏洩などのリスクに対して、適切な予防措置を講じます。
              </p>
            </div>

            <div className="pl-6">
              <h3 className="text-lg font-semibold mb-2">5. 個人情報の開示・訂正・削除</h3>
              <p className="text-gray-700 leading-relaxed">
                ご本人から個人情報の開示、訂正、削除等のご請求があった場合は、
                法令に基づき適切に対応いたします。
              </p>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 個人情報の取り扱いについて */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 mr-3 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-600">個人情報の取り扱いについて</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">利用目的</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                当社は、以下の目的で個人情報を利用いたします：
              </p>
              <ul className="space-y-2 pl-6">
                <li className="text-gray-700 leading-relaxed">
                  • NetSuite導入支援サービスの提供および運用サポート
                </li>
                <li className="text-gray-700 leading-relaxed">
                  • お客様からのお問い合わせへの対応
                </li>
                <li className="text-gray-700 leading-relaxed">
                  • セミナー、イベントのご案内
                </li>
                <li className="text-gray-700 leading-relaxed">
                  • 新サービスや有益な情報のご提供
                </li>
                <li className="text-gray-700 leading-relaxed">
                  • サービス改善のための分析・統計処理
                </li>
                <li className="text-gray-700 leading-relaxed">
                  • 契約の履行および契約後のサポート
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">収集する情報</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                当社が収集する個人情報には以下が含まれます：
              </p>
              <ul className="space-y-2 pl-6">
                <li className="text-gray-700 leading-relaxed">• 氏名、会社名、部署名、役職</li>
                <li className="text-gray-700 leading-relaxed">• メールアドレス、電話番号</li>
                <li className="text-gray-700 leading-relaxed">• 住所（会社所在地）</li>
                <li className="text-gray-700 leading-relaxed">• お問い合わせ内容、ご相談内容</li>
                <li className="text-gray-700 leading-relaxed">• セミナー参加履歴</li>
                <li className="text-gray-700 leading-relaxed">• サービス利用履歴</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">保管期間</h3>
              <p className="text-gray-700 leading-relaxed">
                収集した個人情報は、利用目的の達成に必要な期間に限り保管し、
                保管の必要がなくなった場合は、速やかに消去または廃棄します。
                ただし、法令により保管が義務付けられている場合は、
                法令で定められた期間保管します。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">安全管理措置</h3>
              <p className="text-gray-700 leading-relaxed">
                当社は、個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために、
                以下の措置を実施しています：
              </p>
              <ul className="space-y-2 pl-6 mt-2">
                <li className="text-gray-700 leading-relaxed">• 組織的安全管理措置（情報セキュリティ管理体制の構築）</li>
                <li className="text-gray-700 leading-relaxed">• 人的安全管理措置（従業員への教育・訓練）</li>
                <li className="text-gray-700 leading-relaxed">• 物理的安全管理措置（施設への入退室管理）</li>
                <li className="text-gray-700 leading-relaxed">• 技術的安全管理措置（アクセス制御、暗号化）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Cookie（クッキー）の使用について</h3>
              <p className="text-gray-700 leading-relaxed">
                当社ウェブサイトでは、お客様により良いサービスを提供するため、
                Cookie を使用することがあります。Cookie の使用を望まれない場合は、
                お使いのブラウザの設定により Cookie を無効にすることができます。
                ただし、Cookie を無効にした場合、一部のサービスがご利用いただけなくなる
                場合があります。
              </p>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* ISMS認証 */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 mr-3 text-green-600" />
            <h2 className="text-2xl font-bold text-green-600">ISO/IEC 27001:2022 認証取得</h2>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">認証番号</p>
                <p className="font-semibold text-gray-800">MSA-IS-455</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">認証機関</p>
                <p className="font-semibold text-gray-800">情報セキュリティマネジメントシステム評価センター（ISR016）</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">認証範囲</p>
                <p className="font-semibold text-gray-800">情報システムの企画、設計、開発、保守運用サービスおよびクラウドサービス（企業向けSaaS等）の提供</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">有効期限</p>
                <p className="font-semibold text-gray-800">2027年3月28日</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              当社は国際標準規格であるISO/IEC 27001:2022の認証を取得し、
              情報セキュリティマネジメントシステムの継続的な改善に取り組んでいます。
            </p>
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* お問い合わせ窓口 */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Mail className="w-6 h-6 mr-3 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-600">お問い合わせ窓口</h2>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              当社の情報セキュリティ・個人情報保護に関するお問い合わせは、
              下記の窓口にて承っております。
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <strong className="text-gray-800 w-32">会社名：</strong>
                <span className="text-gray-700">エバンテック株式会社</span>
              </div>
              <div className="flex items-center">
                <strong className="text-gray-800 w-32">所在地：</strong>
                <span className="text-gray-700">〒103-0023 東京都中央区日本橋本町4-15-11</span>
              </div>
              <div className="flex items-center">
                <strong className="text-gray-800 w-32">担当部署：</strong>
                <span className="text-gray-700">情報セキュリティ管理責任者</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-sky-500" />
                <strong className="text-gray-800 mr-4">メール：</strong>
                <a href="mailto:info@evangsol.co.jp" className="text-sky-500 hover:underline">
                  info@evangsol.co.jp
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-sky-500" />
                <strong className="text-gray-800 mr-4">電話：</strong>
                <span className="text-gray-700">03-6231-1328</span>
              </div>
              <div className="flex items-start">
                <strong className="text-gray-800 w-32">受付時間：</strong>
                <span className="text-gray-700">平日 9:00～18:00（土日祝日を除く）</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>個人情報の開示等のご請求について：</strong><br />
                ご本人様からの個人情報の開示、訂正、削除等のご請求については、
                ご本人様確認をさせていただいた上で、適切に対応させていただきます。
                詳細は上記お問い合わせ窓口までご連絡ください。
              </p>
            </div>
          </div>
        </section>

        {/* 最終更新日 */}
        <div className="bg-blue-50 p-6 rounded-lg mt-12">
          <p className="text-gray-600 text-sm">
            <strong className="font-semibold">制定日：</strong> 2021年2月18日<br />
            <strong className="font-semibold">最終改訂日：</strong> 2024年12月1日<br />
            <strong className="font-semibold">次回見直し予定：</strong> 2025年12月
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SecurityPrivacy;