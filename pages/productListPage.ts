import{Page , Locator} from '@playwright/test'
import { HeaderComponent } from '../Components/HeaderComponents'; /// from components folder - v29
import { BasePage } from './basepage'; // v31

export class ProductListPage extends BasePage
{
 page : Page
 addToCartButton : Locator;
 cartBadgeIcon : Locator;
 cartIcon : Locator;
 //header : HeaderComponent; // add v29

 constructor(page :Page)
 {
   super(page); // v31 - class inharit ki and yhna uska intiate kia by super keyword
    this.page =page;
    //this.header = new HeaderComponent(page); // add v29
    this.addToCartButton= page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartBadgeIcon = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
 }

 async clickAddtoCartbutton()
 {
    await this.addToCartButton.click();

 }
 async clickCartIcon()
 {
    await this.cartIcon.click();
 }
}