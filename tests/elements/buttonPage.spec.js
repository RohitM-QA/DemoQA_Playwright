const { test, expect } = require('@playwright/test');
const ButtonsPage = require('../../pages/elements/buttonPage');

// test.describe('DemoQA Buttons Page', () => {

test('Verify Double Click Button', async ({ page }) => {

  const buttonsPage = new ButtonsPage(page);

  await buttonsPage.openBrowser();

  await buttonsPage.performDoubleClick();

  await buttonsPage.getDoubleClickMessage();

  await expect(
    page.locator('#doubleClickMessage')
  ).toHaveText('You have done a double click');
});


test('Verify Right Click Button', async ({ page }) => {

  const buttonsPage = new ButtonsPage(page);

  await buttonsPage.openBrowser();
  await page.pause();

  await buttonsPage.performRightClick();

  await buttonsPage.getRightClickMessage();

  await expect(
    page.locator('#rightClickMessage')
  ).toHaveText('You have done a right click');

});


test('Verify Single Click Button', async ({ page }) => {

  const buttonPage = new ButtonsPage(page);

  await buttonPage.openBrowser();
  await page.pause();

  await buttonPage.perfomClickMe();

  await buttonPage.getSingleClickMessage();

  await expect(
    page.locator('#dynamicClickMessage')
  ).toHaveText('You have done a dynamic click');

});