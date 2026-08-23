import{test, expect} from '@playwright/test'

test('DownLoad File', async ({page})=>
{
 await page.goto('https://www.testmuai.com/selenium-playground/generate-file-to-download-demo/');
 await page.locator('#textbox').fill('This is a test file for download');
 await page.locator('#create').click();
 await expect(page.locator('#link-to-download')).toBeEnabled();
 const downLoadPromise = page.waitForEvent('download');
 await page.locator('#link-to-download').click();
 const dwt = await downLoadPromise;
 const fileName = dwt.suggestedFilename();
 console.log('Downloaded file: ' + fileName);
 const filePath = `downloads/${fileName}`;
 await dwt.saveAs(filePath);
})