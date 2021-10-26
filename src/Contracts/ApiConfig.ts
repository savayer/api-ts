import Headers from "./Types/Headers";

export default interface ApiConfig {
    setBaseUrl (url: string): void;
    getBaseUrl (): string;
    setHeaders (headers: Headers): void;
    getHeaders (): Headers;
    toJson (): Record<string, any>;
}