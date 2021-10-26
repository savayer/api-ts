import {Axios, AxiosError, AxiosResponse, HeadersDefaults} from "axios";
import Api from "../Contracts/Api";
import ApiConfig from "../Contracts/ApiConfig";
import ApiResponse from "../Contracts/ApiResponse";
import DefaultApiResponse from "./DefaultApiResponse";
import Headers from "../Contracts/Types/Headers";

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

        Object.keys(this.client.defaults.headers).forEach(key => {
            this.client.defaults.headers[key] = { ...this.client.defaults.headers[key], ...defaultHeaders }
        })
    }

    private getDefaults(defaultHeaders: Headers): HeadersDefaults {
        const defaultData = {} as HeadersDefaults;
        Object.keys(this.client.defaults.headers).forEach(key => {
            defaultData[key] = defaultHeaders
        })

        return defaultData;
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

    protected prepareAxiosResponse(response: Promise<AxiosResponse<any>>): Promise<ApiResponse<Object>> {
        return new Promise((resolve: Function) => {
            response.then((response: AxiosResponse) => {
                return resolve(
                    new DefaultApiResponse(
                        response.data,
                        response.headers,
                        response.status
                    )
                );
            }).catch((error: AxiosError) => {
                return resolve(
                    new DefaultApiResponse(
                        error?.response?.data || {},
                        error?.response?.headers || {},
                        error?.response?.status || 0
                    )
                );
            })
        });
    }
}