import LoginPage from "../pageobjects/example/login.page";
import SecurePage from "../pageobjects/example/secure.page";
import NavigationController from "./navigation.controller";

export default class ExampleLoginController {
    static async loginWithCredentials(username: string, password: string) {
        await NavigationController.openExampleLoginPage();
        await LoginPage.login(username, password);
    }

    static async securePageFlashAlertHasShown() : Promise<boolean> {
        return await SecurePage.flashAlertExists();
    }

    static async securePageFlashAlertText() : Promise<string> {
        return await SecurePage.flashAlertText();
    }
}