import{chromium,test} from '@playwright/test';

    test('Open let code', async ()=>
    {
   const browser=await chromium.launch({
    headless: false
   });
   const context= await browser.newContext();
   const page= await context.newPage();
   
   await page.goto("https://ecommerce-playground.lambdatest.io/")
   await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]")
   await page.waitForTimeout(3000);
   await page.click("'Login'")
   // fill represent like sendkeys
   await page.fill("//input[@name='email']","addanny6080@gmail.com")
   await page.fill("//input[@name='password']","Daniel@123")
   await page.click("//input[@type='submit']")
   await page.waitForTimeout(5000);

   const newcontext=await browser.newContext();
   //const pageone=await context.newPage();
   //Cache will be carried forward if we not used above variable like newContext
   // once user login we can pass home page URL if don't do again if line number 21 is present is not 
   //possible to carried frwd cache  , bcz with give u new browser launch
   const pageone= await newcontext.newPage();
   await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
   await pageone.waitForTimeout(5000);
    })