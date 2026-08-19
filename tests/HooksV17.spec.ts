//Playwright With TypeScript - What are Hooks in Playwright 
// Test case Without hocks
import{test , expect} from '@playwright/test';

test('Validate Inventory' , async({page})=>
{
 await page.goto('https://www.saucedemo.com/');
 await page.locator('#user-name').fill('standard_user');
 await page.locator('#password').fill('secret_sauce');
 await page.locator('#login-button').click();
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
 await page.locator('#react-burger-menu-btn').click();
 await page.locator('#logout_sidebar_link').click();
 await page.waitForTimeout(5000);
 })
 
 test ('AddToCart' , async({page})=>
{
await page.goto('https://www.saucedemo.com/');
 await page.locator('#user-name').fill('standard_user');
 await page.locator('#password').fill('secret_sauce');
 await page.locator('#login-button').click();
 await page.locator('#add-to-cart-sauce-labs-backpack').click();
 expect(await page.locator('.shopping_cart_badge')).toBeVisible();
 await page.locator('#react-burger-menu-btn').click();
 await page.locator('#logout_sidebar_link').click();
 await page.waitForTimeout(5000);
})