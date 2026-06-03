const BasePage = require('../BasePage');

class PracticeFormPage extends BasePage {
    constructor(page) {
        super(page);

        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#userEmail')

        this.genderMale = page.locator('label[for= "gender-radio-1"]');
        this.genderFemale = page.locator('label[for= "gender-radio-2"]');
        this.genderOther = page.locator('label[for= "gender-radio-3"]');

        this.mblNumber = page.locator('#userNumber');
        this.dateOfBirth = page.locator('#dateOfBirthInput');
        this.subjectName = page.locator('#subjectsInput');

        //this.sportHobby = page.locator('input[id="hobbies-checkbox-1"]');
        this.sportHobby = page.locator('#hobbies-checkbox-1');
        this.readingHobby = page.locator('input[id="hobbies-checkbox-2"]');
        this.musicHobby = page.locator('input[id="hobbies-checkbox-3"]');

        //this.pictureUpload = page.locator('#uploadPicture');

        this.currentAddress = page.locator('#currentAddress');
        this.stateDropdown = page.locator('#state');
        this.cityDropdown = page.locator('#city');

        this.submitBtn = page.locator('#submit');

        this.successTitle = page.locator('#example-modal-sizes-title-lg');
        this.closeBtn = page.locator('#closeLargeModal');

    }

    async openBrowser() {
        await this.page.goto('/automation-practice-form');
    }

    async enterFirstName(firstName) {
        await this.firstName.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.lastName.fill(lastName);
    }

    async enterEmail(email) {
        await this.email.fill(email);
    }

    async selectGender(gender) {

        switch (gender.toLowerCase()) {

            case 'male':
                await this.genderMale.click();
                break;

            case 'female':
                await this.genderFemale.click();
                break;

            case 'other':
                await this.genderOther.click();
                break;
        }
    }

    async enterMobileNo(mobileNumber) {
        await this.mblNumber.fill(mobileNumber);
    }

    async selectDateOfBirth(date) {
        await this.dateOfBirth.fill(date);
        await this.page.keyboard.press('Enter');
    }

    async enterSubject(subject) {
        await this.subjectName.fill(subject);
        //await this.subjectsInput.press('Escape');
        await this.page.click('body');
    }

    async selectHobby(Hobbies) {
        switch (Hobbies.toLowerCase()) {

            case 'sports':
                await this.sportHobby.check();
                break;

            case 'reading':
                await this.readingHobby.check();
                break;

            case 'music':
                await this.musicHobby.check();
                break;
        }
    }

    // async uploadPicture(filePath) {
    //     await this.pictureUpload.setInputFiles(filePath);
    // }

    async enterAddress(address) {
        await this.currentAddress.fill(address);
    }

    async selectState(state) {

        await this.stateDropdown.click();

        await this.page.locator(
            `//*[text()='${state}']`
        ).click();
    }

    async selectCity(city) {

        await this.cityDropdown.click();

        await this.page.locator(
            `//*[text()='${city}']`
        ).click();
    }

    async clickOnSubmit() {
        await this.submitBtn.click();
    }

    async confirmSuccessMsg() {
        return await this.successTitle.textContents();
    }

    async clickOnCloseBtn() {
        await this.closeBtn.click();
    }

    async fillPracticeForm(data) {
        await this.enterFirstName(data.firstName);
        await this.enterLastName(data.lastName);
        await this.enterEmail(data.email);
        await this.selectGender(data.gender);
        await this.enterMobileNo(data.mobileNumber);
        await this.selectDateOfBirth(data.date);
        await this.enterSubject(data.subject);
        await this.selectHobby(data.Hobbies);
        //await this.uploadPicture(data.filePath);
        await this.enterAddress(data.address);
        await this.selectState(data.state);
        await this.selectCity(data.city);

        await this.clickOnSubmit();
    }

}

module.exports = PracticeFormPage;