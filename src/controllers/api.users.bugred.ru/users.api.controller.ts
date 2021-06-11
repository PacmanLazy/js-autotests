import { urls } from "../../../test/config.url";
import UsersApiResponse from "../../models/users.api.response";
import existingUser from "../../../test/data-providers/existing-user.json";
import UsersApiResponseBody from "../../models/users.api.response.body";

export default class UsersApiController {
    static async createUserExists() : Promise<UsersApiResponse> {
        const response: UsersApiResponse = {} as UsersApiResponse;

        await fetch(`${urls.USER_API_BASE_URL}/createuser`, {
            method: "post",
            body: JSON.stringify(existingUser as object),
            headers: {
              Accept: 'application/json',
            },
        }).then(async (res) => {
            response.status = res.status;
            response.body = (await res.json()) as UsersApiResponseBody;
        });

        return response;
    }
}