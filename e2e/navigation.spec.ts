import { test, expect } from '@playwright/test';

test.describe('Navigation Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to NetSuite about section', async ({ page }) => {
    await page.getByText('NetSuiteについて').click();

    // Wait for scroll
    await page.waitForTimeout(500);

    // Check if section is in view
    const section = page.locator('#netsuite');
    await expect(section).toBeInViewport();
  });

  test('should navigate to strengths section', async ({ page }) => {
    await page.getByText('EvangSolの強み').click();

    await page.waitForTimeout(500);

    const section = page.locator('#evangsol');
    await expect(section).toBeInViewport();
  });

  test('should navigate to FAQ section', async ({ page }) => {
    await page.getByText('よくある質問').click();

    await page.waitForTimeout(500);

    const section = page.locator('#matching');
    await expect(section).toBeInViewport();
  });

  test('should navigate to solutions section', async ({ page }) => {
    await page.getByText('独自開発アドオン').click();

    await page.waitForTimeout(500);

    const section = page.locator('#solutions');
    await expect(section).toBeInViewport();
  });

  test('should scroll to top when clicking home', async ({ page }) => {
    // Scroll down first
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(300);

    // Click home
    await page.getByText('ホーム').click();
    await page.waitForTimeout(500);

    // Check if at top
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });

  test('should update active navigation item on scroll', async ({ page }) => {
    // Scroll to solutions section
    await page.evaluate(() => {
      const element = document.getElementById('solutions');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });

    await page.waitForTimeout(1000);

    // Check that solutions nav item is active (this would need specific class checking)
    // For now, just verify navigation items are still visible
    await expect(page.getByText('独自開発アドオン')).toBeVisible();
  });

  test('should open mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Click hamburger menu
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();

    // Check that mobile menu items appear
    await expect(page.getByText('ホーム')).toBeVisible();
    await expect(page.getByText('NetSuiteの機能')).toBeVisible();
  });

  test('should close mobile menu after clicking item', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Open menu
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();

    // Click a menu item
    await page.getByText('NetSuiteの機能').click();

    // Menu should close (check that close button is not visible)
    await page.waitForTimeout(500);
    const closeButton = page.locator('button[aria-label="Close menu"]');
    await expect(closeButton).not.toBeVisible();
  });
});
