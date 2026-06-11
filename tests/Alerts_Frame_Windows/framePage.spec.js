const { test, expect } = require('@playwright/test');
const FramesPage = require('../../pages/Alerts_Frame_Windows/FramePage');


test.describe('Frame - Test Cases', () => {

    let framePage;

    test.beforeEach(async ({ page }) => {
        framePage = new FramesPage(page);

        await framePage.openBrowser();
        await page.pause();
    });

    test('Verify the Count', async () => {
        const count = await framePage.getFrameCount();
        expect(count).toBe(2);


    });

})