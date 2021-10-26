import ApiConfig from "../../src/Contracts/ApiConfig";
import Api from "../../src/Contracts/Api";
import ApiResponse from "../../src/Contracts/ApiResponse";
import DefaultApiResponse from "../../src/Api/DefaultApiResponse";

export default class TestClient<D> implements Api<Object> {
    protected client: Object;

    constructor(
        protected apiConfig: ApiConfig
    ) {
        this.client = {};
        this.applyDefaults(apiConfig);
    }

    applyDefaults(defaults: ApiConfig): void {

    }

    delete(url: string, config?: ApiConfig): Promise<ApiResponse<D>> {
        return this.prepareAxiosResponse(new Promise((resolve) => {
            switch (url) {
                case '/default':
                    resolve(new DefaultApiResponse<any>({
                        content: "Default content"
                    }, {}, 200));
                    break;
                case '/notfound':
                    resolve(new DefaultApiResponse<any>({
                        content: "Not found"
                    }, {}, 404));
                    break;
                default:
                    resolve(new DefaultApiResponse<any>({
                        content: "Fallback content"
                    }, {}, 200));
            }
        }));
    }

    get(url: string, config?: ApiConfig): Promise<ApiResponse<D>> {
        return this.prepareAxiosResponse(new Promise((resolve) => {
            resolve(new DefaultApiResponse<any>({
                content: "Get content"
            }, {}, 200));
        }));
    }

    patch(url: string, data: object, config?: ApiConfig): Promise<ApiResponse<D>> {
        return this.prepareAxiosResponse(new Promise((resolve) => {
            resolve(new DefaultApiResponse<any>(data, {}, 200));
        }));
    }

    post(url: string, data: object, config?: ApiConfig): Promise<ApiResponse<D>> {
        return this.prepareAxiosResponse(new Promise((resolve) => {
            resolve(new DefaultApiResponse<any>(data, {}, 200));
        }));
    }

    put(url: string, data: object, config?: ApiConfig): Promise<ApiResponse<D>> {
        return this.prepareAxiosResponse(new Promise((resolve) => {
            resolve(new DefaultApiResponse<any>(data, {}, 200));
        }));
    }

    protected async prepareAxiosResponse(response: Promise<ApiResponse<D>>): Promise<ApiResponse<D>> {
        return new Promise((resolve: Function, reject: Function) => {
            response.then((response: ApiResponse<D>) => {
                return resolve(new DefaultApiResponse<any>(response.getData(), response.getHeaders(), response.getStatus()));
            });
        });
    }
}