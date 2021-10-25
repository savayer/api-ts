export default class BaseApi implements Api {
    protected baseUrl: string;
    protected defaultHeaders: Headers;

    constructor(baseUrl: string = '', defaultHeaders: Headers) {
        this.defaultHeaders = defaultHeaders
        this.baseUrl = baseUrl;
    }

    url(uri: string): string {
        return `${this.baseUrl}/${uri}`;
    }

    delete(url: string): ApiResponse {
        return undefined;
    }

    get(url: string): ApiResponse {
        return undefined;
    }

    patch(url: string, data: object): ApiResponse {
        return undefined;
    }

    post(url: string, data: object): ApiResponse {
        return undefined;
    }

    put(url: string, data: object): ApiResponse {
        return undefined;
    }

}