const { test, expect } = require('@playwright/test');
const RadioButtonPage = require('../../pages/elements/radioButtonPage');

//Test1
test ('Verify the Radio Buttons', async ({page}) => {
    const radioButtonPage = new RadioButtonPage(page);
    
    await radioButtonPage.openBrowser();
    await page.pause();

    await radioButtonPage.clickYesButton();

    await radioButtonPage.clickImpressiveButton();


});