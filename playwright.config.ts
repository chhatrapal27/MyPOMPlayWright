import { defineConfig, devices } from '@playwright/test';
//import dotenv from "dotenv"; // v32   // disbled for v33

/*dotenv.config({ // disbled for v33
  path: `./env/.env.${process.env.ENV}`,  // ${process.env.ENV} => $ dynamic hia
  override: true // isse system ka name ni aayega - proper env username aayea - override true krne pr
    }); // v32  // ``  ye backtick hai naki sigle quotes */
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,  // iska mtlb - ki fail test ko kitni bar runkrna hai - 0 ki  kr diya to - 1 war rerun hoga
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:[
            ['html'],
            ['allure-playwright'] // v30 - vese  single tha html - default repot , buu hume allure report chaiye isliye array bnakar allure add kia
            ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    baseURL : 'https://www.saucedemo.com',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [

    {
      name: 'setup', 
      //testMatch: /.*global\.setup\.ts/}, // v25 ka setup
        testMatch: '**/*.setup.ts'},
    //Setup project - auth.setup.ts se aaya
    /*{ name: 'setup', 
      testMatch: /.*\.setup\.ts/ },*/
    
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      // Use prepared auth state.
       storageState: 'auth/user.json' // privous stoageState
      //storageState: 'auth.user.json' // v25 video ke liye
    },
        dependencies: ['setup']
    },
        
    {
      name: 'firefox',
       use: { 
        ...devices['Desktop Firefox'],
        storageState: 'auth/user.json'
      },
        dependencies: ['setup']
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
          storageState: 'auth/user.json'
        },
        dependencies: ['setup']
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
