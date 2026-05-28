const BasePage = require('../BasePage');

class LinksPage extends BasePage {
    constructor(page) {
        super(page);

        //New Tab Open Links
        this.homeLink = page.locator('#simpleLink');
        this.dynamicLink = page.locator('#dynamicLink');

        //API open Links with message
        this.createdLink = page.locator('#created');
        this.noContentLink = page.locator('#no-content');
        this.movedLink = page.locator('#moved');
        this.badRequestLink = page.locator('#bad-request');
        this.unauthorizedLink = page.locator('#unauthorized');
        this.forbiddenLink = page.locator('#forbidden');
        this.notFoundLink = page.locator('#invalid-url');

        this.linkResponse ='#linkResponse';       

}

async openBrowser() {
    await this.page.goto('/links');
}

async clickHomeLink(){
    const [newPage] = await promises.all([
        this.page.context().waitForEvent('page'),
        this.page.click(this.homeLink)
    ]);
    await newPage.waitForLoadState();
    return newPage;    
}




}