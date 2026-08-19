//Playwright With TypeScript - What are Hooks in Playwright
//Use hocks - use beforeEach and afterEach method
import{test , expect, Page} from '@playwright/test';

let page: Page;
test.beforeAll(async( {browser})=>
{
page = await browser.newPage();
 await page.goto('https://www.saucedemo.com/');
 await page.locator('#user-name').fill('standard_user');
 await page.locator('#password').fill('secret_sauce');
 await page.locator('#login-button').click();
})

test.afterAll(async()=>
{
await page.locator('#react-burger-menu-btn').click();
await page.locator('#logout_sidebar_link').click();
})

test('Validate Inventory' , async()=> // Test case validate iinventory
{
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
 await page.waitForTimeout(5000);
 })

 test ('AddToCart' , async()=> // add to card test case
{
await page.locator('#add-to-cart-sauce-labs-backpack').click();
expect(await page.locator('.shopping_cart_badge')).toBeVisible();
await page.waitForTimeout(5000);
})