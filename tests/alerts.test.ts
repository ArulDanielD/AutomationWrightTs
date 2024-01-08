import { chromium ,test } from "@playwright/test";

//Alert Click Me
// if we don't have unique locator it will be given strict mode voilations
test ("handling alert ", async ({ page })=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    //alert method

    page.on("dialog",async(alert)=>{
        const text= await alert.message();
        console.log("Message :"+text);
        await alert.accept();

    })
    const alert=await page.locator("(//button[text()='Click Me'])[1]");
    alert.click();
})

//Confrim box

test("Confirmed box", async({page})=>
{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    //alert method
    page.on("dialog",async(alert)=>{ //listneres
    const text=alert.defaultValue();
    console.log("TEXT MESSAGE :"+text);
    await alert.accept();

  })
  await page.locator("button:has-text('Click Me')").nth(1).click();
  // expect(page.locator("id=confirm-demo")).toContainText("Cancel!")

  const text= await page.locator("//p[@id='confirm-demo']");
  console.log(await text.textContent());
//   expect(get).toHaveText("","You pressed OK!");
}
)

test.only("Modal alert", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    page.on("dialog",async(alert)=>{ //listneres
        const text=alert.defaultValue();
        console.log("TEXT MESSAGE :"+text);
        await page.click("(//button[text()='Save Changes'])[1]")
    })
    await page.click("//button[@data-target='#myModal']")
})