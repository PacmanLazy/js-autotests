import { urls } from '../../../test/config.url';
import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get inputUsername () { return this.browser.findWebElement('#username') }
    private get inputPassword () { return this.browser.findWebElement('#password') }
    private get btnSubmit () { return this.browser.findWebElement('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open(`${urls.EXAMPLE_BASE_URL}/login`);
    }
}

export default new LoginPage();