export default interface ElementInterface {
    elementText(): string | Promise<string>;
    setValue(value : string | number);
    click();
    exists() : Promise<boolean>;
}