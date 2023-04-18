import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test('should not have any automatically detectable accessibility issues', async ({ page }, testInfo) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  
      await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
      });
  
    expect(accessibilityScanResults.violations).toEqual([]);
});

test('has Yle TV1 logo and label', async ({ page }) => {
  await page.goto('https://areena.yle.fi/tv/opas');

  // Expect the logo to be present
  const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(1) > h2 > a > div');
  const logoImage = logo.getAttribute('style');
  expect(logo).toBeTruthy();
  expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/yle-tv1_vtc.png');

  // Expect the logo to have a specific label
  const labelText = logo.getAttribute('aria-label');
  expect(await labelText).toContain('Yle TV1');
});

test('has Yle TV2 logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(2) > h2 > a > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/yle-tv2_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('Yle TV2');
});

test('has Yle Teema Fem logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(3) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/yle-teema-fem_vt.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('Yle Teema Fem');
});

test('has Yle Areena logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(4) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/yle-areena_vt.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('Yle Areena');
});

test('has Mtv3 logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(5) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/MTV3_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('MTV3');
});

test('has Nelonen logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(6) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/Nelonen_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('Nelonen');
});

test('has Sub logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(7) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/Sub_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('Sub');
});

test('has TV5 logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(8) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/TV5_vt.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('TV5');
});

test('has Liv logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(9) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/Liv_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('Liv');
});

test('has JIM logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(10) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/JIM_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('JIM');
});

test('has Kutonen logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(11) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/Kutonen_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('Kutonen');
});

test('has TLC logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(12) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/TLC_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('TLC');
});

test('has STAR Channel logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(13) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/STAR%20Channel_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('STAR Channel');
});

test('has Ava logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(14) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/Ava_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('Ava');
});

test('has Hero logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(15) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/Hero_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('Hero');
});

test('has Frii logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(16) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/Frii_vtc.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('Frii');
});

test('has National Geographic logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(17) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/National%20Geographic_vt.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('National Geographic');
});

test('has TV Finland logo and label', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
  
    // Expect the logo to be present
    const logo = await page.waitForSelector('div:nth-child(1) > ul > li:nth-child(18) > h2 > div');
    const logoImage = logo.getAttribute('style');
    expect(logo).toBeTruthy();
    expect(await logoImage).toContain('https://images.cdn.yle.fi/image/upload/c_fill,f_auto,h_64,q_auto:eco/v1675410392/tv-finland_vt.png');
  
    // Expect the logo to have a specific label
    const labelText = logo.getAttribute('aria-label');
    expect(await labelText).toContain('TV Finland');
});