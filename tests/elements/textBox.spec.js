const { test, expect } = require('@playwright/test');
const TextBoxPage = require('../../pages/elements/TextBoxPage');


//Test1
test('Verify and enter Form details', async ({ page })) => {

    const textBox = new TextBoxPage(page);

    await textBox.openBrowser();
    await textBox.submitButton(

    );

};
