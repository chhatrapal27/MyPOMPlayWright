import{Page , Locator} from '@playwright/test'
import { HeaderComponent } from '../Components/HeaderComponents'; //add v29
import { BasePage } from './basepage';// v31

export class CartPage extends BasePage
{
    page :Page;
    cartProduct : Locator;
    //header : HeaderComponent ; // add v29

    constructor( page :Page)
    {
        super(page);
        this.page = page;
        //this.header = new HeaderComponent(page); // add v29 
        this.cartProduct = page.locator('#item_4_title_link');
    }
}