import {Axios, AxiosError, AxiosResponse, HeadersDefaults} from "axios";
import Api from "../Contracts/Api";
import ApiConfig from "../Contracts/ApiConfig";
import ApiResponse from "../Contracts/ApiResponse";
import DefaultApiResponse from "./DefaultApiResponse";
import Headers from "../Contracts/Headers";

export default class AxiosClient implements Api<Axios> {
    constructor(
        protected client: Axios,
        protected apiConfig: ApiConfig
    ) {
        this.applyDefaults(apiConfig);
    }

    applyDefaults(defaults: ApiConfig): void {
        const defaultHeaders = defaults.getHeaders();
        if (!this.client.defaults) {
            this.client.defaults = {
                headers: this.getDefaults(defaultHeaders),
                baseURL: defaults.getBaseUrl()
            };
            return;
        }

        this.client.defaults.baseURL = defaults.getBaseUrl();
        this.client.defaults.headers = {
            common: {...this.client.defaults.headers.common, ...defaultHeaders},
            delete: {...this.client.defaults.headers.delete, ...defaultHeaders},
            get: {...this.client.defaults.headers.get, ...defaultHeaders},
            head: {...this.client.defaults.headers.head, ...defaultHeaders},
            post: {...this.client.defaults.headers.post, ...defaultHeaders},
            put: {...this.client.defaults.headers.put, ...defaultHeaders},
            patch: {...this.client.defaults.headers.patch, ...defaultHeaders},
            options: {...this.client.defaults.headers.options, ...defaultHeaders},
            purge: {...this.client.defaults.headers.purge, ...defaultHeaders},
            link: {...this.client.defaults.headers.link, ...defaultHeaders},
            unlink: {...this.client.defaults.headers.unlink, ...defaultHeaders}
        };
    }

    private getDefaults(defaultHeaders: Headers): HeadersDefaults {
        return {
            common: defaultHeaders,
            delete: defaultHeaders,
            get: defaultHeaders,
            head: defaultHeaders,
            post: defaultHeaders,
            put: defaultHeaders,
            patch: defaultHeaders,
            options: defaultHeaders,
            purge: defaultHeaders,
            link: defaultHeaders,
            unlink: defaultHeaders
        }
    }

    delete(url: string, config?: ApiConfig): Promise<ApiResponse<Object>> {
        return this.prepareAxiosResponse(
            this.client.delete(url, config?.toJson())
        );
    }

    get(url: string, config?: ApiConfig): Promise<ApiResponse<Object>> {
        return this.prepareAxiosResponse(
            this.client.get(url, config?.toJson())
        );
    }

    patch(url: string, data: object, config?: ApiConfig): Promise<ApiResponse<Object>> {
        return this.prepareAxiosResponse(
            this.client.patch(url, data, config?.toJson())
        );
    }

    post(url: string, data: object, config?: ApiConfig): Promise<ApiResponse<Object>> {
        return this.prepareAxiosResponse(
            this.client.post(url, data, config?.toJson())
        );
    }

    put(url: string, data: object, config?: ApiConfig): Promise<ApiResponse<Object>> {
        return this.prepareAxiosResponse(
            this.client.put(url, data, config?.toJson())
        );
    }

    protected async prepareAxiosResponse(response: Promise<AxiosResponse<any>>): Promise<ApiResponse<Object>> {
        return new Promise((resolve: Function) => {
            response.then((response: AxiosResponse) => {
                return resolve(new DefaultApiResponse(response.data, response.headers, response.status));
            }).catch((error: AxiosError) => {
                return resolve(new DefaultApiResponse(error?.response?.data || {}, error?.response?.headers || {}, error?.response?.status || 0));
            })
        });
    }
}