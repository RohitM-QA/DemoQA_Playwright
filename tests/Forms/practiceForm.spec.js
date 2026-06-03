const { test, expect } = require('@playwright/test');
const PracticeFormPage = require('../../pages/Forms/practiceFormPage');

test('Enter the details on the form', async ({ page }) => {
    const practiceForm = new PracticeFormPage(page);

    await practiceForm.openBrowser();
    await page.pause();
    await practiceForm.fillPracticeForm({

        firstName: 'Rohit',
        lastName: 'Mandal',
        email: 'rohit@test.com',
        gender: 'Male',
        mobileNumber: '9876543210',
        date: '01 Jan 1995',
        subject: 'Maths',
        Hobbies: 'Sports',

        //picture: 'test-data/images/profile.png',

        address: 'Kathmandu, Nepal',

        state: 'NCR',
        city: 'Delhi'

    });

    await expect(page.locator('#example-modal-sizes-title-lg')
    ).toHaveText(
        'Thanks for submitting the form'
    );

    await practiceForm.clickOnCloseBtn();

});