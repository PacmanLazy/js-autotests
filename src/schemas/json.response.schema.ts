import { JSONSchemaType } from "ajv";
import UsersApiResponseBody from "../models/users.api.response.body";

export const responseSchema : JSONSchemaType<UsersApiResponseBody> = {
    type: "object",
    properties: {
        type: { type: "string" },
        message: { type: "string" }
    },
    required: [],
    additionalProperties: false,
}