import { expect, Page,test} from "@playwright/test";
import { log } from "console";


test("Interact with multiple tabs", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

     console.log("URL:"+page.url());  // CURRENT URL OF THE PAGE

     //LISTENRES LIKE ALERT
       //Structure in typescript
     const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);

    console.log(newWindow.url());
     // newWindow.fill("", "")
    }
)

test("Multiple Windows", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    // console.log(page.url());


    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])
    await multiPage.waitForLoadState();

    const pages = multiPage.context().pages();
    console.log('No.of tabs: ' + pages.length);

    pages.forEach(tab => {
        console.log(tab.url());
    })
    
  let facebookPage;
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url()
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index];
        }
    }
    const text = await facebookPage.textContent("//h1")
    console.log(text);


    // await pages[1].fill("", "kous");


})