import {Page} from "@playwright/test";

export default class RegistrationPage{

    constructor(public page:Page){

    }

   async enterFirstName(firstName:string){
    await this.page.locator("//input[@id='input-firstname']").type(firstName);
    }

    async enterLastName(lastname:string){
        await this.page.locator("//input[@id='input-lastname']").type(lastname);
    }

    async enterEmail(email:string){
        await this.page.locator("//input[@name='email']").type(email);
    }

    async enterTelephone(number:string){
        await this.page.locator("//input[@id='input-telephone']").type(number);
    }

    async enterPassword(password:string){
        await this.page.locator("//input[@id='input-password']").type(password);
    }

    async enterRePassword(rePassword:string){
        await this.page.locator("//input[@id='input-confirm']").type(rePassword);
    }

    isSubscribeChecked() {
        return this.page.locator("#input-newsletter-no");
    }

    async clickTermandConditon() { 
        await this.page.click("//label[@for='input-agree']")
    }

    async clickContinueToRegister() { 

        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            await this.page.click("input[value='Continue']")
        ]);
        }
    }