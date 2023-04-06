// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/tv/opas');

  // Expect a title to contain a specific string.
  await expect(page).toHaveTitle('TV-opas | Ohjelmat tänään | Areena | yle.fi');
});

test('has "Kymmenen uutiset" at 22.00', async ({ page }) => {
  await page.goto('/tv/opas');

  // Check "Näytä menneet ohjelmat" checkbox
  await page.getByRole('checkbox', { name: 'Näytä menneet ohjelmat' }).check();

  expect(await page.getByRole('checkbox', { name: 'Näytä menneet ohjelmat' }).isChecked()).toBeTruthy();


  // Check that the div containing text "Kymmenen uutiset" also contains text "22.00"
  const elementHandle = await page.locator('.schedule-card__header:has-text("Kymmenen uutiset")');
  expect(await elementHandle.innerText()).toContain('22.00');

  //Take screenshot of the div containing text "Kymmenen uutiset"
  await elementHandle.screenshot({ path: 'news-screenshot.png' });

});
