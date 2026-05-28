const BasePage = require('../BasePage');

class ButtonPage extends BasePage {
    constructor(page) {
        super(page);

        this.doubleClickBtn = page.locator('#doubleClickBtn');
        this.rightClickBtn = page.locator('#rightClickBtn');
        this.singleClickBtn = page.locator('//button[text()="Click Me"]');

        this.doubleClickMsg = page.locator('#doubleClickMessage');
        this.rightClickMsg = page.locator('#rightClickMessage');
        this.singleClickMsg = page.locator('#dynamicClickMessage');
    }

    async openBrowser() {
        await this.page.goto('/buttons');
    }



    async performDoubleClick() {
        await this.doubleClickBtn.dblclick();
    }

    async getDoubleClickMessage() {
        //return await this.doubleClickMsg.textContent();
        const message = await this.doubleClickMsg.textContent();
        console.log(message);
    }



    async performRightClick() {
        await this.rightClickBtn.click({ button: 'right' });
    }

    async getRightClickMessage() {
        //return await this.page.textContent(this.rightClickMsg);
        const message1 = await this.rightClickMsg.textContent();
        console.log(message1);
    }



    async perfomClickMe() {
        await this.singleClickBtn.click();
    }

    async getSingleClickMessage() {
        //return await this.page.textContent(this.singleClickMsg);
        const message2 = await this.singleClickMsg.textContent();
        console.log(message2);
    }
}



module.exports = ButtonPage