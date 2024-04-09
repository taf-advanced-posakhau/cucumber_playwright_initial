import { page } from "../steps/common_steps";


/**
 * CLICK ON ELEMENT BY XPATH
 * @param xpath - xpath expression
 */
export const _cx = async (xpath: string): Promise<void> => {
    await page.locator(xpath).click();
}

export const _svx = async (xpath: string, value: string): Promise<void> => {
    await page.locator(xpath).fill(value);
}