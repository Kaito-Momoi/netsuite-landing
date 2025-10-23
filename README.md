# NetSuite ランディングページ

NetSuite ERPソリューションを紹介するランディングページプロジェクト

## 🚀 クイックスタート

```bash
# リポジトリのクローン
git clone https://github.com/Kaito-Momoi/netsuite-landing.git
cd netsuite-landing

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start  # http://localhost:3000
```

## 🌐 公開URL

**メインサイト**: https://kaito-momoi.github.io/netsuite-landing/

### ソリューション詳細ページ
- [入金消込ソリューション](https://kaito-momoi.github.io/netsuite-landing/#/solutions/payment-matching)
- [EC統合](https://kaito-momoi.github.io/netsuite-landing/#/solutions/ec-integration)
- [業界別OMS](https://kaito-momoi.github.io/netsuite-landing/#/solutions/industry-oms)
- [資材計画](https://kaito-momoi.github.io/netsuite-landing/#/solutions/material-planning)
- [倉庫統合](https://kaito-momoi.github.io/netsuite-landing/#/solutions/warehouse-integration)
- [在庫エージング分析](https://kaito-momoi.github.io/netsuite-landing/#/solutions/inventory-aging)

### その他のページ
- [利用規約](https://kaito-momoi.github.io/netsuite-landing/#/terms)
- [セキュリティ・プライバシー](https://kaito-momoi.github.io/netsuite-landing/#/security-privacy)

## 📂 プロジェクト構造

```
netsuite-landing/
├── src/
│   ├── NetSuiteUnified.tsx         # メインランディングページ
│   ├── PaymentMatching.tsx         # 入金消込ソリューション
│   ├── ECIntegration.tsx           # EC統合ソリューション
│   ├── IndustryOMS.tsx             # 業界別OMS
│   ├── MaterialPlanning.tsx        # 資材計画
│   ├── WarehouseIntegration.tsx    # 倉庫統合
│   ├── InventoryAging.tsx          # 在庫エージング分析
│   ├── TermsOfUse.tsx              # 利用規約
│   ├── SecurityPrivacy.tsx         # セキュリティ・プライバシー
│   ├── components/
│   │   ├── ModernNavigationBar.tsx # ナビゲーションバー
│   │   ├── ModernFooter.tsx        # フッター
│   │   ├── ContactModal.tsx        # お問い合わせモーダル
│   │   └── その他共有コンポーネント
│   ├── types/                      # TypeScript型定義
│   ├── utils/                      # ユーティリティ関数
│   └── hooks/                      # カスタムフック
├── public/                         # 静的アセット
│   ├── netsuite-logo.png          # NetSuiteロゴ
│   └── その他画像ファイル
├── package.json                    # プロジェクト設定
├── tsconfig.json                   # TypeScript設定
├── tailwind.config.js              # Tailwind CSS設定
└── postcss.config.js              # PostCSS設定
```

## 🛠 技術スタック

| 技術 | 用途 | バージョン |
|------|------|------------|
| [React](https://react.dev/) | UIフレームワーク | 19.1.1 |
| [TypeScript](https://www.typescriptlang.org/) | 型安全な開発 | 4.9.5 |
| [Tailwind CSS](https://tailwindcss.com/) | スタイリング | 3.4.17 |
| [React Router](https://reactrouter.com/) | ルーティング | 7.8.1 (HashRouter) |
| [Framer Motion](https://www.framer.com/motion/) | アニメーション | 12.23.22 |
| [Lucide React](https://lucide.dev/) | アイコン | 0.540.0 |
| [EmailJS](https://www.emailjs.com/) | お問い合わせフォーム | 4.4.1 |

## 💻 開発環境

### 必要要件
- Node.js 18以降
- npm 9以降

### 開発コマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm start

# プロダクションビルド
npm run build

# テスト実行
npm test

# Lintチェック
npm run lint

# Lint自動修正
npm run lint:fix

# コードフォーマット
npm run format
```

## 📱 レスポンシブデザイン

すべてのページは以下のデバイスに対応:
- 📱 モバイル (320px〜)
- 📱 タブレット (768px〜)
- 💻 デスクトップ (1024px〜)
- 🖥 大画面 (1280px〜)

## 🎨 カスタマイズ

### カラーテーマの変更
`tailwind.config.js`でカスタムカラーを設定可能

### コンポーネントのスタイル
Tailwind CSSクラスを使用してスタイルを直接調整

## 🚀 デプロイ

### GitHub Pages自動デプロイ
`main`ブランチへのpush時に自動でGitHub Pagesにデプロイされます。

### 手動デプロイ手順

1. **プロダクションビルド**
   ```bash
   npm run build
   ```

2. **GitHub Pagesへデプロイ**
   ```bash
   git add .
   git commit -m "Deploy updates"
   git push origin main
   ```

## ⚙️ 環境変数

お問い合わせフォーム（EmailJS）を使用する場合、`.env.local`ファイルを作成:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_CONTACT_EMAIL=contact@example.com
```

## 📊 パフォーマンス最適化

- **コード分割**: React.lazyを使用した動的インポート
- **画像最適化**: 適切なサイズとフォーマット
- **Tailwind CSS**: 未使用のCSSを自動削除
- **軽量化**: プロジェクトサイズ約1.4MB（node_modules除く）

## 🔧 トラブルシューティング

### npm installでエラーが発生する場合
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### ポート3000が使用中の場合
```bash
# 別のポートで起動
PORT=3001 npm start
```

## 📄 ライセンス

MIT License

## 📞 お問い合わせ

- 📧 Email: info@netsuite.jp
- 🌐 Website: [NetSuiteランディングページ](https://kaito-momoi.github.io/netsuite-landing/)

---

<div align="center">
  <sub>Built with ❤️ for NetSuite Solutions</sub>
</div>