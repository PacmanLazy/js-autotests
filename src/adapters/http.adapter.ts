import IHttpRequestAdapter from "../interfaces/http.adapter.interface";
import IHttpResponse from "../interfaces/http-response";
import IHttpRequest from "../interfaces/http-request";
import fetch, { Response } from 'node-fetch';

class HttpNodeFetchAdapter implements IHttpRequestAdapter {
    async get(httpRequest: IHttpRequest) : Promise<IHttpResponse> {
        let response: IHttpResponse = {} as IHttpResponse;

        await fetch(httpRequest.url, {
            method: "get",
            body: httpRequest.body,
            headers: {
                'Content-type': httpRequest.contentType ?? "",
            },
        }).then(async (res) => {
            response = await this.fillResponse(res);
        });

        return response;
    }

    async post(httpRequest: IHttpRequest) : Promise<IHttpResponse> {
        let response: IHttpResponse = {} as IHttpResponse;

        await fetch(httpRequest.url, {
            method: "post",
            body: httpRequest.body,
            headers: {
                'Content-type': httpRequest.contentType ?? "",
            },
        }).then(async (res) => {
            response = await this.fillResponse(res);
        });

        return response;
    }

    async put(httpRequest: IHttpRequest) : Promise<IHttpResponse> {
        let response: IHttpResponse = {} as IHttpResponse;

        await fetch(httpRequest.url, {
            method: "put",
            body: httpRequest.body,
            headers: {
                'Content-Type': httpRequest.contentType ?? "",
            },
        }).then(async (res) => {
            response = await this.fillResponse(res);
        });

        return response;
    }

    async delete(httpRequest: IHttpRequest) : Promise<IHttpResponse> {
        let response: IHttpResponse = {} as IHttpResponse;

        await fetch(httpRequest.url, {
            method: "delete",
            body: httpRequest.body,
            headers: {
                'Content-Type': httpRequest.contentType ?? "",
            },
        }).then(async (res) => {
            response = await this.fillResponse(res);
        });

        return response;
    }

    private async fillResponse(res: Response) : Promise<IHttpResponse> {
        return {
            status: res.status,
            headers: res.headers.raw(),
            body: await res.json()
        };
    }
}

export const Http = new HttpNodeFetchAdapter();