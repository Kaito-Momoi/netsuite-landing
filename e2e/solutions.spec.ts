import { test, expect } from '@playwright/test';

test.describe('Solutions Pages', () => {
  test('should navigate to payment matching solution', async ({ page }) => {
    await page.goto('/');

    // Find and click payment matching solution card
    await page.getByText('入金消込ソリューション').click();

    // Wait for navigation
    await page.waitForLoadState('networkidle');

    // Check URL changed
    expect(page.url()).toContain('/solutions/payment-matching');

    // Check page content
    await expect(page.getByText('入金消込ソリューション')).toBeVisible();
  });

  test('should navigate to EC integration solution', async ({ page }) => {
    await page.goto('/');

    await page.getByText('ECデータ連携基盤').click();
    await page.waitForLoadState('networkidle');

    expect(page.url()).toContain('/solutions/ec-integration');
    await expect(page.getByText('ECデータ連携基盤')).toBeVisible();
  });

  test('should navigate to industry OMS solution', async ({ page }) => {
    await page.goto('/');

    await page.getByText('業界特化OMS').click();
    await page.waitForLoadState('networkidle');

    expect(page.url()).toContain('/solutions/industry-oms');
    await expect(page.getByText('業界特化OMS')).toBeVisible();
  });

  test('should navigate to material planning solution', async ({ page }) => {
    await page.goto('/');

    await page.getByText('資材計画の見える化').click();
    await page.waitForLoadState('networkidle');

    expect(page.url()).toContain('/solutions/material-planning');
    await expect(page.getByText('資材計画の見える化')).toBeVisible();
  });

  test('should navigate to warehouse integration solution', async ({ page }) => {
    await page.goto('/');

    await page.getByText('ハンディ連携／WMS連携').click();
    await page.waitForLoadState('networkidle');

    expect(page.url()).toContain('/solutions/warehouse-integration');
    await expect(page.getByText('ハンディ連携／WMS連携')).toBeVisible();
  });

  test('should navigate to inventory aging solution', async ({ page }) => {
    await page.goto('/');

    await page.getByText('在庫年齢表').click();
    await page.waitForLoadState('networkidle');

    expect(page.url()).toContain('/solutions/inventory-aging');
    await expect(page.getByText('在庫年齢表')).toBeVisible();
  });

  test('should have back button on solution pages', async ({ page }) => {
    await page.goto('/solutions/payment-matching');
    await page.waitForLoadState('networkidle');

    // Check for back button
    const backButton = page.getByLabel('Go back to previous page');
    await expect(backButton).toBeVisible();
  });

  test('should navigate back from solution page', async ({ page }) => {
    await page.goto('/');
    await page.getByText('入金消込ソリューション').click();
    await page.waitForLoadState('networkidle');

    // Click back button
    const backButton = page.getByLabel('Go back to previous page');
    await backButton.click();
    await page.waitForLoadState('networkidle');

    // Should be back on home page
    await expect(page.getByText('導入支援のプロ')).toBeVisible();
  });
});
