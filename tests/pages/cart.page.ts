import { expect, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  private readonly cartItemName = this.getLocator('.inventory_item_name');
  private readonly cartItem = this.getLocator('.cart_item');

  async verifyCartPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/cart\.html/);
  }

  async verifyItemInCart(expectedItemName: string): Promise<void> {
    await expect(this.cartItemName).toBeVisible();
    await expect(this.cartItemName).toHaveText(expectedItemName);
  }

  async verifyCartItemCount(count: number): Promise<void> {
    await expect(this.cartItem).toHaveCount(count);
  }

  async clickCheckout(): Promise<void> {
    await this.getByTestId('checkout').click();
  }
}
