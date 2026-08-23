import{test , expect} from '@playwright/test'

test('PaginationTest' , async({page})=>
{
    await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/');
    await page.waitForLoadState('networkidle')

    while(true)
    {
        const nextBtn = await page.locator('#example_next');

            if(await nextBtn.isDisabled())
            {
                break;
            }
            else
            {
                await nextBtn.click();
                await page.waitForTimeout(1000);
            }
}
})