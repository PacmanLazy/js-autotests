import ExampleLoginController from '../controllers/example.login.controller';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await ExampleLoginController.loginWithCredentials('tomsmith', 'SuperSecretPassword!');
        // await LoginPage.open();
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        
        expect(await ExampleLoginController.securePageFlashAlertHasShown());
        // expect((await SecurePage.flashAlert).isExisting());
        
        expect(await ExampleLoginController.securePageFlashAlertText())
            .toContain('You logged into a secure area!');
        // expect(await (await SecurePage.flashAlert).getText())
        //     .toContain('You logged into a secure area!');
    });
});


