// Playwright with TypeScript - Understanding Assertions, SoftAssertions
import{test , expect} from '@playwright/test';
test('AsyncWaitDemo ', async({page})=> 
{

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    const usernamefield = await page.getByLabel('username');
    await expect(usernamefield).toBeVisible();
    await expect(usernamefield).toBeEnabled();

    const heading = await page.locator('h2');
    //await expect(heading).toHaveText('Test tlogin');
    await expect.soft(heading).toContainText('login');
    //login 
    await usernamefield.fill('student');
    await page.getByLabel('password').fill('Password123');
    await page.getByRole('button', {name:'Submit'}).click();
    //verify expected url
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    // veriy title
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation')
    await page.waitForTimeout(5000);

})