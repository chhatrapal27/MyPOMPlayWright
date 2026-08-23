import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'; // ye tb use hoga jb fake dahata chiye hard coded me ni 

test('Faker', async ({ page }) => {

    // hardcoded data
    /*await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/')
    await page.waitForLoadState('networkidle');

    await page.locator('#name').fill('amit');
    await page.locator('#inputEmail4').fill('amit@tester.com');
    await page.locator('#inputPassword4').fill('qwerty123');
    await page.locator('#company').fill('Testing Company');
    await page.locator('#websitename').fill('testingcompany.com');
    await page.locator('#inputCity').fill('Mumbai');
    await page.waitForTimeout(3000);
    await page.locator('#inputAddress1').fill('My Test Address1');
    await page.locator('#inputAddress2').fill('My Test Address2');
    await page.locator('#inputState').fill('Delhi');
    await page.locator('#inputZip').fill('12345');

    await page.waitForTimeout(2000);*/
     // faket data - from faker api 
    await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/')
    await page.waitForLoadState('networkidle');

    await page.locator('#name').fill(faker.person.fullName());
    await page.locator('#inputEmail4').fill(faker.internet.email());
    await page.locator('#inputPassword4').fill(faker.internet.password());
    await page.locator('#company').fill(faker.company.name());
    await page.locator('#websitename').fill(faker.internet.url());
    await page.locator('#inputCity').fill(faker.location.city());
    await page.waitForTimeout(3000);
    await page.locator('#inputAddress1').fill(faker.location.streetAddress());
    await page.locator('#inputAddress2').fill(faker.location.secondaryAddress());
    await page.locator('#inputState').fill(faker.location.state());
    await page.locator('#inputZip').fill(faker.location.zipCode());

    await page.waitForTimeout(2000);
});