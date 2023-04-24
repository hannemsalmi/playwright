// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const cp = require('child_process');
const clientPlaywrightVersion = cp
  .execSync('npx playwright --version')
  .toString()
  .trim()
  .split(' ')[1];

const caps = {
  'browser': 'playwright-chromium',
  'os': 'os x',
  'os_version': 'mojave',
  'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'willepulkkinen_F1MOmL',
  'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'mtTwHT6uEmsLGsp2a5g5',
  'client.playwrightVersion': clientPlaywrightVersion
};

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'always' }]],
  use: {
    baseURL: 'https://areena.yle.fi',
    trace: 'on-first-retry',
    headless: false,
  },
  projects: [
    {
      name: 'chromium-browserstack',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        connectOptions: {
          wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
        },
      },
    },
  ],
});
