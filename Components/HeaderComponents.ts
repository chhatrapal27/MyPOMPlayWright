import{Page , Locator} from '@playwright/test'  // v29

export class HeaderComponent
{
    page : Page;
    burgerMenu : Locator;
    hamburgerMenuClose : Locator;

    constructor(page :Page)
    {
        this.page = page;
        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.hamburgerMenuClose = page.locator('#react-burger-cross-btn');
    }
    
    async openandcloseHamburger()
    {
        await this.burgerMenu.click();
        await this.page.waitForTimeout(5000);
        await this.hamburgerMenuClose.click();
    }
}