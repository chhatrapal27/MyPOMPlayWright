//Playwright with TypeScript - How to Read data from JSON file
import{test , expect, Page} from '@playwright/test'
import loginData from '../TestData/LoginData.json'

test('LoginTest', async( {page})=>
{
 await page.goto('https://practicetestautomation.com/practice-test-login/');
 // await page.getByLabel('username').fill('student'); // Hardode
 await page.getByLabel('username').fill(loginData.username); // Datadriven by json
 await page.getByLabel('password').fill(loginData.password); // data by json
 await page.getByRole('button' ,{name : 'Submit'}).click();
 await page.waitForTimeout(5000);
})