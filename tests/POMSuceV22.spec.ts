// Yhan POM file Bn rha hai - element or method hamre pages folder me loginPage.ts file me hai -V22
// yhan test case likhenge V=22 // POM _ Pages folder =LoginPage +ProductlistPage+CartPage 
import{test , expect} from '@playwright/test' //v22
import{LoginPage} from '../pages/loginPage' // import krdi file - pages folder se yhna v22
import{ProductListPage} from '../pages/productListPage' // import krdi file -productListPage - pages folder se yhna  v22
import { CartPage } from '../pages/cartPage'
test('ValidateLogin',  async({page})=>
{
 const loginpage = new LoginPage(page);
 await loginpage.openApplication(); 
 await loginpage.doLogin();

 expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html');
 await page.waitForTimeout(2000);
})

test('ValidateAddToCart' , async({page}) => 
{
 const loginpage = new LoginPage(page);
 await loginpage.openApplication();
 await loginpage.doLogin();
 expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html');
 
 //Object create
 const productListPage = new ProductListPage(page);
 await productListPage.clickAddtoCartbutton();
 expect(await productListPage.cartBadgeIcon).toHaveText('1');
 await productListPage.clickCartIcon();
 expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');
 const cartpage = new CartPage(page);
 expect(await cartpage.cartProduct).toHaveText('Sauce Labs Backpack')
 await page.waitForTimeout(5000);
})
