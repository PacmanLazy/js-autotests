import IHttpRequest from "./http-request";
import IHttpResponse from "./http-response";

export default interface IHttpRequestAdapter {
    get(httpRequest: IHttpRequest) : Promise<IHttpResponse>;
    post(httpRequest: IHttpRequest) : Promise<IHttpResponse>;
    put(httpRequest: IHttpRequest) : Promise<IHttpResponse>;
    delete(httpRequest: IHttpRequest) : Promise<IHttpResponse>;
}