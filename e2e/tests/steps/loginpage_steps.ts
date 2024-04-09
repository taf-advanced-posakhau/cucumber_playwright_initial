import { When, Given, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/login_page";

const loginPage: LoginPage = new LoginPage();

When('user sets value {string} into username field', async function (value: string) {
    await loginPage.setUsername(value);
});

When('user sets value {string} into password field', async function (value: string) {
    await loginPage.setPassword(value);
});

When('user clicks -Login- button', async function () {
    await loginPage.clickLoginButton();
});

