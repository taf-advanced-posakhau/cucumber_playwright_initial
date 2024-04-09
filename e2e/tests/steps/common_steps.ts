import { When, Given, Then, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";

var { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

let browser: Browser;
let ctx: BrowserContext;
let page: Page;

Before(async () => {
    browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
    ctx = await browser.newContext({ viewport: null, javaScriptEnabled: true });
    page = await ctx.newPage();
});

Given('user navigates to homepage', async function () {
    console.log("Executing step - user navigates to homepage");

    await page.goto("https://bookcart.azurewebsites.net");
});

When('pause {int} seconds', async function (int) {
    console.log(`Executing step - pause ${int} seconds`);
    await page.waitForTimeout(int * 1000);
});


After(async () => {
    await page.close();
    await ctx.close();
    await browser.close();
});

export { page };
