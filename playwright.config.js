const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    browserName: 'chromium',
    headless: false,
    baseURL: 'https://demoqa.com',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  }
});