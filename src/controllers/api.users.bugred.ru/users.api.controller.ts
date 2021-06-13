import { urls } from "../../../test/config.url";
import existingUser from "../../../test/data-providers/existing-user.json";
import UsersApiResponseBody from "../../models/users.api.response.body";
import { Http } from "../../adapters/http.adapter";
import IHttpResponse from "../../interfaces/http-response";
import HttpUtils from "../../utils/http.utils";
import { responseSchema } from "../../schemas/json.response.schema";

export default class UsersApiController {
    static async createUserExists() : Promise<IHttpResponse> {
        let response = await Http.post({
            url: `${urls.USER_API_BASE_URL}/createuser`,
            body: JSON.stringify(existingUser),
            contentType: 'application/json',
        });

        response.isValidAgainstJsonSchema = HttpUtils.validateJsonSchema<UsersApiResponseBody>(responseSchema, response.body);

        return response;
    }
}