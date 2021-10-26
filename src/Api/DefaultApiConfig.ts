import ApiConfig from "../Contracts/ApiConfig";
import Headers from "../Contracts/Headers";

export default class DefaultApiConfig implements ApiConfig {
    protected baseUrl: string = "";

    constructor(
        baseUrl: string,
        protected headers: Headers = {}
    ) {
        this.setBaseUrl(baseUrl);
    }

    getBaseUrl(): string {
        return this.baseUrl;
    }

    getHeaders(): Headers {
        return this.headers;
    }

    setBaseUrl(url: string): void {
        this.baseUrl = url.replace(/\/$/, '');
    }

    setHeaders(headers: Headers): void {
        this.headers = headers;
    }

    toJson(): Record<string, any> {
        return {
            baseUrl: this.getBaseUrl(),
            headers: this.getHeaders(),
        };
    }

}