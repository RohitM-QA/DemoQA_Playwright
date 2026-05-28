const { test, expect } = require('@playwright/test');
const WebTablesPage = require('../../pages/elements/webTablesPage');

test('Web Tables - Add, Edit, Delete User', async({ page }) => {
    const webTablesPage = new WebTablesPage(page);

    await webTablesPage.openBrowser();
    await page.pause();

    await webTablesPage.registrationForm(
        'Rohit',
        'Mandal',
        'rohit@gmail.com',
        '25',
        '1000',
        'QA',
        'Alden'
    );
});