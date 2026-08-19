//Playwright with TypeScript - How to do Grouping of Tests in Playwright
import{test , expect} from '@playwright/test';

// HomePageTests group
//test.describe('HomePageTests',  ()=> // sare group runhonge 
//test.describe.only('HomePageTests',  ()=>  //.only use ke baad only  home page group run hoga
test.describe.skip('HomePageTests',  ()=>  // home page group skip hoga - .skip method se
{
test('HomePageTitleTest' , async({page})=>
{
console.log('This is home page title Test');
})

test('HomePageHeadingTest' , async({page})=>
{
console.log('This is home page heading Test');
})
})

// LoginTests group
test.describe('LoginTests' , ()=>
{

test('ValidLoginTest' , async({page})=>
{
console.log('This is Valid Login Test');
})

test('InValidLoginTest' , async({page})=>
{
console.log('This is InValid Login Test');
})
})
