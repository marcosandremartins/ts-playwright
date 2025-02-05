import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private readonly usernameInput = this.getByTestId('username');
  private readonly passwordInput = this.getByTestId('password');
  private readonly loginButton = this.getByTestId('login-button');

  async navigate(url: string): Promise<void> {
    await this.goto(url);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
  }

  async verifyLogoutSuccess(): Promise<void> {
    await expect(this.loginButton).toBeVisible();
  }
}
