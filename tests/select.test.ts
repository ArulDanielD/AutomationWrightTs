import { chromium,test } from "@playwright/test";

test("Select dropdown", async({ page})=>
{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("//select[@id='select-demo']", {
    index: 5
    })

    await page.waitForTimeout(3000);
    test("dropdown", async ({ page }) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
        await selectCountry("India");
        await selectCountry("Denmark");
        await selectCountry("South Africa");
        // await page.waitForTimeout(3000)
    
        async function selectCountry(countryName) {
            await page.click("#country+span");  //  line number 28
            await page.locator("ul#select2-country-results") // line 30
                .locator("li", {
                    hasText: countryName
                }).click();
        }
    })
//Multi select option
  await page.selectOption("#multi-select", [{
    label:"Texas"}
    ,{
        value:"Washington"
    },
    {
        index:2
    }

])
}
)

test("Bootstrap dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.click("(//span[@class='select2-selection select2-selection--single'])[1]");
    await page.waitForTimeout(10000);
    await page.fill("(//input[@class='select2-search__field'])[2]","India");
    await page.click("//li[contains(text(),'India')]");
    await page.waitForTimeout(10000);
})



