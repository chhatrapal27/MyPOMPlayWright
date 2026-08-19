// Playwright with TypeScript - Understanding async , await and promise

import{test , expect} from '@playwright/test';
test('AsyncWaitDemo ', async({page})=> 
{
 await page.goto('https://bstackdemo.com/');
 await expect(page).toHaveTitle('StackDemo');
 await page.locator('#signin').click();
 await page.waitForTimeout(5000);
}
)