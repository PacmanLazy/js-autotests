import ElementInterface from "./element";

export default interface BrowserAdapter {
    goToUrl(path: string) : string | Promise<string>;
    findWebElement(selector: string): ElementInterface;
    findWebElements(selector: string): Promise<ElementInterface[]> | ElementInterface[];
}