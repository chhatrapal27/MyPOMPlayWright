// Ye video 23 ke hai 
import{test as base, expect} from '@playwright/test'
import{LoginPage} from '../pages/loginPage' // import krdi file - pages folder se yhna 
import{ProductListPage} from '../pages/productListPage' // import krdi file -productListPage - pages folder se yhna 
import { CartPage } from '../pages/cartPage';

type myFixture = 
{
  loginpage :LoginPage;
  productListPage :  ProductListPage;
  cartpage : CartPage;
}
export const test = base.extend<myFixture>
({
loginpage : async({page} , use)=>{
    await use(new LoginPage(page));
},
productListPage : async({page} , use)=>{
    await use(new ProductListPage(page));
},
cartpage : async({page} , use)=>{
    await use(new CartPage(page));
},

})
export{expect} from '@playwright/test'
