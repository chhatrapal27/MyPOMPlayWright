import { TEST_DATA } from "../data/testData"; //  Ye aya data/testData.ts -- V25 
import{ test , expect } from '../fixtures/pageObjectFixture' // pages  folder

test('authenticateuser', async({page, loginpage}) =>
{
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL(TEST_DATA.urls.inventory);
    await page.context().storageState({path : 'auth.user.json'}); // is path pr authrnticateuser ka session store hoga
} )
