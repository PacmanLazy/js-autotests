import UsersApiController from "../../../src/controllers/api.users.bugred.ru/users.api.controller";
import UsersApiResponse from "../../../src/models/users.api.response";

describe('Users API', () => {
    it("API should return error JSON if user already exists", async () => {
        const response: UsersApiResponse = await UsersApiController.createUserExists();

        expect(response.status).toBe(200);
        expect(response.body.type).toBe("error");
    });
});