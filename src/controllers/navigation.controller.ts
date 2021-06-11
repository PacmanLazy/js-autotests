import { urls } from "../../test/config.url";
import LoginPage from "../pageobjects/example/login.page";
import forumEnrollPage from "../pageobjects/testing-challenges/forum.enroll.page";

export default class NavigationController {
    static async openExampleLoginPage() {
        await LoginPage.open();
    }

    static async openForumEnrollPage() {
        await forumEnrollPage.open();
    }
}