//Playwright With TypeScript - How to handle Checkboxe
import{test , expect} from '@playwright/test';

test('iframeDemo' , async({page}) =>
{
await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');
await page.waitForTimeout(2000);
// all check box store in allcheckbox vaiable
const allcheckbox = await page.locator("//input[@type='checkbox']");
//use assertion -- use for expect particular value
await expect(allcheckbox.first()).toBeChecked();
// for check 
await allcheckbox.first().check(); 
await page.waitForTimeout(2000);
//isChecked 
console.log("isChecked verify :" + await allcheckbox.first().isChecked());
// for unchecked
await allcheckbox.first().uncheck(); 
console.log("isChecked verify :" + await allcheckbox.first().isChecked());
await page.waitForTimeout(2000);

//isEnabled
console.log("IsEnabled method verify :" + await allcheckbox.nth(4).isEnabled());


})