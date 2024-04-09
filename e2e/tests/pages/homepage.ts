import { _cx } from "../core/core_functions"

export class Homepage {
    public clickLoginOption = async (): Promise<void> => {
        await _cx(`//span[contains(text(),'Login')]/parent::button`);
    }
}