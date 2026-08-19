// link V21
import{test as setup , expect} from '@playwright/test'

setup('authenticate' , async({page})=> 
{
    await page. goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle('Swag Labs');

    await page.context().storageState({
        path : 'auth/user.json'}); // auth folder create hoga root pr
    // Ab project ki config file me jakr project setup krenge 
})