import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    // 1. Valid Login
    test('@smoke logs in with valid credentials', async ({ page }) => {

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        await expect(page).toHaveURL(/\/inventory\.html/);
        await expect(page.getByText('Products')).toBeVisible();
    });


    // 2. Invalid Username
    test('@regression shows error for invalid username', async ({ page }) => {

        await page.locator('[data-test="username"]').fill('invalid_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        await expect(page.locator('[data-test="error"]'))
            .toContainText('do not match any user');
    });


    // 3. Invalid Password
    test('@regression shows error for invalid password', async ({ page }) => {

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('wrong_password');
        await page.locator('[data-test="login-button"]').click();

        await expect(page.locator('[data-test="error"]'))
            .toContainText('do not match any user');
    });


    // 4. No Credentials // Tag = @smoke or @regression
    test('@smoke shows error when no credentials are provided', async ({ page }) => {

        await page.locator('[data-test="login-button"]').click();

        await expect(page.locator('[data-test="error"]'))
            .toContainText('Username is required');
    });

});