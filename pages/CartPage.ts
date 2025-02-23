import {BasePage} from './BasePage';
import {expect} from "@playwright/test";

/**
 * ✅ This class contains all the methods to interact with the Cart page
 */
export class CartPage extends BasePage {

    private onWaitFixed2000ms = 2000;
    private swagLabsUrl = 'https://www.saucedemo.com/v1/cart.html';

    /**
     * ✅ This method opens the Cart page
     */
    async open() {
        await this.navigateTo(this.swagLabsUrl);
    }

    /**
     * ✅ This checks for Cart details
     */
    async checkProductInCartList(product: string) {

        // locate && assert the text of the element
        const itemElement = this.page.getByRole('link', {name: product});
        await expect(itemElement).toHaveText(product);

        // ✅ screenshot
        await this.page.screenshot({path: 'cart.png'});

        // ✅ optional - just for user to be able to see the result
        await this.page.waitForTimeout(this.onWaitFixed2000ms);
    }

}
