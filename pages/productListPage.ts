import{Page , Locator} from '@playwright/test'
export class ProductListPage
{
 page : Page
 addToCartButton : Locator;
 cartBadgeIcon : Locator;
 cartIcon : Locator;

 constructor(page :Page)
 {
    this.page =page;
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