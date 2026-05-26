const { test, expect } = require('@playwright/test');
const WebTablesPage = require('../../pages/WTables/webTablesPage');

//Test 1

test('Adding new Table', async({page}) => {
    const webTablesPage = new WebTablesPage(page);

    await webTablesPage.openBrowser();
    //await page.pause();

    await webTablesPage.registrationForm();
    
});