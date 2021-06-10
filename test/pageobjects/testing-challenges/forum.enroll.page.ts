import { urls } from "../../config.url";
import Page from "../page";

class ForumEnrollPage extends Page {
    private get inputFirstName() { return this.browser.findWebElement("#firstname"); }

    private get submitBtn() { return this.browser.findWebElement('[name="formSubmit"]'); }

    private get validationsOutput() { 
        return this.browser.findWebElements("//ul[@class='values-description t10']/li"); 
    }

    async submitFormWithValue(value: string) {
        await this.inputFirstName.setValue(value);
        await this.submitBtn.click();
    }

    async getValidationsOutputList() {
        return await this.validationsOutput;
    }

    open() {
        return super.open(`${urls.TESTING_CHALLENGES_BASE_URL}/index.php`);
    }
}

export default new ForumEnrollPage();