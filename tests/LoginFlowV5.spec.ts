//Playwright with TypeScript - Write First Test Case - Login and Logout Functionality
import{test, expect} from '@playwright/test';
test('LoginTest' , async({page})=> 
{
 await page.goto('https://practicetestautomation.com/practice-test-login/');
 await expect(page).toHaveTitle('Test Login | Practice Test Automation');

 //Test Steps
 await page.getByLabel('username').fill('student');
 await page.getByLabel('password').fill('Password123');
 await page.getByRole('button' , {name : 'Submit'}).click();

 // validation
 await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
 await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
//logout 
 await page.getByRole('link',{name :'Log out'}).click();
 await page.waitForTimeout(3000);
 await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
 await page.waitForTimeout(2000);
}
)