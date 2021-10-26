import Api from "../Contracts/Api";
import ApiResponse from "../Contracts/ApiResponse";
import ApiConfig from "../Contracts/ApiConfig";
import Url from "../Contracts/Url";

export default class BaseApi<T, D> implements Api<T>, Url {
    constructor(
       protected client: Api<T>,
       protected defaults: ApiConfig,
    ) {
        this.applyDefaults(defaults);
    }

    applyDefaults(defaults: ApiConfig): void {
        this.client.applyDefaults(defaults);
    }

    url(uri: string): string {
        return `${this.defaults.getBaseUrl()}/${uri}`;
    }

    delete(url: string, config?:ApiConfig): Promise<ApiResponse<T>> {
        return this.client.delete(url, config);
    }

    get(url: string, config?:ApiConfig): Promise<ApiResponse<T>> {
        return this.client.get(url, config);
    }

    patch(url: string, data: object, config?:ApiConfig): Promise<ApiResponse<T>> {
        return this.client.patch(url, data, config);
    }

    post(url: string, data: object, config?:ApiConfig): Promise<ApiResponse<T>> {
        return this.client.post(url, data, config);
    }

    put(url: string, data: object, config?:ApiConfig): Promise<ApiResponse<T>> {
        return this.client.put(url, data, config);
    }

}
