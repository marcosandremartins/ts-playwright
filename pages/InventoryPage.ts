import {BasePage} from './BasePage';
import {expect} from "@playwright/test";

/**
 * ✅ This class contains all the methods to interact with the Inventory page
 */
export class InventoryPage extends BasePage {

    private onWaitFixed2000ms = 2000;
    private swagLabsUrl = 'https://www.saucedemo.com/v1/inventory.html';

    /**
     * ✅ This method opens the Inventory page
     */
    async open() {
        await this.navigateTo(this.swagLabsUrl);
    }

    /**
     * ✅ This method picks one product from the Inventory page
     */
    async pickAProduct(product: string) {

        // select target product
        await this.page.getByRole('link', {name: product}).click();

        // add to cart, assert button add exists and is visible
        const btnAddItem = this.page.getByRole('button', {name: 'ADD TO CART'});
        await expect(btnAddItem).toBeVisible();
        await btnAddItem.click();

        // navigate to cart
        await this.page.getByRole('link', {name: '1'}).click();

        // ✅ safe wait for page load
        await this.page.waitForLoadState('load');

        // ✅ optional - just for user to be able to see the result
        await this.page.waitForTimeout(this.onWaitFixed2000ms);
    }

}
