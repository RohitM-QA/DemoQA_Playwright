const { test, expect } = require('@playwright/test');
const CheckboxPage = require('../../pages/elements/checkboxPage');

//Test1
test('Verify the checkboxes', async ({ page }) => {
    const checkBoxPage  = new CheckboxPage(page);

    await checkBoxPage.openBrowser();
    //await page.pause();

    await checkBoxPage.clickCheckbox();

    await checkBoxPage.clickHomebox();

    // const result = await checkBoxPage.getResult();
    // expect(result).toContain('home');

});