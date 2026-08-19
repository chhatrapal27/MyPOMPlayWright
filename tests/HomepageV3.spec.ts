//Playwright with TypeScript - How to Create and Execute Test in Playwright
import{test , expect} from '@playwright/test';

test('Validate Page Tittle' , async({page})=>
{
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})