// fixture use in POM -Pages folder =LoginPage +ProductlistPage+CartPag
import { TEST_DATA } from '../data/testData';
import {test , expect} from '../fixtures/pageObjectFixture'  // fixture import

test('ValidateLogin',  async({page, loginpage , productListPage, cartpage})=>
{
 await loginpage.openApplication(); 
 await loginpage.doLogin();
// expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html'); // hardcoded - but niche v24 me humne dynamic kr diye 
 expect(await page).toHaveURL(TEST_DATA.urls.inventory); // inka data jo - data folder me - TEST_DATA 
 await page.waitForTimeout(5000);
})

test('ValidateAddToCart' , async({page, loginpage , productListPage, cartpage}) => 
{
 await loginpage.openApplication();
 await loginpage.doLogin();
 //expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html'); // hardcoded - v22 ,v23
 expect(await page).toHaveURL(TEST_DATA.urls.inventory); // v24 dynamic
 await productListPage.clickAddtoCartbutton();
 expect(await productListPage.cartBadgeIcon).toHaveText('1');
 await productListPage.clickCartIcon();
 //expect(await page).toHaveURL('https://www.saucedemo.com/cart.html'); // hardcoded - v22 ,v23
 expect(await page).toHaveURL(TEST_DATA.urls.cart);// v24 dynamic

})

test('ValidateCartItem' , async({page, loginpage , productListPage, cartpage}) => 
{
 await loginpage.openApplication();
 await loginpage.doLogin();
 // expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html'); //hardcoded - v22 ,v23 
 expect(await page).toHaveURL(TEST_DATA.urls.inventory);// v24 dynamic

 await productListPage.clickAddtoCartbutton();
 expect(await productListPage.cartBadgeIcon).toHaveText('1');
 await productListPage.clickCartIcon();
 // expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');/hardcoded - v22 ,v23
 expect(await page).toHaveURL(TEST_DATA.urls.cart)// v24 dynamic

 expect(await cartpage.cartProduct).toHaveText('Sauce Labs Backpack')
 await page.waitForTimeout(5000);
})
