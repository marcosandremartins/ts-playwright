import { Page } from '@playwright/test';

/**
 * ✅ BasePage
 *
 * This is the base page class that will be extended by all other page classes.
 */
export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);

        // ✅ wait for page to load && wait until network activity has finished
        await this.page.waitForLoadState('load');
        await this.page.waitForLoadState('networkidle');
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }

    async waitForElement(selector: string) {
        await this.page.waitForSelector(selector);
    }
}
