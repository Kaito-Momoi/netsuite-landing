#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define all routes from your React app
const routes = [
  { path: '/', name: 'index' },
  { path: '/solutions/payment-matching', name: 'payment-matching' },
  { path: '/solutions/ec-integration', name: 'ec-integration' },
  { path: '/solutions/industry-oms', name: 'industry-oms' },
  { path: '/solutions/material-planning', name: 'material-planning' },
  { path: '/solutions/warehouse-integration', name: 'warehouse-integration' },
  { path: '/solutions/inventory-aging', name: 'inventory-aging' },
  { path: '/terms', name: 'terms' },
  { path: '/security-privacy', name: 'security-privacy' },
  { path: '/netsuite-unified', name: 'netsuite-unified' }
];

// Read the built index.html file
const indexHtmlPath = path.join(__dirname, 'build', 'index.html');
const staticHtmlDir = path.join(__dirname, 'static-html');

// Create static-html directory if it doesn't exist
if (!fs.existsSync(staticHtmlDir)) {
  fs.mkdirSync(staticHtmlDir, { recursive: true });
}

// Read the base HTML template
let baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Fix paths for local preview - convert absolute paths to relative
baseHtml = baseHtml.replace(/href="\/netsuite-landing\//g, 'href="./');
baseHtml = baseHtml.replace(/src="\/netsuite-landing\//g, 'src="./');
baseHtml = baseHtml.replace(/href="\/netsuite-landing"/g, 'href="./"');

// Read asset-manifest.json to get all JS and CSS files
const assetManifestPath = path.join(__dirname, 'build', 'asset-manifest.json');
const assetManifest = JSON.parse(fs.readFileSync(assetManifestPath, 'utf8'));

// Function to inline CSS and JS files
function inlineAssets(html) {
  let inlinedHtml = html;

  // Inline main CSS
  const cssFiles = Object.values(assetManifest.files).filter(file => file.endsWith('.css'));
  cssFiles.forEach(cssFile => {
    const cssPath = path.join(__dirname, 'build', cssFile.replace('/netsuite-landing/', ''));
    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      const cssLink = `<link href="${cssFile}" rel="stylesheet">`;
      const inlineCss = `<style>${cssContent}</style>`;
      inlinedHtml = inlinedHtml.replace(cssLink, inlineCss);
    }
  });

  // Inline main JS (optional - makes file larger)
  // Uncomment if you want to inline JavaScript as well
  /*
  const jsFiles = Object.values(assetManifest.files).filter(file => file.endsWith('.js'));
  jsFiles.forEach(jsFile => {
    const jsPath = path.join(__dirname, 'build', jsFile.replace('/netsuite-landing/', ''));
    if (fs.existsSync(jsPath)) {
      const jsContent = fs.readFileSync(jsPath, 'utf8');
      const jsScript = `<script src="${jsFile}"></script>`;
      const inlineJs = `<script>${jsContent}</script>`;
      inlinedHtml = inlinedHtml.replace(jsScript, inlineJs);
    }
  });
  */

  return inlinedHtml;
}

// Copy all static assets
const staticDir = path.join(__dirname, 'build', 'static');
const targetStaticDir = path.join(staticHtmlDir, 'static');
if (!fs.existsSync(targetStaticDir)) {
  fs.mkdirSync(targetStaticDir, { recursive: true });
}

// Copy function
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

// Copy static files
copyRecursiveSync(staticDir, targetStaticDir);

// Copy other assets (images, favicon, etc.)
const assets = [
  'favicon.ico',
  'logo192.png',
  'logo512.png',
  'manifest.json',
  'robots.txt',
  'EvangSol_logo.png',
  'EvangSol_logo - White.png',
  'logo-oracle-netsuite-solution-provider.png'
];

assets.forEach(asset => {
  const srcPath = path.join(__dirname, 'build', asset);
  const destPath = path.join(staticHtmlDir, asset);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  }
});

// Generate HTML files for each route
routes.forEach(route => {
  let htmlContent = baseHtml;

  // Update meta tags for each route (optional)
  const titles = {
    'index': 'NetSuite 導入支援 | EvangSol',
    'payment-matching': '入金消込ソリューション | EvangSol',
    'ec-integration': 'EC統合ソリューション | EvangSol',
    'industry-oms': '業界特化型OMS | EvangSol',
    'material-planning': '資材所要量計画 | EvangSol',
    'warehouse-integration': '倉庫統合システム | EvangSol',
    'inventory-aging': '在庫エージング管理 | EvangSol',
    'terms': '利用規約 | EvangSol',
    'security-privacy': 'セキュリティ・プライバシー | EvangSol',
    'netsuite-unified': 'NetSuite統合プラットフォーム | EvangSol'
  };

  if (titles[route.name]) {
    htmlContent = htmlContent.replace(
      /<title>.*?<\/title>/,
      `<title>${titles[route.name]}</title>`
    );
  }

  // Optionally inline CSS
  // htmlContent = inlineAssets(htmlContent);

  // Save the HTML file
  const fileName = route.name === 'index' ? 'index.html' : `${route.name}.html`;
  const filePath = path.join(staticHtmlDir, fileName);

  // Create subdirectories if needed
  if (route.path.includes('/solutions/')) {
    const solutionsDir = path.join(staticHtmlDir, 'solutions');
    if (!fs.existsSync(solutionsDir)) {
      fs.mkdirSync(solutionsDir, { recursive: true });
    }
    const solutionFileName = route.name.replace('solutions-', '') + '.html';
    const solutionFilePath = path.join(solutionsDir, solutionFileName);
    fs.writeFileSync(solutionFilePath, htmlContent);
    console.log(`Generated: solutions/${solutionFileName}`);
  } else {
    fs.writeFileSync(filePath, htmlContent);
    console.log(`Generated: ${fileName}`);
  }
});

// Create a combined single HTML file with all content
const combinedHtml = inlineAssets(baseHtml);
const combinedPath = path.join(staticHtmlDir, 'all-in-one.html');
fs.writeFileSync(combinedPath, combinedHtml);
console.log('Generated: all-in-one.html (with inlined CSS)');

console.log('\n✅ Static HTML files generated successfully!');
console.log(`📁 Output directory: ${staticHtmlDir}`);
console.log('\nFor Wix deployment:');
console.log('1. Upload the contents of the static-html directory to Wix');
console.log('2. Use the all-in-one.html file for single-page deployment');
console.log('3. Or use individual HTML files for multi-page deployment');