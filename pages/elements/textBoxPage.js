const BasePage = require('../BasePage');

class TextBoxPage extends BasePage{

    constructor(page){
        super(page);


        this.fullName = page.locator('#userName');
        this.emailAddress = page.locator('#userEmail');
        this.currentAddress = page.locator('#currentAddress');
        this.permanentAddress = page.locator('#permanentAddress');
        this.submitButton = page.locator('#submit');
    }

    async openBrowser(){
        await this.page.goTto('/text-box');
    }

    async submitForm(fName, emailAdd, cAddress, pAddress){
        await this.fill(this.fullName, fName);
        await this.fill(this.emailAddress, emailAdd);
        await this.fill(this.currentAddress, cAddress);
        await this.fill(this.permanentAddress, pAddress);
        await this.click(this.submitButton);
    }
}

module.exports = TextBoxPage;