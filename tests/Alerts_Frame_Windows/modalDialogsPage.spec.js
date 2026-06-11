const { test, expect } = require('@playwright/test');
const ModalPage = require('../../pages/Alerts_Frame_Windows/ModalDialogsPage');


test.describe('Modal Pages Tests', () => {

    let modalPage;

    test.beforeEach(async ({ page }) => {
        modalPage = new ModalPage(page);

        await modalPage.openBrowser();
        //await page.pause();
    });

    test('Verify Small Button', async () => {
        await modalPage.clickOnSmallBtn();

    })

    test('Verify Large Button', async () => {
        await modalPage.clickOnLargeBtn();
    })

    test('Verify Small Modal Title', async () => {
        await modalPage.getSmlModalTitle();
        //console.log(title);
    })

    test('Verify Large Modal Title', async () => {
        await modalPage.getLrgModalTitle();
        //console.log(title);
    })

    test('Verify Body Texts', async () => {
        await modalPage.getBodyText();
        //console.log(bodyText);
    })

    test('Verify Close Small Modal', async () => {
        await modalPage.closeSmallModal();
    })

    test('Verify Large Modal', async () => {
        await modalPage.closeLargeModal();
    })




})