import UsersApiResponseBody from "./users.api.response.body";

export default interface UsersApiResponse {
    status: number,
    body: UsersApiResponseBody,
}