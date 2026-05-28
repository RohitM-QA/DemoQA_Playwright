const { test, expect } = require('@playwright/test');
const LinksPage = require('../../pages/elements/linksPage');

test('Verify the Home Link', async ({ page }) =>{
    const linkPage = new LinksPage(page);
    await linkPage.openBrowser();
    await page.pause();
    
    const newPage = await linkPage.clickHomeLink();
    await expect(newPage).toHaveURL('https://demoqa.com/');

})

test('Verify the Dynamic Link', async ({ page }) =>{
    const linkPage = new LinksPage(page);
    await linkPage.openBrowser();
    await page.pause();
 
    await linkPage.dynamicHomeLink();
})

test('Verify the Created API Link', async ({ page }) =>{
    const linkPage = new LinksPage(page);
    await linkPage.openBrowser();
    await page.pause();
 
    await linkPage.clickCreatedLink();

    await expect(
    page.locator('#linkResponse')
  ).toHaveText('Link has responded with staus 201 and status text Created');
})

test('Verify the No Content API Link', async ({ page }) =>{
    const linkPage = new LinksPage(page);
    await linkPage.openBrowser();
    await page.pause();
 
    await linkPage.clickNoContentLink();
})

test('Verify the Moved API Link', async ({ page }) =>{
    const linkPage = new LinksPage(page);
    await linkPage.openBrowser();
    await page.pause();
 
    await linkPage.clickMovedLink();
})

test('Verify the Bad Request API Link', async ({ page }) =>{
    const linkPage = new LinksPage(page);
    await linkPage.openBrowser();
    await page.pause();
 
    await linkPage.clickBadRequestLink();
})

test('Verify the Unauthorized API Link', async ({ page }) =>{
    const linkPage = new LinksPage(page);
    await linkPage.openBrowser();
    await page.pause();
 
    await linkPage.clickUnauthLink();
})

test('Verify the Forbidden API Link', async ({ page }) =>{
    const linkPage = new LinksPage(page);
    await linkPage.openBrowser();
    await page.pause();
 
    await linkPage.clickForbiddenLink();
})

test('Verify the Not Found API Link', async ({ page }) =>{
    const linkPage = new LinksPage(page);
    await linkPage.openBrowser();
    await page.pause();
 
    await linkPage.clickNotFoundLink();
})

