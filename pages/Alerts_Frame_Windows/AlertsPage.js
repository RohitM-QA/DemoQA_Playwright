const { assert } = require('node:console');
const BasePage = require('../BasePage');

class AlertPage extends BasePage {
    constructor(page) {
        super(page);

        this.simpleAlertBtn = page.locator('#alertButton');
        this.timerAlertBtn = page.locator('#timerAlertButton');
        this.confirmAlertBtn = page.locator('#confirmButton');
        this.promptAlertBtn = page.locator('#promtButton');
        
    }
    
    async openBrowser () {
        await this.page.goto('/alerts');
    }

    async openSimpleAlert(){
        this.page.once('dailog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
            await this.page.click(this.simpleAlertBtn);
        })
    }
   


}

module.exports = AlertPage;