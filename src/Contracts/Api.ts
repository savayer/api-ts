import ApiResponse from "./ApiResponse";
import Url from "./Url";

export default interface Api extends Url {
    get (url: string): ApiResponse;
    put (url: string, data: object): ApiResponse;
    patch (url: string, data: object): ApiResponse;
    post (url: string, data: object): ApiResponse;
    delete (url: string): ApiResponse;
}