// fixture use in POM -Pages folder =LoginPage +ProductlistPage+CartPag
//Playwright with TypeScript - Add storageState into Page Object Model v 25
import { TEST_DATA } from '../data/testData';
import {test , expect} from '../fixtures/pageObjectFixture'  // fixture import

test('ValidateLogin',  async({page, loginpage , productListPage, cartpage})=>
{
//await loginpage.openApplication(); 
await loginpage.openInventoryPage();
await expect(page).toHaveURL(TEST_DATA.urls.inventory);
// expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html'); // hardcoded - but niche v24 me humne dynamic kr diye 
 await expect(page).toHaveURL(TEST_DATA.urls.inventory); // inka data jo - data folder me - TEST_DATA 
 await page.waitForTimeout(5000);
})

test('ValidateAddToCart' , async({page, loginpage , productListPage, cartpage}) => 
{
 //await loginpage.openApplication();
 await loginpage.openInventoryPage();
 //expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html'); // hardcoded - v22 ,v23
 await expect(page).toHaveURL(TEST_DATA.urls.inventory); // v24 dynamic
 await productListPage.waitForPageLoad(); // v31  abstarct bn gya - kuki class inherit ki thi
 await productListPage.clickAddtoCartbutton();
 await productListPage.header.openandcloseHamburger(); //v29
 await expect (productListPage.cartBadgeIcon).toHaveText('1');
 await productListPage.clickCartIcon();
 //expect(await page).toHaveURL('https://www.saucedemo.com/cart.html'); // hardcoded - v22 ,v23
 await expect(page).toHaveURL(TEST_DATA.urls.cart);// v24 dynamic

})

test('ValidateCartItem' , async({page, loginpage , productListPage, cartpage}) => 
{
 //await loginpage.openApplication();
 await loginpage.openInventoryPage();
 await expect(page).toHaveURL(TEST_DATA.urls.inventory);
 // expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html'); //hardcoded - v22 ,v23 
 await expect(page).toHaveURL(TEST_DATA.urls.inventory);// v24 dynamic

 await productListPage.clickAddtoCartbutton();
 await expect(productListPage.cartBadgeIcon).toHaveText('1');
 await productListPage.clickCartIcon();
 // expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');/hardcoded - v22 ,v23
 await expect(page).toHaveURL(TEST_DATA.urls.cart)// v24 dynamic

 await expect(cartpage.cartProduct).toHaveText('Sauce Labs Backpack')
 await cartpage.header.openandcloseHamburger(); // v29
 await page.waitForTimeout(5000);
})
