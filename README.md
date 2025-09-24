# NetSuite × EvangSol プロジェクト

NetSuite ERPソリューションとEvangSolのサービスを紹介する統合プラットフォーム

## 📁 プロジェクト構成

### 1. NetSuiteランディングページ
NetSuite ERPソリューションの紹介とEvangSolの強みを統合したランディングページ

### 2. EvangSolコーポレートサイト
株式会社EvangSolの企業情報とサービスを紹介するコーポレートサイト

## 🌐 公開URL

### NetSuiteランディングページ
- **メインページ**: https://kaito-momoi.github.io/netsuite-landing/
- **ソリューション詳細**:
  - 入金消込: https://kaito-momoi.github.io/netsuite-landing/#/solutions/payment-matching
  - EC統合: https://kaito-momoi.github.io/netsuite-landing/#/solutions/ec-integration
  - 業界別OMS: https://kaito-momoi.github.io/netsuite-landing/#/solutions/industry-oms
  - 資材計画: https://kaito-momoi.github.io/netsuite-landing/#/solutions/material-planning
  - 倉庫統合: https://kaito-momoi.github.io/netsuite-landing/#/solutions/warehouse-integration
  - 在庫エージング: https://kaito-momoi.github.io/netsuite-landing/#/solutions/inventory-aging
- **その他**:
  - 利用規約: https://kaito-momoi.github.io/netsuite-landing/#/terms
  - セキュリティ・プライバシー: https://kaito-momoi.github.io/netsuite-landing/#/security-privacy

### EvangSolコーポレートサイト
- **ホームページ**: https://kaito-momoi.github.io/netsuite-landing/evangsol-site-deploy/
- **各ページ** (React Router):
  - ホーム別パス: https://kaito-momoi.github.io/netsuite-landing/evangsol-site-deploy/homepage/
  - 会社紹介: /introduction
  - 強み: /strengths
  - 実績: /achievements
  - ソリューション: /solutions
  - 会社概要: /about
  - お問い合わせ: /contact

## 🛠 技術スタック

### 共通
- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)（アイコン）

### NetSuiteランディング
- [React Router](https://reactrouter.com/) (HashRouter)
- [Framer Motion](https://www.framer.com/motion/)（アニメーション）

### EvangSolサイト
- [Vite](https://vitejs.dev/)（ビルドツール）
- [React Router DOM](https://reactrouter.com/)

## 💻 開発環境

### 必要要件
- Node.js 18以降
- npm 9以降

### セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/Kaito-Momoi/netsuite-landing.git
cd netsuite-landing

# NetSuiteランディングページ
npm install
npm start  # http://localhost:3000

# EvangSolサイト
cd evangsol-site
npm install
npm run dev  # http://localhost:3003
```

### ビルド

```bash
# NetSuiteランディングページ
npm run build
# -> /build ディレクトリに出力

# EvangSolサイト
cd evangsol-site
npm run build
# -> /evangsol-site/dist ディレクトリに出力
```

## 📝 プロジェクト構造

```
netsuite-landing/
├── src/                        # NetSuiteランディングページ
│   ├── NetSuiteUnified.tsx    # メインランディングページ
│   ├── solutions/              # ソリューション詳細ページ
│   └── components/             # 共有コンポーネント
├── evangsol-site/              # EvangSolコーポレートサイト（開発用）
│   ├── src/
│   │   ├── pages/             # 各ページコンポーネント
│   │   └── components/        # 共有コンポーネント
│   └── dist/                  # ビルド出力
├── evangsol-site-deploy/       # EvangSolサイト（GitHub Pages用）
└── build/                      # NetSuiteランディングビルド出力
```

## 🚀 デプロイ

GitHub Pagesで自動デプロイされます。`main`ブランチへのpush時に自動更新。

### 手動デプロイ

```bash
# 両サイトをビルド
npm run build
cd evangsol-site && npm run build

# EvangSolサイトのデプロイファイルをコピー
cp -r evangsol-site/dist/* evangsol-site-deploy/

# コミット＆プッシュ
git add .
git commit -m "Deploy updates"
git push
```

## 📄 ライセンス

MIT License

## 📞 お問い合わせ

株式会社EvangSol
- Email: info@evangsol.jp
- Website: https://kaito-momoi.github.io/netsuite-landing/evangsol-site-deploy/