import Headers from "./Types/Headers";

export default interface ApiResponse<T> {
    getData (): T;
    getStatus (): number;
    getHeaders (): Headers;
}