const { test, expect } = require('@playwright/test');
const ModalPage = require('../../pages/Alerts_Frame_Windows/ModalDialogsPage');


test.describe('Modal Pages Tests', () => {

    let modalPage;

    test.beforeEach(async ({ page }) => {
        modalPage = new ModalPage(page);

        await modalPage.openBrowser();
        await page.pause();
    });

    test('Verify Small Button', async () => {
        await modalPage.clickOnSmallBtn();

    })

    test ('Verfy Large Button', async () => {
        await modalPage.clickOnLargeBtn();
    }) 

    test ('Verfy Small Modal Title', async () => {
        await modalPage.getSmlModalTitle;
    }) 

    test ('Verfy Large Modal Title', async () => {
        await modalPage.getLrgModalTitle;
    }) 

    test ('Verfy Body Texts', async () => {
        await modalPage.getBodyText;
    })

    test ('Verfy Close Small Modal', async () => {
        await modalPage.closeSmallModal;
    })
    
    test ('Verfy Large Small Modal', async () => {
        await modalPage.closeLargeModal;
    })




})