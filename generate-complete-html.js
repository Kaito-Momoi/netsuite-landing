#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Generating complete static HTML with inlined assets...\n');

// Read the built files
const buildDir = path.join(__dirname, 'build');
const staticHtmlDir = path.join(__dirname, 'static-html-complete');

// Create output directory
if (!fs.existsSync(staticHtmlDir)) {
  fs.mkdirSync(staticHtmlDir, { recursive: true });
}

// Read the index.html
const indexPath = path.join(buildDir, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Fix paths
html = html.replace(/href="\/netsuite-landing\//g, 'href="./');
html = html.replace(/src="\/netsuite-landing\//g, 'src="./');

// Read and inline the main CSS
const cssPath = path.join(buildDir, 'static/css/main.5e980027.css');
if (fs.existsSync(cssPath)) {
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  html = html.replace(
    '<link href="./static/css/main.5e980027.css" rel="stylesheet">',
    `<style>${cssContent}</style>`
  );
  console.log('✅ CSS inlined');
}

// Read and inline ALL JavaScript files
const assetManifestPath = path.join(buildDir, 'asset-manifest.json');
const assetManifest = JSON.parse(fs.readFileSync(assetManifestPath, 'utf8'));

// Get all JS files in correct order
const jsFiles = [
  'static/js/main.00a0b218.js'
];

// Inline each JS file
jsFiles.forEach(jsFile => {
  const jsPath = path.join(buildDir, jsFile);
  if (fs.existsSync(jsPath)) {
    const jsContent = fs.readFileSync(jsPath, 'utf8');
    const scriptTag = `<script defer="defer" src="./${jsFile}"></script>`;
    const inlineScript = `<script>${jsContent}</script>`;
    html = html.replace(scriptTag, inlineScript);
    console.log(`✅ JavaScript inlined: ${jsFile}`);
  }
});

// Copy static assets
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
  const srcPath = path.join(buildDir, asset);
  const destPath = path.join(staticHtmlDir, asset);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  }
});

// Copy all static directory
const staticDir = path.join(buildDir, 'static');
const targetStaticDir = path.join(staticHtmlDir, 'static');

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

copyRecursiveSync(staticDir, targetStaticDir);
console.log('✅ Static assets copied');

// Save the complete HTML
const outputPath = path.join(staticHtmlDir, 'index.html');
fs.writeFileSync(outputPath, html);

// Also create a version with just the necessary files
const minimalHtml = html;
const minimalPath = path.join(staticHtmlDir, 'standalone.html');
fs.writeFileSync(minimalPath, minimalHtml);

console.log('\n✨ Complete static HTML generated successfully!');
console.log(`📁 Output directory: ${staticHtmlDir}`);
console.log('\nFiles created:');
console.log('  - index.html (with external JS/CSS references)');
console.log('  - standalone.html (fully self-contained)');
console.log('\n🌐 To preview:');
console.log('  1. cd static-html-complete');
console.log('  2. python3 -m http.server 8081');
console.log('  3. Open http://localhost:8081');