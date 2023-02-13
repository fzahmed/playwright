const { test, expect } = require('@playwright/test');

test('Landing Page', async({page})=>{

   await page.goto('https://playwright.dev/');

   await console.log(page.url());
   





});

