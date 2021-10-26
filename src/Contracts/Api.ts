import ApiResponse from "./ApiResponse";
import ApiConfig from "./ApiConfig";

export default interface Api<T> {
    applyDefaults (defaults: ApiConfig): void;
    get (url: string, config?:ApiConfig): Promise<ApiResponse<T>>;
    put (url: string, data: object, config?:ApiConfig): Promise<ApiResponse<T>>;
    patch (url: string, data: object, config?:ApiConfig): Promise<ApiResponse<T>>;
    post (url: string, data: object, config?:ApiConfig): Promise<ApiResponse<T>>;
    delete (url: string, config?:ApiConfig): Promise<ApiResponse<T>>;
}