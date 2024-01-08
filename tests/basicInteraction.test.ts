import {chromium,expect,test} from "@playwright/test";

test("Basic Interaction with Radio Button", async({ page })=>
{
  await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
  const messageInput=page.locator("//input[@placeholder='Please enter your Message']");
  console.log(messageInput.getAttribute("placeholder"));
  //AssertCondition
  expect(messageInput).toHaveAttribute("placeholder","Please enter your Message");
// Input value
console.log(await messageInput.inputValue());
await messageInput.type("Hi Daniel");
}
)

test("Sum Of Adding numbers", async({ page})=>
{
   await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
   const inputone=page.locator("//input[@id='sum1']");
   const inputtwo=page.locator("//input[@id='sum2']");
   //type sendkeys
   let num1=121;
   let num2=321;
  await inputone.type(""+num1);  // we can use fill we it will clear the exisiting data it will add new data
  await inputtwo.type(""+num2);
   console.log("Enter the Value of A:"+num1);
   console.log("Enter the Value of B:"+num2);
   await page.click("//input[@id='sum2']//following::button[@type='button']");
   const text=page.locator("//p[@id='addmessage']");
   console.log(await text.textContent());  // its get text in selenium repalce we textcontent
  let expectedresult=num1 + +num2;
   //assert condition
   expect(text).toHaveText(""+expectedresult);
})

test("Checkbox", async ({ page }) => {

  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
  const singleCheckbox = page.locator("id=isAgeSelected")
  expect(singleCheckbox).not.toBeChecked();
  await singleCheckbox.check();
  expect(singleCheckbox).toBeChecked();
})

test.only("Multi checked box", async ({page})=>{
  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
  await page.waitForTimeout(5000);
  const firstchecBox= await page.locator("id=ex1-check1");
  expect(firstchecBox).not.toBeChecked();
  await firstchecBox.click();
  expect(firstchecBox).toBeChecked();
  // const secondcheckBox= await page.locator("id=ex1-check2");
  // expect(secondcheckBox).not.toBeChecked();
  // const thirdcheckBox= await page.locator("id=ex1-check3");
  // expect(thirdcheckBox).not.toBeChecked();
  // const fourthcheckBox= await page.locator("id=ex1-check4");
  const checks=await page.locator("//input[@type='button']");
  await checks.click();
})

// If having n-number test cases based on ,it will open browser start from to end

