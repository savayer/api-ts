import ApiConfig from "../Contracts/ApiConfig";
import DefaultApiConfig from "./DefaultApiConfig";

export default class AxiosApiConfig extends DefaultApiConfig implements ApiConfig {
    toJson(): Record<string, any> {
        return {
            baseURL: this.getBaseUrl(),
            headers: this.getHeaders(),
        };
    }

}