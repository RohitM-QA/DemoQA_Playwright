const BasePage = require('../BasePage');

class CheckboxPage extends BasePage{

    constructor(page) {
        super(page);

        this.expandButton = page.locator('.rc-tree-switcher.rc-tree-switcher_close');
        this.clickHomeButton = page.locator('.rc-tree-checkbox[aria-label="Select Home"]');
    }

    async openBrowser(){
        await this.page.goto('/checkbox');
    }

    async clickCheckbox(){
        await this.click(this.expandButton);     
    }

    async clickHomebox(){
        await this.click(this.clickHomeButton);
    }

    // async getResult(){
    //     return await this.page.textContent(this.resultText);
    // }

}

module.exports = CheckboxPage;