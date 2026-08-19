// Playwright With TypeScript - How to take screenshot

import{test , expect} from '@playwright/test';
test('ScreenShotTest' , async({page})=>
{
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.waitForTimeout(3000);
    
    // to take viewport screnshot
    //await page.screenshot({path : 'ViewPortscrenshot.png'});

    // full page screenshot
    //await page.screenshot({path: 'FullpageScreenshot.png' , fullPage : true});

    // take a screenshot a specific element
   const elem1=  await  page.getByText('Get Started Free');
   await elem1.screenshot({path : 'elem1.png'});

})