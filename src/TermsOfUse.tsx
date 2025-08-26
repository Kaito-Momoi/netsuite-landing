import React from 'react';
import Footer from './components/Footer';

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/EvangSol_logo.png" alt="EvangSol" className="h-10" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">ご利用条件</h1>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 leading-relaxed">
            EvangSol社のウェブサイトには、主に2つの法的文書が掲載されており、基本的なセキュリティと著作権保護を規定しています。
            同社は<strong className="font-semibold">NetSuite導入支援を専門とするITサービス企業</strong>として、2021年2月18日を最終改訂日とする情報セキュリティポリシーと、
            利用条件を公開しています。親会社のエバンテック株式会社が<strong className="font-semibold">ISO/IEC 27001:2022認証</strong>を取得していることは信頼性の証となります。
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">厳格な著作権保護と使用制限</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            EvangSol社の利用条件では、ウェブサイト上のすべての情報が各国の著作権法および各種条約により保護されていることを明確に規定しています。
          </p>
          <ul className="space-y-2 pl-6">
            <li className="text-gray-700 leading-relaxed">
              • <strong className="font-semibold">複製、変更、アップロード、掲載、送信、配布、ライセンシング、販売、出版を含むあらゆる使用</strong>が、事前の承認なく禁止されています
            </li>
            <li className="text-gray-700 leading-relaxed">
              • 私的利用や法的に明示的に許可された範囲を超える使用には、info@evangsol.co.jpへの事前連絡が必須となります
            </li>
            <li className="text-gray-700 leading-relaxed">
              • 外部からのリンクについては事前承認を不要としていますが、リンク設置後にはリンク元URLと担当者の連絡先を通知することを求めています
            </li>
            <li className="text-gray-700 leading-relaxed">
              • ウェブサイト上の情報を転載または引用する場合には、事前の許可申請が必要であり、使用内容によっては拒否される可能性があります
            </li>
            <li className="text-gray-700 leading-relaxed">
              • <strong className="font-semibold">ウェブサイト上に記載されている企業名や製品名はそれぞれの会社の商標または登録商標</strong>です
            </li>
          </ul>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">包括的な免責事項と責任制限</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            利用条件の免責事項セクションでは、同社が<strong className="font-semibold">ウェブサイト情報を予告なく変更する権利</strong>を留保し、
            運営の中断や中止を行う可能性があることを明示しています。これらの変更、中断、中止によって生じる損害について、
            理由の如何を問わず一切の責任を負わないという強力な免責条項が設けられています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            第三者サイトへのリンクについても、各リンク先は各社の責任下で管理されており、
            EvangSol社は<strong className="font-semibold">リンク先の内容や利用により生じた損害について一切責任を負いません</strong>。
            また、リンクの存在が同社による推奨やパートナーシップなどの特別な関係を意味するものではないことも強調されています。
            この包括的な免責条項は、ユーザーがサービス利用時のリスクを十分に理解し、自己責任で判断することを要求しています。
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">情報セキュリティ管理体制の確立</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            情報セキュリティポリシーは、代表取締役の小山利之氏の責任の下で管理されており、
            <strong className="font-semibold">機密性、完全性、可用性</strong>の3つの観点から情報資産を保護する方針を掲げています。
            同社は情報システムの企画、設計、開発、保守運用サービスおよびクラウドサービス（企業向けSaaS）の提供を事業としており、
            ステークホルダーへの責任が特に重要であることを認識しています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            技術革新が急速な分野であることを踏まえ、最新動向に沿った保護対策を講じることを約束し、
            <strong className="font-semibold">情報セキュリティマネジメントシステム（ISMS）</strong>の確立、実施、監査、見直し、維持を体系的に実施しています。
            リスク管理においては、評価と管理への体系的アプローチを採用し、予防的措置として体系的かつ人的な対策を実施することで、
            事故発生時の影響を最小限に抑える体制を構築しています。
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">ISMS認証による信頼性の裏付け</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            親会社であるエバンテック株式会社は、<strong className="font-semibold">JIS Q 27001:2023（ISO/IEC 27001:2022）</strong>の認証を取得しています。
            認証番号はMSA-IS-455で、情報セキュリティマネジメントシステム評価センター（ISR016）により発行されています。
            認証範囲は情報システムに関する企画、設計、開発、保守運用サービスおよびクラウドサービス（企業向けSaaS等）の提供となっており、
            2021年3月29日の初回認証から2027年3月28日まで有効です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            この認証は2023年10月2日にバージョンFA-07 2.0に更新されており、<strong className="font-semibold">継続的な改善プロセス</strong>が機能していることを示しています。
            東京都中央区日本橋本町4-15-11の事業所において、国際標準に準拠した情報セキュリティ管理が実施されていることは、
            顧客にとって重要な信頼指標となります。
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">現代的プライバシー保護基準との乖離</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            調査の結果、EvangSol社のウェブサイトには以下の重要な法的文書が<strong className="font-semibold">存在しない</strong>ことが判明しました。
            専用のプライバシーポリシー、Cookieポリシー、GDPR準拠文書、データ処理契約、サービスレベル契約（SLA）、
            データ保持ポリシー、インシデント対応ポリシー、ユーザー権利に関する文書などが公開されていません。
            これらの欠落は、特に国際的な取引や個人データを扱う業務において、コンプライアンス上の課題となる可能性があります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            個人情報保護については、一般的なセキュリティポリシーの中で言及されているものの、
            <strong className="font-semibold">データ主体の権利</strong>（アクセス、訂正、削除）に関する具体的な手続きや、
            自動化された意思決定に関する開示、国際データ転送の保護措置などの現代的な要求事項への対応が不明確です。
            Cookie使用やトラッキングに関する開示がないことも、透明性の観点から改善の余地があります。
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">利用者が認識すべき重要事項と推奨事項</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            EvangSol社のサービスを利用する際には、以下の点に特に注意が必要です。
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">個人情報の取り扱い</h3>
            <ul className="space-y-2 pl-6">
              <li className="text-gray-700 leading-relaxed">
                • <strong className="font-semibold">個人情報に関する問い合わせはinfo@evangsol.co.jp</strong>に直接連絡する必要があります
              </li>
              <li className="text-gray-700 leading-relaxed">
                • 標準的なプライバシー権行使の手順が公開されていないため、個別対応となります
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">コンテンツ利用</h3>
            <ul className="space-y-2 pl-6">
              <li className="text-gray-700 leading-relaxed">
                • 厳格な著作権保護があり、商用利用や転載には必ず事前許可が必要となります
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">サービスの信頼性</h3>
            <ul className="space-y-2 pl-6">
              <li className="text-gray-700 leading-relaxed">
                • 同社は<strong className="font-semibold">サービス中断や内容変更に対する責任を免責</strong>しています
              </li>
              <li className="text-gray-700 leading-relaxed">
                • 具体的なSLA約束が提供されていません
              </li>
              <li className="text-gray-700 leading-relaxed">
                • 利用者は予告なくサービスが変更される可能性を理解した上で利用する必要があります
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">ビジネス利用における推奨事項</h3>
            <ul className="space-y-2 pl-6">
              <li className="text-gray-700 leading-relaxed">• 契約前に具体的なSLA文書の提供を要求すること</li>
              <li className="text-gray-700 leading-relaxed">• データ保持と削除手順を明確化すること</li>
              <li className="text-gray-700 leading-relaxed">• ビジネス関係においては明確なデータ処理契約を締結すること</li>
              <li className="text-gray-700 leading-relaxed">• サービス条件が予告なく変更される可能性を理解すること</li>
              <li className="text-gray-700 leading-relaxed">• コンプライアンス要件が契約書に明示的に記載されることを確認すること</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed">
            ISMS認証による体系的なセキュリティアプローチは信頼性を提供しますが、
            包括的なプライバシー文書の欠如は、国際的なビジネス関係においてコンプライアンス上の課題となる可能性があることを認識しておく必要があります。
          </p>
        </section>

        <div className="bg-blue-50 p-6 rounded-lg mt-12">
          <p className="text-gray-600 text-sm">
            <strong className="font-semibold">最終更新日：</strong> 2021年2月18日<br />
            <strong className="font-semibold">お問い合わせ：</strong> info@evangsol.co.jp<br />
            <strong className="font-semibold">法的管轄：</strong> 主に日本法に準拠
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfUse;