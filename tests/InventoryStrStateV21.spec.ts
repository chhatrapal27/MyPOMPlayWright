//Playwright with TypeScript - "storageState" What, Why and How?
// Ye auth.setup.ts se connet hai by config file
import{test , expect}  from '@playwright/test';

test('Validate Product details page ', async({page}) =>
{
await page.goto('https://www.saucedemo.com/inventory.html');
await expect(page.locator('.title'))
            .toHaveText('Products');
await page.locator('#item_4_title_link').click();
await page.waitForTimeout(5000);
});


test('Validate Cart page ', async({page}) =>
{
await page.goto('https://www.saucedemo.com/inventory.html');
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.locator('.shopping_cart_link').click();
await page.waitForTimeout(5000);
})