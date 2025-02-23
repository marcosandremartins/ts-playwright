import {BasePage} from './BasePage';
import {expect} from "@playwright/test";

/**
 * ✅ This class contains all the methods to interact with the Login page
 */
export class LoginPage extends BasePage {

    private onWaitFixed500ms = 500;
    private swagLabsUrl = 'https://www.saucedemo.com/v1/';
    private swagLabsUsername = 'standard_user';
    private swagLabsPassword = 'secret_sauce';

    private dataTestUsername = "[data-test='username']";
    private dataTestPassword = "[data-test='password']";
    private dataTestLoginButton = "[id='login-button']";

    /**
     * ✅ This method opens the Login page
     */
    async open() {
        await this.navigateTo(this.swagLabsUrl);
    }

    /**
     * ✅ This method inputs valid Login details
     */
    async inputValidLoginDetails() {

        await this.page.fill(this.dataTestUsername, this.swagLabsUsername);
        await this.page.fill(this.dataTestPassword, this.swagLabsPassword);
        await this.page.click(this.dataTestLoginButton);

        // ✅ safe wait for page load
        await this.page.waitForLoadState('load');

        // ✅ assert page url
        await expect(this.page).toHaveURL(/inventory.html/);

        // ✅ screenshot
        await this.page.screenshot({path: 'inventory.png'});

        // ✅ optional - just for user to be able to see the result
        await this.page.waitForTimeout(this.onWaitFixed500ms);
    }

}
