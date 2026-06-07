const BasePage = require('../BasePage');

class FramePage extends BasePage {
    constructor(page) {
        super(page);

        this.firstFrame = page.locator('#frame1');
        this.secondFrame = page.locator('#frame2');
    }

    async openBrowser() {
        await this.page.goto('/frames');
    }

    async getFrame1() {
        const frame1 = this.page.frameLocator(this.firstFrame);
        return await frame1.locator().textContent();
    }

    async getFrame2() {
        const frame2 = this.page.frameLocator(this.secondFrame);
        return await frame2.locator().textContent();
    }


    async getFrameCount() {
        return await this.page.locator('iframe').count();
    }

    async isFrameVisible(frameSelector) {
        return await this.page.locator(frameSelector).isVisible();
    }


}

module.exports = FramePage;