import{test , expect} from '@playwright/test'

test('PaginationTest2' , async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    const pages =  await page.locator('#pagination li a');
    const pagecount = await pages.count();

    for(let i=1; i<pagecount; i++) 
    {
        await pages.nth(i).click();
        await page.waitForTimeout(1000);
    }
})