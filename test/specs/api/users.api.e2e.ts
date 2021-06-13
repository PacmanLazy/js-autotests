import UsersApiController from "../../../src/controllers/api.users.bugred.ru/users.api.controller";
import IHttpResponse from "../../../src/interfaces/http-response";
import UsersApiResponseBody from "../../../src/models/users.api.response.body";

describe('Users API', () => {
    it("API should return error JSON if user already exists", async () => {
        const response: IHttpResponse = await UsersApiController.createUserExists();

        expect(response.status).toBe(200);
        expect(response.isValidAgainstJsonSchema).toBeTrue();
        expect((response.body as UsersApiResponseBody).type).toBe("error");
    });
});