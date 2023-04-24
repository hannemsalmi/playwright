# Playwright
 
 Playwright tests for Yle Areena website.

## Usage instructions

1. Clone the repository or download it as zip (if you do the latter, remember to also unzip files).
2. Open command prompt and navigate to "playwright" folder.
3. Give command "npx playwright test" to run all the tests.
4. Give command "npx playwright show-report" to show test report.

## Browser Testing with BrowserStack

We use BrowserStack for cross-browser testing. BrowserStack is a cloud-based service that provides access to multiple browser versions and platforms, including Chrome.

### Limitations

- BrowserStack provides a limited number of concurrent sessions, depending on the plan chosen.
- Running tests on BrowserStack can be slower than running them locally due to the overhead of connecting to remote browsers.
- Some advanced features, like network interception or video recording, might not be available or have limited support on BrowserStack.
- BrowserStack may not support the latest browser versions immediately after their release.
