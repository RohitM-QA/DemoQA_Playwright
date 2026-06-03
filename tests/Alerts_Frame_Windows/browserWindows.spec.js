const { test, expect } = require('@playwright/test');
const BrowserWindowsPage = require('../../pages/Alerts_Frame_Windows/browserWindowsPage');

test('Click On NewTab and Verify it runs successfully', async ({ page }) => {
    const browserWindows = new BrowserWindowsPage(page);
    await browserWindows.openBrowser();
    await page.pause();

    const newTab = await browserWindows.clickOnNewTab();
    await expect(newTab).toHaveURL('https://demoqa.com/sample');

    await newTab.close();
})

test(' Click on New Window and Verify it runs successfully', async ({ page }) => {
    const browserWindows = new BrowserWindowsPage(page);
    await browserWindows.openBrowser();
    await page.pause();

    const newTab = await browserWindows.clickOnNewWindow();
    await expect(newTab).toHaveURL('https://demoqa.com/sample');

    await newTab.close();
})

test('Click on New Window Message and Verify it runs successfully', async ({ page }) => {
    const browserWindows = new BrowserWindowsPage(page);
    await browserWindows.openBrowser();
    await page.pause();

    const message = await browserWindows.getNewWindowMessageText();
    expect(message).toContain('Knowledge');

})