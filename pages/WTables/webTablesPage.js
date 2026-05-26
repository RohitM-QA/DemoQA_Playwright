const BasePage = require('../BasePage');

class WebTablesPage extends BasePage{

    constructor(page) {
        super(page);

        this.addTableButton = page.locator('#addNewRecordButton');

        this.firstName = '#firstName';
        this.lastName = '#lastName';
        this.email = '#userEmail';
        this.age = '#age';
        this.salary = '#salary';
        this.department = '#department';
        this.submitBtn = '#submit';
        }

    async openBrowser() {
        await this.page.goto('/webtables');
    }

    async registrationForm(fName, lName, emailAdd, ageNo, salAmount, depName) {
        await this.fill(this.firstName, fName);
        await this.fill(this.lastName, lName);
        await this.fill(this.emailAddress, emailAdd);
        await this.fill(this.age, ageNo);
        await this.fill(this.salary, salAmount);
        await this.fill(this.department, depName);
        await this.click(this.sumitButton);

    }
}

module.exports = WebTablesPage;