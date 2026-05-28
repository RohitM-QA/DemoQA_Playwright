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
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.homeLink.click()
    ]);
    await newPage.waitForLoadState();
    return newPage;    
}

async dynamicHomeLink(){
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.dynamicLink.click()
    ]);
    await newPage.waitForLoadState();
    return newPage;
}

async clickCreatedLink(){
    await this.click(this.createdLink);
}

async clickNoContentLink(){
    await this.click(this.noContentLink);
}

async clickMovedLink(){
    await this.click(this.movedLink);
}

async clickBadRequestLink(){
    await this.click(this.badRequestLink);
}

async clickUnauthLink(){
    await this.click(this.unauthorizedLink);
}

async clickForbiddenLink(){
    await this.click(this.forbiddenLink);
}

async clickNotFoundLink(){
    await this.click(this.notFoundLink);
}

async getResponseMsg (){
    return await this.page.textContent('this.linkResponse');
}

}

module.exports = LinksPage;