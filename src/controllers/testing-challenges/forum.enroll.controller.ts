import ElementInterface from "../../interfaces/element";
import FormFieldValidation from "../../interfaces/form.field.validation";
import forumEnrollPage from "../../pageobjects/testing-challenges/forum.enroll.page";
import NavigationController from "../navigation.controller";
import ArrayUtils from "../../utils/arrays";

export default class ForumEnrollController {
    static async firstNameFieldHasValidation(formFieldValidation: FormFieldValidation) : Promise<boolean> {
        await NavigationController.openForumEnrollPage();
        await forumEnrollPage.submitFormWithValue(formFieldValidation.value);
        const validationOutputList: ElementInterface[] = await forumEnrollPage.getValidationsOutputList();
        
        return await this.validationOutputContains(validationOutputList, formFieldValidation.validationDescription);
    }

    private static async validationOutputContains(validationsOutput: ElementInterface[], value: string): Promise<boolean> {
        return await ArrayUtils.aFindIndex(validationsOutput, async v => { 
            return (await v.elementText()).localeCompare(value) == 0;
        }) >= 0;
    }
}