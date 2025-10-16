#!/usr/bin/env node

const puppeteer = require('puppeteer-core');
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

  // Puppeteerの起動（Chrome/Chromiumを探す）
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    // システムのChromeを使用
    executablePath: process.platform === 'win32'
      ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
      : process.platform === 'darwin'
      ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      : '/usr/bin/google-chrome' // Linux
  }).catch(async () => {
    // Google Chromeが見つからない場合、Chromiumを試す
    return await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: '/usr/bin/chromium-browser'
    });
  }).catch(async () => {
    // それでも見つからない場合
    console.error('❌ Chrome/Chromiumが見つかりません。');
    console.log('\n以下のコマンドでChromiumをインストールしてください:');
    console.log('sudo apt-get update && sudo apt-get install -y chromium-browser');
    process.exit(1);
  });

  const page = await browser.newPage();

  // ビューポート設定
  await page.setViewport({ width: 1920, height: 1080 });

  try {
    // 開発サーバーにアクセス
    console.log('📡 http://localhost:3003 に接続中...');
    await page.goto('http://localhost:3003', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Reactアプリが完全にレンダリングされるまで待機
    await page.waitForTimeout(3000);

    // レンダリングされたHTMLを取得
    const html = await page.content();

    // CSSとJSをインライン化
    const inlinedHTML = await page.evaluate(() => {
      // すべてのスタイルシートを取得してインライン化
      const styles = Array.from(document.styleSheets).map(sheet => {
        try {
          return Array.from(sheet.cssRules).map(rule => rule.cssText).join('\n');
        } catch (e) {
          // CORSエラーの場合はスキップ
          return '';
        }
      }).join('\n');

      // HTML全体を取得
      const doctype = '<!DOCTYPE html>';
      const htmlContent = document.documentElement.outerHTML;

      // スタイルをheadに追加
      const styleTag = `<style>${styles}</style>`;
      const finalHTML = htmlContent.replace('</head>', `${styleTag}</head>`);

      return doctype + finalHTML;
    });

    // 画像をBase64に変換（オプション）
    const htmlWithImages = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // 外部画像はそのまま
        if (img.src.startsWith('http')) return;

        // ローカル画像をBase64に変換する処理（必要に応じて）
        // ここでは簡略化のためスキップ
      });

      return document.documentElement.outerHTML;
    });

    // HTMLファイルを保存
    const outputPath = path.join(outputDir, 'index.html');
    fs.writeFileSync(outputPath, inlinedHTML);

    console.log('✅ HTMLキャプチャ完了！');
    console.log(`📁 出力先: ${outputPath}`);

    // 静的アセットもコピー
    const buildDir = path.join(__dirname, 'build');
    const assets = ['favicon.ico', 'logo192.png', 'logo512.png', 'EvangSol_logo.png', 'EvangSol_logo - White.png'];

    assets.forEach(asset => {
      const src = path.join(buildDir, asset);
      const dest = path.join(outputDir, asset);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
      }
    });

    console.log('\n🎉 Wix用のHTMLが準備できました！');
    console.log('\nWixでの使用方法:');
    console.log('1. Wixエディタで「埋め込みHTML」コンポーネントを追加');
    console.log('2. wix-ready-html/index.htmlの内容をコピー&ペースト');
    console.log('3. 必要に応じてiframeのサイズを調整');

  } catch (error) {
    console.error('❌ エラーが発生しました:', error.message);
  } finally {
    await browser.close();
  }
}

// 実行
captureHTML().catch(console.error);