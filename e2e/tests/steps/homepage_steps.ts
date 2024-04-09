import { When, Given, Then } from "@cucumber/cucumber";
import { Homepage } from "../pages/homepage";

const homepage: Homepage = new Homepage();

When('user clicks -Login- link on the upper bar', async function () {
    await homepage.clickLoginOption();
});
