import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { USERNAME, PASSWORD } from '../../env';

type PageFixtures = {
  authenticatedPage: Page;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  authenticatedPage: async ({ page, baseURL }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(baseURL!);
    await loginPage.login(USERNAME, PASSWORD);
    await loginPage.verifyLoginSuccess();
    await use(page);
  },

  inventoryPage: async ({ authenticatedPage }, use) => {
    await use(new InventoryPage(authenticatedPage));
  },

  cartPage: async ({ authenticatedPage }, use) => {
    await use(new CartPage(authenticatedPage));
  },

});

export { expect } from '@playwright/test';
