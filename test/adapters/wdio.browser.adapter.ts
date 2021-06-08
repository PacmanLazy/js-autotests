import BrowserAdapter from "../interfaces/browser.adapter";
import ElementInterface from "../interfaces/element";
import WDIOElementAdapter from "./wdio.element.adapter";

export default class WDIOBrowserAdapter implements BrowserAdapter {
    goToUrl(path: string) : Promise<string> {
        return browser.url(path);
    }

    findWebElement(selector: string) : ElementInterface {
        return new WDIOElementAdapter($(selector));
    }
}