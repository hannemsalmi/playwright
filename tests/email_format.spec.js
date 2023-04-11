// @ts-check
const { test, expect } = require('@playwright/test');

test('try to set email', async ({ page }) => {
    await page.goto('https://areena.yle.fi/tv');

    // Locate the login element of the page
    await page.click('html body header div div div:nth-of-type(2) div:nth-of-type(1) button');

    // Switch to the iframe context
    const frame = await page.frame({ name: 'tunnus-iframe-id' });
    await frame?.waitForTimeout(1000);
    await frame?.getByRole('textbox').fill('invalid-email');

    // Wait for the button to be visible
    await frame?.waitForSelector('button[type="submit"]');

    // Click the button
    await frame?.click('button[type="submit"]');

    // Wait for a possible error message to pop up
    await frame?.waitForSelector('html > body > div > div > div > div > main > form > fieldset:nth-of-type(1) > fieldset > p');
    const errorMessage = await frame?.$eval('html > body > div > div > div > div > main > form > fieldset:nth-of-type(1) > fieldset > p', 
        (element) => element.textContent);

    // In case the error message is included in the source code, the outcome is logged to the console
    if (errorMessage?.includes('Tarkista sähköpostiosoitteen muoto.')) {
        console.log('Email format validation test did not pass with an email in a wrong format');
    } else {
        console.log('Email format validation test passed with an email in a wrong format');
    }

});