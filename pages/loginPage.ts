import{Page , Locator} from '@playwright/test'
import { TEST_DATA } from '../data/testData'; // v24 - ka hai - isse import kret hai test data file - datadriven test ke liye
export class LoginPage  // is class ko bhar use kra hai to yhna export krna hoga or ther class me import 
{
    // Class element litst
    page : Page;
    usernameField : Locator;
    passwordField : Locator;
    loginButton : Locator;

    constructor( page : Page) // then construcotr ki hrlp se sbhi elment ko inisilize kr diya
    {
        this.page = page;
        this.usernameField = page.locator('#user-name'); 
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async openApplication()
    {
        //await this.page.goto('https://www.saucedemo.com/') // video 22, 23 me hardcoded uses hu
        await this.page.goto('/') // Url config file se dynmicly aa rha hai - video 24 '/' dynamic adding
    }
    async doLogin()
    {
        await this.usernameField.fill(TEST_DATA.user.username); // v24 - yhan hadcoded - cridentials use na krke abd data driven use krenge 
        await this.passwordField.fill(TEST_DATA.user.password); //v24 - yhan hadcoded - cridentials use na krke abd data driven use krenge
        await this.loginButton.click();
    }
    async openInventoryPage()
    {
    await this.page.goto(TEST_DATA.urls.inventory); // ✅ dynamic
    }
}