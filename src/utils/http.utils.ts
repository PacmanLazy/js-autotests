import Ajv, { JSONSchemaType } from "ajv";

export default class HttpUtils {
    static validateJsonSchema<T>(schema: JSONSchemaType<T>, obj: object) {
        const validate = new Ajv().compile(schema);
        return validate(obj);
    }
}