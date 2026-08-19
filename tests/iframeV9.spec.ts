//Playwright With TypeScript - How to handle iFrame in Playwright
import{test , expect} from '@playwright/test';

test('iframeDemo' , async({page}) =>
{
await page.goto('https://jqueryui.com/autocomplete/');
const myframe = await page.frameLocator('.demo-frame');
await myframe.locator('id=tags').fill('Java');
await page.waitForTimeout(5000);
}
)