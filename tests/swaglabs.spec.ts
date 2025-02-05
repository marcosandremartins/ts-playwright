import { test, expect, Page } from '@playwright/test';

const swagLabsUrl = 'https://www.saucedemo.com/v1/';
const swagLabsUsername = 'standard_user';
const swagLabsPassword = 'secret_sauce';

const dataTestUsername = "[data-test='username']";
const dataTestPassword = "[data-test='password']";
const dataTestLoginButton = "[id='login-button']";

test.describe('SwagLabs Tests', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
  });

  test('User can log in successfully', async () => {
    await page.goto(swagLabsUrl);

    await page.fill(dataTestUsername, swagLabsUsername);
    await page.fill(dataTestPassword, swagLabsPassword);
    await page.click(dataTestLoginButton);

    await expect(page).toHaveURL(/inventory.html/);
    await page.screenshot({ path: 'example.png' });
  });

  test.afterEach(async () => {
    await page.close();
  });
});
