import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  private readonly inventoryItemName = this.getLocator('.inventory_item_name');
  private readonly addBackpackButton = this.getByTestId('add-to-cart-sauce-labs-backpack');
  private readonly shoppingCartLink = this.getByTestId('shopping-cart-link');
  private readonly burgerMenuButton = this.getLocator('#react-burger-menu-btn');
  private readonly logoutLink = this.getLocator('#logout_sidebar_link');

  async verifyInventoryPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
  }

  async getFirstItemName(): Promise<string> {
    return this.inventoryItemName.first().innerText();
  }

  async addFirstItemToCart(): Promise<void> {
    await this.addBackpackButton.click();
  }

  async verifyCartBadgeCount(count: string): Promise<void> {
    await expect(this.shoppingCartLink).toContainText(count);
  }

  async navigateToCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }

  async logout(): Promise<void> {
    await this.burgerMenuButton.click();
    await this.logoutLink.waitFor({ state: 'visible' });
    await this.logoutLink.click();
  }
}
