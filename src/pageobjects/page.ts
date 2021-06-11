import WDIOBrowserAdapter from "../adapters/wdio.browser.adapter";
import BrowserAdapter from "../interfaces/browser.adapter"

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    protected browser: BrowserAdapter;

    constructor() {
        this.browser = new WDIOBrowserAdapter();
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path: string) {
        return this.browser.goToUrl(path);
    }
}
