const BasePage = require('../BasePage');

class ButtonPage extends BasePage{
    constructor(page){
        super(page);

        this.doubleClickMe = page.locator('#doubleClickBtn');
        this.rightClickMe = page.locator('#rightClickBtn');
        this.clickMe = page.locator('#agOFH');        
    }

    async openBrowser(){
        await this.page.goto('/buttons');
    }

    async clickDoubleButtons(){
        await this.click(this.doubleClickMe);
        await this.click(this.rightClickMe);
        await this.click(this.clickMe);
    }   


}

module.exports = ButtonPage