# NetSuite × EvangSol プロジェクト

NetSuite ERPソリューションとEvangSolのサービスを紹介する統合プラットフォーム

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

### NetSuiteランディングページ
**メインサイト**: https://kaito-momoi.github.io/netsuite-landing/

#### ソリューション詳細ページ
- [入金消込](https://kaito-momoi.github.io/netsuite-landing/#/solutions/payment-matching)
- [EC統合](https://kaito-momoi.github.io/netsuite-landing/#/solutions/ec-integration)
- [業界別OMS](https://kaito-momoi.github.io/netsuite-landing/#/solutions/industry-oms)
- [資材計画](https://kaito-momoi.github.io/netsuite-landing/#/solutions/material-planning)
- [倉庫統合](https://kaito-momoi.github.io/netsuite-landing/#/solutions/warehouse-integration)
- [在庫エージング](https://kaito-momoi.github.io/netsuite-landing/#/solutions/inventory-aging)

### EvangSolコーポレートサイト
**メインサイト**: https://kaito-momoi.github.io/netsuite-landing/evangsol-site-deploy/

## 📂 プロジェクト構造

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

## 🛠 技術スタック

| 技術 | 用途 | バージョン |
|------|------|------------|
| [React](https://react.dev/) | UIフレームワーク | 18 |
| [TypeScript](https://www.typescriptlang.org/) | 型安全な開発 | - |
| [Tailwind CSS](https://tailwindcss.com/) | スタイリング | - |
| [React Router](https://reactrouter.com/) | ルーティング | HashRouter |
| [Framer Motion](https://www.framer.com/motion/) | アニメーション | - |
| [Vite](https://vitejs.dev/) | ビルドツール（EvangSol） | - |

## 💻 開発環境

### 必要要件
- Node.js 18以降
- npm 9以降

### 開発コマンド

#### NetSuiteランディングページ
```bash
npm install          # 依存関係のインストール
npm start           # 開発サーバー起動（http://localhost:3000）
npm run build       # プロダクションビルド
npm test            # テスト実行
```

#### EvangSolサイト
```bash
cd evangsol-site
npm install          # 依存関係のインストール
npm run dev         # 開発サーバー起動（http://localhost:3003）
npm run build       # プロダクションビルド
npm run preview     # ビルド結果のプレビュー
```


## 🚀 デプロイ

### 自動デプロイ
GitHub Pagesで自動デプロイされます。`main`ブランチへのpush時に自動更新。

### 手動デプロイ手順

1. **両サイトをビルド**
   ```bash
   npm run build
   cd evangsol-site && npm run build
   ```

2. **デプロイファイルの準備**
   ```bash
   cp -r evangsol-site/dist/* evangsol-site-deploy/
   ```

3. **GitHub Pagesへデプロイ**
   ```bash
   git add .
   git commit -m "Deploy updates"
   git push
   ```

## 📄 ライセンス

MIT License

## 📞 お問い合わせ

**株式会社EvangSol**
- 📧 Email: info@evangsol.jp
- 🌐 Website: [EvangSolコーポレートサイト](https://kaito-momoi.github.io/netsuite-landing/evangsol-site-deploy/)

---

<div align="center">
  <sub>Built with ❤️ by EvangSol Team</sub>
</div>