import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    private get flashAlert () { return this.browser.findWebElement('#flash') }

    async flashAlertText() {
        return (await this.flashAlert.elementText())
    }

    async flashAlertExists() : Promise<boolean> {
        return await this.flashAlert.exists();
    }
}

export default new SecurePage();
