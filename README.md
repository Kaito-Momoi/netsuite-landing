# NetSuite Landing Page

NetSuite 向けのランディングページを構築するための React アプリケーションです。
レスポンシブで軽量なページを素早く立ち上げられることを目的としています。

## 主な機能

- NetSuite 用に調整されたコンテンツ構成
- React Router によるページ遷移
- Tailwind CSS を用いたレスポンシブデザイン

## 使用技術

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [lucide-react](https://lucide.dev/)（アイコン）

## 動作環境

- Node.js 18 以降
- npm 9 以降

## セットアップ

```bash
git clone <repo>
cd netsuite-landing
npm install
```

## 開発サーバーの起動

```bash
npm start
```

## テストの実行

```bash
npm test
```

## ビルド

```bash
npm run build
```

アプリケーションは `build/` ディレクトリに出力されます。

## 公開URL

- メインサイト（HashRouter 経由）
  - https://kaito-momoi.github.io/netsuite-landing/#/
  - https://kaito-momoi.github.io/netsuite-landing/#/comparison
  - https://kaito-momoi.github.io/netsuite-landing/#/site-a
  - https://kaito-momoi.github.io/netsuite-landing/#/site-b
  - https://kaito-momoi.github.io/netsuite-landing/#/what-is-netsuite
  - https://kaito-momoi.github.io/netsuite-landing/#/netsuite
  - https://kaito-momoi.github.io/netsuite-landing/#/netsuite/solutions
  - https://kaito-momoi.github.io/netsuite-landing/#/evangsol-strengths
  - https://kaito-momoi.github.io/netsuite-landing/#/about
  - https://kaito-momoi.github.io/netsuite-landing/#/services
  - https://kaito-momoi.github.io/netsuite-landing/#/contact
  - https://kaito-momoi.github.io/netsuite-landing/#/features
  - https://kaito-momoi.github.io/netsuite-landing/#/solutions/payment-matching
  - https://kaito-momoi.github.io/netsuite-landing/#/solutions/ec-integration
  - https://kaito-momoi.github.io/netsuite-landing/#/solutions/industry-oms
  - https://kaito-momoi.github.io/netsuite-landing/#/solutions/material-planning
  - https://kaito-momoi.github.io/netsuite-landing/#/solutions/warehouse-integration
  - https://kaito-momoi.github.io/netsuite-landing/#/solutions/inventory-aging
  - https://kaito-momoi.github.io/netsuite-landing/#/case-studies
  - https://kaito-momoi.github.io/netsuite-landing/#/terms
  - https://kaito-momoi.github.io/netsuite-landing/#/security-privacy
  - https://kaito-momoi.github.io/netsuite-landing/#/netsuite-evangsol
  - https://kaito-momoi.github.io/netsuite-landing/#/netsuite-hybrit
  - https://kaito-momoi.github.io/netsuite-landing/#/netsuite-evangsol-new
  - https://kaito-momoi.github.io/netsuite-landing/#/netsuite-evangsol-smb
  - https://kaito-momoi.github.io/netsuite-landing/#/netsuite-unified

- EvangSol Site コンテンツ（ソース ↔ 公開URL）
  - [HomePage.tsx](evangsol-site/src/pages/HomePage.tsx) ↔ https://kaito-momoi.github.io/netsuite-landing/EvangSol-Site/
  - [Introduction.tsx](evangsol-site/src/pages/Introduction.tsx) ↔ https://kaito-momoi.github.io/netsuite-landing/EvangSol-Site/introduction
  - [Strengths.tsx](evangsol-site/src/pages/Strengths.tsx) ↔ https://kaito-momoi.github.io/netsuite-landing/EvangSol-Site/strengths
  - [Achievements.tsx](evangsol-site/src/pages/Achievements.tsx) ↔ https://kaito-momoi.github.io/netsuite-landing/EvangSol-Site/achievements
  - [Solutions.tsx](evangsol-site/src/pages/Solutions.tsx) ↔ https://kaito-momoi.github.io/netsuite-landing/EvangSol-Site/solutions
  - [About.tsx](evangsol-site/src/pages/About.tsx) ↔ https://kaito-momoi.github.io/netsuite-landing/EvangSol-Site/about
  - [Contact.tsx](evangsol-site/src/pages/Contact.tsx) ↔ https://kaito-momoi.github.io/netsuite-landing/EvangSol-Site/contact

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。
