import ExampleLoginController from '../../../src/controllers/example.login.controller';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await ExampleLoginController.loginWithCredentials('tomsmith', 'SuperSecretPassword!');
        expect(await ExampleLoginController.securePageFlashAlertHasShown());
        expect(await ExampleLoginController.securePageFlashAlertText())
            .toContain('You logged into a secure area!');
    });
});


