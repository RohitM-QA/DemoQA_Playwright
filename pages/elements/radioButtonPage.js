const BasePage = require('../BasePage');

class RadioButtonPage extends BasePage{

    constructor(page) {
        super(page);

        this.radioYes = page.locator('#yesRadio');
        this.impressiveRadio = page.locator('#impressiveRadio');
        // this.radioNo = page.locator('#noRadio');
    }

    async openBrowser() {
        await this.page.goto('/radio-button')       
    }

    async clickYesButton(){
        await this.click(this.radioYes);
    }

    async clickImpressiveButton() {
        await this.click(this.impressiveRadio);
    }

    // async clickNoButton() {
    //     await this.click(this.radioNo);
    // }

}

module.exports = RadioButtonPage;