// filepath: c:\Users\nicol\Desktop\Portfolio\portfolio\tests\home.spec.js
import { test, expect } from '@playwright/test';

test('homepage displays greeting', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // uses baseURL from config
  await expect(page.getByText('Welcome to y Portfolio'),"text not visible").toBeVisible();
  

});

test('navigate to Page 1 and check content', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // uses baseURL from config
  await page.click('button#page1');
  await expect(page.getByText('Page 1 Application Demostration'),"Page 1 text not visible").toBeVisible();
  await expect(page.getByText('This is a react application demostration # 1'),"Page 1 description not visible").toBeVisible();
});

test('navigate to Page 2 and check content', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // uses baseURL from config
  await page.click('button#page2');
  await expect(page.getByText('Page 2 Application Demostration'),"Page 2 text not visible").toBeVisible();
  await expect(page.getByText('This is a react application demostration # 2'),"Page 2 description not visible").toBeVisible();
}); 