import { _cx, _svx } from "../core/core_functions"

export class LoginPage {
    public setUsername = async (value: string): Promise<void> => {
        await _svx(`//input[@placeholder='Username']`, value);
    }

    public setPassword = async (value: string): Promise<void> => {
        await _svx(`//input[@placeholder='Password']`, value);
    }

    public clickLoginButton = async (): Promise<void> => {
        await _cx(`//mat-card-actions/button/span[contains(text(), 'Login')]/parent::button`);
    }
}