// filepath: c:\Users\nicol\Desktop\Portfolio\portfolio\tests\home.spec.js
import { test, expect } from '@playwright/test';

test('homepage displays greeting', async ({ page }) => {
  await page.goto('/'); // uses baseURL from config
  await expect(page.locator('text=Hello, I\'m')).toBeVisible();
});