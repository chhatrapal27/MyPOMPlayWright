//Playwright With TypeScript - How to Handle Java Script Alerts
import{test, expect} from '@playwright/test';

test('AlertTest' , async({page})=>
{
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    await page.waitForTimeout(5000);

    //dialog listner
    page.on('dialog' , async dialog => {
        //await dialog.accept(); // for Ok
       // await dialog.dismiss(); // for cancel
       console.log(await dialog.message()); // Prompt dialog pr se text msg print krna
        await dialog.accept('Playwright'); // For entering text in prompt dialog - accept method -apna text send kr skte hai
    })
    // alert() → simple message with OK
    //await page.locator("(//button[@type='button'][normalize-space()='Click Me'])[1]").click();
    
    // confirm() alert → OK / Cancel
    //await page.locator("(//button[@type='button'][normalize-space()='Click Me'])[2]").click();

    //prompt() alert → input field + OK / Cancel
    await page.locator("(//button[@type='button'][normalize-space()='Click Me'])[3]").click();
    await page.waitForTimeout(5000);
})