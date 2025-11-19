import { test, expect } from '@playwright/test';

test.describe('NetSuite Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section with main heading', async ({ page }) => {
    await expect(page.getByText('NetSuite')).toBeVisible();
    await expect(page.getByText('導入支援のプロ')).toBeVisible();
  });

  test('should display navigation bar with logo', async ({ page }) => {
    const logo = page.getByAltText('EvangSol');
    await expect(logo).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Check navigation items
    await expect(page.getByText('ホーム')).toBeVisible();
    await expect(page.getByText('NetSuiteの機能')).toBeVisible();
    await expect(page.getByText('EvangSolの強み')).toBeVisible();
    await expect(page.getByText('よくある質問')).toBeVisible();
  });

  test('should display contact button', async ({ page }) => {
    await expect(page.getByText('お問い合わせ')).toBeVisible();
  });

  test('should display CTA buttons in hero section', async ({ page }) => {
    await expect(page.getByText('無料相談を申し込む')).toBeVisible();
    await expect(page.getByText('ソリューションを見る')).toBeVisible();
  });

  test('should scroll to solutions section when CTA clicked', async ({ page }) => {
    const ctaButton = page.getByText('ソリューションを見る');
    await ctaButton.click();

    // Wait for scroll animation
    await page.waitForTimeout(1000);

    // Check if solutions section is visible
    await expect(page.getByText('独自開発アドオン')).toBeVisible();
  });

  test('should display core features section', async ({ page }) => {
    await expect(page.getByText('基幹業務すべてを統合する')).toBeVisible();
    await expect(page.getByText('クラウドERP')).toBeVisible();
  });

  test('should display strengths section', async ({ page }) => {
    await expect(page.getByText('NetSuiteの可能性を最大化する')).toBeVisible();
  });

  test('should display case study section', async ({ page }) => {
    await expect(page.getByText('導入事例')).toBeVisible();
    await expect(page.getByText('株式会社グリーンハウス')).toBeVisible();
  });

  test('should display agile process section', async ({ page }) => {
    await expect(page.getByText('柔軟で確実な')).toBeVisible();
    await expect(page.getByText('アジャイル導入プロセス')).toBeVisible();
  });

  test('should display solutions section with cards', async ({ page }) => {
    await expect(page.getByText('独自開発アドオン')).toBeVisible();

    // Check for at least one solution card
    await expect(page.getByText('入金消込ソリューション')).toBeVisible();
  });

  test('should display footer', async ({ page }) => {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await expect(page.getByText('NetSuiteの無限の可能性を、圧倒的な開発力で現実に。')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await expect(page.getByText('NetSuite')).toBeVisible();
    await expect(page.getByText('導入支援のプロ')).toBeVisible();
  });

  test('should handle navigation click for external link', async ({ page }) => {
    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Click external link (会社概要)
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByText('会社概要').click()
    ]);

    // Check that new page opened
    expect(newPage.url()).toContain('evangsol.co.jp');
    await newPage.close();
  });
});
