import{test , expect} from '@playwright/test';

test('AutoSuggestionTest' , async({page})=>
{
 await page.goto('https://www.youtube.com/@chhatrapalmourya8512');

 await page.getByPlaceholder('Search').fill('Playwright');
 const allSuggestion = await page.getByRole('option');
 await allSuggestion.first().waitFor({ state: 'visible' });
 const count = await allSuggestion.count();
 for(let i=0 ; i<count ; i ++)
 {
    const text = await allSuggestion.nth(i).textContent();
    console.log(text);
    expect(text).toContain('playwright');
 }

 await page.waitForTimeout(5000);
})