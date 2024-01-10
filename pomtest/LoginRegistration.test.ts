import {test} from "@playwright/test";

import RegistrationPage from "../Pages/RegistrationPage";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import SpecialHotPage from "../Pages/SpecialHotPage";


const newLocal = "aruldaniel@mailinator.com"; 
const pass="daniel@3456";
const repass="daniel@3456" //ctrl .
test("Registration test_01", async({page,baseURL})=>
 {
// baseurl coming from fixtures
//' vatex ampersen'
    const register=new RegistrationPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
    // await page.goto('${baseUrl}route=account/register');
     await register.enterFirstName("Arul");
     await register.enterLastName("Danny");
     await register.enterEmail(newLocal);
     await register.enterTelephone("1234567890");
     await register.enterPassword(pass);
     await register.enterRePassword(repass);
     // validation
   await  register.isSubscribeChecked();
   await register.clickTermandConditon();
   await register.clickContinueToRegister();




})

test.only("Add to cart test_02",async ({page,baseURL})=>{
    const login =new LoginPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await login.login(newLocal,repass);
    const text=await page.title();
    console.log("**********************"+text);

})