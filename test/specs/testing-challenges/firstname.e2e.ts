import ForumEnrollController from "../../controllers/testing-challenges/forum.enroll.controller";
import firstNameValidations from "../../data-providers/first-name.json";
import FormFieldValidation from "../../interfaces/form.field.validation";

describe('Testing challenge one', () => {
    const validations: FormFieldValidation[] = firstNameValidations as FormFieldValidation[];

    for (const validation of validations) {
        it(`First name field should have validation '${validation.validationDescription}'`, 
            async () => {
                expect(await ForumEnrollController.firstNameFieldHasValidation(validation)).toBeTrue();
            }
        );
    }
});