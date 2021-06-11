import ElementInterface from "../interfaces/element";

export default class WDIOElementAdapter implements ElementInterface {
    private _element: Promise<WebdriverIO.Element> | WebdriverIO.Element;

    constructor(element: Promise<WebdriverIO.Element> | WebdriverIO.Element) {
        this._element = element;
    }

    async elementText() : Promise<string> {
        return (await this._element).getText();
    }

    async setValue(value: string | number) {
        await (await this._element).setValue(value);
    }

    async click() {
        await (await this._element).click();
    }

    async exists() : Promise<boolean> {
        return (await this._element).isExisting();
    }
}