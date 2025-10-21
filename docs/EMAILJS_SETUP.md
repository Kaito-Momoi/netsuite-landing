# EmailJS設定ガイド

このドキュメントでは、お問い合わせフォームを実際に稼働させるためのEmailJS設定手順を説明します。

## 概要

EmailJSは、バックエンドサーバーなしでメールを送信できるサービスです。GitHub PagesやWix iframeなどの静的サイトでも動作し、AWS Amplifyへの移行後も継続使用可能です。

## セットアップ手順

### 1. EmailJSアカウント作成

1. [EmailJS](https://www.emailjs.com/) にアクセス
2. 「Sign Up Free」をクリック
3. メールアドレスとパスワードで登録

### 2. メールサービスの設定

1. ダッシュボードで「Email Services」をクリック
2. 「Add New Service」をクリック
3. サービスプロバイダーを選択（Gmail、Outlookなど）
   - **Gmail推奨**: 設定が簡単で信頼性が高い
4. サービス名を入力（例：`NetSuite_Contact_Service`）
5. 送信元メールアドレスの認証を完了
6. 「Service ID」をコピー（後で使用）

### 3. メールテンプレートの作成

1. ダッシュボードで「Email Templates」をクリック
2. 「Create New Template」をクリック
3. 以下の内容でテンプレートを設定：

#### Subject（件名）
```
NetSuite導入お問い合わせ: {{contact_type}} - {{from_company}}
```

#### To Email（送信先）
```
{{to_email}}
```

#### From Name（送信者名）
```
{{from_name}}
```

#### Reply To（返信先）
```
{{from_email}}
```

#### Content（本文）
```
NetSuiteランディングページからのお問い合わせです。

【お問い合わせタイプ】
{{contact_type}}

【お客様情報】
お名前: {{from_name}}
会社名: {{from_company}}
メールアドレス: {{from_email}}
電話番号: {{from_phone}}

【お問い合わせ内容】
{{message}}

---
このメールはNetSuiteランディングページのお問い合わせフォームから自動送信されました。
```

4. 「Save」をクリック
5. 「Template ID」をコピー（後で使用）

### 4. APIキーの取得

1. ダッシュボードで「Account」→「API Keys」をクリック
2. 「Public Key」をコピー（後で使用）

### 5. 環境変数の設定

#### 開発環境（ローカル）

`.env.local`ファイルを作成し、以下を設定：

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
REACT_APP_CONTACT_EMAIL=info@evangsol.jp
```

#### 本番環境（GitHub Actions）

1. GitHubリポジトリの「Settings」→「Secrets and variables」→「Actions」
2. 以下のシークレットを追加：
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
   - `REACT_APP_CONTACT_EMAIL`

#### AWS Amplify環境

Amplifyコンソールで環境変数を設定：

1. Amplifyアプリを選択
2. 「アプリの設定」→「環境変数」
3. 上記と同じ変数を追加

## テスト方法

### デモモード（EmailJS未設定時）

環境変数が設定されていない、または`your_service_id`などのデフォルト値の場合、フォームはデモモードで動作します：
- フォーム送信は成功したように見える
- 実際のメールは送信されない
- コンソールにフォームデータが出力される

### 本番モード（EmailJS設定済み）

1. 開発サーバーを再起動
   ```bash
   npm start
   ```

2. ブラウザでサイトを開く

3. お問い合わせモーダルを開き、テストデータを入力：
   - お名前: テスト太郎
   - 会社名: テスト株式会社
   - メールアドレス: test@example.com
   - 電話番号: 03-0000-0000
   - お問い合わせ内容: テスト送信です

4. 送信ボタンをクリック

5. 成功メッセージが表示され、設定したメールアドレスにメールが届くことを確認

## トラブルシューティング

### メールが届かない場合

1. **EmailJSダッシュボードで確認**
   - 「Email History」で送信履歴を確認
   - エラーメッセージがないか確認

2. **環境変数の確認**
   - `.env.local`ファイルが正しく設定されているか
   - 開発サーバーを再起動したか

3. **スパムフォルダの確認**
   - 受信メールがスパムフォルダに振り分けられていないか確認

4. **送信制限の確認**
   - 無料プランは月200通まで
   - 制限に達している場合は翌月まで待つか、有料プランにアップグレード

### エラーメッセージが表示される場合

- **「送信に失敗しました」**: EmailJSの設定を確認
- **バリデーションエラー**: 必須項目が入力されているか確認

## セキュリティに関する注意

- Public Keyは公開されても問題ありません（クライアントサイドで使用）
- Service IDとTemplate IDも基本的に安全ですが、できれば環境変数で管理
- Private Keyは絶対に公開しないでください（今回の実装では不要）

## 料金プラン

- **無料プラン**: 月200通まで、テンプレート2つまで
- **Personal**: $5/月、月1,000通、テンプレート10つ
- **Professional**: $15/月、月10,000通、テンプレート無制限

本番稼働初期は無料プランで十分です。問い合わせ数が増えてきたら有料プランへの移行を検討してください。

## AWS Amplify移行後の対応

AWS Amplifyに移行後も、同じEmailJS設定で動作します。将来的により高度な要件が出てきた場合は、以下の選択肢があります：

1. **AWS SES（Simple Email Service）への移行**
   - より安価で大量送信に対応
   - Lambda関数との連携が必要

2. **EmailJSの継続使用**
   - 設定変更なしで継続可能
   - 管理が簡単

## サポート

設定で問題が発生した場合は、以下を参照してください：
- [EmailJS公式ドキュメント](https://www.emailjs.com/docs/)
- [EmailJSサポート](https://www.emailjs.com/contact/)