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

    async findWebElements(selector: string) : Promise<ElementInterface[]> {
        return $$(selector).then((elements) => {
            const adaptedElements: ElementInterface[] = [];
            for (const element of elements){
                adaptedElements.push(new WDIOElementAdapter(element));
            }

            return adaptedElements;
        });
    }
}