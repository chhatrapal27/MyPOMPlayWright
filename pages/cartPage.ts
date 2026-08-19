import{Page , Locator} from '@playwright/test'

export class CartPage
{
    page :Page;
    cartProduct : Locator;

    constructor( page :Page)
    {
        this.page = page;
        this.cartProduct = page.locator('#item_4_title_link');
    }
}