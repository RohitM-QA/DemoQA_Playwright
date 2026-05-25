class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path) {
    await this.page.goto(path);
  }

  async click(locator) {
    await this.page.locator(locator).click();
  }

  async fill(locator, value) {
    await this.page.locator(locator).fill(value);
  }

  async getText(locator) {
    return await this.page.locator(locator).innerText();
  }
}

module.exports = BasePage;