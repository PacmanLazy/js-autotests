export default interface IHttpRequest {
    url: string;
    userAccessToken?: string;
    logonName?: string;
    password?: string;
    body?: any;
    httpStatusCode?: number;
    contentType?: string;
    postParams?: URLSearchParams;
    xCorrelationId?: string;
}