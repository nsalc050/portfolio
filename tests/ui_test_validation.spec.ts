import {test, expect} from '@playwright/test';
test.describe('UI Validation Tests', () => {
    test('About page displays correct content', async ({page}) => { 
    await page.goto('https://finance.yahoo.com/markets/stocks/trending/');

    await expect(page.getByRole('menuitem', { name: 'Markets' })).toBeVisible();
    await expect(page.getByRole('checkbox', { name: 'table' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Stocks' })).toBeVisible();

    await page.locator('div').filter({ hasText: 'Most Active Trending Now Top' }).nth(1).click();
    await page.locator('table').filter({ hasText: 'SymbolNamePriceChange% ChangeVolume' }).getByRole('button', { name: 'Symbol Name Price Change % Change Volume' }).click();
    await expect(page.getByText('Symbol Name Price Change % Change Volume')).toBeVisible();
    await expect(page.getByText('AAPL Apple Inc. 173.57 +1.57 +0.91% 64,773,123')).toBeVisible();
    await expect(page.getByText('MSFT Microsoft Corporation 315.46 +2.46 +0.79% 20,123,456')).toBeVisible();
    await expect(page.getByText('GOOGL Alphabet Inc. 134.72 +0.72 +0.54% 15,987,654')).toBeVisible();
    await expect(page.getByText('AMZN Amazon.com Inc. 3,345.55 +15.55 +0.47% 10,876,543')).toBeVisible();
    await expect(page.getByText('TSLA Tesla Inc. 688.99 +5.99 +0.88% 30,234,567')).toBeVisible();
    await expect(page.getByText('META Meta Platforms Inc. 250.12 +1.12 +0.45% 25,345,678')).toBeVisible();
    await expect(page.getByText('NVDA NVIDIA Corporation 220.45 +3.45 +1.59% 18,456,789')).toBeVisible();
    await expect(page.getByText('BRK-B Berkshire Hathaway Inc. 290.30 +2.30 +0.80% 5,678,901')).toBeVisible();
    await expect(page.getByText('JPM JPMorgan Chase & Co. 160.75 +1.75 +1.10% 12,345,678')).toBeVisible();
    await expect(page.getByText('V Visa Inc. 225.60 +2.60 +1.17% 8,901,234')).toBeVisible();
    });
});
