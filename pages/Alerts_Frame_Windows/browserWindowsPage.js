const BasePage = require('../BasePage');

class BrowserWindows extends BasePage {
    constructor(page) {
        super(page);

        this.newTabBtn = page.locator('#tabButton');
        this.newWindow = page.locator('#windowButton');
        this.newWindowMsgBtn = page.locator('#messageWindowButton');
    }
    async openBrowser() {
        await this.page.goto('/browser-windows');
    }

    async clickOnNewTab() {
        const [newTab] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.newTabBtn.click()
        ]);
        await newTab.waitForLoadState();
        return newTab;
    }

    async clickOnNewWindow() {
        const [newWindow] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.newWindow.click()
        ]);
        await newWindow.waitForLoadState();
        return newWindow;
    }

    async getNewWindowMessageText() {
    const [newWindow] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.newWindowMsgBtn.click()
    ]);

    await newWindow.waitForLoadState();

    return await newWindow.textContent('body');
}



};

module.exports = BrowserWindows;