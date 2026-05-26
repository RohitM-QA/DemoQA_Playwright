const { test, expect } = require('@playwright/test');
const TextBoxPage = require('../../pages/elements/TextBoxPage');


//Test1
test('Enter the details on the form', async ({ page }) => {

    const textBox = new TextBoxPage(page);

    await textBox.openBrowser();
    //await page.pause();
    await textBox.submitForm(
        'Rohit Mandal',
        'rohit@gmail.com',
        'Lalitpur',
        'Kathmandu, Nepal'

    );

    await expect(page.locator('#output')).toBeVisible();

});

// //Test2
// test('Invalid email Address', async ({ page }) => {

//     const textBox = new TextBoxPage(page);

//     await textBox.openBrowser();
//     //await page.pause();
//     await textBox.submitForm(
//         'Rohit Mandal',
//         'rohit M',
//         'Lalitpur',
//         'Kathmandu, Nepal'

//     );

//     await expect(page.locator('#output')).toBeVisible();

// });
