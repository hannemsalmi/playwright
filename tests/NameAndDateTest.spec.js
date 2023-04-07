// @ts-check
const { test, expect } = require('@playwright/test');

test('extract episode name and date', async ({ page }) => {
  await page.goto('https://areena.yle.fi/1-3339547');

  // Locate the 3rd season element
  const seasonElement = await page.locator('li.DesktopDropdown_item__QxPNK:nth-child(3) button.AlternateButton_root__5TY0i');
  await seasonElement.click();

  // Wait for the new episodes to load
  await page.waitForTimeout(1000);

  // Select the 5th episode element
  const episodeElement = await page.locator('section > div > div > div > div:nth-child(2) > div > ul > li:nth-child(5)');

  // Extract the name and date of the episode
  const episodeName = await episodeElement.locator('div > div:nth-child(2) > h3 > a').innerText();
  const episodeDate = await episodeElement.locator('div > div:nth-child(2) > div > div > span:nth-child(2)').innerText();

  console.log(`Episode name: ${episodeName}`);
  console.log(`Episode date: ${episodeDate}`);

  // Perform your desired assertions
  expect(episodeName).toContain('5. Kummeli');
  expect(episodeDate).toContain('ti 8.3.2016');
});




