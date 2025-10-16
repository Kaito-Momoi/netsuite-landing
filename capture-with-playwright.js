#!/usr/bin/env node

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// 出力ディレクトリ
const outputDir = path.join(__dirname, 'wix-ready-html');

// ディレクトリ作成
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function captureHTML() {
  console.log('🚀 開発サーバーからHTMLをキャプチャ中...\n');

  // Playwrightでブラウザを起動
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    // 開発サーバーにアクセス
    console.log('📡 http://localhost:3003 に接続中...');
    await page.goto('http://localhost:3003', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Reactアプリが完全にレンダリングされるまで待機
    console.log('⏳ ページの完全レンダリングを待機中...');
    await page.waitForTimeout(5000);

    // レンダリングされたHTMLを取得
    let html = await page.content();

    // 相対パスを修正
    html = html.replace(/src="\/static\//g, 'src="./static/');
    html = html.replace(/href="\/static\//g, 'href="./static/');
    html = html.replace(/url\(\/static\//g, 'url(./static/');

    // CSSを取得してインライン化
    const styles = await page.evaluate(() => {
      const styleSheets = Array.from(document.styleSheets);
      let css = '';

      styleSheets.forEach(sheet => {
        try {
          const rules = Array.from(sheet.cssRules || sheet.rules || []);
          rules.forEach(rule => {
            css += rule.cssText + '\n';
          });
        } catch (e) {
          console.log('CSSルール取得エラー:', e);
        }
      });

      return css;
    });

    // インラインスタイルを追加
    if (styles) {
      html = html.replace('</head>', `<style>${styles}</style></head>`);
    }

    // 画像URLを絶対パスから相対パスに変換
    html = html.replace(/src="http:\/\/localhost:3003\//g, 'src="./');
    html = html.replace(/href="http:\/\/localhost:3003\//g, 'href="./');

    // HTMLファイルを保存
    const outputPath = path.join(outputDir, 'index.html');
    fs.writeFileSync(outputPath, html);

    console.log('✅ HTMLキャプチャ完了！');
    console.log(`📁 出力先: ${outputPath}`);

    // 静的アセットをコピー
    const buildDir = path.join(__dirname, 'build');
    const publicDir = path.join(__dirname, 'public');

    // 画像ファイルをコピー
    const assets = [
      'favicon.ico',
      'logo192.png',
      'logo512.png',
      'EvangSol_logo.png',
      'EvangSol_logo - White.png',
      'logo-oracle-netsuite-solution-provider.png'
    ];

    assets.forEach(asset => {
      // まずbuildディレクトリから探す
      let src = path.join(buildDir, asset);
      if (!fs.existsSync(src)) {
        // なければpublicディレクトリから探す
        src = path.join(publicDir, asset);
      }

      const dest = path.join(outputDir, asset);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`  ✓ ${asset} をコピーしました`);
      }
    });

    // staticディレクトリをコピー
    const staticSrc = path.join(buildDir, 'static');
    const staticDest = path.join(outputDir, 'static');

    if (fs.existsSync(staticSrc)) {
      copyRecursiveSync(staticSrc, staticDest);
      console.log('  ✓ staticディレクトリをコピーしました');
    }

    console.log('\n🎉 Wix用のHTMLが準備できました！');
    console.log('\nWixでの使用方法:');
    console.log('1. Wixエディタで「埋め込みHTML」コンポーネントを追加');
    console.log('2. wix-ready-html/index.htmlの内容をコピー&ペースト');
    console.log('3. または、HTMLファイルとアセットをWixのファイルマネージャーにアップロード');
    console.log('\nプレビュー:');
    console.log('cd wix-ready-html && python3 -m http.server 8082');
    console.log('http://localhost:8082 でプレビュー可能');

  } catch (error) {
    console.error('❌ エラーが発生しました:', error.message);
  } finally {
    await browser.close();
  }
}

// ディレクトリを再帰的にコピー
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// 実行
captureHTML().catch(console.error);