const BasePage = require('../BasePage');

class PracticeFormPage extends BasePage {
    constructor(page) {
        super(page);

        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.userEmail = page.locator('#userEmail')

        this.genderMale = page.locator('label[for= "gender-radio-1"]');
        this.genderFemale = page.locator('label[for= "gender-radio-2"]');
        this.genderOther = page.locator('label[for= "gender-radio-3"]');

        this.mblNumber = page.locator('#userNumber');
        this.dateOfBirth = page.locator('#dateOfBirthInput');
        this.subjectName = page.locator('#subjectsInput');
        
        this.sportHobby = page.locator('input[id="hobbies-checkbox-1"]');
        this.readingHobby = page.locator('input[id="hobbies-checkbox-2"]');
        this.musicHobby = page.locator('input[id="hobbies-checkbox-3"]');

        this.pictureUpload = page.locator('#uploadPicture');

        this.currentAddress = page.locator('#currentAddress');
        this.stateDropdown = page.locator('#state');
        this.cityDropdown = page.locator('#city');

        this.submitBtn = page.locator('#submit');

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

    async enterEmail(userEmail) {
        await this.userEmail.fill(userEmail);
    }

    async selectGender(gender) {

        switch(gender.toLowerCase()) {

            case 'male':
                await this.page.click(this.genderMale);
                break;

            case 'female':
                await this.page.click(this.genderFemale);
                break;

            case 'other':
                await this.page.click(this.genderOther);
                break;
        }
    }

    async enterMobileNo(mobileNumber) {
        await this.mblNumber.fill(mobileNumber);
    }

    async dateOfBirth(birthDate) {
        await this.dateOfBirth.fill(birthDate);
        await this.page.keyboard.press('Enter');
    }

    async enterSubject(subject) {
        await this.subjectName.fill(subject);
    }

    async selectHobby(Hobbies) {
        switch(Hobbies.toLowerCase()) {

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

    async uploadPicture(filePath) {
    await this.pictureUpload.setInputFiles(filePath);
}

    async enterCurrentAdd(address){
        this.currentAddress.fill(address);
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

}

module.exports = PracticeFormPage;