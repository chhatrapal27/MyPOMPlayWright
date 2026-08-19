//Playwright with TypeScript - How to Select an Option from a Drop Down
//Dropdowns in HTML are typically created using <select> and <option> tag.

import{test, expect} from '@playwright/test';

test('DropDownTest' , async({page})=>
{
 await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');
 await page.waitForTimeout(2000);
 //select by label
 //await page.locator("[name=country]").selectOption({label:'India'});
 // Select By Index
// await page.locator("[name=country]").selectOption({index:6});
 //Select By value
 await page.locator("[name=country]").selectOption({value: 'AE'});
 await page.waitForTimeout(2000);
})