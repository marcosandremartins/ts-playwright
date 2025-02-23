// ✅ playwright
import {createBdd} from 'playwright-bdd';
import {test as base2} from '../fixtures/steps_fixtures';

// ✅ pages
import {LoginPage} from "../pages/LoginPage";
import {InventoryPage} from "../pages/InventoryPage";
import {CartPage} from "../pages/CartPage";

// ✅ BDD
const {
    Given,
    When,
    Then
} = createBdd(base2);

// ✅ pages
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;

let mProduct = '';

Given(/^the user is logged in$/, async (
    {page}
) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.inputValidLoginDetails();
});

When(/^the user picks product "([^"]*)" from the available products$/, async (
    {page},
    product: string
) => {
    mProduct = product;
    inventoryPage = new InventoryPage(page);
    // await inventoryPage.open();
    await inventoryPage.pickAProduct(mProduct);
});

Then(/^the product should be added to the cart$/, async (
    {page}
) => {
    cartPage = new CartPage(page);
    await cartPage.open();
    await cartPage.checkProductInCartList(mProduct);
});
