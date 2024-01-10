import {chromium,test,expect} from "@playwright/test";

test("Frames", async({ page })=>
{
   await page.goto("https://letcode.in/frame");
   const countOfFrame=page.frames();
   console.log("TOtal count of frames: "+countOfFrame.length);

   //NOW Switch to frame
   const switchToFrame=page.frame("firstFr");  // name
   // we can add some expression on tha
//    if(switchToFrame!=null){
//     await page.fill
//    }

    //? it  will return as null operator if frame its there it give or null
    await switchToFrame?.fill("//input[@name='fname']","Arul");
    await switchToFrame?.fill("//input[@name='lname']","Daniel");

    //Assert condition
    expect(await switchToFrame?.locator("p.has-text-info").textContent()).toContain("You have entered");
    await page.waitForTimeout(3000);
    // Inner frame
    const innerframe=switchToFrame?.frameLocator("//iframe[@src='innerFrame']");
    const framess=innerframe?.locator("//input[@name='email']");
    framess?.fill("DANIEL@GMAIL.COM");
    await page.waitForTimeout(3000);
})

test.only("Interact With Frame",async ({ page }) => {

    await page.goto("https://letcode.in/frame");
    const countOfFrame=page.frames();
    console.log("TOtal count of frames: "+countOfFrame.length);

    const frame=page.frame("#firstFr");
    
    await frame?.locator("//input[@name='fname']").fill("ArulDDD");
    await page.waitForTimeout(3000);
    await frame?.locator("//input[@name='lname']").fill("Daniel");
    await page.waitForTimeout(3000);
}
    )