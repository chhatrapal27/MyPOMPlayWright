//Playwright with TypeScript - How to Create and Use Custom Fixture
// v20 video + fixture(loginfixture file)

import{test} from '..//fixtures/LoginFixture'

test('ClickProduct' , async({loggedinpage})=>
{

    await loggedinpage.locator('#item_4_title_link').click();
    await loggedinpage.waitForTimeout(5000);
})

test('ClickAddToCart' , async({loggedinpage})=>
{
    await loggedinpage.locator('#add-to-cart-sauce-labs-backpack').click();
    await loggedinpage.locator('.shopping_cart_link').click();
    await loggedinpage.waitForTimeout(5000);
})