const { test, expect } = require('@playwright/test');
const ButtonsPage = require('../../pages/buttons/buttonPage');

// test.describe('DemoQA Buttons Page', () => {

  test('Verify Double Click Button', async ({ page }) => {

    const buttonsPage = new ButtonsPage(page);

    await buttonsPage.openBrowser();

    await buttonsPage.clickDoubleButtons();

    await expect(
      page.locator('#doubleClickMessage')
    ).toHaveText('You have done a double click');
  });