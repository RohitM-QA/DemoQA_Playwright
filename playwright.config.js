const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,

  use: {
    headless: false,
    baseURL: 'https://demoqa.com',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],

  // reporter: [
  //   ['html', { open: 'always' }]   // 👈 this is the “show report” config
  // ],
});