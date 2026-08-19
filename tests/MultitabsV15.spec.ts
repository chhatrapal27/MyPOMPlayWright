//Playwright With TypeScript - How to Handle Multiple Browser Tabs
import{test , expect} from '@playwright/test';
test('MultiTabTest' , async({page , context}) => 
{
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
const pagepromise = context.waitForEvent('page');
 await page.getByRole('link' ,{name:'OrangeHRM, Inc'}).click();
 const newpage = await pagepromise;
 console.log(await newpage.title());
 await page.bringToFront();
 console.log(await page.title());
 await page.waitForTimeout(9000);
})