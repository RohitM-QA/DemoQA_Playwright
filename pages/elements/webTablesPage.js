const BasePage = require('../BasePage');

class WebTablesPage extends BasePage {

    constructor(page) {
        super(page);

        this.addTableButton = page.locator('#addNewRecordButton');
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#userEmail');
        this.age = page.locator('#age');
        this.salary = page.locator('#salary');
        this.department = page.locator('#department');
        this.submitBtn = page.locator('#submit');

        this.searchBox = page.locator('#searchBox');
    }

    async openBrowser() {
        await this.page.goto('/webtables');
    }
 
    async registrationForm(fName, lName, emailAdd, ageNo, salAmount, depName, searchType) {
         await this.click(this.addTableButton);

        
        await this.fill(this.firstName, fName);
        await this.fill(this.lastName, lName);
        await this.fill(this.email, emailAdd);
        await this.fill(this.age, ageNo);
        await this.fill(this.salary, salAmount);
        await this.fill(this.department, depName);        
        
        await this.click(this.submitBtn);
        
        await this.click(this.searchBox, searchType);
    }
}

module.exports = WebTablesPage;