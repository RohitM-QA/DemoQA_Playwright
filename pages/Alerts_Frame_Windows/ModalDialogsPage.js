const BasePage = require('../BasePage');

class ModalDialogsPage extends BasePage {
    constructor(page) {
        super(page);

        this.smallModalBtn = page.locator('#showSmallModal');
        this.largeModalBtn = page.locator('#showLargeModal');

        this.smallModalTitle = page.locator('#example-modal-sizes-title-sm');
        this.largeModalTitle = page.locator('#example-modal-sizes-title-lg');

        this.bodyText = page.locator('.modal-body');

        this.closeSmallBtn = page.locator('#closeSmallModal');
        this.closeLargeBtn = page.locator('#closeLargeModal');
    }

    async openBrowser() {
        await this.page.goto('/modal-dialogs');
    }

    async clickOnSmallBtn() {
        await this.smallModalBtn.click();
    }

    async clickOnLargeBtn() {
        await this.largeModalBtn.click();
    }

    async getSmlModalTitle() {
        return await this.smallModalTitle.textContent();
    }

    async getLrgModalTitle() {
        return await this.largeModalTitle.textContent();
    }

    async getBodyText() {
        return await this.bodyText.textContent();
    }

    async closeSmallModal() {
        await this.closeSmallBtn.click();
    }

    async closeLargeModal() {
        await this.closeLargeBtn.click();
    }
}

module.exports = ModalDialogsPage;