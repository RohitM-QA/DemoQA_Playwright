const { test, expect } = require('@playwright/test');
const AlertPage = require('../../pages/Alerts_Frame_Windows/AlertsPage');


test('Verify Simple Alert', async () => {

        await AlertPage.simpleAlertBtn();
    });
