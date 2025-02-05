import { test } from './fixtures/base.fixture';

test.describe('SwagLabs Tests', () => {
  test('User can log in and log out successfully', async ({
    loginPage,
    inventoryPage,
  }) => {
    await inventoryPage.logout();
    await loginPage.verifyLogoutSuccess();
  });

  test('User can add item to cart', async ({
    inventoryPage,
    cartPage,
  }) => {
    const firstItemName = await inventoryPage.getFirstItemName();

    await inventoryPage.addFirstItemToCart();
    await inventoryPage.verifyCartBadgeCount('1');

    await inventoryPage.navigateToCart();
    await cartPage.verifyCartPageLoaded();
    await cartPage.verifyItemInCart(firstItemName);
    await cartPage.verifyCartItemCount(1);
  });

});
