const BasePage = require('../BasePage');

class BrokenLinksPage extends BasePage {
    constructor(page) {
        super(page);

        this.validImage = page.locator('img[src="/images/Toolsqa.jpg"]');
        this.brokenImage = page.locator('img[src = "/images/Toolsqa_1.jpg"]')

        this.validLink = page.locator('a[href="http://demoqa.com"]');
        this.brokenLink = page.locator('a[href="http://the-internet.herokuapp.com/status_codes/500"]');
    };

    async openBrowser() {
        await this.page.goto('/broken');
    }

    async clickValidImage(){
        
    }
}
