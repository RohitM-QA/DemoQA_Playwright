// playwright.config.js

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 1,

  workers: 2,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://demoqa.com',
    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 10000,

    navigationTimeout: 15000
  },

  projects: [

    {
      name: 'Chromium',
      use: {
        browserName: 'chromium'
      }
    },

    {
      name: 'Firefox',
      use: {
        browserName: 'firefox'
      }
    }

  ]

});