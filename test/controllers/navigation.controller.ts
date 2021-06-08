import LoginPage from "../pageobjects/example/login.page";

export default class NavigationController {
    static async openExampleLoginPage() {
        await LoginPage.open();
    }
}