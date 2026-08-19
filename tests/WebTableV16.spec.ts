//Playwright With TypeScript - How to Handle Web Tables in Playwright
import{ test ,expect} from '@playwright/test';
test('TableDemo' ,async({page})=>
{
await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/');
await page.waitForTimeout(5000);
//verify column count
const allCol = await page.locator('thead tr th'); // use css selector
const colCount = await allCol.count();
console.log("Total Column Count : " + colCount);
expect(colCount).toBe(4); // validation count will be 4
await page.waitForTimeout(4000);

//verify table row count
const allRow = await page.locator('tbody tr');
const rowCount =await allRow.count();
console.log("Total no of Rows : " + rowCount);
expect(rowCount).toBe(10);
await page.waitForTimeout(4000);
})