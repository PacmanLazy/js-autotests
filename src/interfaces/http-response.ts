export default interface IHttpResponse {
    body?: any;
    status?: number;
    queryString?: string;
    headers?: {
        [k: string]: string[];
    };
    isValidAgainstJsonSchema?: boolean;
}