const { test, expect } = require('@playwright/test');
const AlertPage = require('../../pages/Alerts_Frame_Windows/AlertsPage');


test.describe('Alerts Tests', () => {

    let alertsPage;

    test.beforeEach(async ({ page }) => {
        alertsPage = new AlertPage(page);

        await alertsPage.openBrowser();
        await page.pause();
    });

    test('Verify Simple Alert Button', async () => {
        await alertsPage.openSimpleAlert();
    });

    test('Verify the Timer Alert Button', async () => {
        await alertsPage.openTimerAlert();
    });

    test('Verify the Confirm Alert Button', async () => {
        await alertsPage.openConfirmAlert();
    });

    test('Verify the Prompt Alert Button', async () => {
        await alertsPage.openPromptAlert();
    });


})
