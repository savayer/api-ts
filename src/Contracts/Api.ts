import ApiResponse from "./ApiResponse";
import Url from "./Url";
import ApiConfig from "./ApiConfig";

export default interface Api<T> {
    applyDefaults (defaults: ApiConfig): void;
    get (url: string, config?:ApiConfig): Promise<ApiResponse>;
    put (url: string, data: object, config?:ApiConfig): Promise<ApiResponse>;
    patch (url: string, data: object, config?:ApiConfig): Promise<ApiResponse>;
    post (url: string, data: object, config?:ApiConfig): Promise<ApiResponse>;
    delete (url: string, config?:ApiConfig): Promise<ApiResponse>;
}